webpackJsonp([40],{"3tiP":function(n,e,t){"use strict";t.d(e,"a",function(){return o});var o=function(){function n(){}return n}()},"4dSE":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("/oeL"),a=t("XDCf"),r=t("VDWU"),u=t("qbdv"),c=t("jlvU"),l=t("BkNc"),i=t("3tiP"),s=t("1n7c"),d=t("gpnF");t.d(e,"NzIntroChangeLogModuleNgFactory",function(){return g});var g=o.b(a.a,[],function(n){return o.c([o.d(512,o.e,o.f,[[8,[r.a]],[3,o.e],o.g]),o.d(4608,u.a,u.b,[o.h]),o.d(512,u.d,u.d,[]),o.d(512,c.a,c.a,[]),o.d(512,l.x,l.x,[[2,l.m],[2,l.c]]),o.d(512,i.a,i.a,[]),o.d(512,s.a,s.a,[]),o.d(512,a.a,a.a,[]),o.d(1024,l.t,function(){return[[{path:"",component:d.a}]]},[])])})},VDWU:function(n,e,t){"use strict";function o(n){return r.J(0,[(n()(),r.K(0,null,null,1,"nz-markdown",[],null,null,null,u.a,u.b)),r.M(4308992,null,0,c.a,[r.N],{nzContent:[0,"nzContent"]},null),(n()(),r.L(null,["\n"]))],function(n,e){n(e,1,0,e.component._markdownCode)},null)}function a(n){return r.J(0,[(n()(),r.K(0,null,null,1,"nz-intro-changelog",[],null,null,null,o,s)),r.M(49152,null,0,l.a,[],null,null)],null,null)}var r=t("/oeL"),u=t("yhcn"),c=t("AXbG"),l=t("gpnF");t.d(e,"a",function(){return d});var i=[],s=r.I({encapsulation:2,styles:i,data:{}}),d=r.Q("nz-intro-changelog",l.a,a,{},{},[])},XDCf:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var o=function(){function n(){}return n}()},gpnF:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var o=function(){function n(){this._markdownCode=t("h73v")}return n.ctorParameters=function(){return[]},n}()},h73v:function(n,e){n.exports="更新日志\n===\n# 0.5.0\n`2017-08-15`\n\n* 对外第一个版本，暂时移除了复杂组件部分，后续单独发布\n\n## 0.4.0\n`2017-07-20`\n\n### Features\n* `Select`,`DropDown`,`TimePicker`,`DatePicker`下拉菜单改为absolute布局，不再受父元素overflow限制\n* `Select`,`DropDown`,`TimePicker`,`DatePicker`,`ContextMenu`下拉菜单位置跟随视窗边界自动切换\n* `Select` 增加nzMode方法\n* `Modal`增加`zIndex`选项用于配置多窗口时显示次序\n* `Alert`增加关闭时动画效果\n* `Tooltip`组件加入\n\n### Break Changes\n* `nz-table-sort`修复ascend和descend语义错误\n* `Select`中nz-option修正输入语义，nzValue->nzLabel,nzKey->nzValue\n* `Tabs`组件重构，使用方法改变，具体见组件页面介绍\n* `Select`组件不再支持位置选项，改为自动布局\n* `Popover`和`Popconfirm`和`DropDown`重构，使用方法改变，具体组件页面介绍\n* 根Module组件需要使用` NgZorroAntdModule.forRoot()`方法，不再需要手动在`Providers`中加入`  NzContextMenuService,NzMessageService,NzNotificationService`\n\n\n\n## 0.3.4\n`2017-06-27`\n\n### Features\n* `Popover`卡片内容：增加对原生DOM HTMLElement引用的支持\n\n### Bug Fixes\n* `Popover`修复removeChild移除不存在元素时报错的问题\n\n\n## 0.3.3\n`2017-06-10`\n\n### Features\n* `Select`组件支持位置选项\n* `ContextMenu`右键菜单组件位置自动调整\n* `Checkbox Group`组件支持nzDisable属性\n* `Directory`组件动画时间调整\n\n\n### Bug Fixes\n* `Table`组件PageSizeChange属性在ViewInit之前不再会被触发\n* `Tabs`修复组件使用NgIf初始化时Change After View Check的bug\n\n\n## 0.3.2\n\n`2017-05-26`\n\n### Features\n* 增加`Slider`组件，感谢 @凌亦 提供\n* `Graph`组件支持`ForeignObject`自动计算高度\n* `Monaco Editor`组件支持动态调整字体、主题、换行等选项\n\n### Bug Fixes\n* 修复`Input`组件首次传值是调用`OnChanges`的Bug\n* 修复`Dir`组件Focus样式的Bug\n* 修复`DropDown`组件在首页使用时的Bug\n\n## 0.3.1-beta.0\n\n`2017-05-11`\n\n### Features\n* 增加`G2`图表组件\n* 增加`Carousel`组件\n* 增加`Card`组件\n* `Menu`组件增加`nzClickActive`属性\n* `Select`组件增加远程搜索示例\n\n### Bug Fixes\n* 修复`Menu`在disable状态下点击样式，修复子菜单点击收起的bug\n* 修复`Steps`组件样式bug\n* 修复`Select`多选状态下初始化数据动画效果，支持更多异步加载环境\n\n## 0.3.0\n\n`2017-05-09`\n\n### Features\n* 与`ant design 2.9.3`同步样式\n* 新增`Layout`组件\n* 新增`Menu`组件\n* 新增`Dropdown`组件\n* 新增`Breadcrumb`组件\n* `Button`新增`Danger`按钮，改变`Ghost按钮`的使用方式\n* `Col`修改`gutter`生效逻辑，仅当父节点`Row`设置`gutter`后生效\n* `Input`新增`search`类型，增加`prefix`与`suffix`标签功能\n* `Checkbox`增加`nzIndeterminate`属性\n* `Badge`组件重写，增加状态点功能\n* `Calendar`组件增加自定义渲染数据功能\n\n### BREAKING CHANGES\n* 根组件必须加入`nz-root`标签，不再需要手动引入`iconfont.css`文件，加入`nz-root`后不再必须引入`nz-notifications`、`nz-messages`和`nz-context-menu`插座\n* `Input`组件前置/后置标签使用方式修改，参照最新Demo\n* `Badge`组件包含数据方式修改，参照最新Demo\n\n\n## 0.2.0\n\n`2017-04-24`\n\n### BREAKING CHANGES\n* 升级到Angular `4.0`版本，如果要使用Angular`2.x`请使用`0.2.0`之前的版本\n* 修改了`nz-ace`与`nz-monaco-editor`的引入方法\n* 修改`nzModalSubject`的名称为`NzModalSubject`，规范了所有component的命名方式\n\n## 0.1.9\n\n`2017-04-20`\n\n* 增加iconfont文件引入说明\n* 增加`nz-dir`组件的替换模板功能\n\n## 0.1.8\n\n`2017-03-24`\n\n* 修改发布逻辑，当前npm发布包不再包含less文件\n* 增加`nz-graph`组件的编辑功能\n\n## 0.1.7\n\n`2017-03-21`\n\n* 增加`nz-graph`组件，增加复杂图显示模块\n* 修复部分bug\n\n\n## 0.1.6\n\n`2017-03-08`\n\n* 修复了`select`组件，在多选状态下Enter键入的bug\n* 移除了部分不必要的引入\n\n## 0.1.5\n\n`2017-03-07`\n\n* 新增了`nz-dir`组件，用于进行文件和文件夹管理\n* 修复了`nz-dir`组件样式bug\n\n## 0.1.3\n\n`2017-02-26`\n\n* 修复`nz-input-number`在非focus时的校验\n* 配合`@angular/cli`至`1.0.0-rc0`，升级步骤见`https://github.com/angular/angular-cli/blob/master/CHANGELOG.md`\n\n## 0.1.1\n\n`2017-02-15`\n\n* `modal-confirm`中增加maskCloseable选项\n* 增加`context-menu`在LazyLoad中的使用规范\n* 增加`nz-message`在LazyLoad中的使用规范\n* 增加`nz-notification`在LazyLoad中的使用规范\n\n## 0.1.0\n\n`2017-02-13`\n\n* 完善monaco-editor组件\n* 兼容`@angular/cli`到`1.0.0@beta.31`\n\n## 0.0.9\n\n`2017-02-08`\n\n* 添加monaco-editor组件\n* 修改nz-steps文件，兼容webpack打包方式\n\n## 0.0.8\n\n`2017-02-06`\n\n* 兼容至angular`2.4.6`版本\n* @angular/cli代替angular-cli\n* 支持LazyLoad和PreLoad方式加载\n* 修复popover及popconfirm在2.4.6下typescript支持bug\n\n## 0.0.7\n\n`2017-01-17`\n\n* 修复Tabs标签页组件\n\n## 0.0.6\n\n`2017-01-16`\n\n* 兼容angular 2.4.3\n* 兼容angular-cli@@1.0.0-beta.25.5\n* 修复webpack raw loader\n\n## 0.0.5\n\n`2017-01-12`\n\n* 增加Steps组件\n* 修复Progress组件\n\n## 0.0.4\n\n`2017-01-12`\n\n* 修复button group展示问题\n* 增加Progress组件\n* iconfont目录切换至本地\n\n\n## 0.0.3\n\n`2017-01-11`\n\n* 与[ant.design 2.6.0](http://antd.alipay.net/changelog-cn#2.6.0)同步UI样式\n* 重写DEMO站点样式\n\n## 0.0.2\n\n`2016-12-25`\n\n* 启用angular-cli作为默认脚手架工具\n* 支持AoT编译\n* 加入单元测试\n* 加入protractor e2e测试\n\n## 0.0.1\n\n`2016-12-08`\n\n* 从NAZA-UI迁移成功\n"}});