(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ad9eac1"],{"615b":function(t,e,s){},"6ece":function(t,e,s){},"7a74":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-footer",{attrs:{app:"",inset:"",padless:"",absolute:""}},[s("v-container",{class:1==this.$vuetify.theme.dark?"grey darken-4":"grey lighten-4",attrs:{fluid:""}},[s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{md:"10",sm:"11",xl:"10",cols:"12"}},[s("v-card-text",{staticClass:"mx-0 px-0",staticStyle:{height:"40px",position:"relative"}},[s("v-fab-transition",[s("v-btn",{staticStyle:{"margin-top":"-20px"},attrs:{"aria-label":"FAB Button",color:this.$vuetify.theme.dark?"#FF6F00":"white",dark:!!this.$vuetify.theme.dark,absolute:"",top:"",right:"",fab:""},on:{click:t.toTop}},[s("v-icon",[t._v("mdi-chevron-up")])],1)],1),s("h1",{staticClass:"google-font",class:1==t.$vuetify.theme.dark?"white--text":"grey--text text--darken-2"},[t._v("TFUG India Summit 2020")])],1)],1)],1),s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{md:"5",sm:"11",xl:"10",cols:"12"}},[s("a",{staticClass:"mr-3 google-font",class:1==t.$vuetify.theme.dark?"white--text":"grey--text text--darken-3",staticStyle:{"text-decoration":"none"},attrs:{href:"https://tensorflow.org/",target:"_blank",rel:"noreferrer"}},[t._v(" TensorFlow ")]),s("a",{staticClass:"mr-3 google-font",class:1==t.$vuetify.theme.dark?"white--text":"grey--text text--darken-3",staticStyle:{"text-decoration":"none"},attrs:{href:"https://developers.google.com",target:"_blank",rel:"noreferrer"}},[t._v(" Google Developers ")])]),s("v-col",{staticStyle:{"text-align":"right"},attrs:{md:"5",sm:"11",xl:"10",cols:"12"}},[s("router-link",{staticClass:"mr-3 google-font",class:1==t.$vuetify.theme.dark?"white--text":"grey--text text--darken-3",staticStyle:{"text-decoration":"none"},attrs:{to:"/faq",rel:"noreferrer"}},[t._v(" FAQ ")]),s("a",{staticClass:"mr-2 google-font",class:1==t.$vuetify.theme.dark?"white--text":"grey--text text--darken-3",staticStyle:{"text-decoration":"none"},attrs:{href:"https://www.instagram.com/tfugindia/",target:"_blank",rel:"noreferrer"}},[t._v(" Instgram ")]),s("a",{staticClass:"mr-2 google-font",class:1==t.$vuetify.theme.dark?"white--text":"grey--text text--darken-3",staticStyle:{"text-decoration":"none"},attrs:{href:"https://twitter.com/TFUGIndia",target:"_blank",rel:"noreferrer"}},[t._v(" Twitter ")]),s("a",{staticClass:"mr-2 google-font",class:1==t.$vuetify.theme.dark?"white--text":"grey--text text--darken-3",staticStyle:{"text-decoration":"none"},attrs:{href:"https://www.youtube.com/channel/UCQwfKyTWgagok-oX7sCgUmA/",target:"_blank",rel:"noreferrer"}},[t._v(" YouTube ")]),s("a",{staticClass:"mr-2 google-font",class:1==t.$vuetify.theme.dark?"white--text":"grey--text text--darken-3",staticStyle:{"text-decoration":"none"},attrs:{href:"https://www.facebook.com/TFUGIndia",target:"_blank",rel:"noreferrer"}},[t._v(" Facebook ")])],1)],1)],1)],1)},a=[],i={name:"Footer",methods:{toTop:function(){this.$vuetify.goTo(0)}}},o=i,n=s("2877"),l=s("6544"),c=s.n(l),h=s("8336"),d=s("99d9"),u=s("62ad"),g=s("a523"),f=s("0789"),p=(s("b5b6"),s("3a66")),m=s("8dd9"),v=s("d10f"),b=s("58df"),y=s("80d2"),_=Object(b["a"])(m["a"],Object(p["a"])("footer",["height","inset"]),v["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tile:{type:Boolean,default:!0}},computed:{applicationProperty(){return this.inset?"insetFooter":"footer"},classes(){return{...m["a"].options.computed.classes.call(this),"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset}},computedBottom(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned(){return Boolean(this.absolute||this.fixed||this.app)},styles(){const t=parseInt(this.height);return{...m["a"].options.computed.styles.call(this),height:isNaN(t)?t:Object(y["f"])(t),left:Object(y["f"])(this.computedLeft),right:Object(y["f"])(this.computedRight),bottom:Object(y["f"])(this.computedBottom)}}},methods:{updateApplication(){const t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render(t){const e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t("footer",e,this.$slots.default)}}),k=s("132d"),x=s("0fd9"),B=Object(n["a"])(o,r,a,!1,null,null,null);e["default"]=B.exports;c()(B,{VBtn:h["a"],VCardText:d["b"],VCol:u["a"],VContainer:g["a"],VFabTransition:f["c"],VFooter:_,VIcon:k["a"],VRow:x["a"]})},"99d9":function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return n}));var r=s("b0af"),a=s("80d2");const i=Object(a["g"])("v-card__actions"),o=Object(a["g"])("v-card__subtitle"),n=Object(a["g"])("v-card__text"),l=Object(a["g"])("v-card__title");r["a"]},b0af:function(t,e,s){"use strict";s("615b");var r=s("10d2"),a=s("2b0e"),i=(s("6ece"),s("0789")),o=s("a9ad"),n=s("fe6c"),l=s("a452"),c=s("7560"),h=s("80d2"),d=s("58df");const u=Object(d["a"])(o["a"],Object(n["b"])(["absolute","fixed","top","bottom"]),l["a"],c["a"]);var g=u.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(h["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(h["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,[this.$vuetify.rtl?"right":"left"]:Object(h["f"])(this.normalizedValue,"%"),width:Object(h["f"])(this.normalizedBuffer-this.normalizedValue,"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,...this.themeClasses}},computedTransition(){return this.indeterminate?i["d"]:i["e"]},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(h["f"])(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=Object(h["j"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(h["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),f=g,p=a["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(f,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),m=s("1c87");e["a"]=Object(d["a"])(p,m["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes(){return{"v-card":!0,...m["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped,...r["a"].options.computed.classes.call(this)}},styles(){const t={...r["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=p.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},b5b6:function(t,e,s){}}]);
//# sourceMappingURL=chunk-6ad9eac1.7befdac7.js.map