/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";

//
loadLib("libs/min/pako_inflate.min.js");//解压工具类
//不必要工具包
loadLib("libs/min/axios.min.js");//网络请求工具类
loadLib("libs/min/underscore-min.js");//辅助工具包，提供了100多个辅助函数，用_访问
loadLib("libs/min/dayjs.min.js");//显示现代浏览器的日期和时间的工具
//-----libs-begin-----
loadLib("libs/laya.core.js");//laya核心包
loadLib("libs/laya.d3.js");//laya3d包
loadLib("libs/fairygui.js");//fgui包
loadLib("libs/laya.physics3D.js");//laya3d物理包
//-----libs-end-------
loadLib("js/bundle.js");
