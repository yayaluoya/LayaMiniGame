(function(global){
var Laya3D = global.Laya3D;
var Laya = global.Laya;
Laya3D.init(0, 0);
Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
Laya.Stat.show();
var scene = Laya.stage.addChild(new Laya.Scene3D());
Laya.Sprite3D.load('.previewres/Prefabs2/Conventional/prefabs2.lh', Laya.Handler.create(null, function(sprite){scene.addChild(sprite); }));
})(this);
