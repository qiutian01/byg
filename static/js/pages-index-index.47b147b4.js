(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"2ddb":function(e,t,i){"use strict";i.r(t);var n=i("c4d9"),o=i("6813");for(var r in o)"default"!==r&&function(e){i.d(t,e,(function(){return o[e]}))}(r);i("b48e");var c,a=i("f0c5"),l=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"47c47de2",null,!1,n["a"],c);t["default"]=l.exports},6813:function(e,t,i){"use strict";i.r(t);var n=i("7b52"),o=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=o.a},"7b52":function(e,t,i){"use strict";i("c975"),i("4e82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{promo_code:getApp().globalData.promo_code,downUrl:{android:[],ios:[]},cuUrl:[],showBrowser:!1}},onLoad:function(){var e=this;uni.request({url:"https://5822028843394772.ap-southeast-1.fc.aliyuncs.com/2016-08-15/proxy/zynew/down/",success:function(t){switch(console.log(t.data),e.text="request success",e.downUrl=t.data.data,e.downUrl.android.sort(e.compare("sort")),e.downUrl.ios.sort(e.compare("sort")),uni.getSystemInfoSync().platform){case"ios":e.cuUrl=e.downUrl.ios;break;default:e.cuUrl=e.downUrl.android;break}},fail:function(e){uni.showToast({title:"获取地址失败，请刷新重试，或稍后再来",icon:"none"}),console.log(e)}})},methods:{compare:function(e){return function(t,i){var n=t[e],o=i[e];return o-n}},down:function(e){var t=navigator.userAgent.toLowerCase();if("ios"!=uni.getSystemInfoSync().platform&&t.indexOf("micromessenger")>=0)return console.log(t),this.showBrowser=!0,!1;this.copy(),e&&e.length>5?window.open(e):uni.showToast({title:"获取地址失败，请刷新重试",icon:"none"})},copy:function(){if(this.promo_code.length>0){var e="<zy>"+this.promo_code+"</zy>";this.h5Copy(e)}},h5Copy:function(e){var t=document.createElement("textarea");t.value=e,t.readOnly="readOnly",document.body.appendChild(t),t.select(),t.setSelectionRange(0,e.length);var i=document.execCommand("Copy");t.remove();var n=i?"复制成功":"复制失败";uni.showToast({title:n})}}};t.default=n},"8a29":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-47c47de2]{width:100%;height:100%}.tip[data-v-47c47de2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:absolute;width:100%;height:100%;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.8);-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.code[data-v-47c47de2]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:flex}.text-area[data-v-47c47de2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;bottom:%?100?%;width:%?750?%}.logo[data-v-47c47de2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;top:%?200?%;width:%?750?%}.open[data-v-47c47de2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;top:%?0?%;width:%?750?%;height:100%}.down-group[data-v-47c47de2]{margin-top:%?100?%}.down[data-v-47c47de2]{margin-top:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:%?50?%;background:#fa436a;width:%?300?%;height:%?100?%}.title[data-v-47c47de2]{font-size:%?36?%;color:#fff}.copy[data-v-47c47de2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:%?50?%;background:-webkit-gradient(linear,right top,left top,from(#f9e6af),to(#ffd465));background:-webkit-linear-gradient(right,#f9e6af,#ffd465);background:linear-gradient(270deg,#f9e6af,#ffd465);width:%?100?%;height:%?40?%;margin-left:%?50?%}.promocode[data-v-47c47de2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;width:%?750?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),e.exports=t},b48e:function(e,t,i){"use strict";var n=i("ffc0"),o=i.n(n);o.a},c4d9:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}));var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticStyle:{width:"750rpx",height:"100%"}},[i("v-uni-image",{staticStyle:{width:"750rpx",height:"100%"},attrs:{src:"/static/qdbg.png",mode:"scaleToFill"}}),i("v-uni-view",{staticClass:"logo"},[i("v-uni-image",{staticStyle:{width:"200rpx",height:"200rpx"},attrs:{src:"/static/logo.png",mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"text-area"},[e.promo_code.length>0?i("v-uni-view",{staticClass:"promocode"},[i("v-uni-view",{staticClass:"code"},[i("v-uni-text",{staticStyle:{color:"#ffd465","font-size":"40rpx"}},[e._v("邀请码：")]),i("v-uni-text",{staticStyle:{color:"#ffd465","font-size":"40rpx"}},[e._v(e._s(e.promo_code))])],1),i("v-uni-view",{staticClass:"copy"},[i("v-uni-text",{staticStyle:{"font-size":"15rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.copy()}}},[e._v("复制")])],1)],1):e._e(),i("v-uni-view",{staticClass:"down-group"},e._l(e.cuUrl,(function(t,n){return i("v-uni-view",{staticClass:"down"},[i("v-uni-text",{staticClass:"title",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.down(t.url)}}},[e._v(e._s(t.name))])],1)})),1)],1),e.showBrowser?i("v-uni-view",{staticClass:"open"},[i("v-uni-image",{staticStyle:{width:"750rpx",height:"100%"},attrs:{src:"/static/open.png",mode:"aspectFill"}})],1):e._e()],1)},r=[]},ffc0:function(e,t,i){var n=i("8a29");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("297b878e",n,!0,{sourceMap:!1,shadowMode:!1})}}]);