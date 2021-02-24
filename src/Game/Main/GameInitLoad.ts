import GameCommonBinder from "src/FGUI/GameCommon/GameCommonBinder";
import GameMainBinder from "src/FGUI/GameMain/GameMainBinder";
import InitEmptyScreenBinder from "src/FGUI/InitEmptyScreen/InitEmptyScreenBinder";
import InitLoadBinder from "src/FGUI/InitLoad/InitLoadBinder";
import ConfigT, { IBaseConfigContainer } from "src/_T/Config/ConfigT";
import ConsoleEx from "src/_T/Console/ConsoleEx";
import { FGUIPack } from "src/_T/D2/FGUI/FGUIPack";
import BaseInitLoad from "src/_T/Main/BaseInitLoad";
import EssentialResUrls from "src/_T/Res/EssentialResUrls";
import { EResLoadModel } from "src/_T/Res/ResLoad";
import ResLoadItem from "src/_T/Res/ResLoadItem";
import InitEmptyScreenUICon from "../UICon/initLoad/initEmptyScreenUICon";
import InitLoadUICon from "../UICon/initLoad/initLoadUICon";
import { BuildConfigTs } from "../_config/BuildConfigTs";
import { _TestConst } from "../_config/_TestConst";

/**
 * 游戏初始化加载
 * ! 只负责游戏初始化和加载，不做其他事情
 */
export default class GameInitLoad extends BaseInitLoad {
    /** 白屏ui控制器 */
    private m_initEmptyScreenUICon: InitEmptyScreenUICon;
    /** 初始化加载ui控制器 */
    private m_initLoadUICon: InitLoadUICon;

    /**
     * 初始化
     */
    protected init() {
        this.m_initEmptyScreenUICon = new InitEmptyScreenUICon();
        this.m_initLoadUICon = new InitLoadUICon();
    }

    /**
     * 游戏加载之前
     * 可以在这里初始化一些东西
     */
    protected loadBefore() {
        //初始化平台。。。
    }

    /**
     * 获取加载项列表
     */
    protected getLoadItems(): ResLoadItem[] {
        let _loadItems: ResLoadItem[] = [];
        //注入分包加载项
        this.immitSubpackageLoadItems(_loadItems);
        //获取fgui加载项
        this.immitFGUiLoadItems(_loadItems);
        //注入配置表加载项
        this.immitConfigLoadItems(_loadItems);
        //注入其他资源加载项
        this.immitOtherLoadItems(_loadItems);
        //
        return _loadItems;
    }

    //注入分包加载项
    private immitSubpackageLoadItems(_loadItems: ResLoadItem[]) {
        //
    }

    //注入fgui的所有加载项
    private immitFGUiLoadItems(_loadItems: ResLoadItem[]) {
        //先绑定所有ui
        this.FGUIBinder();
        //
        _loadItems.push(this.getFGUILoadItems('InitEmptyScreen', undefined, Laya.Handler.create(this, this.initEmptyScreen)));//白屏ui包
        _loadItems.push(this.getFGUILoadItems('InitLoad', 0, Laya.Handler.create(this, this.initLoad)));//加载界面包
        _loadItems.push(this.getFGUILoadItems('GameBag'));//原包，通常为资源包
        _loadItems.push(this.getFGUILoadItems('GameCommon'));//公共包
        _loadItems.push(this.getFGUILoadItems('GameMain', 0));//主包
    }
    //fgui绑定
    private FGUIBinder() {
        InitEmptyScreenBinder.bindAll();
        InitLoadBinder.bindAll();
        GameCommonBinder.bindAll();
        GameMainBinder.bindAll();
    }
    //获取FGUI加载项
    private getFGUILoadItems(_name: string, _atliasCount?: number, _comBack?: Laya.Handler): ResLoadItem {
        let _fguiRes: any[] = [];
        //注入包路径
        new FGUIPack(EssentialResUrls.FGUIPackURL(_name), _atliasCount).getResURL(_fguiRes);
        //创建加载项
        return new ResLoadItem(_fguiRes, EResLoadModel.D2, _name, Laya.Handler.create(this, () => {
            //添加包
            this.addFGUIPackage(_name);
            //
            _comBack && _comBack.run();
        }));
    }
    //添加包
    public addFGUIPackage(_name: string) {
        fgui.UIPackage.addPackage(EssentialResUrls.FGUIPackURL(_name));
    }

    //注入配置表加载项
    private immitConfigLoadItems(_loadItems: ResLoadItem[]) {
        //配置表
        let _configRes: any[] = BuildConfigTs.getAllConfig().map((item) => {
            return EssentialResUrls.ConfigJsonURL((item as IBaseConfigContainer).fileName);
        });
        //场景json文件
        let sceneJsonRes: any[] = [
            'Scene'
        ].map((item) => {
            return EssentialResUrls.SceneConfigURL(item);
        });
        //
        _loadItems.push(new ResLoadItem([..._configRes, ...sceneJsonRes], EResLoadModel.D2, 'config', Laya.Handler.create(this, () => {
            //初始化全部配置表内容
            ConfigT.BuildConfigs(BuildConfigTs.getAllConfig());
            console.log(...ConsoleEx.packLogLight('所有配置表内容->'));
            console.log(BuildConfigTs.getAllConfig());
        })));
    }

    //注入其他资源加载项
    private immitOtherLoadItems(_loadItems: ResLoadItem[]) {
        //
    }

    //白屏显示
    private initEmptyScreen() {
        //显示白屏ui
        this.m_initEmptyScreenUICon.Show();
    }
    //加载显示
    private initLoad() {
        this.m_initEmptyScreenUICon.Hide();//隐藏
        this.m_initEmptyScreenUICon = null;//清除引用
        //显示加载ui
        this.m_initLoadUICon.Show();
    }

    /**
     * 加载进度
     * @param _i 进度值
     */
    protected loadPlan(_i: number) {
        // console.log('游戏加载进度->', _i);
        if (this.m_initLoadUICon && this.m_initLoadUICon.ifShow) {
            this.m_initLoadUICon.setPlan(_i);
        }
    }

    /**
     * 单个加载项完成回调
     * @param _resLoad 加载项实例
     */
    protected loadItemsCom(_resLoad: ResLoadItem) {
        //
    }

    /**
     * 加载完成
     */
    protected loadCom() {
        this.m_initLoadUICon.Hide();//隐藏
        this.m_initLoadUICon = null;//清除引用
    }
}