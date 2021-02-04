# VsCode上直接使用layaAir工具

- npm i layaair2-cmd -g 安装工具
- layaair2-cmd -v 查看版本，查看成功的话就说明上面的工具安装成功了
- npm i gulp -g 安装工具
- 文档地址
  - <https://ldc2.layabox.com/doc/?language=zh&nav=zh-ts-3-0-9>

- 操作说明
    //直接运行
    layaair2-cmd compile //需要先在layaAir中打开才行

    //HTML5版本发布命令
    layaair2-cmd publish -c web
    //微信小游戏版本发布命令
    layaair2-cmd publish -c wxgame
    //百度小游戏版本发布命令
    layaair2-cmd publish -c bdgame
    //小米快游戏版本发布命令
    layaair2-cmd publish -c xmgame
    //OPPO小游戏版本发布命令
    layaair2-cmd publish -c oppogame
    //vivo小游戏版本发布命令
    layaair2-cmd publish -c vivogame
    //QQ小游戏版本发布命令
    layaair2-cmd publish -c qqgame

    使用命令行发布的注意事项
        使用命令行发布之前，我们一定要先在LayaAirIDE里发布一次，因为命令行发布功能需要依托于.laya目录下的各个平台的js发布脚本和平台json配置信息。比如排除，发布配置等信息，需要发布一次后，才会更新保存到对应的平台json配置中。

        报错 无法加载文件 C:\Users\Administrator\AppData\Roaming\npm\layaair2-cmd.ps1，因为在此系统中禁止执行脚本。
            以管理员身份 打开windows powershell 输入set-ExecutionPolicy RemoteSigned   选择 A 或者 Y 

        报错 ReferenceError：primordials is not defined
            node版本和gulp版本不能兼容导致，更换版本就行了，可以是gulp v4 + node 11，更换node版本建议安装NVM实现，使用方法见 NVM使用方法.md

        报错 Failed at the gifsicle@4.0.1 postinstall script.
            1 加参数
                npm install --ignore-scripts
                --ignore-scripts表示npm将不会运行在package.json中指定的scripts脚本
            2 更换数据源
                npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver