"use strict";(self.webpackChunktainacan=self.webpackChunktainacan||[]).push([[4877],{1954:(i,e,t)=>{t.r(e),t.d(e,{default:()=>u});var n=t(62214),a=t(48300),s=(t(91247),t(73889)),r=t(35189);function o(i){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&"function"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},o(i)}function l(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),t.push.apply(t,n)}return t}function p(i){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){c(i,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(t,e))}))}return i}function c(i,e,t){return(e=h(e))in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function d(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,h(n.key),n)}}function h(i){var e=function(i,e){if("object"!=o(i)||!i)return i;var t=i[Symbol.toPrimitive];if(void 0!==t){var n=t.call(i,e||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(i)}(i,"string");return"symbol"==o(e)?e:e+""}var __=wp.i18n.__;tainacan_plugin.classes.TainacanMediaGallery=function(){return i=function i(e,t,n){!function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),this.thumbs_gallery_selector=e,this.main_gallery_selector=t,this.thumbsSwiper=null,this.mainSwiper=null,this.lightbox=null,this.options=n,this.initializeSwiper(),this.options.disable_lightbox||(this.main_gallery_selector?this.initializePhotoswipe(this.main_gallery_selector+" .swiper-wrapper"):this.thumbs_gallery_selector&&this.initializePhotoswipe(this.thumbs_gallery_selector+" .swiper-wrapper"))},e=[{key:"initializeSwiper",value:function(){if(this.thumbs_gallery_selector){var i={spaceBetween:12,slidesPerView:"auto",watchSlidesProgress:!0,navigation:{nextEl:".swiper-navigation-next_"+this.thumbs_gallery_selector,prevEl:".swiper-navigation-prev_"+this.thumbs_gallery_selector},pagination:{el:".swiper-pagination_"+this.thumbs_gallery_selector},centeredSlides:!0,centeredSlidesBounds:!0,centerInsufficientSlides:!0,slideToClickedSlide:!0,watchOverflow:!0,a11y:{prevSlideMessage:__("Previous slide","tainacan"),nextSlideMessage:__("Next slide","tainacan"),firstSlideMessage:__("This is the first slide","tainacan"),lastSlideMessage:__("This is the last slide","tainacan")},modules:[r.Vx,r.Jq,r.dK],on:{init:function(i){i.el.classList.add("swiper-is-beginning")},slideChange:function(i){i.isBeginning?i.el.classList.add("swiper-is-beginning"):i.el.classList.remove("swiper-is-beginning"),i.isEnd?i.el.classList.add("swiper-is-end"):i.el.classList.remove("swiper-is-end")}}};i=p(p({},i),this.options.swiper_thumbs_options),this.thumbsSwiper=new s.A(this.thumbs_gallery_selector,i)}if(this.main_gallery_selector){var e={slidesPerView:1,slidesPerGroup:1,watchOverflow:!0,a11y:{prevSlideMessage:__("Previous slide","tainacan"),nextSlideMessage:__("Next slide","tainacan"),firstSlideMessage:__("This is the first slide","tainacan"),lastSlideMessage:__("This is the last slide","tainacan")},pagination:{el:".swiper-pagination_"+this.main_gallery_selector,clickable:!0},modules:[r.Vx,r.Jq,r.dK]};if(e=p(p({},e),this.options.swiper_main_options),this.thumbs_gallery_selector&&this.thumbsSwiper&&(e.thumbs={swiper:this.thumbsSwiper,autoScrollOffset:3},e.modules=[r.Vx,r.Jq,r.WO,r.dK]),this.mainSwiper=new s.A(this.main_gallery_selector,e),this.thumbs_gallery_selector&&this.thumbsSwiper&&this.mainSwiper){var t=this.mainSwiper,n=this.thumbsSwiper;this.mainSwiper.on("slideChangeTransitionStart",(function(){n.slideTo(t.activeIndex)}))}}}},{key:"initializePhotoswipe",value:function(i){var e=this,t=document.querySelector(i);t.setAttribute("data-pswp-uid",this.options.media_id);var s=this,r=this.parseThumbnailElements(t),o={loop:!1,preloadFirstSlide:!1,mainClass:"tainacan-photoswipe-layer"+(this.options.lightbox_has_light_background?" has-light-color-scheme":""),bgOpacity:.85,clickToCloseNonZoomable:!1,closeTitle:__("Close lightbox","tainacan"),zoomTitle:__("Zoom","tainacan"),arrowPrevTitle:__("Previous slide","tainacan"),arrowNextTitle:__("Next slide","tainacan"),errorMsg:__("The image cannot be loaded","tainacan"),wheelToZoom:!0,getClickedIndexFn:function(i){return r.findIndex((function(e){return e.el.contains(i.target)}))},paddingFn:function(i,e,t){return{top:e.title&&e.title.name&&!s.options.hide_media_name?60:0,bottom:e.title&&(!s.options.hide_media_caption&&e.title.caption||!s.options.hide_media_description&&e.title.description)?60:0,left:40,right:40}}};this.lightbox=new n.A(p({gallery:t,children:r,pswpModule:a.A},o)),this.lightbox.init();var l=this.mainSwiper?this.mainSwiper:this.thumbsSwiper,c=this.photoswipeParseHash();c.pid&&c.gid&&this.options.media_id==c.gid&&(o.index=parseInt(c.pid,10)-1,!isNaN(o.index)&&r[o.index]&&r[o.index].el&&r[o.index].el.click()),this.lightbox.on("destroy",(function(){var i=document.getElementsByClassName("pswp__container")[0];if(i){var e=i.innerHTML;i.innerHTML="",i.innerHTML=e}})),this.lightbox.on("initialZoomInEnd",(function(){l.params&&l.params.autoplay&&l.params.autoplay.enabled&&l.autoplay.running&&l.autoplay.stop()})),this.lightbox.on("change",(function(){if(s.lightbox.pswp&&!isNaN(s.lightbox.pswp.currIndex)&&s.lightbox.pswp.currIndex>=0){l.slideTo(s.lightbox.pswp.currIndex);var i=window.location.toString();i.indexOf("#")>0?(i=i.substring(0,i.indexOf("#")),window.history.replaceState(window.history.state,"",i+"#gid="+e.options.media_id+"&pid="+(s.lightbox.pswp.currIndex+1))):window.history.pushState(window.history.state,"",i+"#gid="+e.options.media_id+"&pid="+(s.lightbox.pswp.currIndex+1))}})),this.lightbox.on("close",(function(){l.params&&l.params.autoplay&&l.params.autoplay.enabled&&l.autoplay.start();var i=window.location.toString();i.indexOf("#")>0&&window.history.replaceState({},"",i.substring(0,i.indexOf("#")))})),this.lightbox.on("uiRegister",(function(){s.lightbox.pswp.ui.registerElement({name:"name",order:7,isButton:!1,appendTo:"bar",onInit:function(i,e){s.lightbox.pswp.on("change",(function(){var t=e.currSlide.data,n="";t&&t.title&&t.title.name&&!s.options.hide_media_name&&(n+=t.title.name.innerHTML),i.innerHTML=n}))}}),s.lightbox.pswp.ui.registerElement({name:"caption",order:15,isButton:!1,appendTo:"root",onInit:function(i,e){s.lightbox.pswp.on("change",(function(){var t=e.currSlide.data,n="";t&&t.title&&(t.title.caption&&!s.options.hide_media_caption||t.title.description&&!s.options.hide_media_description)&&(n+='<div className="pswp__caption-inner">',t.title.caption&&!s.options.hide_media_caption&&(n+='<span className="pswp__figure_caption">'+t.title.caption.innerHTML+"</span>"),t.title.description&&!s.options.hide_media_description&&(n+='<span className="pswp__description">'+t.title.description.innerHTML+"</span>"),n+="</div>"),i.innerHTML=n}))}})}));var d=t.getElementsByClassName("tainacan-item-file-download");if(d&&d.length)for(var h=0;h<d.length;h++)d[h].addEventListener("click",(function(i){i.stopPropagation()}))}},{key:"parseThumbnailElements",value:function(i){var e=[],t=i.childNodes;return Array.prototype.forEach.call(t,(function(i){if(1===i.nodeType){var t={},n=i.querySelectorAll(".media-full-content *");t=n.length?"IMG"===n[n.length-1].nodeName?{src:(n=n[n.length-1]).src,w:parseInt(n.width),h:parseInt(n.height)}:{html:(n=n[0]).outerHTML?n.outerHTML:n}:{html:n.outerHTML?n.outerHTML:n};var a=i.querySelector(".swiper-slide-metadata");if(a){var s=a.querySelector(".swiper-slide-metadata__name"),r=a.querySelector(".swiper-slide-metadata__caption"),o=a.querySelector(".swiper-slide-metadata__description");t.title={name:s,caption:r,description:o}}else t.title=!1;t.el=i,e.push(t)}})),e}},{key:"photoswipeParseHash",value:function(){var i=window.location.hash.substring(1),e={};if(i.length<5)return e;for(var t=i.split("&"),n=0;n<t.length;n++)if(t[n]){var a=t[n].split("=");a.length<2||(e[a[0]]=a[1])}return e.pid&&(e.pid=parseInt(e.pid,10)),e}}],e&&d(i.prototype,e),t&&d(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i;var i,e,t}();const u=function(i){var e,t;if(i&&i.id&&null!==(e=tainacan_plugin)&&void 0!==e&&null!==(e=e.classes)&&void 0!==e&&e.TainacanMediaGallery&&null!==(t=tainacan_plugin)&&void 0!==t&&t.tainacan_media_components&&tainacan_plugin.tainacan_media_components[i.id]){var n=tainacan_plugin.tainacan_media_components[i.id];new tainacan_plugin.classes.TainacanMediaGallery(n.has_media_thumbs?"#"+n.media_thumbs_id:null,n.has_media_main?"#"+n.media_main_id:null,n)}}}}]);