import ConsoleEx from '../Console/ConsoleEx';
import { EKeyResName } from './EKeyResName';
import KeyResManager from './KeyResManager';
/**
 * 必要的游戏资源路径
 */
export default class EssentialResUrls {

    /**
     * 获取关卡配置文件
     * @param _name 场景名字
     */
    public static LevelConfigURL(_name: string): string {
        return KeyResManager.getResURL(EKeyResName.LvConfig) + _name + '.json';
    }

    /**
     * 获取配置表RUL
     * @param _name 配置表名字
     */
    public static ConfigURL(_name: string): string {
        return KeyResManager.getResURL(EKeyResName.Config) + _name;
    }

    /**
     * FGUI包
     * @param _name 包名
     */
    public static FGUIPackURL(_name: string): string {
        return KeyResManager.getResURL(EKeyResName.FGUI) + _name;
    }

    /**
     * 字体地址
     * @param _name 字体名字，加后缀
     */
    public static FontURL(_name): string {
        return KeyResManager.getResURL(EKeyResName.Font) + _name;
    }

    //所有预制体名字列表
    private static _AllScenePrefabsNames: {
        [_index: string]: string,
    } = {};
    //预制体场景缓存
    private static _prefabsSceneCache: {
        [_index: string]: string,
    } = {};
    /**
     * 预制体资源路径
     * @param prefab 预制体名字
     */
    public static PrefabURL(prefab: string): string {
        //先在缓存中查找场景名字
        if (this._prefabsSceneCache[prefab]) {
            return KeyResManager.getResURL(EKeyResName[this._prefabsSceneCache[prefab]]) + 'Conventional/' + prefab + '.lh';
        }
        //判断该预制体在哪个场景中被导出的
        for (let _i in this._AllScenePrefabsNames) {
            if (this._AllScenePrefabsNames[_i].indexOf('@' + prefab + '@') != -1) {
                //添加到缓存
                this._prefabsSceneCache[prefab] = _i;
                //
                return KeyResManager.getResURL(EKeyResName[_i]) + 'Conventional/' + prefab + '.lh';
            }
        }
        //
        console.error(...ConsoleEx.packError('没有在场景找到预制体', prefab, '可能是没有导出场景预制体列表导致的。'));
    }
}