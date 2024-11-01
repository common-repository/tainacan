"use strict";(self.webpackChunktainacan=self.webpackChunktainacan||[]).push([[9937],{97633:(a,n,t)=>{t.d(n,{A:()=>c});var e=t(6934),i=t(70931),o=t(16994),r=t.n(o);const c={name:"ViewModeMasonry",mixins:[i.l],data:function(){return{masonry:!1,shouldUseLegacyMasonyCols:!1}},watch:{isLoading:{handler:function(){var a=this;this.items&&this.items.length>0&&!this.isLoading&&(0,e.dY)((function(){!1!==a.masonry&&a.masonry.destroy(),a.masonry=new(r())(a.containerId?"#"+a.containerId+" .tainacan-masonry-container":".tainacan-masonry-container",{itemSelector:"li",columnWidth:".tainacan-masonry-grid-sizer",gutter:25,percentPosition:!0})}))},immediate:!0}},created:function(){this.shouldUseLegacyMasonyCols=void 0!==wp&&void 0!==wp.hooks&&wp.hooks.hasFilter("tainacan_use_legacy_masonry_view_mode_cols")&&wp.hooks.applyFilters("tainacan_use_legacy_masonry_view_mode_cols",!1)},beforeUnmount:function(){!1!==this.masonry&&this.masonry.destroy()},methods:{randomHeightForMasonryItem:function(){return Math.floor(261*Math.random()+120)}}}},11936:(a,n,t)=>{t.d(n,{X:()=>u});var e=t(6934),i={class:"table-container"},o={class:"table-wrapper"},r=["data-tainacan-item-id","aria-setsize","aria-posinset"],c=["href"],s=["innerHTML"],l={class:"metadata-title"},m=["innerHTML"],d=["onClick"],y=["innerHTML"];function u(a,n,t,u,p,h){var f=(0,e.g2)("blur-hash-image"),g=(0,e.gN)("tooltip");return(0,e.uX)(),(0,e.CE)("div",i,[(0,e.Lk)("div",o,[(0,e.RG)(a.$slots,"default",{},void 0,!0),a.isLoading?((0,e.uX)(),(0,e.CE)("div",{key:0,class:(0,e.C4)([{"tainacan-masonry-container--legacy":p.shouldUseLegacyMasonyCols},"tainacan-masonry-container--skeleton"])},[((0,e.uX)(),(0,e.CE)(e.FK,null,(0,e.pI)(12,(function(a){return(0,e.Lk)("div",{key:a,style:(0,e.Tr)({"min-height":h.randomHeightForMasonryItem()+"px"}),class:"skeleton"},null,4)})),64))],2)):(0,e.Q3)("",!0),a.isLoading?(0,e.Q3)("",!0):((0,e.uX)(),(0,e.CE)("ul",{key:1,class:(0,e.C4)([{"tainacan-masonry-container--legacy":p.shouldUseLegacyMasonyCols},"tainacan-masonry-container"])},[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(a.items,(function(t,i){return(0,e.uX)(),(0,e.CE)("li",{key:i,"data-tainacan-item-id":t.id,"aria-setsize":a.totalItems,"aria-posinset":a.getPosInSet(i),class:(0,e.C4)({"tainacan-masonry-grid-sizer":0==i})},[(0,e.Lk)("a",{class:"tainacan-masonry-item",href:a.getItemLink(t.url,i)},[a.hasBeforeHook()?((0,e.uX)(),(0,e.CE)("div",{key:0,class:"faceted-search-hook faceted-search-hook-item-before",innerHTML:a.getBeforeHook(t)},null,8,s)):(0,e.Q3)("",!0),(0,e.Lk)("div",l,[(0,e.Lk)("p",{innerHTML:null!=t.title?t.title:""},null,8,m),a.isSlideshowViewModeEnabled?(0,e.bo)(((0,e.uX)(),(0,e.CE)("span",{key:0,class:"icon slideshow-icon",onClick:(0,e.D$)((function(n){return a.starSlideshowFromHere(i)}),["prevent"])},n[0]||(n[0]=[(0,e.Lk)("i",{class:"tainacan-icon tainacan-icon-viewgallery tainacan-icon-1-125em"},null,-1)]),8,d)),[[g,{delay:{show:500,hide:100},content:a.$i18n.get("label_see_on_fullscreen"),placement:"auto-start",popperClass:["tainacan-tooltip","tooltip"]}]]):(0,e.Q3)("",!0)]),null!=t.thumbnail?((0,e.uX)(),(0,e.Wv)(f,{key:1,class:"tainacan-masonry-item-thumbnail",width:a.$thumbHelper.getWidth(t.thumbnail,p.shouldUseLegacyMasonyCols?"tainacan-medium-full":"tainacan-large-full",320),height:a.$thumbHelper.getHeight(t.thumbnail,p.shouldUseLegacyMasonyCols?"tainacan-medium-full":"tainacan-large-full",320),hash:a.$thumbHelper.getBlurhashString(t.thumbnail,p.shouldUseLegacyMasonyCols?"tainacan-medium-full":"tainacan-large-full"),src:a.$thumbHelper.getSrc(t.thumbnail,p.shouldUseLegacyMasonyCols?"tainacan-medium-full":"tainacan-large-full",t.document_mimetype),srcset:a.$thumbHelper.getSrcSet(t.thumbnail,p.shouldUseLegacyMasonyCols?"tainacan-medium-full":"tainacan-large-full",t.document_mimetype),alt:t.thumbnail_alt?t.thumbnail_alt:a.$i18n.get("label_thumbnail"),"transition-duration":500},null,8,["width","height","hash","src","srcset","alt"])):(0,e.Q3)("",!0),a.hasAfterHook()?((0,e.uX)(),(0,e.CE)("div",{key:2,class:"faceted-search-hook faceted-search-hook-item-after",innerHTML:a.getAfterHook(t)},null,8,y)):(0,e.Q3)("",!0)],8,c)],10,r)})),128))],2))])])}},70931:(a,n,t)=>{t.d(n,{l:()=>l});var e=t(55373),i=t.n(e);function o(a){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},o(a)}function r(a,n){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),t.push.apply(t,e)}return t}function c(a){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(a,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(t,n))}))}return a}function s(a,n,t){return(n=function(a){var n=function(a,n){if("object"!=o(a)||!a)return a;var t=a[Symbol.toPrimitive];if(void 0!==t){var e=t.call(a,n||"default");if("object"!=o(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(a)}(a,"string");return"symbol"==o(n)?n:n+""}(n))in a?Object.defineProperty(a,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[n]=t,a}var l={data:function(){return{isSlideshowViewModeEnabled:!1}},props:{collectionId:[String,Number],termId:[String,Number],displayedMetadata:Array,shouldHideItemsThumbnail:Boolean,items:{type:Array,default:function(){return[]},required:!0},isLoading:!1,totalItems:Number,isFiltersMenuCompressed:Boolean,enabledViewModes:Array,containerId:String},computed:{queries:function(){var a=this.$route&&this.$route.query?JSON.parse(JSON.stringify(this.$route.query)):{};return a&&(delete a.view_mode,delete a.fetch_only,delete a.fetch_only_meta),a},titleItemMetadatum:function(){var a=this.displayedMetadata.find((function(a){return a.display&&a.metadata_type_object&&"title"==a.metadata_type_object.related_mapped_prop}));return a||!1},descriptionItemMetadatum:function(){var a=this.displayedMetadata.find((function(a){return a.display&&a.metadata_type_object&&"description"==a.metadata_type_object.related_mapped_prop}));return a||!1}},mounted:function(){this.isSlideshowViewModeEnabled=!(!this.enabledViewModes||!Array.isArray(this.enabledViewModes))&&this.enabledViewModes.findIndex((function(a){return"slideshow"==a}))>=0},methods:{hasBeforeHook:function(){return void 0!==wp&&void 0!==wp.hooks&&(wp.hooks.hasFilter("tainacan_faceted_search_item_before")||wp.hooks.hasFilter("tainacan_faceted_search_collection_".concat(this.collectionId,"_item_before")))},hasAfterHook:function(){return void 0!==wp&&void 0!==wp.hooks&&(wp.hooks.hasFilter("tainacan_faceted_search_collection_item_after")||wp.hooks.hasFilter("tainacan_faceted_search_collection_".concat(this.collectionId,"_item_after")))},getBeforeHook:function(a){return void 0!==wp&&void 0!==wp.hooks?wp.hooks.applyFilters("tainacan_faceted_search_collection_".concat(this.collectionId,"_item_before"),wp.hooks.applyFilters("tainacan_faceted_search_item_before","",a),a):""},getAfterHook:function(a){return void 0!==wp&&void 0!==wp.hooks?wp.hooks.applyFilters("tainacan_faceted_search_collection_".concat(this.collectionId,"_item_after"),wp.hooks.applyFilters("tainacan_faceted_search_item_after","",a),a):""},getItemLink:function(a,n){return this.queries?(this.queries.pos=(this.queries.paged-1)*this.queries.perpage+n,this.queries.source_list=this.termId?"term":this.collectionId&&"default"!=this.collectionId?"collection":"repository",this.$route&&this.$route.href&&this.$route.href.split("?")&&this.$route.href.split("?").length&&(this.queries.ref=this.$route.href),a+"?"+i().stringify(this.queries)):a},renderMetadata:function(a,n,t){var e=!1;if(a&&a.metadata&&null!=a.metadata[n.slug])e=a.metadata[n.slug];else if(n&&n.metadata_type_object&&n.metadata_type_object.core&&n.metadata_type_object.related_mapped_prop&&a[n.metadata_type_object.related_mapped_prop])return a[n.metadata_type_object.related_mapped_prop];if(!e)return"";if(null!=t&&e.value[t]){if(!Array.isArray(e.value[t])&&e.value[t].value_as_html)return e.value[t].value_as_html;if(Array.isArray(e.value[t])){var i="";return e.value[t].forEach((function(a){a.value_as_html&&(i+=a.value_as_html+"<br>")})),i}}return e.value_as_html},starSlideshowFromHere:function(a){var n=this;this.$router&&this.$route&&this.$route.query&&this.$router.replace({query:c(c({},this.$route.query),{"slideshow-from":a})}).catch((function(a){return n.$console.log(a)}))},getPosInSet:function(a){if(!isNaN(Number(this.queries.paged))&&!isNaN(Number(this.queries.perpage)))return(Number(this.queries.paged)-1)*Number(this.queries.perpage)+a+1}}}},78933:(a,n,t)=>{t.d(n,{A:()=>c});var e=t(31601),i=t.n(e),o=t(76314),r=t.n(o)()(i());r.push([a.id,".theme-items-list .tainacan-masonry-container[data-v-1f77e839],.theme-items-list .tainacan-masonry-container--skeleton[data-v-1f77e839],.items-list-area .tainacan-masonry-container[data-v-1f77e839],.items-list-area .tainacan-masonry-container--skeleton[data-v-1f77e839]{min-height:50vh}@supports (contain: inline-size){.table-wrapper[data-v-1f77e839]:has(.tainacan-masonry-container),.table-wrapper[data-v-1f77e839]:has(.tainacan-masonry-container--skeleton){container-type:inline-size;container-name:tablewrapper}}.tainacan-masonry-container[data-v-1f77e839]{list-style:none;margin-left:25px;padding:0;display:flex;flex-wrap:wrap;flex-grow:1;flex-shrink:1;justify-content:space-evenly;list-style:none;animation-name:appear;animation-duration:0.5s}.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>li[data-v-1f77e839],.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>.tainacan-masonry-grid-sizer[data-v-1f77e839]{list-style-type:none;width:calc(12.5% - 25px)}@container tablewrapper (max-width: 2380px){.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>li[data-v-1f77e839],.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>.tainacan-masonry-grid-sizer[data-v-1f77e839]{width:calc(14.285% - 25px)}}@container tablewrapper (max-width: 1980px){.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>li[data-v-1f77e839],.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>.tainacan-masonry-grid-sizer[data-v-1f77e839]{width:calc(16.666% - 25px)}}@container tablewrapper (max-width: 1480px){.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>li[data-v-1f77e839],.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>.tainacan-masonry-grid-sizer[data-v-1f77e839]{width:calc(20% - 25px)}}@container tablewrapper (max-width: 1240px){.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>li[data-v-1f77e839],.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>.tainacan-masonry-grid-sizer[data-v-1f77e839]{width:calc(25% - 25px)}}@container tablewrapper (max-width: 940px){.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>li[data-v-1f77e839],.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>.tainacan-masonry-grid-sizer[data-v-1f77e839]{width:calc(33.333% - 25px)}}@container tablewrapper (max-width: 720px){.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>li[data-v-1f77e839],.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>.tainacan-masonry-grid-sizer[data-v-1f77e839]{width:calc(50% - 25px)}}@container tablewrapper (max-width: 380px){.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>li[data-v-1f77e839],.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>.tainacan-masonry-grid-sizer[data-v-1f77e839]{width:calc(100% - 25px)}}@supports not (contain: inline-size){.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>li[data-v-1f77e839],.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>.tainacan-masonry-grid-sizer[data-v-1f77e839]{width:calc(14.285% - 25px)}@media screen and (max-width: 2560px){.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>li[data-v-1f77e839],.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>.tainacan-masonry-grid-sizer[data-v-1f77e839]{width:calc(16.666% - 25px)}}@media screen and (max-width: 1920px){.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>li[data-v-1f77e839],.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>.tainacan-masonry-grid-sizer[data-v-1f77e839]{width:calc(20% - 25px)}}@media screen and (max-width: 1740px){.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>li[data-v-1f77e839],.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>.tainacan-masonry-grid-sizer[data-v-1f77e839]{width:calc(25% - 25px)}}@media screen and (max-width: 1440px){.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>li[data-v-1f77e839],.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>.tainacan-masonry-grid-sizer[data-v-1f77e839]{width:calc(33.333% - 25px)}}@media screen and (max-width: 1024px){.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>li[data-v-1f77e839],.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>.tainacan-masonry-grid-sizer[data-v-1f77e839]{width:calc(50% - 25px)}}@media screen and (max-width: 620px){.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>li[data-v-1f77e839],.tainacan-masonry-container:not(.tainacan-masonry-container--legacy)>.tainacan-masonry-grid-sizer[data-v-1f77e839]{width:calc(100% - 25px)}}}.tainacan-masonry-container.tainacan-masonry-container--legacy>li[data-v-1f77e839],.tainacan-masonry-container.tainacan-masonry-container--legacy>.tainacan-masonry-grid-sizer[data-v-1f77e839]{list-style-type:none;width:calc(14.285% - 25px)}@media screen and (max-width: 1920px){.tainacan-masonry-container.tainacan-masonry-container--legacy>li[data-v-1f77e839],.tainacan-masonry-container.tainacan-masonry-container--legacy>.tainacan-masonry-grid-sizer[data-v-1f77e839]{width:calc(16.666% - 25px)}}@media screen and (max-width: 1440px){.tainacan-masonry-container.tainacan-masonry-container--legacy>li[data-v-1f77e839],.tainacan-masonry-container.tainacan-masonry-container--legacy>.tainacan-masonry-grid-sizer[data-v-1f77e839]{width:calc(20% - 25px)}}@media screen and (max-width: 1360px){.tainacan-masonry-container.tainacan-masonry-container--legacy>li[data-v-1f77e839],.tainacan-masonry-container.tainacan-masonry-container--legacy>.tainacan-masonry-grid-sizer[data-v-1f77e839]{width:calc(25% - 25px)}}@media screen and (max-width: 1024px){.tainacan-masonry-container.tainacan-masonry-container--legacy>li[data-v-1f77e839],.tainacan-masonry-container.tainacan-masonry-container--legacy>.tainacan-masonry-grid-sizer[data-v-1f77e839]{width:calc(33.333% - 25px)}}@media screen and (max-width: 768px){.tainacan-masonry-container.tainacan-masonry-container--legacy>li[data-v-1f77e839],.tainacan-masonry-container.tainacan-masonry-container--legacy>.tainacan-masonry-grid-sizer[data-v-1f77e839]{width:calc(50% - 25px)}}.tainacan-masonry-container .tainacan-masonry-item[data-v-1f77e839]{display:block;width:100%;flex-basis:0;margin-bottom:var(--tainacan-container-padding);text-align:center;text-decoration:none;transition:background-color 0.2s ease}.tainacan-masonry-container .tainacan-masonry-item[data-v-1f77e839] img{height:auto;max-width:100%}.tainacan-masonry-container .tainacan-masonry-item[data-v-1f77e839]:hover:not(.skeleton){background-color:var(--tainacan-item-heading-hover-background-color)}.tainacan-masonry-container .tainacan-masonry-item.selected-masonry-item[data-v-1f77e839]:not(.skeleton){background-color:var(--tainacan-turquoise1)}.tainacan-masonry-container .tainacan-masonry-item[data-v-1f77e839]:not(.skeleton){background-color:var(--tainacan-item-background-color)}.tainacan-masonry-container .tainacan-masonry-item .masonry-item-checkbox[data-v-1f77e839]{position:absolute;margin-top:8px;margin-left:1em;z-index:9}.tainacan-masonry-container .tainacan-masonry-item .actions-area[data-v-1f77e839]{position:relative;float:right;width:100%;height:0px;display:flex;justify-content:flex-end;visibility:hidden;overflow:hidden;opacity:0;padding:2px 8px;transition:visibility 0.2s, opacity 0.2s;margin-top:0px;background-color:var(--tainacan-item-heading-hover-background-color);transition:visibility 0.2s ease, opacity 0.2s ease, height 0.2s ease, margin-top 0.2s ease}.tainacan-masonry-container .tainacan-masonry-item .actions-area a[data-v-1f77e839]{margin-left:12px;opacity:0;transition:opacity 0.3s ease-in}.tainacan-masonry-container .tainacan-masonry-item:hover .actions-area[data-v-1f77e839]{visibility:visible;opacity:1.0;height:32px;margin-top:-30px;background-color:var(--tainacan-item-heading-hover-background-color)}.tainacan-masonry-container .tainacan-masonry-item:hover .actions-area a[data-v-1f77e839]{opacity:1}.tainacan-masonry-container .tainacan-masonry-item.selected-masonry-item .actions-area[data-v-1f77e839]{background-color:var(--tainacan-turquoise1)}.tainacan-masonry-container .tainacan-masonry-item .tainacan-masonry-item-thumbnail[data-v-1f77e839]{background-size:cover;background-color:var(--tainacan-gray0);background-blend-mode:multiply;border-radius:0px}.tainacan-masonry-container .tainacan-masonry-item .tainacan-masonry-item-thumbnail[data-v-1f77e839]:hover{cursor:pointer}.tainacan-masonry-container .tainacan-masonry-item .tainacan-masonry-item-thumbnail img[data-v-1f77e839]{width:100%;height:auto;transition:height 0.2s ease;display:block}.tainacan-masonry-container .tainacan-masonry-item .metadata-title[data-v-1f77e839]{flex-shrink:0;margin:0px 6px 0px 24px;padding:8px 1em;min-height:calc(1em + 8px);cursor:pointer;position:relative}.tainacan-masonry-container .tainacan-masonry-item .metadata-title p[data-v-1f77e839]{font-size:0.875em !important;color:var(--tainacan-heading-color) !important;text-align:left !important;margin-bottom:0 !important;line-height:1.875em;word-break:break-word;margin:0}.tainacan-masonry-container .tainacan-masonry-item .metadata-title .slideshow-icon[data-v-1f77e839]{color:var(--tainacan-info-color);position:absolute;right:7px;top:9px;transform:scale(0);transition:transform 0.2s ease}.tainacan-masonry-container .tainacan-masonry-item .metadata-title .icon[data-v-1f77e839]:not(.slideshow-icon){float:left;margin-top:1px}.tainacan-masonry-container .tainacan-masonry-item:hover .slideshow-icon[data-v-1f77e839],.tainacan-masonry-container .tainacan-masonry-item:focus .slideshow-icon[data-v-1f77e839]{transform:scale(1)}.tainacan-masonry-container.hide-items-selection .tainacan-masonry-item[data-v-1f77e839]:hover{background-color:transparent;cursor:default}.tainacan-masonry-container.hide-items-selection .tainacan-masonry-item:hover .tainacan-masonry-item-thumbnail[data-v-1f77e839]{cursor:default}.tainacan-masonry-container.hide-items-selection .tainacan-masonry-item .metadata-title[data-v-1f77e839]{margin-left:6px}.tainacan-masonry-container--skeleton[data-v-1f77e839]{display:block;padding-left:25px;padding-right:25px;column-gap:25px;height:auto !important}.tainacan-masonry-container--skeleton .skeleton[data-v-1f77e839]{width:100%;margin-bottom:25px;break-inside:avoid}.tainacan-masonry-container--skeleton[data-v-1f77e839]:not(.tainacan-masonry-container--legacy){column-count:8}@container tablewrapper (max-width: 2380px){.tainacan-masonry-container--skeleton[data-v-1f77e839]:not(.tainacan-masonry-container--legacy){column-count:7}}@container tablewrapper (max-width: 1980px){.tainacan-masonry-container--skeleton[data-v-1f77e839]:not(.tainacan-masonry-container--legacy){column-count:6}}@container tablewrapper (max-width: 1480px){.tainacan-masonry-container--skeleton[data-v-1f77e839]:not(.tainacan-masonry-container--legacy){column-count:5}}@container tablewrapper (max-width: 1240px){.tainacan-masonry-container--skeleton[data-v-1f77e839]:not(.tainacan-masonry-container--legacy){column-count:4}}@container tablewrapper (max-width: 940px){.tainacan-masonry-container--skeleton[data-v-1f77e839]:not(.tainacan-masonry-container--legacy){column-count:3}}@container tablewrapper (max-width: 720px){.tainacan-masonry-container--skeleton[data-v-1f77e839]:not(.tainacan-masonry-container--legacy){column-count:2}}@container tablewrapper (max-width: 380px){.tainacan-masonry-container--skeleton[data-v-1f77e839]:not(.tainacan-masonry-container--legacy){column-count:1}}@supports not (contain: inline-size){.tainacan-masonry-container--skeleton[data-v-1f77e839]:not(.tainacan-masonry-container--legacy){column-count:7}@media screen and (max-width: 2560px){.tainacan-masonry-container--skeleton[data-v-1f77e839]:not(.tainacan-masonry-container--legacy){column-count:6}}@media screen and (max-width: 1920px){.tainacan-masonry-container--skeleton[data-v-1f77e839]:not(.tainacan-masonry-container--legacy){column-count:5}}@media screen and (max-width: 1740px){.tainacan-masonry-container--skeleton[data-v-1f77e839]:not(.tainacan-masonry-container--legacy){column-count:4}}@media screen and (max-width: 1440px){.tainacan-masonry-container--skeleton[data-v-1f77e839]:not(.tainacan-masonry-container--legacy){column-count:3}}@media screen and (max-width: 1024px){.tainacan-masonry-container--skeleton[data-v-1f77e839]:not(.tainacan-masonry-container--legacy){column-count:2}}@media screen and (max-width: 620px){.tainacan-masonry-container--skeleton[data-v-1f77e839]:not(.tainacan-masonry-container--legacy){column-count:1}}}.tainacan-masonry-container--skeleton.tainacan-masonry-container--legacy[data-v-1f77e839]{column-count:7}@media screen and (max-width: 1920px){.tainacan-masonry-container--skeleton.tainacan-masonry-container--legacy[data-v-1f77e839]{column-count:6}}@media screen and (max-width: 1440px){.tainacan-masonry-container--skeleton.tainacan-masonry-container--legacy[data-v-1f77e839]{column-count:5}}@media screen and (max-width: 1360px){.tainacan-masonry-container--skeleton.tainacan-masonry-container--legacy[data-v-1f77e839]{column-count:4}}@media screen and (max-width: 1024px){.tainacan-masonry-container--skeleton.tainacan-masonry-container--legacy[data-v-1f77e839]{column-count:3}}@media screen and (max-width: 768px){.tainacan-masonry-container--skeleton.tainacan-masonry-container--legacy[data-v-1f77e839]{column-count:2}}.tainacan-masonry-container .tainacan-masonry-item .metadata-title[data-v-1f77e839]{margin:0px 3px}\n",""]);const c=r},99744:(a,n,t)=>{var e=t(85072),i=t.n(e),o=t(97825),r=t.n(o),c=t(77659),s=t.n(c),l=t(55056),m=t.n(l),d=t(10540),y=t.n(d),u=t(63494),p=t.n(u),h=t(78933),f={};f.styleTagTransform=p(),f.setAttributes=m(),f.insert=s().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=y();i()(h.A,f),h.A&&h.A.locals&&h.A.locals},59937:(a,n,t)=>{t.r(n),t.d(n,{default:()=>o});var e=t(38131),i=t(14974);t(6569);const o=(0,t(66262).A)(i.A,[["render",e.X],["__scopeId","data-v-1f77e839"]])},14974:(a,n,t)=>{t.d(n,{A:()=>e.A});var e=t(97633)},38131:(a,n,t)=>{t.d(n,{X:()=>e.X});var e=t(11936)},6569:(a,n,t)=>{t(99744)}}]);