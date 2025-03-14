# Jshop小程序商城


#### 项目介绍

Jshop小程序商城，是一款开源的电商系统，包含微信小程序、支付宝小程序、APP、公众号、H5端、PC端、抖音小程序、今日头条小程序、皮皮虾小程序、西瓜视频小程序，为大中小企业提供移动电子商务优秀的解决方案。

后台采用Thinkphp5.1框架开发，执行效率、扩展性、稳定性值得信赖。并且Jshop小程序商城上手难度低，可大量节省定制化开发周期。

前台使用uni-app开发，适配性多，在页面的打开和渲染效率上更快，下单流程流畅自然，可大大增加用户体验，提升订单量。

强大的促销引擎，多种促销方式自由搭配，满足各种场景的促销方式需求，做活动更灵活简单，并且在促销的扩展上也非常方便
### 前台模板介绍

uni-app简约序模板，全新UI设计，更多交互细节，我们倾尽全力为您提供更加流畅舒爽的体验，增加对支付宝小程序、APP的支持，实现一个后台，管理10个前端。

同时又实现了一套前端代码，发布多个平台，为您的业务可以提供更加强有力的支撑！


#### 关于开源
这不是一款免费的系统，商用记得授权哦。

为什么开源但是不免费，一方面是可以让我们有持续维护下去的动力和资源，另外一方面也是不想让您有后顾之忧，避免后期纠纷。

我们的团队水平有限，也是在探索中学习、改进。之所以开源，就是为了方便大家，也是为了提升下该项目的质量，我们相信有您的参与，可以使我们的系统更加完善和健壮。

从我工作以来，见过太多的优秀免费系统，因为坚持不下去失去维护，还有的前期免费后来又变成收费，所谓的承诺变来变去还不如一开始就收费，所以我们开源但不免费。

#### 功能介绍

 + 商品管理，单规格、多规格商品管理，品牌、分类管理、商品评价
 + 订单管理，订单支付、发货、取消、售后等
 + 会员管理，会员列表、消息管理、用户等级等
 + 运营管理，广告管理、文章管理
 + 微信管理，小程序管理、微信公众号管理、模板列表、公众号菜单管理
 + 促销管理，商品促销、订单促销、优惠券、团购秒杀、拼团管理
 + 财务管理，支付单、退款单管理、提现管理、账户资金、发票管理
 + 控制面板，计划任务、插件、图片、地区、消息、店铺配置、支付方式、配送方式、物流公司管理。信任登录插件、阿里云OSS插件、阿里云短信插件、微信消息模板插件、分销功能
 + 门店管理，门店列表。门店核销、店员管理、提货单管理。
 + 智能表单，表单列表、表单统计、表单提交管理、表单小程序码等
 + 统计报表，商品销量统计、财务收款统计、订单销量统计
 + 页面管理，布局管理，页面可视化操作



#### 智能表单说明
智能表单包含有：订单、付款码、留言、反馈、登记、调研这几种类型，可实现店铺收款、门店内扫码下单、活动预约、活动预定、会议登记、在线报名、上课签到等等。

智能表单可以为您的线上线下结合提供更强大的助力。

