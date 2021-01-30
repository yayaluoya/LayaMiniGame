(function(global){
var Laya3D = global.Laya3D;
var Laya = global.Laya;
Laya3D.init(0, 0);
Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
Laya.Stat.show();
Laya.Scene3D.load('.previewres/LayaScene_boneTest/Conventional/boneTest.ls', Laya.Handler.create(null, function(scene){Laya.stage.addChild(scene); }));
})(this);
