webpackJsonp([14],{"+LFI":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".documentation-container[data-v-2a05f80a]{margin:50px}.documentation-container .document-btn[data-v-2a05f80a]{float:left;margin-left:50px;vertical-align:middle;display:block;cursor:pointer;background:#000;color:#fff;height:60px;width:200px;line-height:60px;font-size:20px;text-align:center}",""])},"40lt":function(t,e,n){"use strict";function a(t){n("oYTV")}var r={props:{items:{type:Array},title:{type:String,default:"vue"}},data:function(){return{isActive:!1}},methods:{clickTitle:function(){this.isActive=!this.isActive}}},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"share-dropdown-menu",class:{active:t.isActive}},[n("div",{staticClass:"share-dropdown-menu-wrapper"},[n("span",{staticClass:"share-dropdown-menu-title",on:{click:function(e){if(e.target!==e.currentTarget)return null;t.clickTitle(e)}}},[t._v(t._s(t.title))]),t._v(" "),t._l(t.items,function(e,a){return n("div",{key:a,staticClass:"share-dropdown-menu-item"},[e.href?n("a",{attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.title))]):n("span",[t._v(t._s(e.title))])])})],2)])},s=[],o={render:i,staticRenderFns:s},d=o,l=n("VU/8"),p=a,m=l(r,d,!1,p,null,null);e.a=m.exports},Lj2C:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".share-dropdown-menu{width:250px;position:relative;z-index:1}.share-dropdown-menu-title{width:100%;display:block;cursor:pointer;background:#000;color:#fff;height:60px;line-height:60px;font-size:20px;text-align:center;z-index:2;-webkit-transform:translateZ(0);transform:translateZ(0)}.share-dropdown-menu-wrapper{position:relative}.share-dropdown-menu-item{text-align:center;position:absolute;width:100%;background:#e0e0e0;line-height:60px;height:60px;cursor:pointer;font-size:20px;opacity:1;-webkit-transition:-webkit-transform .28s ease;transition:-webkit-transform .28s ease;transition:transform .28s ease;transition:transform .28s ease,-webkit-transform .28s ease}.share-dropdown-menu-item:hover{background:#000;color:#fff}.share-dropdown-menu-item:first-of-type{-webkit-transition-delay:.1s;transition-delay:.1s}.share-dropdown-menu-item:first-of-type,.share-dropdown-menu-item:nth-of-type(2){z-index:-1;-webkit-transform:translate3d(0,-60px,0);transform:translate3d(0,-60px,0)}.share-dropdown-menu-item:nth-of-type(2){-webkit-transition-delay:.2s;transition-delay:.2s}.share-dropdown-menu-item:nth-of-type(3){-webkit-transition-delay:.3s;transition-delay:.3s}.share-dropdown-menu-item:nth-of-type(3),.share-dropdown-menu-item:nth-of-type(4){z-index:-1;-webkit-transform:translate3d(0,-60px,0);transform:translate3d(0,-60px,0)}.share-dropdown-menu-item:nth-of-type(4){-webkit-transition-delay:.4s;transition-delay:.4s}.share-dropdown-menu-item:nth-of-type(5){z-index:-1;-webkit-transition-delay:.5s;transition-delay:.5s;-webkit-transform:translate3d(0,-60px,0);transform:translate3d(0,-60px,0)}.share-dropdown-menu.active .share-dropdown-menu-wrapper{z-index:1}.share-dropdown-menu.active .share-dropdown-menu-item:first-of-type{-webkit-transition-delay:.4s;transition-delay:.4s;-webkit-transform:translateZ(0);transform:translateZ(0)}.share-dropdown-menu.active .share-dropdown-menu-item:nth-of-type(2){-webkit-transition-delay:.3s;transition-delay:.3s;-webkit-transform:translate3d(0,60px,0);transform:translate3d(0,60px,0)}.share-dropdown-menu.active .share-dropdown-menu-item:nth-of-type(3){-webkit-transition-delay:.2s;transition-delay:.2s;-webkit-transform:translate3d(0,120px,0);transform:translate3d(0,120px,0)}.share-dropdown-menu.active .share-dropdown-menu-item:nth-of-type(4){-webkit-transition-delay:.1s;transition-delay:.1s;-webkit-transform:translate3d(0,180px,0);transform:translate3d(0,180px,0)}.share-dropdown-menu.active .share-dropdown-menu-item:nth-of-type(5){-webkit-transition-delay:0s;transition-delay:0s;-webkit-transform:translate3d(0,240px,0);transform:translate3d(0,240px,0)}",""])},Uhtj:function(t,e,n){"use strict";function a(t){n("zCGm")}Object.defineProperty(e,"__esModule",{value:!0});var r=n("40lt"),i={name:"clipboardDemo",components:{DropdownMenu:r.a},data:function(){return{articleList:[{title:"基础篇",href:"https://segmentfault.com/a/1190000009275424"},{title:"登录权限篇",href:"https://segmentfault.com/a/1190000009506097"},{title:"实战篇",href:"https://segmentfault.com/a/1190000009762198"},{title:"vueAdmin-template 篇",href:"https://segmentfault.com/a/1190000010043013"},{title:"自行封装 component",href:"https://segmentfault.com/a/1190000009090836"}]}}},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container documentation-container"},[n("a",{staticClass:"document-btn",attrs:{target:"_blank",href:"https://panjiachen.github.io/vue-element-admin-site/#/"}},[t._v("文档")]),t._v(" "),n("a",{staticClass:"document-btn",attrs:{target:"_blank",href:"https://github.com/PanJiaChen/vue-element-admin/"}},[t._v("Github 地址")]),t._v(" "),n("dropdown-menu",{staticStyle:{float:"left","margin-left":"50px"},attrs:{title:"系列文章",items:t.articleList}})],1)},o=[],d={render:s,staticRenderFns:o},l=d,p=n("VU/8"),m=a,f=p(i,l,!1,m,"data-v-2a05f80a",null);e.default=f.exports},oYTV:function(t,e,n){var a=n("Lj2C");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("0d26e7da",a,!0)},zCGm:function(t,e,n){var a=n("+LFI");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("583b3bcc",a,!0)}});