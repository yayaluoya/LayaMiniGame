import GameCommonBinder from "src/FGUI/GameCommon/GameCommonBinder";
import GameMainBinder from "src/FGUI/GameMain/GameMainBinder";
import InitEmptyScreenBinder from "src/FGUI/InitEmptyScreen/InitEmptyScreenBinder";
import InitLoadBinder from "src/FGUI/InitLoad/InitLoadBinder";
import _TestBinder from "src/FGUI/_Test/_TestBinder";
import WhiteScreenT from "src/WhiteScreenT";
import ConfigT, { IBaseConfigContainer } from "src/_T/Config/ConfigT";
import ConsoleEx from "src/_T/Console/ConsoleEx";
import { FGUIPack } from "src/_T/D2/FGUI/FGUIPack";
import BaseInitLoad from "src/_T/Main/BaseInitLoad";
import ComResUrl from "src/_T/Res/ComResUrl";
import { EKeyResName } from "src/_T/Res/EKeyResName";
import EssentialResUrls from "src/_T/Res/EssentialResUrls";
import KeyResManager from "src/_T/Res/KeyResManager";
import { EResLoadModel } from "src/_T/Res/ResLoad";
import ResLoadItem from "src/_T/Res/ResLoadItem";
import { EFont } from "../ResE/EFont";
import { EMusics } from "../ResE/EMusics";
import { ESounds } from "../ResE/ESounds";
import InitEmptyScreenUICon from "../UICon/initLoad/initEmptyScreenUICon";
import InitLoadUICon from "../UICon/initLoad/initLoadUICon";
import { BuildConfigTs } from "../_config/BuildConfigTs";
import { _TestConst } from "../_config/_TestConst";
import { _EAllScenePrefabsNames } from "../_prefabsName/_EAllScenePrefabsNames";
import { _EAllExportSceneName } from "../_sceneName/_EAllExportSceneName";

/**
 * 游戏初始化加载
 * ! 只负责游戏初始化和加载，不做其他事情
 */
export default class GameInitLoad extends BaseInitLoad {
    /** 白屏ui控制器 */
    // private m_initEmptyScreenUICon: InitEmptyScreenUICon;
    /** 初始化加载ui控制器 */
    // private m_initLoadUICon: InitLoadUICon;

    /**
     * 初始化
     */
    protected _init() {
        //初始化需要的ui控制器实例
        // this.m_initEmptyScreenUICon = new InitEmptyScreenUICon();
        // this.m_initLoadUICon = new InitLoadUICon();
        //设置路径
        for (let _i in _EAllScenePrefabsNames) {
            KeyResManager.addResUrl(_i, KeyResManager.getResURL(EKeyResName.RootRes) + `${_i}/`);//注入预制体路径
        }
        //设置预制体场景对照
        EssentialResUrls.setPrefabSceneNames(_EAllScenePrefabsNames);
    }

    /**
     * 获取加载项列表
     */
    protected _getLoadItems(): ResLoadItem[] {
        let _loadItems: ResLoadItem[] = [];
        //获取fgui加载项
        this.immitFGUiLoadItems(_loadItems);
        //注入配置表加载项
        this.immitConfigLoadItems(_loadItems);
        //注入其他资源加载项
        this.immitOtherLoadItems(_loadItems);
        //
        return _loadItems;
    }

