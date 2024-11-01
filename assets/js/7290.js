"use strict";(self.webpackChunktainacan=self.webpackChunktainacan||[]).push([[7290,4909],{45739:(e,t,a)=>{a.d(t,{A:()=>f});var n=a(75552),r=a(40834),i=a(55373),s=a.n(i);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function u(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return l(e,t);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?l(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var _n=0,n=function(){};return{s:n,n:function(){return _n>=e.length?{done:!0}:{done:!1,value:e[_n++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return i=e.done,e},e:function(e){s=!0,r=e},f:function(){try{i||null==a.return||a.return()}finally{if(s)throw r}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=Array(t);a<t;a++)n[a]=e[a];return n}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){m(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t,a){return(t=function(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==o(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const f={props:{itemMetadatum:Object,maxtags:void 0,disabled:!1,allowNew:!0,isLastMetadatum:!1},emits:["update:value","blur","mobile-special-focus"],data:function(){return{selected:[],options:[],isLoading:!1,usersSearchQuery:"",usersSearchPage:1,totalUsers:0}},computed:{maxMultipleValues:function(){return this.itemMetadatum&&this.itemMetadatum.metadatum&&this.itemMetadatum.metadatum.cardinality&&!isNaN(this.itemMetadatum.metadatum.cardinality)&&this.itemMetadatum.metadatum.cardinality>1?this.itemMetadatum.metadatum.cardinality:void 0}},created:function(){this.loadCurrentUsers()},methods:d(d({},(0,r.i0)("activity",["fetchUsers"])),{},{onInput:function(e){this.selected=e,this.$emit("update:value",this.selected.map((function(e){return e.id||e.value})))},onBlur:function(){this.$emit("blur")},loadCurrentUsers:function(){var e=this;if(Array.isArray(this.itemMetadatum.value)&&this.itemMetadatum.value.length||!Array.isArray(this.itemMetadatum.value)&&this.itemMetadatum.value){this.isLoading=!0;var t=s().stringify({include:this.itemMetadatum.value});n.OV.get("/users/?"+t).then((function(t){e.selected=t.data.map((function(e){return{name:e.name,value:e.id,img:e.avatar_urls&&e.avatar_urls[24]?e.avatar_urls[24]:""}})),e.isLoading=!1})).catch((function(){return e.isLoading=!1}))}},search:_.debounce((function(e){var t=this;e!=this.usersSearchQuery&&(this.usersSearchQuery=e,this.options=[],this.usersSearchPage=1),e.length||(this.usersSearchQuery=e,this.options=[],this.usersSearchPage=1),this.usersSearchPage>1&&this.options.length>this.totalUsers||this.selected.length>0&&"no"===this.itemMetadatum.metadatum.multiple||""!==this.usersSearchQuery&&(this.isLoading=!0,this.fetchUsers({search:this.usersSearchQuery,page:this.usersSearchPage,exclude:this.selected.map((function(e){return e.value||e.id}))}).then((function(e){if(e.users){var a,n=u(e.users);try{for(n.s();!(a=n.n()).done;){var r=a.value;t.options.push({name:r.name,value:r.id,img:r.avatar_urls&&r.avatar_urls[24]?r.avatar_urls[24]:""})}}catch(e){n.e(e)}finally{n.f()}}e.totalUsers&&(t.totalUsers=e.totalUsers),t.usersSearchPage++,t.isLoading=!1})).catch((function(e){t.$console.error(e),t.isFetchingPages=!1})))}),500),searchMore:_.debounce((function(){this.search(this.usersSearchQuery)}),250),onMobileSpecialFocus:function(){this.$emit("mobile-special-focus")}})}},75243:(e,t,a)=>{a.d(t,{X:()=>u});var n=a(6934),r={class:"media"},i={key:0,class:"media-left"},s=["src"],o={class:"media-content"};function u(e,t,a,u,l,c){var d=(0,n.g2)("b-taginput");return(0,n.uX)(),(0,n.CE)("div",{class:(0,n.C4)({"is-flex":"yes"!=a.itemMetadatum.metadatum.multiple||null!=a.maxtags})},[(0,n.bF)(d,{id:"tainacan-item-metadatum_id-"+a.itemMetadatum.metadatum.id+(a.itemMetadatum.parent_meta_id?"_parent_meta_id-"+a.itemMetadatum.parent_meta_id:""),expanded:"",disabled:a.disabled,size:"is-small",icon:"account","model-value":JSON.parse(JSON.stringify(l.selected)),data:l.options,maxtags:null!=a.maxtags?a.maxtags:"yes"==a.itemMetadatum.metadatum.multiple||!0===a.allowNew?void 0!==c.maxMultipleValues?c.maxMultipleValues:null:"1",autocomplete:"",attached:"",placeholder:a.itemMetadatum.metadatum.placeholder?a.itemMetadatum.metadatum.placeholder:e.$i18n.get("instruction_type_search_users"),"keep-first":"","open-on-focus":"","remove-on-keys":[],"dropdown-position":a.isLastMetadatum?"top":"auto",loading:l.isLoading||l.isLoading,"aria-close-label":e.$i18n.get("remove_value"),class:(0,n.C4)({"has-selected":null!=l.selected&&l.selected!=[]}),field:"name","check-infinite-scroll":"","has-counter":!1,"onUpdate:modelValue":c.onInput,onBlur:c.onBlur,onTyping:c.search,onFocus:c.onMobileSpecialFocus,onInfiniteScroll:c.searchMore},(0,n.eX)({default:(0,n.k6)((function(e){return[(0,n.Lk)("div",r,[e.option.img?((0,n.uX)(),(0,n.CE)("div",i,[(0,n.Lk)("img",{width:"24",src:e.option.img},null,8,s)])):(0,n.Q3)("",!0),(0,n.Lk)("div",o,(0,n.v_)(e.option.name),1)])]})),tag:(0,n.k6)((function(e){return[(0,n.eW)((0,n.v_)(e.tag&&e.tag.name?e.tag.name:""),1)]})),_:2},[l.isLoading?void 0:{name:"empty",fn:(0,n.k6)((function(){return[(0,n.eW)((0,n.v_)(e.$i18n.get("info_no_user_found")),1)]})),key:"0"}]),1032,["id","disabled","model-value","data","maxtags","placeholder","dropdown-position","loading","aria-close-label","class","onUpdate:modelValue","onBlur","onTyping","onFocus","onInfiniteScroll"])],2)}},98465:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(31601),r=a.n(n),i=a(76314),s=a.n(i)()(r());s.push([e.id,"\ndiv.is-flex[data-v-3d1fe0bf] {\n        justify-content: flex-start;\n}\n",""]);const o=s},56550:(e,t,a)=>{var n=a(85072),r=a.n(n),i=a(97825),s=a.n(i),o=a(77659),u=a.n(o),l=a(55056),c=a.n(l),d=a(10540),m=a.n(d),f=a(63494),h=a.n(f),p=a(98465),y={};y.styleTagTransform=h(),y.setAttributes=c(),y.insert=u().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=m();r()(p.A,y),p.A&&p.A.locals&&p.A.locals},24909:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(54562),r=a(71838);a(99629);const i=(0,a(66262).A)(r.A,[["render",n.X],["__scopeId","data-v-3d1fe0bf"]])},71838:(e,t,a)=>{a.d(t,{A:()=>n.A});var n=a(45739)},54562:(e,t,a)=>{a.d(t,{X:()=>n.X});var n=a(75243)},99629:(e,t,a)=>{a(56550)}}]);