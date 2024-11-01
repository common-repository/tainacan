"use strict";(self.webpackChunktainacan=self.webpackChunktainacan||[]).push([[4152],{63057:(t,e,a)=>{a.d(e,{A:()=>p});var i=a(75552),n=a(40834),m=a(55373),o=a.n(m);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=function(t,e){if(t){if("string"==typeof t)return d(t,e);var a={}.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){a&&(t=a);var _n=0,i=function(){};return{s:i,n:function(){return _n>=t.length?{done:!0}:{done:!1,value:t[_n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,m=!0,o=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return m=t.done,t},e:function(t){o=!0,n=t},f:function(){try{m||null==a.return||a.return()}finally{if(o)throw n}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,i=Array(e);a<e;a++)i[a]=t[a];return i}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e,a){return(e=function(t){var e=function(t,e){if("object"!=s(t)||!t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var i=a.call(t,e||"default");if("object"!=s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==s(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const p={props:{itemMetadatum:Object,maxtags:void 0,disabled:!1,allowNew:!0,isLastMetadatum:!1,isMobileScreen:!1},emits:["update:value","blur","mobile-special-focus"],data:function(){return{selected:[],options:[],isLoading:!1,collectionId:"",searchQuery:"",editingItemId:"",totalItems:0,page:1,activeTab:0,editItemModalOpen:!1,adminURL:tainacan_plugin.admin_url+"?",currentUserCanEditItems:!1,selectedValuesAsHtml:[]}},computed:u(u({},(0,n.L8)("collection",{collection:"getCollection"})),{},{maxMultipleValues:function(){return this.itemMetadatum&&this.itemMetadatum.metadatum&&this.itemMetadatum.metadatum.cardinality&&!isNaN(this.itemMetadatum.metadatum.cardinality)&&this.itemMetadatum.metadatum.cardinality>1?this.itemMetadatum.metadatum.cardinality:void 0},itemModalSrc:function(){return this.editingItemId?this.adminURL+"itemEditionMode=true"+(this.$adminOptions.mobileAppMode?"&mobileAppMode=true":"")+"&page=tainacan_admin#"+this.$routerHelper.getItemEditPath(this.collectionId,this.editingItemId):this.adminURL+"itemEditionMode=true"+(this.$adminOptions.mobileAppMode?"&mobileAppMode=true":"")+"&page=tainacan_admin#"+this.$routerHelper.getNewItemPath(this.collectionId)+"?newmetadatumid="+this.itemMetadatum.metadatum.metadata_type_options.search+"&newitemtitle="+this.searchQuery},relationshipInputId:function(){return this.itemMetadatum&&this.itemMetadatum.metadatum?"tainacan-item-metadatum_id-"+this.itemMetadatum.metadatum.id+(this.itemMetadatum.parent_meta_id?"_parent_meta_id-"+this.itemMetadatum.parent_meta_id:""):""},isDisplayingRelatedItemMetadata:function(){return this.itemMetadatum&&this.itemMetadatum.metadatum&&this.itemMetadatum.metadatum.metadata_type_options&&this.itemMetadatum.metadatum.metadata_type_options.display_related_item_metadata&&this.itemMetadatum.metadatum.metadata_type_options.display_related_item_metadata.length&&this.itemMetadatum.metadatum.metadata_type_options.display_related_item_metadata.length>1},isAcceptingDraftItems:function(){return this.itemMetadatum&&this.itemMetadatum.metadatum&&this.itemMetadatum.metadatum.metadata_type_options&&"yes"===this.itemMetadatum.metadatum.metadata_type_options.accept_draft_items},isAcceptingOnlyItemsAuthoredByCurrentUser:function(){return this.itemMetadatum&&this.itemMetadatum.metadatum&&this.itemMetadatum.metadatum.metadata_type_options&&"yes"===this.itemMetadatum.metadatum.metadata_type_options.accept_only_items_authored_by_current_user}}),watch:{editItemModalOpen:function(){this.editItemModalOpen?window.addEventListener("message",this.updateItemFromModal,!1):window.removeEventListener("message",this.updateItemFromModal)}},created:function(){var t=this;if(this.collectionId=this.itemMetadatum&&this.itemMetadatum.metadatum.metadata_type_options&&this.itemMetadatum.metadatum.metadata_type_options.collection_id?this.itemMetadatum.metadatum.metadata_type_options.collection_id:"",this.itemMetadatum.value&&(!Array.isArray(this.itemMetadatum.value)||this.itemMetadatum.value.length>0)){var e=[];e.postin=Array.isArray(this.itemMetadatum.value)?this.itemMetadatum.value:[this.itemMetadatum.value],e.nopaging=1,e.order="asc",e.fetch_only="title,document_mimetype,thumbnail",e.fetch_only_meta=this.isDisplayingRelatedItemMetadata?this.itemMetadatum.metadatum.metadata_type_options.display_related_item_metadata.filter((function(t){return"thumbnail"!==t}))+"":this.itemMetadatum.metadatum.metadata_type_options.search?this.itemMetadatum.metadatum.metadata_type_options.search:"",this.isAcceptingDraftItems&&(e.status=["publish","private","draft"]),i.UY.get("/collection/"+this.collectionId+"/items?"+o().stringify(e)).then((function(e){if(e.data.items){var a,i=l(e.data.items);try{for(i.s();!(a=i.n()).done;){var n=a.value;t.selected.push({label:t.getItemLabel(n),value:n.id,valuesAsHtml:t.getItemMetadataValuesAsHtml(n),img:t.$thumbHelper.getSrc(n.thumbnail,"tainacan-small",n.document_mimetype)})}}catch(t){i.e(t)}finally{i.f()}t.itemMetadatum.value.length>0&&"yes"!=t.itemMetadatum.metadatum.multiple&&(t.activeTab=1)}})).catch((function(e){t.$console.log(e)}))}this.collection&&this.collection.id==this.collectionId?this.currentUserCanEditItems=this.collection.current_user_can_edit_items:i.UY.get("/collections/"+this.collectionId+"?fetch_only=name,url,allow_comments&context=edit").then((function(e){return t.currentUserCanEditItems=e.data.current_user_can_edit_items})).catch((function(){return t.currentUserCanEditItems=!1}))},methods:{onInput:function(t){this.search(""),this.selected=t,this.$emit("update:value",t.map((function(t){return t.value})))},onBlur:function(){this.$emit("blur")},search:_.debounce((function(t){var e=this;t!=this.searchQuery&&(this.searchQuery=t,this.options=[],this.page=1),t.length||(this.searchQuery=t,this.options=[],this.page=1),this.page>1&&this.options.length>12*this.totalItems||this.selected.length>0&&"no"===this.itemMetadatum.metadatum.multiple||""!==this.searchQuery&&(this.isLoading=!0,i.UY.get("/collection/"+this.collectionId+"/items?"+this.getQueryString(this.searchQuery)).then((function(t){if(t.data.items){var a,i=l(t.data.items);try{for(i.s();!(a=i.n()).done;){var n=a.value;e.options.push({label:e.getItemLabel(n),value:n.id,valuesAsHtml:e.getItemMetadataValuesAsHtml(n),img:e.$thumbHelper.getSrc(n.thumbnail,"tainacan-small",n.document_mimetype)})}}catch(t){i.e(t)}finally{i.f()}}t.headers["x-wp-total"]&&(e.totalItems=t.headers["x-wp-total"]),e.page++,e.isLoading=!1})).catch((function(t){e.isLoading=!1,e.$console.log(t)})))}),500),searchMore:_.debounce((function(){this.search(this.searchQuery)}),250),getItemLabel:function(t){var e="";for(var a in t.metadata)t.metadata[a].id==this.itemMetadatum.metadatum.metadata_type_options.search&&(e=t.metadata[a].value_as_string);return""!=e&&e!=t.title&&""!=t.title?e+=" ("+t.title+")":""==e&&(e=t.title),e},getQueryString:function(t){var e=[];if(this.itemMetadatum.metadatum.metadata_type_options&&this.itemMetadatum.metadatum.metadata_type_options.search)if(this.itemMetadatum.metadatum.metadata_type_options.search_by_tax)e.taxquery=[],e.taxquery[0]={taxonomy:"tnc_tax_".concat(this.itemMetadatum.metadatum.metadata_type_options.search_by_tax),operator:"LIKE",taxonomy_id:this.itemMetadatum.metadatum.metadata_type_options.search_by_tax,terms:t};else switch(e.metaquery=[],e.metaquery[0]={key:this.itemMetadatum.metadatum.metadata_type_options.search,value:t,compare:"LIKE"},this.itemMetadatum.metadatum.metadata_type_options.related_primitive_type){case"float":case"int":e.orderby="meta_value_num",e.metakey=this.itemMetadatum.metadatum.metadata_type_options.search;break;case"date":e.orderby="meta_value",e.metakey=this.itemMetadatum.metadatum.metadata_type_options.search,e.metatype="DATETIME";break;default:e.orderby="meta_value",e.metakey=this.itemMetadatum.metadatum.metadata_type_options.search}else e.search=t;return e.fetch_only="title,thumbnail,document_mimetype",e.fetch_only_meta=this.isDisplayingRelatedItemMetadata?this.itemMetadatum.metadatum.metadata_type_options.display_related_item_metadata.filter((function(t){return"thumbnail"!==t}))+"":this.itemMetadatum.metadatum.metadata_type_options.search?this.itemMetadatum.metadatum.metadata_type_options.search:"",e.perpage=12,e.paged=this.page,e.order="asc",this.isAcceptingDraftItems&&(e.status=["publish","private","draft"]),this.isAcceptingOnlyItemsAuthoredByCurrentUser&&(e.authorid=tainacan_plugin.user_data.ID),this.selected.length>0&&(e.exclude=this.selected.map((function(t){return t.value}))),o().stringify(e)},updateItemFromModal:function(t){var e=t[t.message?"message":"data"];if("itemEditionMessage"==e.type&&null!==e.item)if(this.editItemModalOpen=!1,this.editingItemId){if(e.item&&e.item.id){var a=this.selected.findIndex((function(t){return t.value==e.item.id}));a>=0&&this.selected.splice(a,1,{label:this.getItemLabel(e.item),value:e.item.id,valuesAsHtml:this.getItemMetadataValuesAsHtml(e.item),img:e.item.thumbnail?e.item.thumbnail:""}),this.onInput(this.selected)}this.editingItemId=""}else e.item&&e.item.id&&(this.searchQuery="",this.selected.push({label:this.getItemLabel(e.item),value:e.item.id,valuesAsHtml:this.getItemMetadataValuesAsHtml(e.item),img:e.item.thumbnail?e.item.thumbnail:""}),this.onInput(this.selected),"yes"!=this.itemMetadatum.metadatum.multiple&&(this.activeTab=1))},getItemMetadataValuesAsHtml:function(t){var e=this,a="";return a+='<div class="tainacan-relationship-metadatum" data-item-id="'.concat(t.id,'">\n                    <div class="tainacan-relationship-metadatum-header">'),this.isDisplayingRelatedItemMetadata&&this.itemMetadatum.metadatum.metadata_type_options.display_related_item_metadata&&this.itemMetadatum.metadatum.metadata_type_options.display_related_item_metadata.indexOf("thumbnail")>=0&&(a+='<img src="'.concat(this.$thumbHelper.getSrc(t.thumbnail,"tainacan-small",t.document_mimetype),'" class="attachment-tainacan-small size-tainacan-small" alt="').concat(t.thumbnail_alt,'" loading="lazy" width="40" height="40">')),a+='<h4 class="label">\n                        '.concat(this.getItemLabel(t),"\n                    </h4>"),a+="</div>",Object.values(t.metadata).forEach((function(t){t.id!=e.itemMetadatum.metadatum.metadata_type_options.search&&e.itemMetadatum.metadatum.metadata_type_options.display_related_item_metadata&&e.itemMetadatum.metadatum.metadata_type_options.display_related_item_metadata.indexOf(t.id)>=0&&t.value_as_html&&(a+='<div class="tainacan-metadatum">\n                            <h5 class="label">\n                                '.concat(t.name,"\n                            </h5>\n                            <p>\n                                ").concat(t.value_as_html,"\n                            </p>\n                        </div>"))})),a+="</div>"},editSelected:function(t){this.editingItemId=t,this.editItemModalOpen=!0},removeFromSelected:function(t){var e=this.selected.findIndex((function(e){return e.value==t}));e>=0&&(this.selected.splice(e,1),this.onInput(this.selected))},onMobileSpecialFocus:function(){this.$emit("mobile-special-focus")}}}},24485:(t,e,a)=>{a.d(e,{X:()=>v});var i=a(6934),n={key:0,class:"media"},m={key:0,class:"media-left"},o=["src"],s={class:"media-content"},l={key:1,class:"tainacan-relationship-group"},d=["innerHTML"],r={class:"tainacan-relationship-results-container"},u={key:0,class:"tainacan-relationship-group"},c=["innerHTML"],p=["onClick"],h=["onClick"],b={key:1,class:"multivalue-separator"},f={key:1},_={class:"has-text-gray",style:{"font-size":"0.875em"}},g=["disabled"],y=["id","src"];function v(t,e,a,v,M,I){var k=(0,i.g2)("b-taginput"),x=(0,i.g2)("b-tab-item"),w=(0,i.g2)("b-tabs"),A=(0,i.g2)("b-modal");return(0,i.uX)(),(0,i.CE)("div",{class:(0,i.C4)({"is-flex is-flex-wrap-wrap":"yes"!=a.itemMetadatum.metadatum.multiple||null!=a.maxtags})},[(0,i.bF)(w,{modelValue:M.activeTab,"onUpdate:modelValue":e[1]||(e[1]=function(t){return M.activeTab=t}),size:"is-small",animated:""},{default:(0,i.k6)((function(){return[(0,i.bF)(x,{label:1==a.itemMetadatum.value.length||"yes"!=a.itemMetadatum.metadatum.multiple?t.$i18n.get("label_select_item"):t.$i18n.get("label_insert_items")},{default:(0,i.k6)((function(){return[(0,i.bF)(k,{id:I.relationshipInputId,expanded:"",disabled:a.disabled,size:"is-small",icon:"magnify","model-value":JSON.parse(JSON.stringify(M.selected)),data:M.options,maxtags:null!=a.maxtags?a.maxtags:"yes"==a.itemMetadatum.metadatum.multiple||!0===a.allowNew?void 0!==I.maxMultipleValues?I.maxMultipleValues:null:"1",autocomplete:"","remove-on-keys":[],"dropdown-position":a.isLastMetadatum?"top":"auto",attached:"",placeholder:a.itemMetadatum.metadatum.placeholder?a.itemMetadatum.metadatum.placeholder:t.$i18n.get("instruction_type_existing_item"),loading:M.isLoading,"aria-close-label":t.$i18n.get("remove_value"),class:(0,i.C4)({"has-selected":null!=M.selected&&M.selected!=[]}),field:"label","check-infinite-scroll":"","has-counter":!1,"onUpdate:modelValue":I.onInput,onBlur:I.onBlur,onTyping:I.search,onInfiniteScroll:I.searchMore,onFocus:I.onMobileSpecialFocus},(0,i.eX)({default:(0,i.k6)((function(t){return[I.isDisplayingRelatedItemMetadata?((0,i.uX)(),(0,i.CE)("div",l,[(0,i.Lk)("div",{innerHTML:t.option.valuesAsHtml},null,8,d)])):((0,i.uX)(),(0,i.CE)("div",n,[t.option.img?((0,i.uX)(),(0,i.CE)("div",m,[(0,i.Lk)("img",{width:"28",src:t.option.img},null,8,o)])):(0,i.Q3)("",!0),(0,i.Lk)("div",s,(0,i.v_)(t.option.label),1)]))]})),tag:(0,i.k6)((function(t){return[(0,i.eW)((0,i.v_)(t.tag&&t.tag.label?t.tag.label:""),1)]})),_:2},[M.isLoading?void 0:{name:"empty",fn:(0,i.k6)((function(){return[(0,i.eW)((0,i.v_)(I.isAcceptingOnlyItemsAuthoredByCurrentUser?t.$i18n.get("info_no_item_authored_by_you_found"):t.$i18n.get("info_no_item_found")),1)]})),key:"0"},!M.currentUserCanEditItems||t.$adminOptions.itemEditionMode&&!t.$adminOptions.allowItemEditionModalInsideModal?void 0:{name:"footer",fn:(0,i.k6)((function(){return[(0,i.Lk)("a",{onClick:e[0]||(e[0]=function(t){return M.editItemModalOpen=!0})},(0,i.v_)(t.$i18n.get("label_create_new_item")+' "'+M.searchQuery+'"'),1)]})),key:"1"}]),1032,["id","disabled","model-value","data","maxtags","dropdown-position","placeholder","loading","aria-close-label","class","onUpdate:modelValue","onBlur","onTyping","onInfiniteScroll","onFocus"])]})),_:1},8,["label"]),a.itemMetadatum&&void 0!==a.itemMetadatum.value?((0,i.uX)(),(0,i.Wv)(x,{key:0,style:{"min-height":"56px"},label:1==a.itemMetadatum.value.length||"yes"!=a.itemMetadatum.metadatum.multiple?t.$i18n.get("label_selected_item"):t.$i18n.get("label_selected_items")+" ("+a.itemMetadatum.value.length+")"},{default:(0,i.k6)((function(){return[(0,i.Lk)("div",r,[a.itemMetadatum.value&&a.itemMetadatum.value.length?((0,i.uX)(),(0,i.CE)("div",u,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(M.selected,(function(a,n){return(0,i.uX)(),(0,i.CE)("div",{key:n,style:{position:"relative"}},[(0,i.Lk)("div",{innerHTML:a.valuesAsHtml},null,8,c),!M.currentUserCanEditItems||t.$adminOptions.itemEditionMode&&!t.$adminOptions.allowItemEditionModalInsideModal?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("a",{key:0,class:"relationship-value-button--edit",onClick:function(t){return I.editSelected(a.value)}},e[4]||(e[4]=[(0,i.Lk)("span",{class:"icon"},[(0,i.Lk)("i",{class:"tainacan-icon tainacan-icon-edit"})],-1)]),8,p)),(0,i.Lk)("a",{class:"relationship-value-button--remove",onClick:function(t){return I.removeFromSelected(a.value)}},e[5]||(e[5]=[(0,i.Lk)("span",{class:"icon"},[(0,i.Lk)("i",{class:"tainacan-icon tainacan-icon-close"})],-1)]),8,h),n<M.selected.length-1?((0,i.uX)(),(0,i.CE)("span",b," | ")):(0,i.Q3)("",!0)])})),128))])):((0,i.uX)(),(0,i.CE)("div",f,[(0,i.Lk)("p",_,(0,i.v_)(t.$i18n.get("info_no_item_found")),1)]))])]})),_:1},8,["label"])):(0,i.Q3)("",!0)]})),_:1},8,["modelValue"]),M.currentUserCanEditItems&&a.itemMetadatum.item&&a.itemMetadatum.item.id?((0,i.uX)(),(0,i.CE)(i.FK,{key:0},[!(void 0===I.maxMultipleValues||I.maxMultipleValues>M.selected.length)||"yes"!==a.itemMetadatum.metadatum.multiple&&M.selected.length?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("a",{key:0,disabled:t.$adminOptions.itemEditionMode&&!t.$adminOptions.allowItemEditionModalInsideModal,class:"add-link",onClick:e[2]||(e[2]=function(t){return M.editItemModalOpen=!M.editItemModalOpen})},[e[6]||(e[6]=(0,i.Lk)("span",{class:"icon is-small"},[(0,i.Lk)("i",{class:"tainacan-icon has-text-secondary tainacan-icon-add"})],-1)),(0,i.eW)("  "+(0,i.v_)(t.$i18n.get("label_create_new_item")),1)],8,g)),(0,i.bF)(A,{modelValue:M.editItemModalOpen,"onUpdate:modelValue":e[3]||(e[3]=function(t){return M.editItemModalOpen=t}),width:1200,"custom-class":"tainacan-modal"+(t.collection&&t.collection.id?" tainacan-modal-item-edition--collection-"+t.collection.id:""),"close-button-aria-label":t.$i18n.get("close")},{default:(0,i.k6)((function(){return[(0,i.Lk)("iframe",{id:I.relationshipInputId+"_item-edition-modal",width:"100%",style:(0,i.Tr)({height:a.isMobileScreen?"100vh":"85vh"}),src:I.itemModalSrc},null,12,y)]})),_:1},8,["modelValue","custom-class","close-button-aria-label"])],64)):(0,i.Q3)("",!0)],2)}},73764:(t,e,a)=>{a.d(e,{A:()=>s});var i=a(31601),n=a.n(i),m=a(76314),o=a.n(m)()(n());o.push([t.id,"div.is-flex[data-v-1b8be98f]{justify-content:flex-start}.add-link[data-v-1b8be98f]{font-size:0.75em}.b-tabs[data-v-1b8be98f]{margin-bottom:0;width:100%}[data-v-1b8be98f] .b-tabs .tab-content{padding:0.5em 0px !important}[data-v-1b8be98f] .tabs{margin-bottom:0 !important}[data-v-1b8be98f] .tabs ul{padding:0}[data-v-1b8be98f] .tainacan-relationship-results-container{border:1px solid var(--tainacan-gray1);background-color:var(--tainacan-background-color);margin-top:calc(-1 * (0.5em + 1px));margin-bottom:calc(-1 * (0.5em + 1px));display:flex;overflow:auto;padding:12px;max-height:40vh;transition:height 0.5s ease, min-height 0.5s ease}[data-v-1b8be98f] .tainacan-relationship-results-container .tainacan-relationship-group:not(:only-child){padding-bottom:12px}[data-v-1b8be98f] .tainacan-relationship-results-container .tainacan-relationship-group .tainacan-relationship-metadatum .tainacan-metadatum .label{font-size:0.75em}[data-v-1b8be98f] .tainacan-relationship-results-container .tainacan-relationship-group .tainacan-relationship-metadatum a{pointer-events:auto}[data-v-1b8be98f] .tainacan-relationship-results-container .tainacan-relationship-group .tainacan-relationship-metadatum .tainacan-relationship-metadatum-header{padding-right:64px}[data-v-1b8be98f] .tainacan-relationship-results-container .tainacan-relationship-group .tainacan-relationship-metadatum .tainacan-relationship-metadatum-header .label{font-size:0.875em}[data-v-1b8be98f] .tainacan-relationship-results-container .tainacan-relationship-group>div>.multivalue-separator{display:block;max-height:1px;width:calc(100% - 40px);background:var(--tainacan-gray2);content:none;color:transparent;margin:0.5em 0 0.5em 40px}[data-v-1b8be98f] .tainacan-relationship-group{width:100%}[data-v-1b8be98f] .tainacan-relationship-group .tainacan-relationship-metadatum .label{font-size:1em}[data-v-1b8be98f] .tainacan-relationship-group .tainacan-relationship-metadatum a{pointer-events:none}[data-v-1b8be98f] .tainacan-relationship-group .tainacan-relationship-metadatum p{font-size:0.875em;margin-bottom:0;margin-top:0}[data-v-1b8be98f] .tainacan-relationship-group .tainacan-relationship-metadatum-header .label{font-size:1.125em;font-weight:normal}[data-v-1b8be98f] .tainacan-relationship-group .tainacan-relationship-metadatum-header img{max-width:28px !important;max-height:28px;margin-right:10px}[data-v-1b8be98f] .tainacan-relationship-group .relationship-value-button--edit,[data-v-1b8be98f] .tainacan-relationship-group .relationship-value-button--remove{position:absolute;top:0px}[data-v-1b8be98f] .relationship-value-button--edit,[data-v-1b8be98f] .relationship-value-button--remove{right:4px;background-color:var(--tainacan-white);border-radius:100%;padding:2px}[data-v-1b8be98f] .relationship-value-button--edit:hover,[data-v-1b8be98f] .relationship-value-button--remove:hover{background-color:var(--tainacan-gray0)}[data-v-1b8be98f] .relationship-value-button--edit{right:34px}\n",""]);const s=o},23839:(t,e,a)=>{var i=a(85072),n=a.n(i),m=a(97825),o=a.n(m),s=a(77659),l=a.n(s),d=a(55056),r=a.n(d),u=a(10540),c=a.n(u),p=a(63494),h=a.n(p),b=a(73764),f={};f.styleTagTransform=h(),f.setAttributes=r(),f.insert=l().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=c();n()(b.A,f),b.A&&b.A.locals&&b.A.locals},7704:(t,e,a)=>{a.d(e,{A:()=>i.A});var i=a(63057)},51996:(t,e,a)=>{a.d(e,{X:()=>i.X});var i=a(24485)},1728:(t,e,a)=>{a(23839)}}]);