#### 项目演示
- 官网：https://www.jihainet.com
- uniapp简约模板项目地址：https://gitee.com/hnjihai/uniapp
- uniapp简约模板体验地址：https://demo.jihainet.com/wap
- 前台H5演示：[https://b2c.jihainet.com/](https://b2c.jihainet.com/)
- 后台演示：[https://b2c.jihainet.com/manage/](https://b2c.jihainet.com/manage/)
- QQ交流群：二群774522428、一群823732583(已满)（开发手册、接口文档、操作手册请进群查看哦~）
- 交流社区：[https://bbs.jihainet.com/](https://bbs.jihainet.com/)
- 小程序体验二维码

![输入图片说明](https://images.gitee.com/uploads/images/2018/1018/184408_a1c0d706_8503.jpeg "gh_03bc4364b4dc_344.jpg")

- 简约模板体验二维码

![输入图片说明](https://gitee.com/uploads/images/2019/0409/182147_ecec17d7_8503.png "1554805258.png")


- 安卓APP体验二维码【可进群下载体验】

![输入图片说明](https://images.gitee.com/uploads/images/2018/1026/163026_31132341_8503.png "1540542519.png")



#### 项目截图
![输入图片说明](https://images.gitee.com/uploads/images/2018/1019/104933_383a7831_8503.png "img(1).png")
#### 后台截图
![输入图片说明](https://images.gitee.com/uploads/images/2018/1019/104952_d154e8b4_8503.png "首页.png")
![输入图片说明](https://images.gitee.com/uploads/images/2018/1019/105206_a2dfa9e2_8503.png "商品列表.png")
![输入图片说明](https://images.gitee.com/uploads/images/2018/1019/105222_7caa99b6_8503.png "添加商品.png")
![输入图片说明](https://images.gitee.com/uploads/images/2018/1019/105317_82da6a34_8503.png "添加优惠券.png")


#### 目录结构
初始的目录结构如下：
~~~
wwwroot  WEB部署目录（或者子目录）
├─addons                应用插件目录
├─application           应用目录
│  ├─api                api接口模块目录
│  ├─b2c                前台模块
│  ├─common             公共模块目录
│  ├─crontab            定时任务目录
│  ├─job                任务队列目录
│  ├─manage             后台管理目录
│  ├─wechat             接收微信消息目录
│  ├─command.php        命令行工具配置文件
│  ├─common.php         公共函数文件
│  ├─tags.php           应用行为扩展定义文件
│
├─config                配置文件目录
├─public                WEB目录（对外访问目录）
│  ├─install            自动安装目录
│  ├─static             前台静态文件
│  ├─wap                前台手机端运行目录
│  ├─index.php          入口文件
│  └─.htaccess          用于apache的重写
│
├─thinkphp              thinkphp框架系统目录
├─update                版本升级包
├─extend                扩展类库目录
├─runtime               应用的运行时目录（可写，可定制）
├─vendor                第三方类库目录（Composer依赖库）
├─uni-app               前端源码（支持微信小程序、支付宝小程序、APP、公众号、H5端、PC端、抖音小程序、今日头条小程序、皮皮虾小程序、西瓜视频小程序）
├─build.php             自动生成定义文件（参考）
├─composer.json         composer 定义文件
├─LICENSE.txt           授权说明文件
├─README.md             README 文件
├─think                 命令行入口文件
├─crontab               定时任务命令行入口文件
~~~

#### 更新说明
2021-1-6 v2.4.0
1. 修复订单列表通过搜索用户名导出问题
2. 修复账号禁用的登录问题
3. 修复商品列表筛选项错误的bug
4. 解决绑定手机号问题
5. 积分列表优化
6. 解决错误信息弹出时间太快问题
7. 修复商品列表筛选bug
8. 优化节点管理里菜单节点编辑的时候偶，有时候不出来的bug
9. 后台订单查看细节优化
10. 订单编辑优化
11. 修复拼团记录取消的时候，订单状态不对和支付重复退的bug
12. 增加货品选择插件，后台订单编辑-订单明细增删改查
13. 订单编辑，添加订单明细按钮优化
14. 订单明细编辑增加上订单日志
15. 商品分类接口优化
16. 优化弹窗单选多选以及数据默认选中问题
17. 购物车页面增加防抖
18. 商品、会员导入修复
19. 优惠券增加排他
20. 后台订单菜单按钮优化
21. 解决文章详情页面背景颜色不同问题
22. 商品列表扩展分类修复
23. 对导出时请求的参数增加url解码
24. 优化导入导出列表
25. 修改首页优惠券样式
26. 修复提交订单优惠券字段传值问题
27. 拼团优化
28. 优化个人信息页面性别和生日触发面积变大
29. 解决我的优惠券页面优惠券名字过长问题
30. 切换规格优化
31. 完善优惠券问题
32. 优惠劵列表筛选优化
33. 搜索页面加清空功能
34. 解决没登录时在个人中心多次点击按钮页面出现多次问题
35. 修复个人中心未登录状态下点击页面跳转问题
36. 添加收货地址优化
37. 商品销量排行榜接口
38. 订单选择地址加编辑功能
39. 增加腾讯地图相关解析功能、收货地址经纬度优化
40. 解决app端 ios分享商品详情只是图片以及保存海报失败问题
41. 修复团购秒杀问题，腾讯地图问题修复
42. 修复文件上传时日志提示的错误
43. 短信平台地址升级
45. 后台列表排序bug修复
46. 报表-商品统计增加退货数量统计
47. 售后流程优化，bug修复
48. 订阅消息优化升级
49. 快递鸟查询物流升级
50. 修复登录日志为空问题
51. 导入导出提示语优化
52. 分销中心我的店铺增加屏蔽返回首页按钮
53. 提现bug修复
54. 增加砍价功能
55. 修复用户列表导出问题
56. 优化会员表结构
57. 直播插件升级
58. 后台添加和编辑会员禁止默认输入
59. 增加站内webview跳转功能
60. 页面编辑优化，增加设为主页功能
61. 余额变动记录增加订单号
62. 修复购买记录不足4个的时候的bug
63. 修复没有此邀请人错误的bug
64. 导航组组件底部间距去掉，更适合排版
65. 选择商品时显示上下架状态
66. 修复视频的自动播放设置问题

2020-7-6 v2.3.0
1. 用户等级升级插件
2. 库存管理插件
3. 插件菜单配置文件优化（https://www.jihainet.com/index/article/index/id/116.html）
4. 节点权限功能完善插件刷新功能
5. 优化用户列表筛选
6. 新增用户备注字段
7. 兼容用户名登陆，
8. 用户资金流水增加昵称搜索
9. 管理员日志和用户日志分开
10. 商品类型关联属性样式优化
11. 修复商品批量改价bug
12. 设置商品评价菜单可以在权限设置
13. 商品列表sql注入漏洞修复
14. 商品详情加库存信息
15. 修复后台商品编辑关闭规格时，商品中自定义规格值置为空
16. 商品类型bug修复
17. 扩展分类没有选择的不保存
18. 取消订单计划任务把拼团，秒杀，团购也加进去了
19. 新增促销赠品功能
20. 修复订单定时签收bug
21. 订单编辑订单详情显示下单人
22. 订单促销的时候，订单表上的商品金额优化
23. 优化修改订单价格和邮费
24. 促销流程重构
25. 修复没有促销类型时报错的bug
26. 促销条件一条都没有的时候，促销不生效
27. 促销编辑的时候，增加说明文字
28. 促销条件满足的时候才排他
29. 砍价优化 拼团优化 团购秒杀优化
30. 修复多个促销条件时，团购秒杀问题
31. 团购秒杀可视化布局优化
32. 团购秒杀添加商品修复未加类型判断
33. 增加拼团团购海报
34. 限购数量优化
35. 团购秒杀促销结果屏蔽
36. 团购秒杀详情页销量，海报价格问题修复
37. 修复编辑团购秒杀删除条件后token验证出错问题
38. 团购秒杀都增加上下架过滤
39. 团购首页列表价格修复
40. 优化团购秒杀切换规格的划线价
41. 拼团库存问题优化
42. 拼团销量统计，首页价格修复
43. 拼团详情页优化
44. 拼团，参团bug修复，拼团记录倒排序优化
45. 拼团详情页复制链接
46. 拼团商品删除时，不让进入拼团详情页
47. 拼团分享之后不能直接参团
48. 海报字体换为阿里巴巴普惠字体
49. 海报增加缓存
50. 首页分享海报制作
51. 修复优惠券问题删除优惠券数据的时候把用户未使用的优惠券一并删掉
52. 新增微信小程序直播功能
53. 解决拼团商品复制链接问题
54. 修改导入导出日志内容类型
55. 前端个人信息添加用户名手机号的显示
56. 优化后台token验证机制，默认开启防CSRF攻击以及防止重复提交表单，如果不想开启，config\app.php里面validate_token改为false即可

2020-02-09 v2.2.0
1. 修复下架商品显示问题
2. 富文本编辑插件问题修复
3. 支付宝小程序和抖音小程序兼容发票和地址选择问题优化
4. 快递鸟插件优化
5. 修复店铺地址的bug
6. 优化发货为0的时候的提示信息
7. 修复未开启店铺自提的时候的报错问题
8. 修复在ios上余额充值支付不通过的问题
9. 增加插件的菜单权限
10. 修复导航分组组件无法选择文章分类的问题
11. 修复余额充值充不上的bug
12. 修复拼团搜索bug
13. 文章详情增加上一篇下一篇
14. 优惠券增加领取限制
15. 优惠券数量问题优化
16. 增加首页图片组件点击领取优惠券
17. 团购秒杀增加每人限购多少件，商品活动库存
18. 拼团增加限购数量
19. 页面管理增加描述
20. 文章管理优化
21. 修复订单筛选tab切换bug
22. 发货明细优化
23. 搜索框样式修改
24. 商品详情页商品详情优化
25. 文章编辑文本框修复
26. 修复售后退货确认签收的bug
27. 修复首页单图组件不能跳转的问题
28. 后端弹窗大小优化，可以根据当前显示器分辨率来适配
29. 图片橱窗组件优化
30. 定时任务增加命令行模式
31. 修复阿里云短信插件催付模板
32. 修复阿里云短信已知的一些bug
33. 增加腾讯云cos图片存储引擎
34. 批量支付，合并发货样式调整
35. 修复扩展分类开启后不选择的bug
36. 修复表单表单无法充值的问题
37. 优化0元订单生成的时候直接支付成功
38. 首页增加订阅提醒功能
39. 订阅消息提示机制优化
40. 移除taskphp
41. 修复发货单导出报错，修复导出校验错误
42. 增加腾讯云短信插件
43. 售后问题优化
44. 评论星级不显示的问题优化
45. 修复升级自定义编译组件之后搜索框在小程序中不浮动的问题
46. 删除重复多于的订单列表获取接口代码
47. 删除用户同步删除user_wx表
48. 首页增加tabbar组件
49. 退款金额优化
50. 手机端商品详情页文字描述放到后台控制
51. 优化发货单导出
52. 修复前台拼团按钮点击的一个bug
53. app收货地址编辑问题修复
54. 商品详情接口，品牌预加载优化
55. 分类页广告位优化
56. 微信支付支持服务商模式（微信支付重大升级，费率更低，联系客服申请）
57. 发货后扣减库存bug优化
58. 优化只能表单日期问题
59. 优化订单配货单上面数量显示
60. 修复商品无设置重量，设置部分地区，首重为0续重有值，运费为负数的问题
61. 修复商品类型选择参数，参数过多的时候显示的问题
62. 优化商品库存被下架，订单提交 页面商品为空的情况
63. 后台首页会员统计优化
64. 分销中心优化
65. 修复拼团倒计时不显示问题
66. 分享功能重构（url分享，二维码，海报等）
67. 打印购物清单、配货清单改为货品编号
68. 一些已知的页面优化

2019-11-20 v2.1.0
更新日志
1. 修改伪静态，更好的兼容h5端和pc端及后台，详见https://www.jihainet.com/index/article/index/id/106.html
2. 订单售后流程优化，从根本上解决售后的各种问题
3. 订单发货流程优化，兼容部分发货和合并批量发货，优化发货单模块
4. 后台订单列表页售后信息显示优化
5. 文章分类模块优化
6. 文章上面增加描述和点击量字段
7. 发票流程优化，前后端把发票单独拎出来
8. 登陆注册页面增加用户协议和隐私条款，后台平台设置里面可以配置
9. 前端支付页面接口调整，直接请求支付单接口
10. 后台layui框架升级到2.5.5
11. 前端个人中心样式调整，兼容两种样式
12. uni-app编译模式从非自定义模式修改成自定义模式
13. 修改一些已知的bug
14. 前端模板uni-app从独立git库移到当前项目根目录下/uni-app,这样以后前后端版本可以对应起来了。
15. 后台左侧菜单调整

2019-09-28 v2.0.7
更新日志
1.  修复页面团购秒杀过期问题
2. 修复表单编辑问题
3. 普通分销插件细节优化
4. 修复商品自定义规格问题
5. 优化订单取消自动脚本
6. 优化订单自动完成脚本
7. 优化后台订单列表订单类型筛选
8. 页面可视化编辑优化
9. 优化支付宝小程序登陆接口
10. 统一处理后台报错提示信息，当没有权限的时候，友好的报错。
11. 修改商品列表标签造成js报错的问题
12. 增加抽奖插件（需付费）
13. 优化uni-app版本页面url方式，把#号拿掉了
14. 使用积分核销记录增加备注
15. 新增支付宝在线退款功能
16. 商品下架不允许加入购物车，不允许在购物车列表显示
17. 保证接口统一访问地址api.html,之前可以直接访问接口，现在修复了
18. 优化可视化编辑，拼团和促销为空的问题
19. 后台管理员页面翻页优化
20. 余额充值问题优化
21. 插件配置优化
22. 优惠券增加变更领取人
23. 会员列表弹框报错修复
24. 快递鸟插件顺丰优化
25. 修复快递查询出错的bug
26. 优化后台列表高度
27. 修复大数据量或者网络不好使劲提交订单的时候，订单明细为空的bug
28. 修复插件api登陆判断未带token的时候，mysql报错的问题
29. 增加清楚应用缓存设置，模板缓存
30. 优化公众号关注回复
31. 优化没有挂载点的时候，插件安装失败的问题
32. 修复卸载插件的时候时候，钩子无法去除的bug
33. 后台订单统计和财务统计加上汇总
34. 图片表增加阿里云类型
35. 优化页面排版数据过多的问题
36. 修复支付和登陆微信不一致导致无法支付的问题
37. 修复提货单任命查询的问题
38. 增加视频和视频播放功能
39. 商品编辑，商品简介去掉多于冒号，配送方式满多少包邮提示语修复
40. 修复异常情况下商品评论不显示的bug
41. 修复批量打印快递单无弹窗的bug
42. 内置短信模板增加参数备注，用迈信等短信通道想修改短信内容的话，很简单了。
43. 后台商品分类修改的时候，增加父分类较远，防止陷入死循环
44. 修复不绑定手机号时无邀请人的bug
45. 支付的时候，支付名称修改，取商品名称
46. 修复商品类型，参数全部取消时报错的处理。
47. 优化库存描述语
48. 添加商品时，商品分类的显示优化
49. 表单表表bug修复
50. 只能表单增加导出功能
51. 地区表增加邮编
52. 登陆日志增加用户名
53. 商品增加快捷上下架，商品列表排序优化
54. 增加定时删除7天前日志的功能，增加操作日志批量删除功能
55. 修复团购秒杀可以添加多个出校条件的问题
56. 后台样式细节优化


#### 环境要求
- Nginx/Apache/IIS
- PHP7.0-7.2
- MySQL5.5+

建议使用环境：Linux + Nginx1.14 + PHP7.0 + MySQL5.6

#### 部署说明

[安装部署](https://gitee.com/hnjihai/jshop_mall/wikis/%E5%AE%89%E8%A3%85%E9%83%A8%E7%BD%B2?sort_id=881805)

#### nginx 伪静态配置，apache请勿使用此配置
~~~
    location /wap/ {
        	try_files $uri /wap/index.html;
    }
    location / {
        if (!-e $request_filename){
            rewrite  ^(.*)$  /index.php?s=$1  last;   break;
        }
    }
~~~


#### 如果H5中保存图片有跨域问题
nginx中添加以下配置
```
    location ~ .*\.(gif|jpg|jpeg|png)$ {  
      add_header Access-Control-Allow-Origin *;
      add_header Access-Control-Allow-Headers X-Requested-With;
      add_header Access-Control-Allow-Methods GET,POST,OPTIONS;
    }
```


#### Apache 伪静态配置
~~~
    <IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^wap/(.*) /wap/index.html [QSA,PT,L]
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond $1 !^(wap)
    RewriteRule ^(.*)$ index.php?s=/$1 [QSA,PT,L]
    </IfModule>
~~~

#### 定时任务配置
- Linux执行Shell命令
```
# 定时取消未支付订单
php think jshop cancle

# 定时催付即将被取消的订单
php think jshop remind

# 定时签收已发货订单
php think jshop sign

# 定时评价已签收订单
php think jshop evaluate

# 定时完成已评价订单
php think jshop complete

# 定时取消拼团失败的订单
php think jshop pintuan_cancle

# 定时清理后台操作日志
php think jshop remove_op_log
```
注意1： **think** 必须指定到项目根目录下的 **think** 文件。  
注意2： Shell命令下的php确保版本在7.0.* ~ 7.3.*之间，其他php版本可能会出现未知错误。  


#### 安全&缺陷
如果你发现了一个安全漏洞或缺陷，请发送邮件到 jima@jihainet.com。所有的安全漏洞都将及时得到解决。


#### License

Jshop小程序商城遵循JPPL（吉海科技Jshop系列付费产品许可）协议。

本项目包含的第三方源码和二进制文件之版权信息另行标注。

版权所有Copyright © 2020 by 吉海科技 (https://www.jihainet.com)

All rights reserved。

吉海科技Jshop系列付费产品许可协议详情请参阅 [LICENSE.txt](LICENSE.txt)