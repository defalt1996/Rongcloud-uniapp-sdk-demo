(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["pages/live/app-sub-service"],{1579:function(t,s){t.exports="/pages/live/static/cancelWhite.png"},"1bfe":function(t,s,i){"use strict";i.r(s);var e=i("fe54"),a=i.n(e);for(var c in e)"default"!==c&&function(t){i.d(s,t,(function(){return e[t]}))}(c);s["default"]=a.a},"243a":function(t,s){t.exports="/pages/live/static/box.png"},2700:function(t,s,i){"use strict";i.d(s,"b",(function(){return a})),i.d(s,"c",(function(){return c})),i.d(s,"a",(function(){return e}));var e={uIcon:i("5260").default,uMask:i("2257").default},a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",[e("view",{staticClass:t._$s(1,"sc","navigations"),style:t._$s(1,"s",{paddingTop:t.top+"px"}),attrs:{_i:1}},[e("view",{staticClass:t._$s(2,"sc","navigation"),style:t._$s(2,"s",{height:t.height+"px"}),attrs:{_i:2}},[e("u-icon",{staticClass:t._$s(3,"sc","arrow"),attrs:{name:"arrow-left",size:"44",color:"#000000",_i:3},on:{click:t.back}}),e("view",{staticClass:t._$s(4,"sc","title flexAlignCenter"),attrs:{_i:4}},[e("view",{staticClass:t._$s(5,"sc","tab"),class:t._$s(5,"c",1==t.tab?"tabAct":""),attrs:{_i:5},on:{click:function(s){t.tab=1}}}),e("view",{staticClass:t._$s(6,"sc","tab"),class:t._$s(6,"c",2==t.tab?"tabAct":""),attrs:{_i:6},on:{click:function(s){t.tab=2}}})])],1),e("view",{staticClass:t._$s(7,"sc","search flexAlignCenter"),attrs:{_i:7}},[e("u-icon",{attrs:{name:"search",size:"36",_i:8}}),e("input",{staticClass:t._$s(9,"sc","input flex1"),attrs:{_i:9}})],1)]),e("view",{staticClass:t._$s(10,"sc","list"),attrs:{_i:10}},t._l(t._$s(11,"f",{forItems:t.list}),(function(s,i,a,c){return e("view",{key:t._$s(11,"f",{forIndex:a,key:i}),staticClass:t._$s("11-"+c,"sc","col"),attrs:{_i:"11-"+c}},[e("liveItem",{attrs:{item:s,_i:"12-"+c},on:{submit:function(i){return t.submit(s)}}})],1)})),0),e("u-mask",{attrs:{show:t.show,_i:13},on:{click:t.cancel}},[e("view",{staticClass:t._$s(14,"sc","content"),attrs:{_i:14},on:{click:function(t){t.stopPropagation()}}},[e("image",{staticClass:t._$s(15,"sc","img"),attrs:{src:t._$s(15,"a-src",i("964b")),_i:15}}),e("view",{staticClass:t._$s(16,"sc","text"),attrs:{_i:16}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],staticClass:t._$s(17,"sc","input"),attrs:{_i:17},domProps:{value:t._$s(17,"v-model",t.pwd)},on:{input:function(s){s.target.composing||(t.pwd=s.target.value)}}}),e("view",{staticClass:t._$s(18,"sc","submit"),attrs:{_i:18},on:{click:t.toPage}})])])],1)},c=[]},"28eb":function(t,s){t.exports="/pages/live/static/cancel.png"},35244:function(t,s){t.exports="/pages/live/static/report.png"},"3a22":function(t,s,i){"use strict";var e;i.d(s,"b",(function(){return a})),i.d(s,"c",(function(){return c})),i.d(s,"a",(function(){return e}));var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",[e("video",{style:t._$s(1,"s",{height:t.height+"px",width:t.width+"px"}),attrs:{src:t._$s(1,"a-src",t.videoSrc),_i:1}},[e("cover-view",{style:t._$s(2,"s",{width:t.width+"px",height:t.height+"px"}),attrs:{_i:2}},[e("view",{staticClass:t._$s(3,"sc","header flexAlignCenter"),style:t._$s(3,"s",{paddingTop:t.top+"px"}),attrs:{_i:3}},[e("view",{staticClass:t._$s(4,"sc","attention flexAlignCenter"),attrs:{_i:4}},[e("image",{staticClass:t._$s(5,"sc","attentionAvatar"),attrs:{src:t._$s(5,"a-src",t.icon),_i:5}}),e("view",{staticClass:t._$s(6,"sc","attentionInfo flex1"),attrs:{_i:6}},[e("text",{staticClass:t._$s(7,"sc","attentionName"),attrs:{_i:7}},[t._v(t._$s(7,"t0-0",t._s(t.name)))]),e("text",{staticClass:t._$s(8,"sc","attentionCount"),attrs:{_i:8}})]),e("view",{staticClass:t._$s(9,"sc","attentionText"),attrs:{_i:9}},[e("text",{staticClass:t._$s(10,"sc","attentionText"),attrs:{_i:10}})])]),e("view",{staticClass:t._$s(11,"sc","attentionClose"),attrs:{_i:11},on:{click:t.close}},[e("image",{staticClass:t._$s(12,"sc","attentionClose"),attrs:{src:t._$s(12,"a-src",i("1579")),_i:12}})])]),e("view",{staticClass:t._$s(13,"sc","footer flexAlignFlexEnd"),style:t._$s(13,"s",{width:t.width+"px"}),attrs:{_i:13}},[e("input",{staticClass:t._$s(14,"sc","footerInput"),attrs:{_i:14}}),e("view",{staticClass:t._$s(15,"sc","footershopping flexAlignCenter"),attrs:{_i:15},on:{click:function(s){t.goodsAct=!0}}},[e("image",{staticClass:t._$s(16,"sc","shoppingImg"),attrs:{src:t._$s(16,"a-src",i("586b")),_i:16}}),e("text",{staticClass:t._$s(17,"sc","shoppingCount"),attrs:{_i:17}})]),e("view",{staticClass:t._$s(18,"sc","footerMore flexAlignFlexEnd"),attrs:{_i:18}},[e("view",{staticClass:t._$s(19,"sc","moreBox"),class:t._$s(19,"c",{moreBoxAct:t.moreShow}),attrs:{_i:19}},[e("view",{staticClass:t._$s(20,"sc","shareBox"),attrs:{_i:20}},[e("image",{staticClass:t._$s(21,"sc","shareImg"),attrs:{src:t._$s(21,"a-src",i("abcb")),_i:21}}),e("text",{staticClass:t._$s(22,"sc","shareText"),attrs:{_i:22}})]),e("view",{staticClass:t._$s(23,"sc","reportBox"),attrs:{_i:23},on:{click:t.onClickPlayLogin}},[e("image",{staticClass:t._$s(24,"sc","reportImg"),attrs:{src:t._$s(24,"a-src",i("35244")),_i:24}}),e("text",{staticClass:t._$s(25,"sc","reportText"),attrs:{_i:25}})])]),e("view",{staticClass:t._$s(26,"sc","moreBt flexAlignCenter"),attrs:{_i:26},on:{click:function(s){t.moreShow=!t.moreShow}}},[t._$s(27,"i",!t.moreShow)?e("image",{staticClass:t._$s(27,"sc","moreImg"),attrs:{src:t._$s(27,"a-src",i("d30c")),_i:27}}):e("image",{staticClass:t._$s(28,"sc","cancelImg"),attrs:{src:t._$s(28,"a-src",i("4ed1")),_i:28}})])]),e("view",{staticClass:t._$s(29,"sc","footerLike flexAlignFlexEnd"),attrs:{_i:29},on:{click:t.enterRoom}},[e("image",{staticClass:t._$s(30,"sc","likeImg"),attrs:{src:t._$s(30,"a-src",i("8834")),_i:30}}),e("text",{staticClass:t._$s(31,"sc","likeCount"),attrs:{_i:31}})])]),e("view",{staticClass:t._$s(32,"sc","fukubukuro"),attrs:{_i:32},on:{click:t.onFukubukuro}},[e("image",{staticClass:t._$s(33,"sc","fukubukuroImage"),attrs:{src:t._$s(33,"a-src",i("abb0")),_i:33}}),e("text",{staticClass:t._$s(34,"sc","fukubukuroText"),attrs:{_i:34}})]),t._$s(35,"i",t.maskAct)?e("view",{staticClass:t._$s(35,"sc","mask flexAlignCenter"),style:t._$s(35,"s",{width:t.width+"px",height:t.height+"px"}),attrs:{_i:35},on:{click:function(s){t.maskAct=!1}}},[t._$s(36,"i","integral"==t.winningType)?e("view",{staticClass:t._$s(36,"sc","integralWinning"),attrs:{_i:36},on:{click:t.submit}},[e("view",{staticClass:t._$s(37,"sc","integralContent"),attrs:{_i:37}},[e("view",{staticClass:t._$s(38,"sc","integralTexts"),attrs:{_i:38}},[e("text",{staticClass:t._$s(39,"sc","integralText"),attrs:{_i:39}}),e("text",{staticClass:t._$s(40,"sc","integralText"),attrs:{_i:40}})]),e("text",{staticClass:t._$s(41,"sc","integralBt"),attrs:{_i:41},on:{click:function(s){return s.stopPropagation(),t.confirm(s)}}})]),e("image",{staticClass:t._$s(42,"sc","integralImg"),attrs:{src:t._$s(42,"a-src",i("243a")),_i:42}})]):t._e(),t._$s(43,"i","goods"==t.winningType)?e("view",{staticClass:t._$s(43,"sc","goodsWinning"),attrs:{_i:43},on:{click:t.submit}},[e("view",{staticClass:t._$s(44,"sc","goodsContent"),attrs:{_i:44}},[e("view",{staticClass:t._$s(45,"sc","goodsTexts"),attrs:{_i:45}},[e("text",{staticClass:t._$s(46,"sc","goodsText"),attrs:{_i:46}}),e("text",{staticClass:t._$s(47,"sc","goodsText"),attrs:{_i:47}}),e("text",{staticClass:t._$s(48,"sc","goodsPrompt"),attrs:{_i:48}})]),e("text",{staticClass:t._$s(49,"sc","goodsBt"),attrs:{_i:49},on:{click:function(s){return s.stopPropagation(),t.service(s)}}})]),e("view",{staticClass:t._$s(50,"sc","goodsImgs"),attrs:{_i:50}},[e("image",{staticClass:t._$s(51,"sc","goodsImg"),attrs:{src:t._$s(51,"a-src",t.icon),_i:51}})])]):t._e(),t._$s(52,"i","leave"==t.winningType)?e("view",{staticClass:t._$s(52,"sc","leaveBox"),attrs:{_i:52},on:{click:t.submit}},[e("image",{staticClass:t._$s(53,"sc","leaveImg"),attrs:{_i:53}}),e("view",{staticClass:t._$s(54,"sc","leaveTimes flexAlignCenter"),attrs:{_i:54}},[e("text",{staticClass:t._$s(55,"sc","leaveTime"),attrs:{_i:55}}),e("text",{staticClass:t._$s(56,"sc","leaveTimeText"),attrs:{_i:56}}),e("text",{staticClass:t._$s(57,"sc","leaveTime"),attrs:{_i:57}}),e("text",{staticClass:t._$s(58,"sc","leaveTimeText"),attrs:{_i:58}})]),e("view",{staticClass:t._$s(59,"sc","leaveLottery flexAlignCenter"),attrs:{_i:59}},[e("view",{staticClass:t._$s(60,"sc","leaveHr"),attrs:{_i:60}}),e("text",{staticClass:t._$s(61,"sc","leaveLotteryText"),attrs:{_i:61}}),e("view",{staticClass:t._$s(62,"sc","leaveHr"),attrs:{_i:62}})]),e("text",{staticClass:t._$s(63,"sc","leaveContent"),attrs:{_i:63}}),e("view",{staticClass:t._$s(64,"sc","leaveOption flexAlignCenter"),attrs:{_i:64}},[e("text",{staticClass:t._$s(65,"sc","leaveCancel"),attrs:{_i:65},on:{click:function(s){t.maskAct=!1}}}),e("text",{staticClass:t._$s(66,"sc","leaveConfirm"),attrs:{_i:66},on:{click:t.onLeave}})])]):t._e(),t._$s(67,"i","losingLottery"==t.winningType)?e("view",{staticClass:t._$s(67,"sc","flexAlignCenter losingLottery"),attrs:{_i:67},on:{click:t.submit}},[e("text",{staticClass:t._$s(68,"sc","sorry"),attrs:{_i:68}}),e("text",{staticClass:t._$s(69,"sc","promptText"),attrs:{_i:69}}),e("image",{staticClass:t._$s(70,"sc","losingLotteryImg"),attrs:{_i:70}}),e("text",{staticClass:t._$s(71,"sc","understand"),attrs:{_i:71}})]):t._e(),t._$s(72,"i","jackpot"==t.winningType)?e("view",{staticClass:t._$s(72,"sc","flexAlignCenter jackpot"),attrs:{_i:72},on:{click:t.submit}}):t._e()]):t._e(),e("list",{staticClass:t._$s(73,"sc","commentsBox"),style:t._$s(73,"s",{height:t.height/3+"px"}),attrs:{"show-scrollbar":"false",_i:73}},t._l(t._$s(74,"f",{forItems:t.commentsList}),(function(s,i,a,c){return e("cell",{key:t._$s(74,"f",{forIndex:a,key:i}),attrs:{_i:"74-"+c}},[e("view",{staticClass:t._$s("75-"+c,"sc","commentsMsg"),attrs:{_i:"75-"+c}},[t._$s("76-"+c,"i",3!=i)?e("text",{staticClass:t._$s("76-"+c,"sc","commentsContent"),attrs:{_i:"76-"+c}},[t._v(t._$s("76-"+c,"t0-0",t._s(s)))]):t._e(),t._$s("77-"+c,"i",3==i)?e("text",{staticClass:t._$s("77-"+c,"sc","commentsContent iconfont"),class:t._$s("77-"+c,"c",{commentsContentAt:3==i}),attrs:{_i:"77-"+c}},[t._v(t._$s("77-"+c,"t0-0",t._s(s)))]):t._e()])])})),1),e("view",{staticClass:t._$s(78,"sc","shopping"),class:t._$s(78,"c",{shoppingAct:t.goodsAct}),attrs:{_i:78}},[e("view",{staticClass:t._$s(79,"sc","top"),attrs:{_i:79}},[e("view",{staticClass:t._$s(80,"sc","topCancel flexAlignCenter"),attrs:{_i:80},on:{click:function(s){t.goodsAct=!1}}},[e("image",{staticClass:t._$s(81,"sc","topCancelImg"),attrs:{src:t._$s(81,"a-src",i("28eb")),_i:81}})]),e("text",{staticClass:t._$s(82,"sc","topText"),attrs:{_i:82}})]),e("list",{staticClass:t._$s(83,"sc","list"),attrs:{_i:83}},t._l(6,(function(s,i,a,c){return e("cell",{key:i,attrs:{_i:"84-"+c}},[e("view",{staticClass:t._$s("85-"+c,"sc","row flexAlignCenter"),attrs:{_i:"85-"+c}},[e("image",{staticClass:t._$s("86-"+c,"sc","goodsCover"),attrs:{src:t._$s("86-"+c,"a-src",t.icon),_i:"86-"+c}}),e("view",{staticClass:t._$s("87-"+c,"sc","goodsDetail flex1"),attrs:{_i:"87-"+c}},[e("text",{staticClass:t._$s("88-"+c,"sc","goodsTitle"),attrs:{_i:"88-"+c}}),e("view",{staticClass:t._$s("89-"+c,"sc","flexAlignCenter"),attrs:{_i:"89-"+c}},[e("text",{staticClass:t._$s("90-"+c,"sc","label"),attrs:{_i:"90-"+c}}),e("text",{staticClass:t._$s("91-"+c,"sc","label"),attrs:{_i:"91-"+c}})]),e("view",{staticClass:t._$s("92-"+c,"sc","goodsPrice flexAlignCenter"),attrs:{_i:"92-"+c}},[e("view",{staticClass:t._$s("93-"+c,"sc","flexAlignFlexEnd"),attrs:{_i:"93-"+c}},[e("text",{staticClass:t._$s("94-"+c,"sc","priceSymbol"),attrs:{_i:"94-"+c}}),e("text",{staticClass:t._$s("95-"+c,"sc","priceText"),attrs:{_i:"95-"+c}})]),e("text",{staticClass:t._$s("96-"+c,"sc","goodsOption"),attrs:{_i:"96-"+c}})])])])])})),1)],1)],1)])])},c=[]},"3d998":function(t,s,i){"use strict";i.r(s);var e=i("2700"),a=i("7f1a");for(var c in a)"default"!==c&&function(t){i.d(s,t,(function(){return a[t]}))}(c);var n,o=i("f0c5"),r=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],n);s["default"]=r.exports},"4ed1":function(t,s){t.exports="/pages/live/static/cancel1.png"},"586b":function(t,s){t.exports="/pages/live/static/shopping.png"},"7f1a":function(t,s,i){"use strict";i.r(s);var e=i("92c9"),a=i.n(e);for(var c in e)"default"!==c&&function(t){i.d(s,t,(function(){return e[t]}))}(c);s["default"]=a.a},8834:function(t,s){t.exports="/pages/live/static/like.png"},"92c9":function(t,s,i){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e=a(i("3cd7"));function a(t){return t&&t.__esModule?t:{default:t}}var c={components:{liveItem:e.default},data:function(){return{tab:1,left:7,top:null,height:44,show:!1,list:[{anchor_id:2,head_img:"https://up.enterdesk.com/edpic/c3/5e/49/c35e495d4fafdeaaefcdf0a56d076dd3.jpg",heat:98,id:5,image:"https://www.lmtw.com/d/file/sm/dongtai/20200210/1eaac60163d902ed2a45b7325b0d7b64.jpg",introduction:"\u75ab\u60c5\u4e2d\u513f\u7ae5\u6709\u8fd9\u4e9b\u75c7\u72b6\u9700\u8981\u53bb\u533b\u9662\u5c31\u533b",is_open:"1",is_pwd:"2",live_title:"\u6d4b\u8bd5\u76f4\u64ad\u540d\u79f0",nickname:"\u9a6c\u5927\u592b",online_users:1778,open_time:1631870381,zan:0},{anchor_id:2,head_img:"https://up.enterdesk.com/edpic/c3/5e/49/c35e495d4fafdeaaefcdf0a56d076dd3.jpg",heat:845,id:5,image:"https://www.lmtw.com/d/file/sm/dongtai/20200210/5989228bc5832afcedf16c58d3151074.jpg",introduction:"\u9762\u5bf9\u75ab\u60c5\uff0c\u513f\u7ae5\u5982\u4f55\u9884\u9632\u7ed3\u819c\u4f20\u64ad",is_open:"1",is_pwd:"2",live_title:"\u6d4b\u8bd5\u76f4\u64ad\u540d\u79f0",nickname:"\u4e8e\u521a",online_users:1678,open_time:1631870381,zan:0},{anchor_id:2,head_img:"https://up.enterdesk.com/edpic/c3/5e/49/c35e495d4fafdeaaefcdf0a56d076dd3.jpg",heat:534,id:5,image:"http://www.xfrb.com.cn/uploads/upfiles/101225/image/20200415/1586914566146641.jpg",introduction:"\u80ba\u764c\u5916\u79d1\u624b\u672f\u65b0\u8fdb\u5c55",is_open:"1",is_pwd:"2",live_title:"\u6d4b\u8bd5\u76f4\u64ad\u540d\u79f0",nickname:"\u4f55\u5efa\u884c",online_users:1645,open_time:1631870381,zan:0},{anchor_id:2,head_img:"https://up.enterdesk.com/edpic/c3/5e/49/c35e495d4fafdeaaefcdf0a56d076dd3.jpg",heat:982,id:5,image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0822%252F26a63ca9j00qy8ofv0038d000ku00zqp.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635388048&t=0ff0f3eabebc7ff95ae423b93a8c74ac",introduction:"\u548c\u5927\u5496\u4e00\u8d77\u8c08\u8c08\u5fc3",is_open:"1",is_pwd:"2",live_title:"\u6d4b\u8bd5\u76f4\u64ad\u540d\u79f0",nickname:"\u4f55\u5954",online_users:1324,open_time:1631870381,zan:0}],keyword:"",obj:{},pwd:""}},onLoad:function(){this.top=getApp().globalData.height||uni.getStorageSync("height")||0},onShow:function(){},methods:{back:function(){uni.navigateBack()},submit:function(t){this.obj=t,1==t.is_pwd?this.show=!0:this.getDetails()},getDetails:function(){var s=this;this.$api("live.liveDetail",{live_id:this.obj.id,pwd:this.pwd||""}).then((function(i){if(t("log",i," at pages/live/list.vue:136"),1==i.code){var e=i.data;e.info=s.obj,s.cancel(),s.$toPage("/pages/live/apps"),uni.setStorageSync("currentId",s.obj.id),uni.setStorageSync("LIVE".concat(s.obj.id),e)}}))},cancel:function(){this.show=!1},toPage:function(){this.getDetails()},getLiveList:function(){var t=this;this.$api("live.getLiveList",{is_gc:this.tab-1,keyword:this.keyword}).then((function(s){t.list=s.data}))}}};s.default=c}).call(this,i("0de9")["default"])},"964b":function(t,s){t.exports="/pages/live/static/password.png"},abb0:function(t,s){t.exports="/pages/live/static/fukubukuro.png"},abcb:function(t,s){t.exports="/pages/live/static/share.png"},d30c:function(t,s){t.exports="/pages/live/static/more.png"},f749:function(t,s,i){"use strict";i.r(s);var e=i("3a22"),a=i("1bfe");for(var c in a)"default"!==c&&function(t){i.d(s,t,(function(){return a[t]}))}(c);var n,o=i("f0c5"),r=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,"59145737",null,!1,e["a"],n);s["default"]=r.exports},fe54:function(t,s,i){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i=weex.requireModule("dom"),e={components:{},data:function(){return{top:null,height:null,width:null,goodsAct:!1,moreShow:!1,maskAct:!1,winningType:"jackpot",icon:"https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/8d5494eef01f3a29a09ee8119825bc315d607c9e.jpg",videoSrc:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4",name:"\u8d75\u4e09123",commentsList:["\u5f20\u4e09\u4e09\uff1a2\u53f7\u4ec0\u4e48\u4f18\u60e0","\u674e\u56db\uff1a\u53ef\u4ee5\u770b\u4e00\u4e0b3\u53f7\u5417\uff1f","\u6e05\u98ce\u98ce\uff1a\u53ef\u4ee5\u770b\u4e00\u4e0b3\u53f7\u5417\uff1f","\u6e05\u98ce\u98ce\uff1a\u53ef\u4ee5\u770b\u4e00\u4e0b3\u53f7\u5417\uff1f","\u6e05\u98ce\u98ce\uff1a\u53ef\u4ee5\u770b\u4e00\u4e0b3\u53f7\u5417\uff1f","\u6e05\u98ce\u98ce\uff1a\u53ef\u4ee5\u770b\u4e00\u4e0b3\u53f7\u5417\uff1f","\u6e05\u98ce\u98ce\uff1a\u53ef\u4ee5\u770b\u4e00\u4e0b3\u53f7\u5417\uff1f\u6e05\u98ce\u98ce\uff1a\u53ef\u4ee5\u770b\u4e00\u4e0b3\u53f7\u5417\uff1f\u6e05\u98ce\u98ce\uff1a\u53ef\u4ee5\u770b\u4e00\u4e0b3\u53f7\u5417\uff1f","\u6e05\u98ce\u98ce\uff1a\u53ef\u4ee5\u770b\u4e00\u4e0b3\u53f7\u5417\uff1f","\u6e05\u98ce\u98ce\uff1a\u53ef\u4ee5\u770b\u4e00\u4e0b3\u53f7\u5417\uff1f","\u6e05\u98ce\u98ce\uff1a\u53ef\u4ee5\u770b\u4e00\u4e0b3\u53f7\u5417\uff1f"]}},created:function(){this.height=uni.getSystemInfoSync().screenHeight,this.width=uni.getSystemInfoSync().screenWidth,this.top=uni.getSystemInfoSync().statusBarHeight+11},mounted:function(){},onReady:function(){},methods:{onFukubukuro:function(){this.maskAct=!0},click:function(){t("log","click"," at pages/live/wx.vue:201")},confirm:function(t){t.stopPropagation(),this.maskAct=!1},service:function(t){t.stopPropagation(),this.maskAct=!1},submit:function(t){t.stopPropagation()},close:function(){this.maskAct=!0,this.winningType="leave"},onLeave:function(){var s=getCurrentPages();t("log",s.length," at pages/live/wx.vue:235"),1==s.length?uni.switchTab({url:"/pages/index/index"}):uni.navigateBack()},add:function(t,s){return 3==s?"&#xe600;"+t:t}},beforeCreate:function(){i.addRule("fontFace",{fontFamily:"iconfont",src:"url('./static/font.ttf')"})}};s.default=e}).call(this,i("0de9")["default"])}}]);