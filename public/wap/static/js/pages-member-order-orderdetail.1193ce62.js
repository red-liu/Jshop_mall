(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-order-orderdetail"],{"0a29":function(t,e,i){"use strict";var s=i("4679"),a=i.n(s);a.a},"1e81":function(t,e,i){"use strict";i("4160"),i("b64b"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i("de6c"),a={mixins:[s.orders,s.goods,s.tools],data:function(){return{orderId:0,orderInfo:{},teamInfo:[],lading:{status:!1,code:""}}},onLoad:function(t){this.orderId=t.order_id,this.orderId||this.$common.errorToShow("",(function(){uni.navigateBack({delta:1})}))},onShow:function(){this.orderDetail()},computed:{isDelivery:function(){return!!(this.orderInfo&&this.orderInfo.delivery&&Object.keys(this.orderInfo.delivery).length)}},methods:{orderDetail:function(){var t=this,e={order_id:t.orderId};t.$api.orderDetail(e,(function(e){if(e.status){var i=e.data;switch(i.status){case 1:1===i.pay_status?t.$set(i,"status_name","待付款"):i.pay_status>=2&&1===i.ship_status?t.$set(i,"status_name","待发货"):i.pay_status>=2&&2===i.ship_status?t.$set(i,"status_name","部分发货"):i.pay_status>=2&&i.ship_status>=3&&1===i.confirm?t.$set(i,"status_name","已发货"):i.pay_status>=2&&i.ship_status>=3&&i.confirm>=2&&1===i.is_comment?t.$set(i,"status_name","待评价"):i.pay_status>=2&&i.ship_status>=3&&i.confirm>=2&&i.is_comment>=2&&t.$set(i,"status_name","已评价");break;case 2:t.$set(i,"status_name",i.text_status);break;case 3:t.$set(i,"status_name",i.text_status);break}for(var s in i.ctime=t.$common.timeToDate(i.ctime),null!==i.payment_time&&(i.payment_time=t.$common.timeToDate(i.payment_time)),i.items)i.items[s].promotion_list=JSON.parse(i.items[s].promotion_list);t.orderInfo=i,t.orderInfo.delivery.forEach((function(e){e.ctime=t.$common.timeToDate(e.ctime)})),2==i.order_type&&t.getTeam(i.order_id),i.ladingItem[0]&&(t.lading={status:!0,code:i.ladingItem[0].id})}else t.$common.errorToShow(e.msg)}))},cancelOrder:function(t){var e=this;this.$common.modelShow("提示","确认要取消订单吗?",(function(){var i={order_ids:t};e.$api.cancelOrder(i,(function(t){t.status?e.$common.successToShow(t.msg,(function(){e.orderDetail()})):e.$common.errorToShow(t.msg)}))}))},tackDeliery:function(t){var e=this;this.$common.modelShow("提示","确认收货操作吗?",(function(){var i={order_id:t};e.$api.confirmOrder(i,(function(t){t.status?e.$common.successToShow("确认收货成功",(function(){var t=getCurrentPages(),i=t[t.length-2];void 0!==i&&"pages/member/order/orderlist"===i.route&&(i.isReload=!0),e.orderDetail()})):e.$common.errorToShow(t.msg)}))}))},customerService:function(t){this.$common.navigateTo("../after_sale/index?order_id="+t)},logistics:function(t){var e=this.orderInfo.ship_area_name?this.orderInfo.ship_area_name:"",i=this.orderInfo.ship_address?this.orderInfo.ship_address:"",s=e+i;this.showExpress(this.orderInfo.delivery[t].logi_code,this.orderInfo.delivery[t].logi_no,s)},showCustomerService:function(t){1==t.aftersalesItem.length?this.$common.navigateTo("../after_sale/detail?aftersales_id="+t.bill_aftersales_id):t.aftersalesItem.length>1&&this.$common.navigateTo("../after_sale/list?order_id="+t.order_id)},goInvition:function(){uni.navigateTo({url:"./invitation_group?order_id="+this.orderInfo.order_id+"&close_time="+this.teamInfo.close_time})},getTeam:function(t){var e=this;this.$api.getOrderPintuanTeamInfo({order_id:t},(function(t){t.status?e.teamInfo={list:t.data.teams,current_count:t.data.teams.length,people_number:t.data.people_number,team_nums:t.data.team_nums,close_time:t.data.close_time,id:t.data.id,team_id:t.data.team_id,rule_id:t.data.rule_id,status:t.data.status}:e.$common.errorToShow(t.msg)}))},goTaxList:function(){this.orderInfo&&this.orderInfo.invoice&&this.orderInfo.invoice.id&&uni.navigateTo({url:"/pages/member/invoice/index?id="+this.orderInfo.invoice.id})}}};e.default=a},"34be":function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,".cell-group[data-v-72260bef]{margin-bottom:%?20?%}.cell-bd-view[data-v-72260bef]{margin-bottom:%?8?%}.cell-bd-view .cell-bd-text[data-v-72260bef]{font-size:%?22?%;color:#999}.black-text .cell-bd-text[data-v-72260bef]{font-size:%?28?%;color:#333}.button-bottom[data-v-72260bef]{padding:%?15?% %?26?%;text-align:right;display:block}.button-bottom .btn[data-v-72260bef]{margin-left:%?20?%}.order-price[data-v-72260bef]{padding:%?10?% 0 %?20?%}.order-price .cell-item[data-v-72260bef]{border-bottom:none;padding-bottom:0;padding-top:0;min-height:%?40?%}.order-price .cell-bd-view[data-v-72260bef]{margin-bottom:0}.order-offer .cell-item-hd[data-v-72260bef]{vertical-align:top;padding-top:%?8?%}.order-offer .cell-item-bd[data-v-72260bef]{padding:0}.order-promotion[data-v-72260bef]{font-size:%?24?%;color:#fff;background-color:#ff7159;margin:0 0 %?4?% %?6?%;padding:%?2?% %?10?%;display:inline-block;float:right}.user-head-img-c[data-v-72260bef]{position:relative;width:%?80?%;height:%?80?%;border-radius:50%;margin-right:%?20?%;box-sizing:border-box;display:inline-block;float:left;border:1px solid #f3f3f3;margin-bottom:%?20?%}.user-head-img-tip[data-v-72260bef]{position:absolute;top:%?-6?%;left:%?-10?%;display:inline-block;background-color:#ff7159;color:#fff;font-size:%?22?%;z-index:99;padding:0 %?10?%;border-radius:%?10?%;-webkit-transform:scale(.8);transform:scale(.8)}.group-swiper .cell-item .user-head-img[data-v-72260bef]{width:100%;height:100%;border-radius:50%}.group-swiper .cell-item .user-head-img-c[data-v-72260bef]:first-child{border:1px solid #ff7159}.uhihn[data-v-72260bef]{width:%?80?%;height:%?80?%;border-radius:50%;margin-right:%?20?%;display:inline-block;border:%?2?% dashed #e1e1e1;text-align:center;line-height:%?80?%;color:#d1d1d1;font-size:%?40?%;box-sizing:border-box}.group-swiper .cell-item .cell-item-ft .btn[data-v-72260bef]{font-size:%?26?%;color:#fff;background-color:#ff7159;\n\t/* padding: 0; */text-align:center}.add-title-item .cell-item-hd[data-v-72260bef]{min-width:20px;color:#666;font-size:14px}.add-title-item .cell-item-bd[data-v-72260bef]{margin-left:0}.delivery[data-v-72260bef]{border-bottom:1px solid #f3f3f3}.th .cell-item-bd[data-v-72260bef]{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:%?20?%;padding-right:0}",""]),t.exports=e},4679:function(t,e,i){var s=i("34be");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("76f13b81",s,!0,{sourceMap:!1,shadowMode:!1})},"6d1c":function(t,e,i){"use strict";i.r(e);var s=i("1e81"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);e["default"]=a.a},"91e4":function(t,e,i){"use strict";i.r(e);var s=i("9421"),a=i("6d1c");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("0a29");var o,l=i("f0c5"),r=Object(l["a"])(a["default"],s["b"],s["c"],!1,null,"72260bef",null,!1,s["a"],o);e["default"]=r.exports},9421:function(t,e,i){"use strict";var s,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"content-top"},[i("v-uni-view",{staticClass:"cell-group margin-cell-group"},[i("v-uni-view",{staticClass:"cell-item add-title-item"},[i("v-uni-view",{staticClass:"cell-item-bd cell-item-bd-block"},[i("v-uni-view",{staticClass:"cell-bd-view black-text"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v(t._s(t.orderInfo.status_name||""))])],1),i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v("订单号："+t._s(t.orderInfo.order_id||""))]),i("v-uni-button",{staticClass:"btn btn-g btn-small",attrs:{"hover-class":"btn-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyData(t.orderInfo.order_id)}}},[t._v("复制")])],1),i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v("下单时间："+t._s(t.orderInfo.ctime||""))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"cell-group margin-cell-group"},[t.isDelivery?i("v-uni-view",{staticClass:"delivery"},[i("v-uni-view",{staticClass:"cell-item",staticStyle:{border:"none","min-height":"60rpx",padding:"20rpx 26rpx 0 0"}},[i("v-uni-view",{staticClass:"cell-bd-view black-text"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v("已发货，请注意查收")])],1)],1),t._l(t.orderInfo.delivery,(function(e,s){return i("v-uni-view",{key:s,staticClass:"cell-item add-title-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.logistics(s)}}},[i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v(t._s(e.logi_name||"")+" : "+t._s(e.logi_no||""))])],1),i("v-uni-view",{staticClass:"cell-bd-view",staticStyle:{"margin-left":"20rpx"}},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v(t._s(e.ctime||""))])],1)],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1)}))],2):t._e(),t.orderInfo.store?t._e():i("v-uni-view",{staticClass:"cell-item add-title-item"},[i("v-uni-view",{staticClass:"cell-item-bd cell-item-bd-block"},[i("v-uni-view",{staticClass:"cell-bd-view black-text"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v("收件人："+t._s(t.orderInfo.ship_name||""))])],1),i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v(t._s(t.orderInfo.ship_area_name||"")+" "+t._s(t.orderInfo.ship_address||""))])],1)],1)],1)],1),t.orderInfo.store?i("v-uni-view",{staticClass:"cell-group margin-cell-group"},[i("v-uni-view",{staticClass:"cell-item add-title-item th"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-image",{staticClass:"cell-hd-icon",attrs:{src:"/static/image/homepage.png"}})],1),i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-view",{staticClass:"cell-bd-view black-text"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v(t._s(t.orderInfo.store.store_name||""))])],1),i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v("门店电话："+t._s(t.orderInfo.store.mobile||""))])],1),i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v("门店地址："+t._s(t.orderInfo.store.all_address||""))])],1),i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v("提货人信息："+t._s(t.orderInfo.ship_name||""))]),i("v-uni-text",{staticClass:"cell-bd-text",staticStyle:{"margin-left":"10rpx"}},[t._v(t._s(t.orderInfo.ship_mobile||""))])],1),t.lading.status?i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v("提货码："),i("v-uni-text",{staticClass:"red-price"},[t._v(t._s(t.lading.code||""))])],1)],1):t._e()],1)],1)],1):t._e(),2==t.orderInfo.order_type&&3!=t.orderInfo.status&&1!=t.orderInfo.pay_status?i("v-uni-view",{staticClass:"cell-group margin-cell-group"},[i("v-uni-view",{staticClass:"cell-item right-img"},[i("v-uni-view",{staticClass:"cell-item-hd"},[1==t.teamInfo.status?i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("待拼团，还差"+t._s(t.teamInfo.team_nums||"")+"人")]):2==t.teamInfo.status?i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("拼团成功")]):3==t.teamInfo.status?i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("拼团失败，拼团已结束")]):t._e()],1)],1),i("v-uni-view",{staticClass:"group-swiper"},[t.teamInfo.current_count?i("v-uni-view",{staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd",staticStyle:{"flex-wrap":"wrap"}},[t._l(t.teamInfo.list,(function(e,s){return i("v-uni-view",{key:s,staticClass:"user-head-img-c"},[e.id==e.team_id?i("v-uni-view",{staticClass:"user-head-img-tip"},[t._v("拼主")]):t._e(),i("v-uni-image",{staticClass:"user-head-img cell-hd-icon have-none",attrs:{src:e.user_avatar,mode:""}})],1)})),t.teamInfo.team_nums>3?i("v-uni-view",[t._l(3,(function(e){return i("v-uni-view",{key:e,staticClass:"uhihn"},[t._v("?")])})),i("v-uni-view",{staticClass:"uhihn"},[t._v("···")])],2):i("v-uni-view",t._l(t.teamInfo.team_nums,(function(e){return i("v-uni-view",{key:e,staticClass:"uhihn"},[t._v("?")])})),1)],2),1==t.teamInfo.status?i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-button",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goInvition()}}},[t._v("邀请拼单")])],1):t._e()],1):t._e()],1)],1):t._e(),i("v-uni-view",{staticClass:"img-list"},t._l(t.orderInfo.items,(function(e){return i("v-uni-view",{key:e.id,staticClass:"img-list-item"},[i("v-uni-image",{staticClass:"img-list-item-l little-img have-none",attrs:{src:e.image_url,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"img-list-item-r little-right"},[i("v-uni-view",{staticClass:"little-right-t"},[1==t.orderInfo.order_type?i("v-uni-view",{staticClass:"goods-name list-goods-name",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goodsDetail(e.goods_id)}}},[t._v(t._s(e.name||""))]):2==t.orderInfo.order_type?i("v-uni-view",{staticClass:"goods-name list-goods-name",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.pintuanDetail(e.goods_id)}}},[t._v(t._s(e.name||""))]):i("v-uni-view",{staticClass:"goods-name list-goods-name"},[t._v(t._s(e.name||""))]),i("v-uni-view",{staticClass:"goods-price"},[t._v("￥"+t._s(e.price))])],1),i("v-uni-view",{staticClass:"romotion-tip"},t._l(e.promotion_list,(function(e,s){return i("v-uni-view",{key:s,staticClass:"romotion-tip-item"},[t._v(t._s(e||""))])})),1),i("v-uni-view",{staticClass:"goods-item-c"},[i("v-uni-view",{staticClass:"goods-buy"},[null!==e.addon?i("v-uni-view",{staticClass:"goods-salesvolume"},[t._v(t._s(e.addon||""))]):t._e(),i("v-uni-view",{staticClass:"goods-num"},[t._v("× "+t._s(e.nums||""))])],1)],1)],1)],1)})),1),t.orderInfo.invoice&&1!=t.orderInfo.invoice.type?i("v-uni-view",{staticClass:"cell-group margin-cell-group"},[i("v-uni-view",{staticClass:"cell-item add-title-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goTaxList()}}},[i("v-uni-view",{staticClass:"cell-item-bd cell-item-bd-block",staticStyle:{"padding-right":"0"}},[i("v-uni-view",{staticClass:"cell-bd-view black-text"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v("发票信息")])],1),i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v("发票抬头："+t._s(t.orderInfo.invoice.title||""))])],1),3==t.orderInfo.invoice.type?i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v("发票税号："+t._s(t.orderInfo.invoice.tax_number||""))])],1):t._e()],1)],1)],1):t._e(),t.orderInfo.promotion_list&&t.orderInfo.promotion_list.length>0?i("v-uni-view",{staticClass:"cell-group margin-cell-group order-offer"},[i("v-uni-view",{staticClass:"cell-item add-title-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-bd-view promotion-title"},[i("v-uni-text",{staticClass:"cell-bd-text promotion-title-text"},[t._v("订单优惠")])],1)],1),i("v-uni-view",{staticClass:"cell-item-bd"},t._l(t.orderInfo.promotion_list,(function(e,s){return i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2==e.type,expression:"item.type == 2"}],key:s,staticClass:"order-promotion"},[t._v(t._s(e.name||""))])})),1)],1)],1):t._e(),i("v-uni-view",{staticClass:"cell-group margin-cell-group order-price"},[i("v-uni-view",{staticClass:"cell-item add-title-item"},[i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v("商品总价")])],1)],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-text",{staticClass:"cell-ft-p"},[t._v("￥"+t._s(t.orderInfo.goods_amount||""))])],1)],1),i("v-uni-view",{staticClass:"cell-item add-title-item"},[i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v("运费")])],1)],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-text",{staticClass:"cell-ft-p"},[t._v("￥"+t._s(t.orderInfo.cost_freight||""))])],1)],1),t.orderInfo.goods_pmt>0?i("v-uni-view",{staticClass:"cell-item add-title-item"},[i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v("商品优惠")])],1)],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-text",{staticClass:"cell-ft-p"},[t._v("-￥"+t._s(t.orderInfo.goods_pmt||""))])],1)],1):t._e(),t.orderInfo.point_money>0?i("v-uni-view",{staticClass:"cell-item add-title-item"},[i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v("积分优惠")])],1)],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-text",{staticClass:"cell-ft-p"},[t._v("-￥"+t._s(t.orderInfo.point_money||""))])],1)],1):t._e(),t.orderInfo.order_pmt>0?i("v-uni-view",{staticClass:"cell-item add-title-item"},[i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v("订单优惠")])],1)],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-text",{staticClass:"cell-ft-p"},[t._v("-￥"+t._s(t.orderInfo.order_pmt||""))])],1)],1):t._e(),t.orderInfo.coupon_pmt>0?i("v-uni-view",{staticClass:"cell-item add-title-item"},[i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v("其他优惠")])],1)],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-text",{staticClass:"cell-ft-p"},[t._v("-￥"+t._s(t.orderInfo.coupon_pmt||""))])],1)],1):t._e(),i("v-uni-view",{staticClass:"cell-item add-title-item"},[i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v("订单总价")])],1)],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-text",{staticClass:"cell-ft-p red-price"},[t._v("￥"+t._s(t.orderInfo.order_amount||""))])],1)],1),t.orderInfo.pay_status>1?i("v-uni-view",{staticClass:"cell-item add-title-item"},[i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v("支付方式")])],1)],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-text",{staticClass:"cell-ft-p"},[t._v(t._s(t.orderInfo.payment_name||""))])],1)],1):t._e(),t.orderInfo.pay_status>1?i("v-uni-view",{staticClass:"cell-item add-title-item"},[i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v("支付时间")])],1)],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-text",{staticClass:"cell-ft-p"},[t._v(t._s(t.orderInfo.payment_time||""))])],1)],1):t._e()],1)],1),1==t.orderInfo.status||2==t.orderInfo.status?i("v-uni-view",{staticClass:"button-bottom"},[1==t.orderInfo.status&&1==t.orderInfo.pay_status&&1==t.orderInfo.ship_status?i("v-uni-button",{staticClass:"btn btn-circle btn-g",attrs:{"hover-class":"btn-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancelOrder(t.orderInfo.order_id)}}},[t._v("取消订单")]):t._e(),1==t.orderInfo.status&&1==t.orderInfo.pay_status?i("v-uni-button",{staticClass:"btn btn-circle btn-w",attrs:{"hover-class":"btn-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPay(t.orderInfo.order_id)}}},[t._v("立即支付")]):t._e(),1==t.orderInfo.status&&t.orderInfo.pay_status>=2&&t.orderInfo.ship_status>=3&&1==t.orderInfo.confirm?i("v-uni-button",{staticClass:"btn btn-circle btn-w",attrs:{"hover-class":"btn-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tackDeliery(t.orderInfo.order_id)}}},[t._v("确认收货")]):t._e(),1===t.orderInfo.status&&t.orderInfo.pay_status>=2&&t.orderInfo.ship_status>=3&&t.orderInfo.confirm>=2&&1===t.orderInfo.is_comment?i("v-uni-button",{staticClass:"btn btn-circle btn-w",attrs:{"hover-class":"btn-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toEvaluate(t.orderInfo.order_id)}}},[t._v("立即评价")]):t._e(),1==t.orderInfo.add_aftersales_status?i("v-uni-button",{staticClass:"btn btn-circle btn-w",attrs:{"hover-class":"btn-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.customerService(t.orderInfo.order_id)}}},[t._v("申请售后")]):t._e(),t.orderInfo.bill_aftersales_id&&0!=t.orderInfo.bill_aftersales_id?i("v-uni-button",{staticClass:"btn btn-circle btn-w",attrs:{"hover-class":"btn-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showCustomerService(t.orderInfo)}}},[t._v("查看售后")]):t._e()],1):t._e()],1)},n=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return s}))},de6c:function(t,e,i){"use strict";i("c975"),i("b64b"),Object.defineProperty(e,"__esModule",{value:!0}),e.tools=e.checkLogin=e.jumpBackPage=e.goBack=e.goods=e.orders=void 0;var s={mounted:function(){},methods:{orderDetail:function(t){this.$common.navigateTo("/pages/member/order/orderdetail?order_id="+t)},toPay:function(t){this.$common.navigateTo("/pages/goods/payment/index?order_id="+t+"&type=1")},toEvaluate:function(t){this.$common.navigateTo("/pages/member/order/evaluate?order_id="+t)},showExpress:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=encodeURIComponent("code="+t+"&no="+e+"&add="+i);this.$common.navigateTo("/pages/member/order/express_delivery?params="+s)}}};e.orders=s;var a={mounted:function(){},methods:{goodsDetail:function(t){this.$common.navigateTo("/pages/goods/index/index?id="+t)},goodsList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e="/pages/classify/index";Object.keys(t).length&&(e=this.$common.builderUrlParams(e,t)),this.$common.navigateTo(e)},groupDetail:function(t,e){this.$common.navigateTo("/pages/goods/index/group?id="+t+"&group_id="+e)},pintuanDetail:function(t,e){e?this.$common.navigateTo("/pages/goods/index/pintuan?id="+t+"&team_id="+e):this.$common.navigateTo("/pages/goods/index/pintuan?id="+t)}}};e.goods=a;var n={onBackPress:function(t){if("navigateBack"===t.from)return!1;var e=["/pages/cart/index/index","/pages/member/index/index"],i=this.$store.state.redirectPage;return e.indexOf(i)>-1?(this.$store.commit({type:"redirect",page:""}),uni.switchTab({url:"/pages/index/index"}),!0):void 0},backBtn:function(){var t=getCurrentPages();t.length>1?uni.navigateBack({delta:1}):uni.switchTab({url:"/pages/index/index"})}};e.goBack=n;var o={methods:{handleBack:function(){var t=this.$store.state.redirectPage;console.log(t),this.$store.commit({type:"redirect",page:""});var e=["/pages/index/index","/pages/member/index/index"];e.indexOf(t)>-1?uni.switchTab({url:t}):t?uni.redirectTo({url:t}):uni.switchTab({url:"/pages/index/index"})}}};e.jumpBackPage=o;var l={methods:{checkIsLogin:function(){uni.showToast({title:"请先登录！",icon:"none",duration:800,success:function(t){setTimeout((function(){uni.hideToast(),uni.navigateTo({url:"/pages/login/login/index1"})}),800)}})}}};e.checkLogin=l;var r={methods:{copyData:function(t){var e=this;uni.setClipboardData({data:t,success:function(){e.$common.errorToShow("复制成功")}})}}};e.tools=r}}]);