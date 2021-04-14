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
loadLib("libs/laya.core.js")
loadLib("libs/laya.d3.js")
loadLib("libs/axios.js")
loadLib("libs/fairygui.js")
loadLib("libs/laya.physics3D.js")
loadLib("libs/pako_inflate.js")
//-----libs-end-------
loadLib("js/bundle.js");
