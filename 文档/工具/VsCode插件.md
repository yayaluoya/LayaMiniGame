# VsCode常用的插件

## Chinese (Simplified) Language Pack for Visual Studio Code

    中文(简体)语言包扩展
    安装后，在 locale.json 中添加 "locale": "zh-cn"，即可载入中文（简体）语言包。要修改 locale.json，你可以同时按下 Ctrl+Shift+P 打开命令面板，之后输入 "config" 筛选可用命令列表，最后选择配置语言命令。

## GitLens — Git supercharged [必须]

    增加了Visual Studio代码中内置的Git功能。它通过Git责备注释和代码透镜帮助您直观地看到代码的作者身份，无缝地导航和探索Git存储库，通过强大的比较获得有价值的见解

## Prettier & ESLint & TSLint [必须]

    格式化
    配置了自动格式化后没有效果，就手动点击格式代码，然后手动指定格式化插件

## Debugger for Chrome [必须]

    在Chrome浏览器中调试你的JavaScript代码，或任何其他支持Chrome调试协议的目标。

## TypeScript Her [必须]

    TypeScript的附加工具

## Auto Close Tag

    自动添加HTML/XML关闭标签，与Visual Studio IDE或Sublime文本相同

## Beautify

    在适当的地方美化VS代码

## Better Comments

    通过使用警告、信息、待办事项等注释来改进代码注释!

## 常用 相比One Dark Pro更暗一些，而且各个层级更加容易分辨

## Atom One Dark Theme

    一个基于Atom的黑暗主题

## Dracula Official 一个感觉对比度很高的主题

    官方吸血鬼主题。对于许多编辑器、shell等来说，这是一个黑暗的主题。

## Material Theme 对比度超高

    这是Visual Studio代码中最经典的主题

## Tokyo Night

    一个干净、黑暗(现在亮了)的Visual Studio代码主题，庆祝东京市中心夜晚的灯光。

## Horizon Theme

    一个漂亮温暖的双主题为Visual Studio代码

## GitHub Plus Theme

    一个GitHub启发颜色主题的VSCode代码和界面!

## 常用

## One Dark Pro

    对于Visual Studio代码，Atom标志性的一个黑色主题

## Bracket Pair Colorizer

    用于给匹配括号着色的可自定义扩展    

## Color Picker

    帮助与GUI，以产生颜色代码，如CSS颜色符号。

## json

    用于Visual Studio代码的Json

## Markdown All in One

    所有你需要写下的(键盘快捷键，目录，自动预览和更多)

## npm

    VS代码的npm支持

## Shader languages support for VS Code

    Shader语言支持VS代码

## vscode-icons

    Visual Studio代码的图标

## Material Icon Theme

    Visual Studio代码的材料设计图标

## C#

    c#用于Visual Studio代码(由OmniSharp提供)。

## koroFileHeader

    在vscode中用于生成文件头部注释和函数注释的插件，经过多版迭代后，插件：支持所有主流语言,功能强大，灵活方便，文档齐全，食用简单！

## Search/Translate Hero

    一款让您在代码中进行搜索或者翻译的 VS Code 插件。

## background

    一个简单的工具，使您的vscode的背景看起来更好!
    "background.customImages": [
        //图片地址
    ],
    "background.style": {
        "content": "''",
        "pointer-events": "none",
        "position": "absolute", //图片位置
        "width": "100%",
        "height": "120%",
        "z-index": "99999",
        "background.repeat": "repeat-Y",
        "background-size": "cover", //图片大小
        "opacity": 0.03 //透明度
    },
    "background.useFront": true,
    "background.useDefault": false, //是否使用默认图片

    当遇到 Cod似乎有损坏请重新安装的错误时
    1.下载一个叫Fix VSCode Checksums的拓展
    2.ctrl+shift+P打开命令面板
    3.输入Fix Checksums: Apply
    4.重启vscode即可

## background-cover [推荐]

    全屏的背景图，非常方便
    同样可以在setting文件中设置图片和透明度

## Color Highlight

    在编辑器中突出显示web颜色

## Todo Tree

    在树状视图中显示TODO、FIXME等注释标签
