/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";

//自定义扩展脚本
loadLib("libs/LayaMiniGameEx.js");
loadLib("libs/min/pako_inflate.min.js");//解压工具
//-----libs-begin-----
loadLib("libs/laya.core.js");
loadLib("libs/laya.d3.js");
loadLib("libs/fairygui.js");
loadLib("libs/laya.physics3D.js");
//-----libs-end-------
loadLib("js/bundle.js");