    //注入fgui的所有加载项
    private immitFGUiLoadItems(_loadItems: ResLoadItem[]) {
        //先绑定所有ui
        this.FGUIBinder();
        //加载fgui包
        // _loadItems.push(this.getFGUILoadItems('InitEmptyScreen', undefined, Laya.Handler.create(this, this.initEmptyScreen)));//白屏ui包
        // _loadItems.push(this.getFGUILoadItems('InitLoad', 0, Laya.Handler.create(this, this.initLoad)));//加载界面包
        _loadItems.push(this.getFGUILoadItems('GameBag'));//原包，通常为资源包
        _loadItems.push(this.getFGUILoadItems('GameCommon'));//公共包
        _loadItems.push(this.getFGUILoadItems('_Test'));//测试包
        _loadItems.push(this.getFGUILoadItems('GameMain', 0));//主包
    }
    //fgui绑定
    private FGUIBinder() {
        InitEmptyScreenBinder.bindAll();
        InitLoadBinder.bindAll();
        GameCommonBinder.bindAll();
        _TestBinder.bindAll();
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
    private addFGUIPackage(_name: string) {
        fgui.UIPackage.addPackage(EssentialResUrls.FGUIPackURL(_name));
    }

    //注入配置表加载项
    private immitConfigLoadItems(_loadItems: ResLoadItem[]) {
        //配置表
        let _configRes: any[] = BuildConfigTs.getAllConfig().map((item) => {
            return EssentialResUrls.ConfigJsonURL((item as IBaseConfigContainer).fileName);
        });
        //场景json文件
        let sceneJsonRes: any[] = [];
        for (let _i in _EAllExportSceneName) {
            sceneJsonRes.push(EssentialResUrls.SceneConfigURL(_EAllExportSceneName[_i]));
        }
        //
        _loadItems.push(new ResLoadItem([..._configRes, ...sceneJsonRes], EResLoadModel.D2, 'config', Laya.Handler.create(this, () => {
            //初始化全部配置表内容
            ConfigT.BuildConfigs(BuildConfigTs.getAllConfig());
            console.log(...ConsoleEx.packLogLight('所有配置表内容：', BuildConfigTs.getAllConfig()));
        }), Laya.Handler.create(this, (i) => {
            // console.log('配置表加载进度', i);
        }, undefined, false)));
    }

    //注入其他资源加载项
    private immitOtherLoadItems(_loadItems: ResLoadItem[]) {
        let _audios: string[] = [];
        for (let _i in EMusics) {
            EMusics[_i] && _audios.push(ComResUrl.MusicURL(EMusics[_i]));
        }
        for (let _i in ESounds) {
            ESounds[_i] && _audios.push(ComResUrl.SoundURL(ESounds[_i]));
        }
        _loadItems.push(new ResLoadItem(_audios, EResLoadModel.D2, 'audio', Laya.Handler.create(this, () => {
            console.log('所有音效资源：', _audios);
        })));
        let _font: string[] = [];
        for (let _i in EFont) {
            EFont[_i] && _font.push(EssentialResUrls.FontURL(EFont[_i]));
        }
        _loadItems.push(new ResLoadItem(_font, EResLoadModel.D2, 'font', Laya.Handler.create(this, () => {
            console.log('所有字体资源：', _font);
        })));
    }

    //白屏显示
    private initEmptyScreen() {
        //显示白屏ui
        // this.m_initEmptyScreenUICon.Show();
    }
    //加载显示
    private initLoad() {
        // this.m_initEmptyScreenUICon.Hide();//隐藏
        // this.m_initEmptyScreenUICon = null;//清除引用
        // //显示加载ui
        // this.m_initLoadUICon.Show();
    }

    /**
     * 加载进度
     * @param _i 进度值
     */
    protected _loadPlan(_i: number) {
        // console.log('游戏加载进度->', _i);
        // if (this.m_initLoadUICon && this.m_initLoadUICon.ifShow) {
        //     this.m_initLoadUICon.setPlan(_i);
        // }
        WhiteScreenT.setPlan(_i);
    }

    /**
     * 单个加载项完成回调
     * @param _resLoad 加载项实例
     */
    protected _loadItemsCom(_resLoad: ResLoadItem) {
        //
    }

    /**
     * 加载完成
     */
    protected _loadCom() {
        // this.m_initLoadUICon.Hide();//隐藏
        // this.m_initLoadUICon = null;//清除引用
        WhiteScreenT.close();
    }
}