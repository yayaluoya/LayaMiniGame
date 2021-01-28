#### 框架日记

- git 会自动忽略掉一些文件，导致拉取时文件丢失，在忽略列表里禁止掉就行了
- 微信小游戏不支持async和await语法糖，如果使用则会在微信打开时黑屏，需要自己写promise.then()回调实现
    - new Promise<void>((r) => { r();});//一个promise的时候
    - Promise.all([]).then();//多个promise的时候