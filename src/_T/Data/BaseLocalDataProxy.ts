import Md5 from './Md5';
import ConsoleEx from '../Console/ConsoleEx';
import BaseDataProxy from './BaseDataProxy';
import BaseData from './BaseData';
import _MainConfig from 'src/Config/_MainConfig';
import ObjectProxyT from './ObjectProxyT';
import ArrayUtils from '../Utils/ArrayUtils';

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
        return '---->' + this.encrypt(this.saveName + '__verify');
    }

    /**
     * 初始化数据
     */
    public initData() {
        //记录时间
        let _time = Date.now();
        //
        this.m_data = this._readData();
        //设置代理包装数据
        if (this.m_ifSetProxy) {
            //获取数据代理工具
            this.m_objectProxyT = new ObjectProxyT();
            this.m_data = this.m_objectProxyT.setProxy(this.m_data);
            //添加设置监听
            this.m_objectProxyT.addMonitor(this, this._dataSetMonitor);
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

    /** 数据被设置监听 */
    private _dataSetMonitor() {
        this.save(this.m_data);
    }

    /**
     * 手动保存数据
     * @param _ifCl 是否限流 默认为true
     */
    public Save(_ifCl: boolean = true) {
        this.save(this.m_data, _ifCl);
    }

    /** 保存执行队列 */
    private m_saveToDiskQueue: number = 0;
    private m_saveToDiskTime: number = 0;
    /**
     * 保存数据到本地
     * @param m_data 数据
     * @param _ifCl 是否限流
     */
    private save(m_data: Data, _ifCl: boolean = true) {
        //添加时间判断
        if (this.m_saveToDiskTime == 0) {
            this.m_saveToDiskTime = Date.now();
        }
        //判断是否限流
        if (!_ifCl) {
            this._save(m_data);
        }
        else {
            this.m_saveToDiskQueue++;
            //限流，每一次宏任务只保存一次数据
            //把保存任务注册进微任务列表，将会在本次数据修改的宏任务完成后并在下次宏任务开始前被全部执行
            // queueMicrotask//直接使用微任务方法在某些平台会不兼容
            Promise.resolve().then(() => {
                this.m_saveToDiskQueue--;
                // console.log('保存数据前');
                if (this.m_saveToDiskQueue == 0) {
                    this._save(m_data);
                }
            }).catch((E) => {
                console.error(...ConsoleEx.packError('数据保存时出错', E));
            });;
        }
    }
    //保存数据到本地
    private _save(m_data?: Data) {
        // console.log('保存数据');
        //序列化
        let json = JSON.stringify(m_data);
        //
        Laya.LocalStorage.setItem(this.saveName, json);
        //判断是否是线上环境
        if (_MainConfig.OnLine && this._ifDifferData) {
            //获取对比数据
            let _differJson = this.getDifferData(json);
            //保存对比数据
            Laya.LocalStorage.setItem(this.differName, _differJson);
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
    private _readData(): Data {
        //读取本地数据
        let readStr = Laya.LocalStorage.getItem(this.saveName);
        //判断是否是线上环境
        if (_MainConfig.OnLine && this._ifDifferData) {
            //对比数据
            let _differ = Laya.LocalStorage.getItem(this.differName);
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
                //用本地的数据填充当前数据
                for (let key in _saveData) {
                    _saveData[key] = jsonData[key];
                }
                //提取本地数据和定义数据的键差异
                if (!_MainConfig.OnLine) {
                    let __key: string[] = [];
                    for (let key in jsonData) {
                        __key.push(key);
                    }
                    let _key: string[] = [];
                    for (let key in _saveData) {
                        _key.push(key);
                    }
                    //判断两个数组是否相同
                    if (!ArrayUtils.ContentIfSame(__key, _key)) {
                        console.warn(...ConsoleEx.packWarn(`${this._saveName}的定义数据与本地数据键不一致，建议删除本地数据。\n`, '定义数据', _key, '\n', '本地数据', __key));
                    }
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
        //保存数据，不限流
        this.save(m_data as Data, false);
        //
        return m_data as Data;
    }

    //处理对比数据
    private getDifferData(_string: string): string {
        //判断是否为空
        if (!_string) return '';
        //加密
        return this.possibleOnly(_string);
    }

    //提取一个趋近唯一的字符串，适合较长的数据
    private possibleOnly(_string: string): string {
        //提取字符串中各个字符出现的次数
        let _map: Map<string, number[]> = new Map();
        let _str: string;
        for (let i = 0; i < _string.length; i++) {
            _str = _string.charAt(i);
            if (_map.has(_str)) {
                _map.get(_str).push(i);
            } else {
                _map.set(_str, [i]);
            }
        }
        //统计字符出现次数并作简单混淆处理
        let _conformityNumber: number = 0;
        [..._map.values()].forEach((item, index) => {
            _conformityNumber += ((item.reduce((a, b) => {
                return a + b;
            })) * (index + 1));
        });
        // console.log(_map, _conformityNumber);
        //转成base64的字符串
        return btoa(_conformityNumber.toString(32));
    }

    //数据单向加密，适合较短的数据
    private encrypt(_string: string) {
        //判断能否使用md5
        if (Md5.ifUse) {
            let _encryptStr: string = `LayaMiniGame-${this.saveName}:${_string}`;
            return Md5.hashStr(_encryptStr).toString();
        } else {
            //不用任何加密
            return `noEncrypt_${_string}`;
        }
    }
}