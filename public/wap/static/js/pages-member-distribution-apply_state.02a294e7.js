(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-distribution-apply_state"],{"09c6":function(t,a,i){"use strict";i.r(a);var e=i("d12c"),s=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=s.a},"198d":function(t,a,i){"use strict";i.r(a);var e=i("d9a9"),s=i("09c6");for(var o in s)"default"!==o&&function(t){i.d(a,t,(function(){return s[t]}))}(o);i("f4ec");var n,d=i("f0c5"),c=Object(d["a"])(s["default"],e["b"],e["c"],!1,null,"d1da1e6e",null,!1,e["a"],n);a["default"]=c.exports},"5a2f":function(t,a,i){var e=i("fd98");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=i("4f06").default;s("6c98631c",e,!0,{sourceMap:!1,shadowMode:!1})},d12c:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{info:{}}},onLoad:function(){var t=this;t.$api.getDistributioninfo({check_condition:!0},(function(a){a.status?(a.data.need_apply&&0==a.data.condition_status&&t.$common.redirectTo("/pages/member/distribution/index"),1==a.data.verify&&t.$common.redirectTo("/pages/member/distribution/user"),t.info=a.data):t.$common.errorToShow(a.msg)}))},methods:{}};a.default=e},d9a9:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return s})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"apply-c"},[2==t.info.verify?i("v-uni-view",{staticClass:"apply-top fsz36 color-o"},[t._v("恭喜，您的申请已提交！")]):t._e(),3==t.info.verify?i("v-uni-view",{staticClass:"apply-top-refuse fsz36 color-o"},[t._v("抱歉，您的申请被驳回！")]):t._e(),1==t.info.verify?i("v-uni-view",{staticClass:"apply-top fsz36 color-o"},[t._v("恭喜，您的申请已通过！")]):t._e(),2==t.info.verify?i("v-uni-view",{staticClass:"apply-bot"},[i("v-uni-view",{staticClass:"apply-bot-sop"},[i("v-uni-view",{staticClass:"abs-img"},[i("v-uni-image",{staticClass:"icon",attrs:{src:"/static/image/del.png",mode:""}})],1),i("v-uni-view",{staticClass:"color-9 abs-mid"},[i("v-uni-image",{staticClass:"dot",attrs:{src:"/static/image/dot-o.png",mode:""}}),i("v-uni-image",{staticClass:"dot",attrs:{src:"/static/image/dot-o.png",mode:""}}),i("v-uni-image",{staticClass:"dot",attrs:{src:"/static/image/dot-o.png",mode:""}}),i("v-uni-image",{staticClass:"dot",attrs:{src:"/static/image/dot-o.png",mode:""}}),i("v-uni-image",{staticClass:"dot",attrs:{src:"/static/image/dot-o.png",mode:""}}),i("v-uni-image",{staticClass:"dot",attrs:{src:"/static/image/dot-o.png",mode:""}}),i("v-uni-image",{staticClass:"dot",attrs:{src:"/static/image/dot-g.png",mode:""}}),i("v-uni-image",{staticClass:"dot",attrs:{src:"/static/image/dot-g.png",mode:""}}),i("v-uni-image",{staticClass:"dot",attrs:{src:"/static/image/dot-g.png",mode:""}}),i("v-uni-image",{staticClass:"dot",attrs:{src:"/static/image/dot-g.png",mode:""}}),i("v-uni-image",{staticClass:"dot",attrs:{src:"/static/image/dot-g.png",mode:""}}),i("v-uni-image",{staticClass:"dot",attrs:{src:"/static/image/dot-g.png",mode:""}})],1),i("v-uni-view",{staticClass:"abs-img"},[i("v-uni-image",{staticClass:"icon",attrs:{src:"/static/image/success.png",mode:""}})],1)],1),i("v-uni-view",{staticClass:"apply-bot-text"},[i("v-uni-view",{staticClass:"abt-c"},[i("v-uni-view",{staticClass:"color-6 fsz30"},[t._v("申请提交成功")]),i("v-uni-view",{staticClass:"color-9 fsz24"},[t._v(t._s(t.info.ctime))])],1),i("v-uni-view",{staticClass:"abt-c"},[2==t.info.verify?i("v-uni-view",{staticClass:"color-6 fsz30"},[t._v("等待审核")]):t._e(),3==t.info.verify?i("v-uni-view",{staticClass:"color-6 fsz30"},[t._v("审核驳回")]):t._e(),1==t.info.verify?i("v-uni-view",{staticClass:"color-6 fsz30"},[t._v("审核通过")]):t._e()],1)],1)],1):t._e()],1)],1)},o=[]},f4ec:function(t,a,i){"use strict";var e=i("5a2f"),s=i.n(e);s.a},fd98:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".content[data-v-d1da1e6e]{height:calc(100vh - 44px);padding-top:%?50?%}.apply-c[data-v-d1da1e6e]{margin:%?40?% auto;text-align:center;padding:%?26?%;-webkit-border-radius:%?30?%;border-radius:%?30?%;-webkit-box-shadow:0 0 10px #aaa;box-shadow:0 0 10px #aaa;width:%?670?%;min-height:%?400?%;background-color:#fff}.apply-top[data-v-d1da1e6e]{margin-top:%?40?%}.apply-top-refuse[data-v-d1da1e6e]{margin-top:%?140?%}.apply-bot[data-v-d1da1e6e]{width:100%;text-align:center}.apply-bot-sop[data-v-d1da1e6e]{position:relative;height:%?60?%;width:65%;margin:%?40?% auto %?20?%;display:-webkit-box;display:-webkit-flex;display:flex;line-height:1.7555}.apply-bot-sop>uni-view[data-v-d1da1e6e]{display:inline-block}.abs-img[data-v-d1da1e6e]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.abs-img uni-image[data-v-d1da1e6e]{position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.abs-mid[data-v-d1da1e6e]{-webkit-box-flex:2;-webkit-flex:2;flex:2;display:-webkit-box;display:-webkit-flex;display:flex}.apply-bot-text[data-v-d1da1e6e]{display:-webkit-box;display:-webkit-flex;display:flex}.abt-c[data-v-d1da1e6e]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.dot[data-v-d1da1e6e]{width:%?8?%;height:%?8?%;margin:0 %?4?%}",""]),t.exports=a}}]);