"use strict";(self.webpackChunktainacan=self.webpackChunktainacan||[]).push([[8868],{45804:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==n(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{A:()=>l});const l={name:"ImporterEditionForm",data:function(){return{availableImporters:[],isLoading:!1}},created:function(){var e=this;this.isLoading=!0,this.fetchAvailableImporters().then((function(t){e.availableImporters=t,e.isLoading=!1})).catch((function(t){e.$console.log(t),e.isLoading=!1}))},methods:i(i({},(0,r(40834).i0)("importer",["fetchAvailableImporters"])),{},{onSelectImporter:function(e){this.$router.push(this.$routerHelper.getImporterEditionPath(e.slug))}})}},69795:(e,t,r)=>{r.d(t,{X:()=>l});var n=r(6934),o={class:"repository-level-page page-container"},i={class:"importer-types-container"},a=["onClick"];function l(e,t,r,l,c,s){var u=(0,n.g2)("tainacan-title"),p=(0,n.g2)("b-loading");return(0,n.uX)(),(0,n.CE)("div",o,[(0,n.bF)(u,{"bread-crumb-items":[{path:"",label:e.$i18n.get("importers")}]},null,8,["bread-crumb-items"]),(0,n.Lk)("h3",null,(0,n.v_)(e.$i18n.get("label_available_importers")),1),(0,n.Lk)("p",null,(0,n.v_)(e.$i18n.get("instruction_select_an_importer_type")),1),(0,n.Lk)("div",i,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(c.availableImporters,(function(e){return(0,n.uX)(),(0,n.CE)("div",{key:e.slug,class:"importer-type",onClick:function(t){return s.onSelectImporter(e)}},[(0,n.Lk)("h4",null,(0,n.v_)(e.name),1),(0,n.Lk)("p",null,(0,n.v_)(e.description),1)],8,a)})),128))]),(0,n.bF)(p,{modelValue:c.isLoading,"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.isLoading=e}),"can-cancel":!1},null,8,["modelValue"])])}},26988:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(31601),o=r.n(n),i=r(76314),a=r.n(i)()(o());a.push([e.id,".importer-types-container[data-v-0abd329e]{display:flex;flex-wrap:wrap}.importer-types-container .importer-type[data-v-0abd329e]{border:1px solid var(--tainacan-gray2);padding:15px;margin:20px;cursor:pointer;max-width:20%;flex-grow:1;flex-basis:20%;transition:border 0.3s ease}.importer-types-container .importer-type[data-v-0abd329e]:hover{border:1px solid var(--tainacan-gray3)}\n",""]);const l=a},96901:(e,t,r)=>{var n=r(85072),o=r.n(n),i=r(97825),a=r.n(i),l=r(77659),c=r.n(l),s=r(55056),u=r.n(s),p=r(10540),b=r.n(p),d=r(63494),m=r.n(d),f=r(26988),y={};y.styleTagTransform=m(),y.setAttributes=u(),y.insert=c().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=b();o()(f.A,y),f.A&&f.A.locals&&f.A.locals},68868:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(65184),o=r(3491);r(34664);const i=(0,r(66262).A)(o.A,[["render",n.X],["__scopeId","data-v-0abd329e"]])},3491:(e,t,r)=>{r.d(t,{A:()=>n.A});var n=r(45804)},65184:(e,t,r)=>{r.d(t,{X:()=>n.X});var n=r(69795)},34664:(e,t,r)=>{r(96901)}}]);