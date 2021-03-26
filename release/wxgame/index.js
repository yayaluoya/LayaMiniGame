/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";

//
loadLib("libs/pako_inflate.js");//解压工具类
//其他工具
loadLib("libs/axios.js");
//-----libs-begin-----
loadLib("libs/laya.core.js");//laya核心包
loadLib("libs/laya.d3.js");//laya3d包
loadLib("libs/fairygui.js");//fgui包
loadLib("libs/laya.physics3D.js");//laya3d物理包
//-----libs-end-------
loadLib("js/bundle.js");
