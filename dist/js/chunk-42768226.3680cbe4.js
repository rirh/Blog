(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42768226","chunk-5869e23e"],{1635:function(t,e,r){},"2d80":function(t,e,r){"use strict";var s=r("fc10"),o=r.n(s);o.a},c745:function(t,e,r){"use strict";var s=r("f2d5"),o=r.n(s);o.a},c970:function(t,e,r){"use strict";var s=r("1635"),o=r.n(s);o.a},f2d5:function(t,e,r){},f736:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Row",{staticClass:"main"},[r("div",{staticClass:"top"},t._l(t.toplist,function(e,s){return r("Poptip",{key:s,staticClass:"phone",attrs:{trigger:"hover",title:e.symbol,content:t.content(e),"word-wrap":"",placement:"right-start",width:"300",transfer:"","popper-class":t.os.isPc?"noti-wapper-con-pop":"hidden"},on:{"on-popper-show":t.handleShowPop}},[r("Button",{staticClass:"wapper-btn phone",style:t.styleObject(e),on:{click:function(r){return t.handleRouter(e)}}},[r("div",{staticClass:"wapper-tips"},[r("span",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.list.show_kstate1,expression:"$store.state.list.show_kstate1"}],staticClass:"wapper-tips-row",style:{background:"linear-gradient(180deg,"+t.tipsObj1(e.kstate&&e.kstate.ks20)+" ,25%, "+t.tipsObj1(e.kstate&&e.kstate.ks60)+" ,75%, "+t.tipsObj1(e.kstate&&e.kstate.ks120)+") "}},[t._v(" ")]),r("span",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.list.show_kstate1&&!t.$store.state.list.show_kstate2&&!t.$store.state.list.show_kstate3,expression:"\n              !$store.state.list.show_kstate1 &&\n                !$store.state.list.show_kstate2 &&\n                !$store.state.list.show_kstate3\n            "}],staticClass:"wapper-tips-row",style:{background:"linear-gradient(180deg,\n                    "+t.tipsObj2(t.getBullColor(e,"15m"))+" \n                    ,"+t.tipsObj2(t.getBullColor(e,"30m"))+" \n                    ,"+t.tipsObj2(t.getBullColor(e,"4h"))+" \n                    ,"+t.tipsObj2(t.getBullColor(e,"12h"))+" \n                    ,"+t.tipsObj2(t.getBullColor(e,"1d"))+" \n                    "}},[t._v(" ")])]),r("div",{staticClass:"wapper-right-tips"},[r("span",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.list.show_kstate3,expression:"$store.state.list.show_kstate3"}],staticClass:"wapper-right-tips-row",style:{background:""+t.handKcolor(e.kstate&&e.kstate)}},[t._v(" ")])]),r("Row",[r("i-col",[r("div",{staticClass:"btn-section"},[r("strong",{staticClass:"btn-section-symbol"},[t._v(t._s(e.brief)+"."+t._s(e.symbol))]),r("strong",{staticClass:"btn-section-price"},[t._v(t._s(t._f("pont_ticksize")(e)))]),r("strong",{staticClass:"btn-section-amplitude",style:t._f("amplitude_filter")(e.pct)},[t._v(t._s(t._f("point_from")(e.pct))+"%")])])])],1),r("Row",[r("i-col",[r("div",{staticClass:"btn-section"},[r("span",{staticClass:"btn-section-point"},[r("Icon",{directives:[{name:"show",rawName:"v-show",value:t.tipslogo(e).show,expression:"tipslogo(item).show"}],style:{"font-size":"1.4rem",color:t.tipslogo(e).color},attrs:{type:t.tipslogo(e).logo}}),r("strong",{style:t._f("amplitude_filters")(e.c)},[t._v(t._s(t.point_from(e.c,1))+" C")])],1),r("span",{staticClass:"btn-section-qty"},[r("span",{style:t.max_qty(e)},[t._v(t._s(t._f("qty_filter")(e)))]),t._v("\n                 / "+t._s(t._f("qty24_filter")(e))+"\n              ")]),r("span",{staticClass:"btn-section-calory",style:t.price_filter(e)},[t._v(t._s(t._f("price_filter")(e))+"%")])])])],1)],1),r("Row",{attrs:{slot:"title",type:"flex",justify:"center",align:"middle"},slot:"title"},[r("i-col",{attrs:{span:"6"}},[r("a",{staticStyle:{"text-decoration":"underline","font-weight":"bold",color:"var(--textcolor)font-size:1.4rem"},attrs:{href:"/trade?_symbol="+e.brief+"_"+e.symbol,target:"_blank"}},[t._v(t._s(e.brief)+"."+t._s(e.symbol))])]),r("i-col",{staticStyle:{"text-align":"right"},attrs:{span:"18"}},[r("span",{staticClass:"volume"},[r("Icon",{style:{"font-size":"2.5rem",color:t.tipslogo(e,!0).color,cursor:"pointer","margin-right":".3rem"},attrs:{type:t.tipslogo(e,!0).logo},on:{click:function(r){return t.handleSetOpttriger(e,t.key,s)}}}),r("span",{directives:[{name:"show",rawName:"v-show",value:"md-megaphone"===t.tipslogo(e,!0).logo&&e.alert_value,expression:"\n                tipslogo(item, true).logo === 'md-megaphone' &&\n                  item.alert_value\n              "}],staticClass:"volume-hovertips"},[t._v(t._s(e.alert_value))])],1),r("Button",{staticStyle:{background:"none",border:"none"},attrs:{size:"small",disabled:t.disable_star()}},[r("Icon",{staticStyle:{color:"var(--blue)",cursor:"pointer","font-size":"2.5rem"},style:{color:t.start_color(e)},attrs:{type:"md-star"},on:{click:function(r){return t.handleCancel(e,s)}}})],1),t._v(" \n          "),r("Icon",{style:{color:e.top&&1===e.top?"var(--blue)":"var(--textColor)",cursor:"pointer","font-size":" 2.5rem"},attrs:{type:"md-arrow-round-up"},on:{click:function(r){return t.handleTop(e)}}})],1)],1),r("Row",{ref:"content"+s,refInFor:!0,staticStyle:{"background-color":"var(--menu_bg_color)",color:"var(--textcolor)"},attrs:{slot:"content"},slot:"content"},[r("i-col",[r("div",[t._v(t._s(t.content(e)))])])],1)],1)}),1),r("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"wapper",style:{height:t.height-30+"px",width:t.width+"px"}},t._l(t.lists,function(e,s){return r("dl",{key:s,staticClass:"wapper-lists"},[r("h3",{staticClass:"head"},[t._v("\n          \n        "),r("router-link",{staticClass:"link",attrs:{tag:"span",to:"/exchange?brief="+(e&&e[0].brief)}},[t._v(t._s(t.exchange_filter(e)))]),t._v(" \n        "),r("Icon",{staticClass:"head-icon",attrs:{type:"logo-bitcoin"},on:{click:function(r){return t.handleshowBalance(e)}}})],1),r("dd",{staticClass:"wapper-list"},t._l(e,function(e,o){return r("Poptip",{key:o,attrs:{trigger:"hover",title:e.symbol,content:t.content(e),"word-wrap":"",placement:"right-start",width:"300",transfer:"","popper-class":t.os.isPc?"noti-wapper-con-pop":"hidden"},on:{"on-popper-show":t.handleShowPop}},[r("Button",{staticClass:"wapper-btn",style:t.styleObject(e),on:{click:function(r){return t.handleRouter(e,o,s)}}},[r("div",{staticClass:"wapper-tips"},[r("span",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.list.show_kstate1,expression:"$store.state.list.show_kstate1"}],staticClass:"wapper-tips-row",style:{background:"linear-gradient(180deg,"+t.tipsObj1(e.kstate&&e.kstate.ks20)+" ,25%, "+t.tipsObj1(e.kstate&&e.kstate.ks60)+" ,75%, "+t.tipsObj1(e.kstate&&e.kstate.ks120)+") "}},[t._v(" ")]),r("span",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.list.show_kstate1&&!t.$store.state.list.show_kstate2&&!t.$store.state.list.show_kstate3,expression:"\n                  !$store.state.list.show_kstate1 &&\n                    !$store.state.list.show_kstate2 &&\n                    !$store.state.list.show_kstate3\n                "}],staticClass:"wapper-tips-row",style:{background:"linear-gradient(180deg,\n                    "+t.tipsObj2(t.getBullColor(e,"15m"))+" \n                    ,"+t.tipsObj2(t.getBullColor(e,"30m"))+" \n                    ,"+t.tipsObj2(t.getBullColor(e,"4h"))+" \n                    ,"+t.tipsObj2(t.getBullColor(e,"12h"))+" \n                    ,"+t.tipsObj2(t.getBullColor(e,"1d"))+" \n                    "}},[t._v(" ")])]),r("div",{staticClass:"wapper-right-tips"},[r("span",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.list.show_kstate3,expression:"$store.state.list.show_kstate3"}],staticClass:"wapper-right-tips-row",style:{background:""+t.handKcolor(e.kstate&&e.kstate)}},[t._v(" ")])]),r("Row",[r("i-col",[r("div",{staticClass:"btn-section"},[r("strong",{staticClass:"btn-section-symbol"},[t._v(t._s(e.brief)+"."+t._s(e.symbol))]),r("strong",{staticClass:"btn-section-price"},[t._v("\n                    "+t._s(t._f("pont_ticksize")(e))+"\n                  ")]),r("strong",{staticClass:"btn-section-amplitude",style:t._f("amplitude_filter")(e.pct)},[t._v(t._s(t._f("point_from")(e.pct))+"%")])])])],1),r("Row",[r("i-col",[r("div",{staticClass:"btn-section"},[r("span",{staticClass:"btn-section-point"},[r("Icon",{directives:[{name:"show",rawName:"v-show",value:t.tipslogo(e).show,expression:"tipslogo(item).show"}],style:{"font-size":"1.4rem",color:t.tipslogo(e).color},attrs:{type:t.tipslogo(e).logo}}),r("strong",{style:t._f("amplitude_filters")(e.c)},[t._v(t._s(t.point_from(e.c,1))+" C")])],1),r("span",{staticClass:"btn-section-qty"},[r("span",{style:t.max_qty(e)},[t._v("\n                      "+t._s(t._f("qty_filter")(e))+"\n                    ")]),t._v("\n                     / "+t._s(t._f("qty24_filter")(e))+"\n                  ")]),r("span",{staticClass:"btn-section-calory",style:t.price_filter(e)},[t._v(t._s(t._f("price_filter")(e))+"%")])])])],1)],1),r("Row",{attrs:{slot:"title",type:"flex",justify:"center",align:"middle"},slot:"title"},[r("i-col",{attrs:{span:"6"}},[r("a",{staticStyle:{"text-decoration":"underline","font-weight":"bold",color:"var(--textcolor)font-size:1.4rem"},attrs:{href:"/trade?_symbol="+e.brief+"_"+e.symbol,target:"_blank"}},[t._v(t._s(e.brief)+"."+t._s(e.symbol))])]),r("i-col",{staticStyle:{"text-align":"right"},attrs:{span:"18"}},[r("span",{staticClass:"volume"},[r("Icon",{style:{"font-size":"2.5rem",color:t.tipslogo(e,!0).color,cursor:"pointer","margin-right":".3rem"},attrs:{type:t.tipslogo(e,!0).logo},on:{click:function(r){return t.handleSetOpttriger(e,s,o)}}}),r("span",{directives:[{name:"show",rawName:"v-show",value:"md-megaphone"===t.tipslogo(e,!0).logo&&e.alert_value,expression:"\n                    tipslogo(item, true).logo === 'md-megaphone' &&\n                      item.alert_value\n                  "}],staticClass:"volume-hovertips"},[t._v(t._s(e.alert_value))])],1),r("Button",{staticStyle:{background:"none",border:"none"},attrs:{size:"small",disabled:t.disable_star()}},[r("Icon",{staticStyle:{color:"var(--blue)",cursor:"pointer","font-size":"2.5rem"},style:{color:t.start_color(e)},attrs:{type:"md-star"},on:{click:function(r){return t.handleCancel(e,o)}}})],1),t._v(" \n              "),r("Icon",{style:{color:e.top&&1===e.top?"var(--blue)":"var(--textColor)",cursor:"pointer","font-size":" 2.5rem"},attrs:{type:"md-arrow-round-up"},on:{click:function(r){return t.handleTop(e)}}})],1)],1),r("Row",{ref:"content"+o,refInFor:!0,staticStyle:{"background-color":"var(--menu_bg_color)",color:"var(--textcolor)"},attrs:{slot:"content"},slot:"content"},[r("i-col",[r("div",[t._v(t._s(t.content(e)))])])],1)],1)}),1)])}),0),r("Modal",{attrs:{width:.7*t.width,styles:{top:"20px"},title:t.modal.title},on:{"on-visible-change":t.handleDesyoty},model:{value:t.modal.show,callback:function(e){t.$set(t.modal,"show",e)},expression:"modal.show"}},[r(t.modal.component,{tag:"component",attrs:{params:t.modal.data}}),r("div",{attrs:{slot:"footer"},slot:"footer"})],1),r("Modal",{staticClass:"opt-modal",attrs:{title:"设置",width:.3*t.width,"mask-closable":!1},on:{"on-visible-change":t.handleDesyoty},model:{value:t.show_opt_triger,callback:function(e){t.show_opt_triger=e},expression:"show_opt_triger"}},[r("Row"),r("Row",[t._v("\n         声音开关:   \n      "),r("i-switch",{model:{value:t.opt_triger.alert_spec,callback:function(e){t.$set(t.opt_triger,"alert_spec",e)},expression:"opt_triger.alert_spec"}}),r("br"),r("br"),r("i-input",{model:{value:t.opt_triger.alert_value,callback:function(e){t.$set(t.opt_triger,"alert_value",e)},expression:"opt_triger.alert_value"}},[r("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("卡路里")]),r("span",{attrs:{slot:"append"},slot:"append"},[t._v("C")])]),r("br"),r("Button",{attrs:{long:"",type:"primary"},on:{click:function(e){return t.handleSetOpttriger(t.opt_triger.item,t.opt_triger.key,t.opt_triger.index)}}},[t._v("确认")])],1),r("div",{style:{display:"none"},attrs:{slot:"footer"},slot:"footer"})],1),r("KstateBull",{attrs:{data:t.kstate,item:t.handlebinditem(t.kstateitem)},on:{"on-top":function(e){t.handleTop(t.handlebinditem(t.kstateitem))},"on-megaphone":t.handlefindSetOpttriger,"on-star":function(e){t.handleCancel(t.handlebinditem(t.kstateitem),t.handlebinditem(t.kstateitem).index)}},model:{value:t.kstateshow,callback:function(e){t.kstateshow=e},expression:"kstateshow"}})],1)},o=[],n=r("9ab4"),a=r("2b0e"),i=r("2ef0"),l=r("b1f3"),c=r("f129"),u=r("ef16"),p=r("f13e"),h=r("e6da"),d=r("f97a"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"top"},t._l(t.list(t.data),function(e,s){return r("div",{key:s,staticClass:"top-list",style:t.styleObject(e),on:{click:function(r){return t.handleCanel(e,s,s)}}},[r("div",{staticClass:"top-list-col"},[r("span",{staticClass:"top-list-col-s"},[t._v("  "+t._s(e.brief)+"."+t._s(e.s))]),r("span",{staticClass:"top-list-col-p"},[t._v(t._s(e.p&&Number(e.p).toFixed(e.tickSize)))]),r("span",{staticClass:"top-list-col-ptc",style:{color:e.pct>0?"var(--seletedlinghtgreen)":"var(--red)"}},[t._v(t._s(e.pct)+"%  ")])]),r("div",{staticClass:"top-list-col"},[r("span",{staticClass:"top-list-col-c",style:t.amplitude_filters(e.c)},[t._v(t._s(e.c&&e.c.toFixed(1))+" C   ")]),r("span",{staticClass:"top-list-col-qty"},[t._v(t._s(t.qty_filter(e))+" / "+t._s(t.qty24_filter(e)))]),r("span",{staticClass:"top-list-col-qty24"},[t._v(t._s(t.price_filter(e))+"% ")])]),r("span",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.list.show_kstate1,expression:"$store.state.list.show_kstate1"}],staticClass:"kstate1",style:{background:"linear-gradient(180deg,"+t.tipsObj1(e.kstate&&e.kstate.ks20)+" ,25%, "+t.tipsObj1(e.kstate&&e.kstate.ks60)+" ,75%, "+t.tipsObj1(e.kstate&&e.kstate.ks120)+") "}},[t._v(" ")]),r("span",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.list.show_kstate2,expression:"$store.state.list.show_kstate2"}],staticClass:"kstate2",style:{background:"linear-gradient(180deg,"+t.tipsObj(e.kstate&&e.kstate.k1[0])+" ,25%, "+t.tipsObj(e.kstate&&e.kstate.k7[0])+" ,75%, "+t.tipsObj(e.kstate&&e.kstate.k14[0])+" )"}},[t._v(" ")]),r("span",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.list.show_kstate3,expression:"$store.state.list.show_kstate3"}],staticClass:"kstate3",style:{background:""+t.handKcolor(e.kstate&&e.kstate)}},[t._v(" ")])])}),0)},v=[],g=r("65d9"),_=r.n(g),m=r("60a3"),b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.qty_filter=function(t){return Object(l["j"])(t)},e.qty24_filter=function(t){return Object(l["i"])(t)},e}return n["d"](e,t),e.prototype.handleCanel=function(t,e,r){this.$emit("on-click",t,e,r)},e.prototype.styleObject=function(t){t.theLast;var e=t.y,r=(t.c,t.info_triger,t.msg_triger,t.alert,t.alert_spec,t.alert_value,t.s,[{key:2,bgcolor:"var(--greenbg)",text:"var(--black)"},{key:1,bgcolor:"var(--lightGreen)",text:"var(--black)"},{key:0,bgcolor:"var(--bgcolor)",text:"var(--textcolor)"},{key:-1,bgcolor:"var(--lightPink)",text:"var(--black)"},{key:-2,bgcolor:"var(--pink)",text:"var(--black)"}]),s="var(--bgcolor)",o="var(--textcolor)",n=function(t){return t.key===e},a=r.find(n);return a&&(s=a.bgcolor,o=a.text),r=null,{color:o,background:s}},e.prototype.amplitude_filters=function(t){var e="var(--textcolor)",r={color:e,"font-weight":"inherit"};return t>=1&&(e="var(--green)",r={color:e}),t<=-1&&(e="var(--red)",r={color:e}),r},e.prototype.handKcolor=function(t){var e=null,r=[{key:-3,value:"var(--red)"},{key:-2,value:"var(--pink)"},{key:-1,value:"var(--lightPink)"},{key:0,value:"var(--textcolor)"},{key:1,value:"var(--lightGreen)"},{key:2,value:"var(--greenbg)"},{key:3,value:"var(--green)"}];if(t&&t.ks){var s=function(e){return e.key===t.ks};e=r.find(s),e&&(e=e.value)}return e},e.prototype.tipsObj=function(t){var e="var(--red)",r=([0].some(function(e){return e===t}),[1,5,12,16].some(function(e){return e===t})),s=[2,6,11,15].some(function(e){return e===t}),o=[3,7,10,14].some(function(e){return e===t}),n=[4,8,9,13].some(function(e){return e===t});return e=r?"var(--green)":s?"var(--lightGreen)":o?"var(--pink)":n?"var(--red)":"var(--bgcolor)",e},e.prototype.tipsObj1=function(t){if("number"!==typeof t)return{};var e="var(--red)",r=[1].some(function(e){return e===t}),s=[2].some(function(e){return e===t}),o=[3].some(function(e){return e===t}),n=[4].some(function(e){return e===t});return e=r?"var(--green)":s?"var(--lightGreen)":o?"var(--lightPink)":n?"var(--red)":"var(--bgcolor)",e},e.prototype.price_filter=function(t){var e=t.p,r=t.p1m;return r?(100*(e/r-1)).toFixed(2):"-"},e.prototype.list=function(t){var e=[],r=Object(l["c"])("top");if(r){var s=function(e){var r=function(t){return e.id===t.id&&e.account===t.account&&e.s===t.s},s={};return t.forEach(function(t){var e=t.find(r);e&&(s=e)}),s};e=r.map(s)}return e},n["c"]([Object(m["c"])({default:function(){return[]}})],e.prototype,"data",void 0),e=n["c"]([_()({})],e),e}(a["default"]),k=b,y=k,w=(r("c970"),r("2877")),x=Object(w["a"])(y,f,v,!1,null,"40049b36",null),C=x.exports,O=r("5c0d"),j={auto_on:"md-volume-down",auto_off:"md-volume-down",set_on:"md-megaphone",set_off:"md-megaphone"},$={on:"var(--blue)",off:"var(-textcolor)"},N=a["default"].extend({data:function(){return{kstate:{},kstateitem:{},kstateshow:!1,toplist:[],topoptlist:[],show_opt_triger:!1,opt_triger:{alert_spec:!1,alert_value:null,item:{},index:0,key:0},share:{image:"",show:!1,qr_html:"",loading:!1,title:"",data:{},key:0,index:0},modal:{show:!1,title:"",component:null,data:[]},scale:null,scale_arr:{"5m":"5分钟","15m":"15分钟","30m":"30分钟","1h":"1小时","4h":"4小时","1d":"1日"},volume:100,data:[],show:!1,exchange:[],isplay:!1,o_audio:l["n"],up_audio:new l["a"]({volume:100}),up_audio_raise:new l["a"]({volume:100}),down_audio:new l["a"]({volume:100}),down_audio_raise:new l["a"]({volume:100})}},components:{Top:C,KstateBull:O["a"]},computed:{os:l["e"],height:l["d"],width:l["u"],lists:{get:function(){var t=this.data;return this.toplist=this.topoptlist.map(function(e){var r=t.find(function(t){return t.account===e.account&&t.exchange===e.exchange&&t.symbol===e.symbol&&t.brief===e.brief});return n["a"]({},e,r)}),t=Object(i["groupBy"])(t,"brief"),t=Object(i["sortBy"])(t,function(t){return t[0].brief}),t},set:function(t){this.data=t}}},created:function(){return n["b"](this,void 0,void 0,function(){var t;return n["e"](this,function(e){switch(e.label){case 0:return[4,Object(c["P"])()];case 1:return e.sent(),t=this.$store.state.instant.optionlist,this.topoptlist=t.filter(function(t){return 1===t.top}),this.init_params(),[2]}})})},destroyed:function(){Object(c["c"])()},methods:{getRandomNumberByRange:function(t,e){return Math.floor(Math.random()*(e-t)+t)},getBullColor:function(t,e){var r="";if(t.kstate&&t.kstate.bull){var s=t.kstate.bull,o=this.$store.state.list.show_kstate4,n=s[o];if(n){var a=n[e];a&&(r=a)}}return r},transformatTime:l["s"],transformatDateString:l["r"],encodeurl:u["a"],handlefindSetOpttriger:function(t){var e={index:-1,key:-1},r=this.lists;"{}"!==JSON.stringify(t)&&r.forEach(function(r,s){var o=function(e){return e.account===t.account&&e.exchange===t.exchange&&e.symbol===t.symbol&&e.brief===t.brief},n=r.findIndex(o);n>-1&&(e.index=n,e.key=s)}),this.handleSetOpttriger(t,e.key,e.index)},handlebinditem:function(t){var e=this,r={},s=this.lists;return"{}"!==JSON.stringify(t)&&s.forEach(function(s,o){var n=function(e){return e.account===t.account&&e.exchange===t.exchange&&e.symbol===t.symbol&&e.brief===t.brief},a=s.find(n);a&&(a.index=o,r=a,e.kstateitem=r)}),"{}"===JSON.stringify(r)&&(this.kstateitem.marked=null,r=this.kstateitem),r},showTopTag:function(t){var e=!0;if(this.os.isPc)e=!1;else{var r=Object(l["c"])("top");if(r){var s=function(e){return e.id===t.id},o=r.find(s);o&&(e=!1)}}return e},handleTop:function(t){return n["b"](this,void 0,void 0,function(){var e,r,s;return n["e"](this,function(o){switch(o.label){case 0:return[4,Object(c["ab"])({exchange:t.exchange,account:t.account,symbol:t.symbol,top:1===t.top?0:1})];case 1:return e=o.sent(),e.code?[3,3]:[4,Object(c["P"])()];case 2:return o.sent(),r=this.$store.state.instant.optionlist,s=r.findIndex(function(e){return e.account===t.account&&e.exchange===t.exchange&&e.symbol===t.symbol&&e.brief===t.brief}),this.data[s].top=1===t.top?0:1,this.topoptlist=r.filter(function(t){return 1===t.top}),[3,4];case 3:this.$Notice.error({title:e.msg}),o.label=4;case 4:return[2]}})})},tipslogo:function(t,e){var r={color:j["auto_on"],logo:$["on"],show:!0},s=this.$store.state.list.tips_switch;return"自动响铃"===s?1===t.alert?(r.logo="",r.color="",e&&(r.logo=j["auto_off"],r.color=$["off"])):(r.logo=j["auto_on"],r.color=$["on"],e&&(r.logo=j["auto_on"],r.color=$["on"])):"个性响铃"===s&&(1===t.alert_spec?(r.logo=j["set_on"],r.color=$["on"]):(r.logo=" ",r.color=" ",e&&(r.logo=j["set_off"],r.color=$["off"]))),r},handleSetOpttriger:function(t,e,r){return n["b"](this,void 0,void 0,function(){var s,o,a,i,l,u;return n["e"](this,function(n){switch(n.label){case 0:return s="自动响铃"===this.$store.state.list.tips_switch,o=0===t.alert?1:0,s?[4,Object(c["M"])({exchange:t.e,account:t.a,symbol:t.s,alert:o})]:[3,2];case 1:return a=n.sent(),[3,4];case 2:return i=Number(this.opt_triger.alert_value),isNaN(i)?(this.$Notice.error({title:"请输入有效值!"}),[2]):(this.show_opt_triger=!this.show_opt_triger,this.show_opt_triger?(this.opt_triger.alert_spec=!!t.alert_spec,this.opt_triger.alert_value=t.alert_value,this.opt_triger.item=t,this.opt_triger.key=e,this.opt_triger.index=r,[2]):[4,Object(c["N"])({exchange:t.e,account:t.a,symbol:t.s,alert_spec:Number(this.opt_triger.alert_spec),alert_type:"calory",alert_value:i})]);case 3:a=n.sent(),n.label=4;case 4:return l=a.error_num,u=a.msg,l?this.$Notice.error({title:u}):s?this.lists[e][r].alert=o:(this.lists[e][r].alert_spec=Number(this.opt_triger.alert_spec),this.lists[e][r].alert_value=Number(this.opt_triger.alert_value)),[2]}})})},start_color:function(t){var e,r=this.disable_star();return e="X"===t.marked?"var(--blue)":"var(--textcolor)",r&&(e="var(--textcolor)"),e},disable_star:function(){var t=!1,e=Object(l["f"])();switch(e){case l["g"][0]:t=!0;break;case l["g"][1]:t=!1;break;case l["g"][2]:t=!1;break}return t},handleDesyoty:function(t){t||(this.modal.component=null)},handleshowBalance:function(t){return n["b"](this,void 0,void 0,function(){var e,r,s;return n["e"](this,function(o){return e=t[0],r=e.exchange,s=e.account,this.modal.title="余额",this.modal.component=d["default"],this.modal.data={exchange:r,account:s},this.modal.show=!0,[2]})})},handKcolor:function(t){var e=null,r=[{key:-3,value:"var(--red)"},{key:-2,value:"var(--pink)"},{key:-1,value:"var(--lightPink)"},{key:0,value:"var(--textcolor)"},{key:1,value:"var(--lightGreen)"},{key:2,value:"var(--greenbg)"},{key:3,value:"var(--green)"}];if(t&&t.ks){var s=function(e){return e.key===t.ks};e=r.find(s),e&&(e=e.value)}return e},handleShowPop:function(){return n["b"](this,void 0,void 0,function(){return n["e"](this,function(t){return[2]})})},handleSetting:function(){return n["b"](this,void 0,void 0,function(){var t,e,r,s;return n["e"](this,function(o){switch(o.label){case 0:return t=null,[4,Object(c["w"])({})];case 1:return e=o.sent(),r=e.error_num,s=e.setting,r||(t=s),[2,t]}})})},handleKstate:function(t){return n["b"](this,void 0,void 0,function(){var e,r,s,o;return n["e"](this,function(n){switch(n.label){case 0:return this.kstateshow=!0,this.kstateitem=t,e={exchange:t.exchange,account:t.account,t_type:t.t_type,symbol:t.symbol},[4,Object(c["D"])(e)];case 1:return r=n.sent(),s=r.code,o=r.kstate,r.msg,s||(this.kstate=o),[2]}})})},computd_amplitude:function(t){var e="",r=t[1],s=t[2];return r&&(e=(100*(r/s-1)).toFixed(2)),e},handleShare:function(t,e){return n["b"](this,void 0,void 0,function(){var t,s,o,a,i,l,c;return n["e"](this,function(n){switch(n.label){case 0:return this.share.loading=!0,t=r("d055"),this.$route.fullPath,s=document.documentElement.style.getPropertyValue("--menu_bg_color").trim(),o=document.documentElement.style.getPropertyValue("--textcolor").trim(),[4,t.toDataURL(document.location.href,{width:256,height:256,colorDark:s,colorLight:o})];case 1:return a=n.sent(),this.share.qr_html="<Divider/><img src="+a+" />",window.getSelection(),document.createRange(),i=this.$refs["content"+e],[4,html2canvas(i[0].$el)];case 2:return l=n.sent(),c=l.toDataURL("image/png"),this.share.qr_html="",this.share.show=!0,this.share.image=c,this.share.loading=!1,[2]}})})},tipsObj:function(t){var e="var(--red)",r=([0].some(function(e){return e===t}),[1,5,12,16].some(function(e){return e===t})),s=[2,6,11,15].some(function(e){return e===t}),o=[3,7,10,14].some(function(e){return e===t}),n=[4,8,9,13].some(function(e){return e===t});return e=r?"var(--green)":s?"var(--lightGreen)":o?"var(--pink)":n?"var(--red)":"var(--bgcolor)",e},tipsObj1:function(t){if("number"!==typeof t)return{};var e="var(--red)",r=[1].some(function(e){return e===t}),s=[2].some(function(e){return e===t}),o=[3].some(function(e){return e===t}),n=[4].some(function(e){return e===t});return e=r?"var(--green)":s?"var(--lightGreen)":o?"var(--lightPink)":n?"var(--red)":"var(--bgcolor)",e},tipsObj2:function(t){var e="";return t=Number(t),-1===t?e="var(--red)":0===t?e="white":1===t&&(e="var(--green)"),e},handleRouter:function(t,e,r){this.handleKstate(t)},handleShow:function(t){return n["b"](this,void 0,void 0,function(){var e,r,s,o,a,i,l;return n["e"](this,function(n){switch(n.label){case 0:return this.os.isPc?[3,1]:(this.$router.push({path:"/trade",query:{_symbol:t.brief+"_"+t.symbol}}),[3,3]);case 1:return e=t.exchange,r=t.account,s=t.symbol,[4,Object(c["F"])({exchange:e,account:r,symbol:s})];case 2:o=n.sent(),a=o.kstate,i=o.msg,l=o.error_num,l?this.$Notice.error({title:i}):this.kstate=a,n.label=3;case 3:return[2]}})})},price_filter:function(t){var e=t.p1m,r=t.p,s=n["f"](t,["p1m","p"]),o=e?(100*(r/e-1)).toFixed(2):0,a="var(--textcolor)",i={color:a,"font-weight":"inherit"};o>=.5&&(a="var(--green)",i={color:a,"font-weight":"bold"}),o<=-.5&&(a="var(--red)",i={color:a,"font-weight":"bold"});var l=this.styleObject(n["a"]({p1m:e,p:r},s)).background;return"var(--bgcolor)"!==l&&-.5<o&&o<.5&&(i.color="var(--black)"),i},handleChangeVolume:function(t){this.o_audio.setvolume(t/100)},handleTheme:function(t){var e=new h["a"];t?e.changedark():e.changedaily()},handleSwitch:function(t){t?this.o_audio.open():this.o_audio.close()},content:function(t){var e="";return t.pct&&(e="价格："+Number(t.p).toFixed(t.tickSize)+" "+t.quoteAsset+"\n\r当日涨跌幅："+this.point_from(t.pct)+"%\n\r60秒滚动涨跌幅："+(100*(t.p/t.p1m-1)).toFixed(2)+"%\n\r60秒滚动交易量："+Math.floor(t.p*t.q*t.qp).toLocaleString()+" USDT\n\r60秒平均交易量："+Math.floor(t.p*t.q24*t.qp).toLocaleString()+" USDT"),e},contenthtml:function(t){var e="";return t&&(e=" <h4 style='display: flex;justify-content:space-between;align-content: center'>\n        <span>价格："+Number(t.p).toFixed(t.tickSize)+" "+t.quoteAsset+"</span>\n         <span>卡路里："+(t.c&&this.point_from(t.c))+"C</span>\n        </h4>\n        "),e},handleCancel:function(t,e,r){var s=t.symbol,o=t.account,a=t.exchange,i=t.id,u=t.marked,h=t.brief;n["f"](t,["symbol","account","exchange","id","marked","brief"]);return n["b"](this,void 0,void 0,function(){var t,e,r,d,f,v,g,_;return n["e"](this,function(n){switch(n.label){case 0:return t=this.$store.state.instant.cursor,e=Object(l["c"])("user"),r={user:e,exchange:a,account:o,symbol:s,brief:h,language:p["kb"]},"X"!==u?[3,2]:[4,Object(c["O"])(r)];case 1:return d=n.sent(),[3,4];case 2:return[4,Object(c["L"])(r)];case 3:d=n.sent(),n.label=4;case 4:return f=d.error_num,d.msg,f?[3,8]:"X"!==u?[3,5]:(v=this.data,g=v.findIndex(function(t){return t.id===i}),v.splice(g,1),this.lists=v,[3,7]);case 5:return[4,Object(c["P"])()];case 6:n.sent(),this.init_params(),n.label=7;case 7:_=this.share.data,"{}"!==JSON.stringify(_)?this.share.data.m="":"X"===this.share.data.m?this.share.data.m="":this.share.data.m="X",i===t.id&&(Object(c["P"])(),this.init_params()),n.label=8;case 8:return[2]}})})},max_qty:function(t){var e=t.qty,r=t.qty24,s=Number(e)>Number(r);return{"font-weight":s?"bold":""}},styleObject:function(t){t.theLast;var e=t.y,r=t.c,s=(t.info_triger,t.msg_triger,t.alert),o=t.alert_spec,n=t.alert_value,a=(t.s,[{key:2,bgcolor:"var(--greenbg)",text:"var(--black)"},{key:1,bgcolor:"var(--lightGreen)",text:"var(--black)"},{key:0,bgcolor:"var(--bgcolor)",text:"var(--textcolor)"},{key:-1,bgcolor:"var(--lightPink)",text:"var(--black)"},{key:-2,bgcolor:"var(--pink)",text:"var(--black)"}]),i="var(--bgcolor)",l="var(--textcolor)",c=function(t){return t.key===e},u=a.find(c);if(u){i=u.bgcolor,l=u.text;var p=this.$store.state.list.tips_switch;"不响铃"!==p&&("自动响铃"===p?0==s&&e&&this.async_play_tips(e):1===o&&0!==n&&(r>0?r>n&&this.async_play_tips(1):r<0&&-1*r>n&&this.async_play_tips(-1)))}return a=null,{color:l,background:i}},async_play_tips:function(t){return n["b"](this,void 0,void 0,function(){var e,r,s,o;return n["e"](this,function(n){if(e=this.$store.state.list.tips_switch,r={"-2":this.up_audio_raise,"-1":this.up_audio,1:this.down_audio,2:this.down_audio_raise},!e){for(s in r)r.hasOwnProperty(s)&&(o=r[s],o.pause());return[2]}return r[""+t].play_tips(t),[2]})})},init_params:function(){return n["b"](this,void 0,void 0,function(){var t,e,r,s,o,a;return n["e"](this,function(n){switch(n.label){case 0:return t=this.$store.state.instant.optionlist,this.data=t,[4,Object(c["g"])()];case 1:return e=n.sent(),r=e.error_num,s=e.msg,o=e.list,0!==r?(this.$Notice.error({title:s}),[2]):(r||(this.exchange=o),a=Number(Object(l["c"])("logId")),this.$store.commit("update_init_logId",a),Object(c["eb"])(),Object(c["a"])({refresh:"X",exchange:"",account:"",symbol:"",brief:"",logId:a}),[2])}})})},point_from:l["h"],exchange_filter:function(t){var e,r=t[0].brief,s=void 0===r?"":r;if(e=this.exchange.find(function(t){return t.brief===s}),e){var o=e.acct_desc,n=o.length>12?o.substring(0,8)+"...":o;return e.brief+" ( "+e.exchange+" - "+n+" )"}},handleSymbol:function(t){this.os.isPc&&window.open("/trade?_symbol="+t.brief+"_"+t.symbol,"_blank")},dragstartEvent:function(t){var e=this;e.dragElement=t.target,t.target.style.backgroundColor="#f8f8f8"},dragendEvent:function(t){t.target.style.backgroundColor="#fff",t.preventDefault()},dragenterEvent:function(t){var e=this;e.dragElement!=t.target&&t.target.parentNode.insertBefore(e.dragElement,t.target)},dragleaveEvent:function(t){var e=this;e.dragElement!=t.target&&(!e.lock||t.target!=t.target.parentNode.lastElementChild&&t.target!=t.target.parentNode.lastChild?e.lock=!0:(t.target.parentNode.appendChild(e.dragElement),e.lock=!1))},dragoverEvent:function(t){t.preventDefault()}},watch:{kstateshow:function(t){t||(this.kstate={})},"$store.state.instant.timer":{deep:!0,handler:function(t){var e=t.calory,r=e;if(r){var s=JSON.parse(JSON.stringify(this.data));s=s.map(function(t,e){return n["a"]({},t,r.find(function(e){return e.id===t.id}))}),this.lists=s,s=null,r=null,this.show=!0}}}},filters:{qty_filter:l["j"],qty24_filter:l["i"],pont_ticksize:function(t){var e,r=t.p,s=(t.baseAsset,t.tickSize);return r&&(e=Number(r).toFixed(s)),e},amplitude_filter:function(t){var e=t>0;return{color:e?"var(--seletedlinghtgreen)":"var(--red)"}},amplitude_filters:function(t){var e="var(--textcolor)",r={color:e,"font-weight":"inherit"};return t>=1&&(e="var(--green)",r={color:e}),t<=-1&&(e="var(--red)",r={color:e}),r},point_from:l["h"],price_filter:function(t){var e=t.p,r=t.p1m;return r?(100*(e/r-1)).toFixed(2):"-"}}}),S=N,q=(r("c745"),Object(w["a"])(S,s,o,!1,null,"07632c90",null));e["default"]=q.exports},f97a:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Row",[r("i-col",{staticClass:"balance"},[r("h3",[t._v("账户余额")]),r("strong",[t._v("\n        资产估值: "+t._s(t.data.vol_b)+" BTC / "+t._s(t.data.vol_u)+" USDT\n      ")])])],1),r("Table",{attrs:{size:"small",columns:t.columns,data:t.data.list,loading:t.loading}})],1)},o=[],n=r("9ab4"),a=r("2b0e"),i=r("f129"),l=r("b1f3"),c=a["default"].extend({props:{params:{type:Object,default:function(){}}},data:function(){return{loading:!1,data:[],columns:[{title:"资产",key:"asset",minWidth:70},{title:"可用",key:"free",minWidth:100},{title:"锁定",key:"locked",minWidth:70},{title:"合计",key:"total",minWidth:100},{title:"BTC",key:"vol_b",minWidth:100},{title:"USDT",key:"vol_u",minWidth:100}],lists:[]}},watch:{"$store.state.instant.timer":{deep:!0,handler:function(t){t.accountBalance&&(this.data=t.accountBalance||[])}}},mounted:function(){this.init_params()},computed:{width:l["u"]},methods:{init_params:function(){return n["b"](this,void 0,void 0,function(){var t,e,r,s,o,a,l;return n["e"](this,function(n){switch(n.label){case 0:return t=this.$store.state.instant.cursor,e=t.exchange,r=t.account,this.loading=!0,s=this.params,e=s&&s.exchange||e,r=s&&s.account||r,[4,Object(i["d"])({exchange:e,account:r})];case 1:return o=n.sent(),a=o.error_num,l=o.list,this.loading=!1,0===a&&(this.data=l),[2]}})})}}}),u=c,p=(r("2d80"),r("2877")),h=Object(p["a"])(u,s,o,!1,null,"4d7b1a38",null);e["default"]=h.exports},fc10:function(t,e,r){}}]);