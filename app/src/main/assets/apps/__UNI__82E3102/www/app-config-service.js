
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/index/category","pages/index/square","pages/index/message","pages/index/shop","pages/index/cart","pages/index/user","pages/index/search/index","pages/index/view","pages/auth/index","pages/activity/sign/index","pages/activity/seckill/list","pages/activity/groupon/list","pages/activity/groupon/detail","pages/activity/groupon/my-groupon","pages/activity/discounts/list","pages/app/score/list","pages/app/coupon/list","pages/app/coupon/detail","pages/app/merchant/index","pages/app/merchant/apply","pages/app/merchant/detail","pages/app/merchant/info","pages/app/merchant/list","pages/app/distributionCenter/index","pages/app/distributionCenter/withdraw","pages/app/distributionCenter/record","pages/app/distributionCenter/promote","pages/app/distributionCenter/order","pages/app/distributionCenter/member","pages/app/commission/index","pages/app/commission/team","pages/app/commission/commission-log","pages/app/commission/order","pages/app/commission/goods","pages/app/commission/apply","pages/app/commission/rankings","pages/app/commission/share-log","pages/goods/list","pages/goods/indexList","pages/goods/detail","pages/goods/comment/add-comment","pages/goods/comment/comment-list","pages/order/confirm","pages/order/payment/method","pages/order/payment/result","pages/order/list","pages/order/detail","pages/order/after-sale/detail","pages/order/after-sale/list","pages/order/after-sale/log","pages/order/after-sale/refund","pages/order/express/distribution-detail","pages/order/express/express-detail","pages/order/express/express-list","pages/order/express/store-address","pages/public/faq","pages/public/feedback","pages/public/chat/index","pages/public/search","pages/public/richtext","pages/public/webview","pages/public/404","pages/public/loading","pages/user/info","pages/user/set","pages/user/view-log","pages/user/wallet/index","pages/user/wallet/withdraw","pages/user/wallet/withdraw-log","pages/user/wallet/score-balance","pages/user/address/list","pages/user/address/edit","pages/user/favorite","pages/user/personal/set","pages/user/personal/edit","pages/user/personal/balance","pages/user/personal/integral","pages/user/personal/certification","pages/user/personal/material","pages/user/personal/identify","pages/user/personal/drawingBoard","pages/square/topic/index","pages/square/topicAll/index","pages/square/release/index","pages/square/addTopic/index","pages/square/addTopic/add","pages/square/addgoods/index","pages/square/homePage/index","pages/square/inform/index","pages/square/attention/index","pages/square/dynamic/index","pages/square/chat/index","pages/live/list","pages/live/app","pages/live/apps","pages/live/wx"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"shopro-plus","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#333","selectedColor":"#FE6A45","backgroundColor":"#ffffff","borderStyle":"black","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/images/tabbar/icon1.png","selectedIconPath":"/static/images/tabbar/icon1Act.png"},{"pagePath":"pages/index/square","text":"广场","iconPath":"static/images/tabbar/icon3.png","selectedIconPath":"/static/images/tabbar/icon3Act.png"},{"pagePath":"pages/index/message","text":"消息","iconPath":"static/images/tabbar/icon4.png","selectedIconPath":"/static/images/tabbar/icon4Act.png"},{"pagePath":"pages/index/cart","text":"购物车","iconPath":"static/images/tabbar/icon6.png","selectedIconPath":"/static/images/tabbar/icon6Act.png"},{"pagePath":"pages/index/user","text":"我的","iconPath":"static/images/tabbar/icon5.png","selectedIconPath":"/static/images/tabbar/icon5Act.png"}]},"preloadRule":{"pages/index/index":{"network":"all","packages":["pages/activity","pages/user","pages/goods","pages/app","pages/public","pages/order","pages/square"]}},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"ST测试AS打包","compilerVersion":"3.2.9","subPackages":[{"root":"pages/activity"},{"root":"pages/app"},{"root":"pages/goods"},{"root":"pages/order"},{"root":"pages/public"},{"root":"pages/user"},{"root":"pages/square"},{"root":"pages/live"}],"entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","navigationBarTextStyle":"white","navigationStyle":"custom"}},{"path":"/pages/index/category","meta":{},"window":{"navigationBarTitleText":"分类"}},{"path":"/pages/index/square","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"广场","navigationStyle":"custom","enablePullDownRefresh":true}},{"path":"/pages/index/message","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"消息"}},{"path":"/pages/index/shop","meta":{},"window":{"navigationBarTitleText":"消息","navigationStyle":"custom"}},{"path":"/pages/index/cart","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"购物车"}},{"path":"/pages/index/user","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","navigationStyle":"custom","navigationBarTextStyle":"white","enablePullDownRefresh":true}},{"path":"/pages/index/search/index","meta":{},"window":{"navigationBarTitleText":"搜索"}},{"path":"/pages/index/view","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":true}},{"path":"/pages/auth/index","meta":{},"window":{"navigationBarTitleText":"登录"}},{"path":"/pages/activity/sign/index","meta":{},"window":{"navigationBarTitleText":"签到中心"}},{"path":"/pages/activity/seckill/list","meta":{},"window":{"navigationBarTitleText":"限时秒杀","enablePullDownRefresh":true}},{"path":"/pages/activity/groupon/list","meta":{},"window":{"navigationBarTitleText":"今日必拼","enablePullDownRefresh":true}},{"path":"/pages/activity/groupon/detail","meta":{},"window":{"navigationBarTitleText":"拼团详情","enablePullDownRefresh":true}},{"path":"/pages/activity/groupon/my-groupon","meta":{},"window":{"navigationBarTitleText":"我的拼团","enablePullDownRefresh":true}},{"path":"/pages/activity/discounts/list","meta":{},"window":{"navigationBarTitleText":"优惠活动商品"}},{"path":"/pages/app/score/list","meta":{},"window":{"navigationBarTitleText":"积分商品"}},{"path":"/pages/app/coupon/list","meta":{},"window":{"navigationBarTitleText":"优惠券中心","navigationStyle":"custom"}},{"path":"/pages/app/coupon/detail","meta":{},"window":{"navigationBarTitleText":"优惠券详情","navigationStyle":"custom"}},{"path":"/pages/app/merchant/index","meta":{},"window":{"navigationBarTitleText":"门店中心","navigationStyle":"custom","enablePullDownRefresh":true,"navigationBarTextStyle":"white"}},{"path":"/pages/app/merchant/apply","meta":{},"window":{"navigationBarTitleText":"门店入驻","navigationStyle":"custom"}},{"path":"/pages/app/merchant/detail","meta":{},"window":{"navigationBarTitleText":"订单详情"}},{"path":"/pages/app/merchant/info","meta":{},"window":{"navigationBarTitleText":"门店详情"}},{"path":"/pages/app/merchant/list","meta":{},"window":{"navigationBarTitleText":"我的门店"}},{"path":"/pages/app/distributionCenter/index","meta":{},"window":{"navigationBarTitleText":"分销中心","navigationStyle":"custom","navigationBarTextStyle":"white"}},{"path":"/pages/app/distributionCenter/withdraw","meta":{},"window":{"navigationBarTitleText":"分销中心-提现"}},{"path":"/pages/app/distributionCenter/record","meta":{},"window":{"navigationBarTitleText":"分销中心-提现记录"}},{"path":"/pages/app/distributionCenter/promote","meta":{},"window":{"navigationBarTitleText":"分销中心-推广"}},{"path":"/pages/app/distributionCenter/order","meta":{},"window":{"navigationBarTitleText":"分销中心-订单"}},{"path":"/pages/app/distributionCenter/member","meta":{},"window":{"navigationBarTitleText":"分销中心-成员","navigationStyle":"custom","navigationBarTextStyle":"white"}},{"path":"/pages/app/commission/index","meta":{},"window":{"navigationBarTitleText":"分销中心","enablePullDownRefresh":true,"navigationStyle":"custom","navigationBarTextStyle":"white"}},{"path":"/pages/app/commission/team","meta":{},"window":{"navigationBarTitleText":"我的团队","navigationStyle":"custom","navigationBarTextStyle":"white"}},{"path":"/pages/app/commission/commission-log","meta":{},"window":{"navigationBarTitleText":"佣金明细","enablePullDownRefresh":true}},{"path":"/pages/app/commission/order","meta":{},"window":{"navigationBarTitleText":"分销订单","navigationStyle":"custom","navigationBarTextStyle":"white","enablePullDownRefresh":true}},{"path":"/pages/app/commission/goods","meta":{},"window":{"navigationBarTitleText":"推广商品"}},{"path":"/pages/app/commission/apply","meta":{},"window":{"navigationBarTitleText":"申请分销商","navigationStyle":"custom","navigationBarTextStyle":"white"}},{"path":"/pages/app/commission/rankings","meta":{},"window":{"navigationBarTitleText":"分销排行","navigationStyle":"custom","navigationBarTextStyle":"white"}},{"path":"/pages/app/commission/share-log","meta":{},"window":{"navigationBarTitleText":"分享记录","navigationStyle":"custom","navigationBarTextStyle":"white","enablePullDownRefresh":true}},{"path":"/pages/goods/list","meta":{},"window":{"navigationBarTitleText":"商品列表","navigationStyle":"custom"}},{"path":"/pages/goods/indexList","meta":{},"window":{"navigationBarTitleText":"商品列表","navigationStyle":"custom"}},{"path":"/pages/goods/detail","meta":{},"window":{"navigationBarTitleText":"商品详情","navigationStyle":"custom"}},{"path":"/pages/goods/comment/add-comment","meta":{},"window":{"navigationBarTitleText":"评价"}},{"path":"/pages/goods/comment/comment-list","meta":{},"window":{"navigationBarTitleText":"评价列表"}},{"path":"/pages/order/confirm","meta":{},"window":{"navigationBarTitleText":"确认订单"}},{"path":"/pages/order/payment/method","meta":{},"window":{"navigationBarTitleText":"收银台"}},{"path":"/pages/order/payment/result","meta":{},"window":{"navigationBarTitleText":"支付结果"}},{"path":"/pages/order/list","meta":{},"window":{"navigationBarTitleText":"订单列表"}},{"path":"/pages/order/detail","meta":{},"window":{"navigationBarTitleText":"订单详情"}},{"path":"/pages/order/after-sale/detail","meta":{},"window":{"navigationBarTitleText":"售后详情"}},{"path":"/pages/order/after-sale/list","meta":{},"window":{"navigationBarTitleText":"售后列表"}},{"path":"/pages/order/after-sale/log","meta":{},"window":{"navigationBarTitleText":"售后记录"}},{"path":"/pages/order/after-sale/refund","meta":{},"window":{"navigationBarTitleText":"申请售后"}},{"path":"/pages/order/express/distribution-detail","meta":{},"window":{"navigationBarTitleText":"配送详情"}},{"path":"/pages/order/express/express-detail","meta":{},"window":{"navigationBarTitleText":"物流详情"}},{"path":"/pages/order/express/express-list","meta":{},"window":{"navigationBarTitleText":"包裹列表"}},{"path":"/pages/order/express/store-address","meta":{},"window":{"navigationBarTitleText":"选择自提点","navigationStyle":"custom","navigationBarTextStyle":"white"}},{"path":"/pages/public/faq","meta":{},"window":{"navigationBarTitleText":"常见问题"}},{"path":"/pages/public/feedback","meta":{},"window":{"navigationBarTitleText":"问题反馈"}},{"path":"/pages/public/chat/index","meta":{},"window":{"navigationBarTitleText":"客服","navigationStyle":"custom","navigationBarTextStyle":"white"}},{"path":"/pages/public/search","meta":{},"window":{"navigationBarTitleText":"搜索"}},{"path":"/pages/public/richtext","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/public/webview","meta":{},"window":{"navigationBarTitleText":"","navigationStyle":"custom"}},{"path":"/pages/public/404","meta":{},"window":{"navigationBarTitleText":"页面不存在"}},{"path":"/pages/public/loading","meta":{},"window":{"navigationBarTitleText":"","navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/user/info","meta":{},"window":{"navigationBarTitleText":"个人信息"}},{"path":"/pages/user/set","meta":{},"window":{"navigationBarTitleText":"系统设置"}},{"path":"/pages/user/view-log","meta":{},"window":{"navigationBarTitleText":"浏览足迹"}},{"path":"/pages/user/wallet/index","meta":{},"window":{"navigationBarTitleText":"我的钱包"}},{"path":"/pages/user/wallet/withdraw","meta":{},"window":{"navigationBarTitleText":"","navigationStyle":"custom"}},{"path":"/pages/user/wallet/withdraw-log","meta":{},"window":{"navigationBarTitleText":"提现记录"}},{"path":"/pages/user/wallet/score-balance","meta":{},"window":{"navigationBarTitleText":"积分余额","navigationStyle":"custom"}},{"path":"/pages/user/address/list","meta":{},"window":{"navigationBarTitleText":"收货地址"}},{"path":"/pages/user/address/edit","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/user/favorite","meta":{},"window":{"navigationBarTitleText":"我的收藏"}},{"path":"/pages/user/personal/set","meta":{},"window":{"navigationBarTitleText":"个人中心-设置"}},{"path":"/pages/user/personal/edit","meta":{},"window":{"navigationBarTitleText":"个人中心-编辑"}},{"path":"/pages/user/personal/balance","meta":{},"window":{"navigationBarTitleText":"个人中心-余额","navigationStyle":"custom","navigationBarTextStyle":"white"}},{"path":"/pages/user/personal/integral","meta":{},"window":{"navigationBarTitleText":"个人中心-积分"}},{"path":"/pages/user/personal/certification","meta":{},"window":{"navigationBarTitleText":"个人中心-认证"}},{"path":"/pages/user/personal/material","meta":{},"window":{"navigationBarTitleText":"个人中心-资料"}},{"path":"/pages/user/personal/identify","meta":{"isNVue":true},"window":{"navigationBarTitleText":"个人中心-识别"}},{"path":"/pages/user/personal/drawingBoard","meta":{},"window":{"navigationBarTitleText":"个人中心-画板"}},{"path":"/pages/square/topic/index","meta":{},"window":{"navigationBarTitleText":"话题","navigationStyle":"custom","navigationBarTextStyle":"white"}},{"path":"/pages/square/topicAll/index","meta":{},"window":{"navigationBarTitleText":"话题首页"}},{"path":"/pages/square/release/index","meta":{},"window":{"navigationBarTitleText":"发布"}},{"path":"/pages/square/addTopic/index","meta":{},"window":{"navigationBarTitleText":"添加话题","navigationStyle":"custom"}},{"path":"/pages/square/addTopic/add","meta":{},"window":{"navigationBarTitleText":"创建话题"}},{"path":"/pages/square/addgoods/index","meta":{},"window":{"navigationBarTitleText":"添加商品"}},{"path":"/pages/square/homePage/index","meta":{},"window":{"navigationBarTitleText":"主页","navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/square/inform/index","meta":{},"window":{"navigationBarTitleText":"通知","enablePullDownRefresh":false}},{"path":"/pages/square/attention/index","meta":{},"window":{"navigationBarTitleText":"关注","navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/square/dynamic/index","meta":{},"window":{"navigationBarTitleText":"动态"}},{"path":"/pages/square/chat/index","meta":{},"window":{"navigationBarTitleText":"聊天室"}},{"path":"/pages/live/list","meta":{},"window":{"navigationBarTitleText":"直播列表","navigationStyle":"custom"}},{"path":"/pages/live/app","meta":{"isNVue":true},"window":{"navigationBarTitleText":"直播","navigationStyle":"custom"}},{"path":"/pages/live/apps","meta":{"isNVue":true},"window":{"navigationBarTitleText":"直播","navigationStyle":"custom"}},{"path":"/pages/live/wx","meta":{},"window":{"navigationBarTitleText":"直播","navigationStyle":"custom"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});