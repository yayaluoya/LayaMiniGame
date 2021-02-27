import Md5 from './Md5';
import Base64 from './Base64';
import ConsoleEx from '../Console/ConsoleEx';
import BaseDataProxy from './BaseDataProxy';
import BaseData from './BaseData';
import _MainConfig from 'src/Config/_MainConfig';
import DataProxy from './DataProxy';
/**
 * 基类本地数据代理，通过此类可以访问本地保存的数据
 * 泛型为数据类型
 */
export default abstract class BaseLocalDataProxy<Data extends BaseData> extends BaseDataProxy<Data> {
    /**
     * 是否对比数据
     * 默认为true，如果为真当为线上模式时会生成一个加密的对比数据，防止用户改动本地数据
     */
    protected _ifDifferData: boolean = true;

    /** 
     * 获取保存名称
     * 默认返回类名，可以重写
     */
    protected get _saveName(): string {
        //默认返回类名
        return this.constructor.name;
    }

    //获取保存数据的名字
    private get saveName(): string {
        //项目名字 + 保存名字 + 项目版本
        return _MainConfig.Name + '-' + this._saveName + '-' + _MainConfig.Versions + (_MainConfig.OnLine ? '^on' : '^test');
    }

    // 获取对比数据的保存名字
    private get differName(): string {
        //
        return this.encrypt(this.saveName + '__verify');
    }

    /**
     * 初始化数据
     */
    public InitData() {
        //判断数据模板
        if (!this.m_dataTemplate) {
            console.error(...ConsoleEx.packError('没有找到数据模板', this._saveName));
        }
        //记录时间
        let _time = Date.now();
        //
        this.m_rootData = this._ReadFromFile();
        //设置代理
        if (this.m_ifSetProxy) {
            //获取数据代理
            this.m_dataProp = new DataProxy(Laya.Handler.create(this, this._proxyDataSet, undefined, false));
            //直接代理本地保存数据
            this.m_data = this.m_dataProp.getProxyData<Data>(this.m_rootData);
        } else {
            this.m_data = this.m_rootData;
        }
        //
        this._initData();
        //判断时间差
        _time = Date.now() - _time;
        if (_time > 100) {
            console.warn(...ConsoleEx.packWarn('初始化本地数据时间过长', this.saveName, _time));
        }
    }

    /** 初始化完成，继承使用 */
    protected _initData() { }

    /** 数据被设置回调 */
    private _proxyDataSet() {
        this.SaveToDisk(this.m_data);
    }

    /** 保存执行队列 */
    private m_saveToDiskQueue: number = 0;
    private m_saveToDiskTime: number = 0;
    /**
     * 保存数据到本地
     * @param m_data 数据
     * @param _ifCl 是否限流
     */
    private SaveToDisk(m_data: Data, _ifCl: boolean = true) {
        //添加时间判断
        if (this.m_saveToDiskTime == 0) {
            this.m_saveToDiskTime = Date.now();
        }
        //判断是否限流
        if (!_ifCl) {
            this._SaveToDisk(m_data);
        }
        else {
            this.m_saveToDiskQueue++;
            //当前帧末尾执行
            setTimeout(() => {
                this.m_saveToDiskQueue--;
                // console.log('保存数据前');
                if (this.m_saveToDiskQueue == 0) {
                    //限流，每一帧只保存一次数据
                    this._SaveToDisk(m_data);
                }
            }, 0);
        }
    }
    //保存数据到本地
    private _SaveToDisk(m_data?: Data) {
        // console.log('保存数据');
        //序列化
        let json = JSON.stringify(m_data);
        Laya.LocalStorage.setJSON(this.saveName, json);
        //判断是否是线上环境
        if (_MainConfig.OnLine && this._ifDifferData) {
            //获取对比数据
            let _differJson = this.getDifferData(json);
            //保存对比数据
            Laya.LocalStorage.setJSON(this.differName, _differJson);
        }
        //判断时间
        let _time = Date.now() - this.m_saveToDiskTime;
        this.m_saveToDiskTime = 0;
        //判断时间差
        if (_time > 1000) {
            console.warn(...ConsoleEx.packWarn('场景保存时间过长', this.saveName, _time));
        }
    }

    //从本地获取数据
    private _ReadFromFile(): Data {
        //读取本地数据
        let readStr = Laya.LocalStorage.getJSON(this.saveName);
        //判断是否是线上环境
        if (_MainConfig.OnLine && this._ifDifferData) {
            //对比数据
            let _differ = Laya.LocalStorage.getJSON(this.differName);
            if (this.getDifferData(readStr) != _differ) {
                return this._saveNewData();
            }
        }
        //获取一个新的实例
        let _saveData: Data = this.getNewData();
        //判断数据是否被篡改
        try {
            if (readStr) {
                let jsonData = JSON.parse(readStr);
                //用本地的数据获取当前数据
                for (let key in _saveData) {
                    _saveData[key] = jsonData[key];
                }
            } else {
                return this._saveNewData();
            }
        }
        catch {
            return this._saveNewData();
        }
        //
        return _saveData;
    }

    //获取并保存一个新数据
    private _saveNewData(): Data {
        let m_data: Data = this.getNewData();
        //保存数据，马上保存，不然后续这个数据会被修改
        this.SaveToDisk(m_data as Data, false);
        //
        return m_data as Data;
    }

    //处理对比数据
    private getDifferData(_string: string): string {
        //判断是否为空
        if (!_string) return '';
        //加密
        return this.encrypt(_string);
    }

    //加密
    private encrypt(_string: string) {
        let _encryptStr: string = 'LayaMiniGame-(-' + _string + '-)-ModifiedWithout-' + this.saveName;
        //判断能否使用md5
        if (Md5.ifUse) {
            return Md5.hashStr(_encryptStr).toString();
        } else {
            //使用base64
            return Base64.encode(_encryptStr);
        }
    }
}