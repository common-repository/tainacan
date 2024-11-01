"use strict";(self.webpackChunktainacan=self.webpackChunktainacan||[]).push([[9741],{27493:(t,e,i)=>{i.d(e,{A:()=>u});var n=i(40834),a=i(6934);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function d(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?d(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function r(t,e,i){return(e=function(t){var e=function(t,e){if("object"!=o(t)||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==o(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const u={name:"BulkEditionModal",components:{TainacanText:(0,a.$V)((function(){return Promise.all([i.e(554),i.e(4066)]).then(i.bind(i,11685))})),TainacanTextarea:(0,a.$V)((function(){return i.e(9588).then(i.bind(i,37207))})),TainacanSelectbox:(0,a.$V)((function(){return i.e(5724).then(i.bind(i,93343))})),TainacanNumeric:(0,a.$V)((function(){return i.e(2832).then(i.bind(i,60451))})),TainacanDate:(0,a.$V)((function(){return Promise.all([i.e(554),i.e(2888)]).then(i.bind(i,40507))})),TainacanRelationship:(0,a.$V)((function(){return Promise.all([i.e(4152),i.e(600)]).then(i.bind(i,98219))})),TainacanTaxonomy:(0,a.$V)((function(){return Promise.all([i.e(4561),i.e(7158)]).then(i.bind(i,14777))})),TainacanCompound:(0,a.$V)((function(){return Promise.all([i.e(9734),i.e(9370)]).then(i.bind(i,56989))})),TainacanUser:(0,a.$V)((function(){return i.e(7290).then(i.bind(i,24909))})),TainacanGeocoordinate:(0,a.$V)((function(){return Promise.all([i.e(5218),i.e(8061),i.e(5008),i.e(420)]).then(i.bind(i,29863))})),TainacanUrl:(0,a.$V)((function(){return i.e(2144).then(i.bind(i,39763))}))},props:{modalTitle:String,totalItems:Number,objectType:String,selectedForBulk:Object,collectionId:[String,Number]},emits:["close"],data:function(){return{editionCriteria:[1],editionActions:{add:this.$i18n.get("add_value"),redefine:this.$i18n.get("set_new_value"),replace:this.$i18n.get("replace_value"),remove:this.$i18n.get("remove_a_value"),clear:this.$i18n.get("clear_values"),copy:this.$i18n.get("copy_value")},bulkEditionProcedures:{1:{isDone:!1,isExecuting:!1,totalItemsEditedWithSuccess:0,tooltipShow:!0}},groupId:null,dones:[!1],metadataIsLoading:!1,metadataSearchCancel:void 0}},computed:l({},(0,n.L8)("metadata",{metadata:"getMetadata"})),created:function(){var t=this;this.collectionId&&(this.metadataIsLoading=!0,null!=this.metadataSearchCancel&&this.metadataSearchCancel.cancel("Metadata search Canceled."),this.fetchMetadata({collectionId:this.collectionId,isRepositoryLevel:!1,isContextEdit:!0,includeDisabled:!1,parent:"any"}).then((function(e){e.request.then((function(){t.metadataIsLoading=!1})).catch((function(){t.metadataIsLoading=!1})),t.metadataSearchCancel=e.source})).catch((function(){return t.metadataIsLoading=!1}))),this.createEditGroup({object:this.selectedForBulk,collectionId:this.collectionId?this.collectionId:"default"}).then((function(){t.groupId=t.getGroupId()}))},mounted:function(){this.$refs.bulkEditionModal&&this.$refs.bulkEditionModal.focus()},beforeUnmount:function(){null!=this.metadataSearchCancel&&this.metadataSearchCancel.cancel("Metadata search Canceled.")},methods:l(l(l(l({},(0,n.L8)("bulkedition",["getGroupId"])),(0,n.i0)("bulkedition",["createEditGroup","setValueInBulk","clearValuesInBulk","addValueInBulk","replaceValueInBulk","redefineValueInBulk","setStatusInBulk","setCommentStatusInBulk","removeValueInBulk","copyValuesInBulk"])),(0,n.i0)("metadata",["fetchMetadata"])),{},{finalizeProcedure:function(t){Object.assign(this.bulkEditionProcedures[t],{isDone:!0}),this.dones[this.editionCriteria.indexOf(t)]=!0,Object.assign(this.bulkEditionProcedures[t],{isExecuting:!1})},executeBulkEditionProcedure:function(t){var e=this,i=this.bulkEditionProcedures[t];i.action===this.editionActions.redefine?(Object.assign(this.bulkEditionProcedures[t],{isExecuting:!0}),"status"===i.metadatum.id?this.setStatusInBulk({collectionId:this.collectionId,groupId:this.groupId,bodyParams:{value:i.newValue}}).then((function(){e.finalizeProcedure(t)})):"comments"===i.metadatum.id?this.setCommentStatusInBulk({collectionId:this.collectionId,groupId:this.groupId,bodyParams:{value:i.newValue}}).then((function(){e.finalizeProcedure(t)})):this.setValueInBulk({collectionId:this.collectionId,groupId:this.groupId,bodyParams:{metadatum_id:i.metadatum.id,value:i.newValue}}).then((function(){e.finalizeProcedure(t)}))):i.action===this.editionActions.add?(Object.assign(this.bulkEditionProcedures[t],{isExecuting:!0}),this.addValueInBulk({collectionId:this.collectionId,groupId:this.groupId,bodyParams:{metadatum_id:i.metadatum.id,value:i.newValue}}).then((function(){e.finalizeProcedure(t)}))):i.action===this.editionActions.replace?(Object.assign(this.bulkEditionProcedures[t],{isExecuting:!0}),this.replaceValueInBulk({collectionId:this.collectionId,groupId:this.groupId,bodyParams:{metadatum_id:i.metadatum.id,old_value:i.oldValue,new_value:i.newValue}}).then((function(){e.finalizeProcedure(t)}))):i.action===this.editionActions.remove?(Object.assign(this.bulkEditionProcedures[t],{isExecuting:!0}),this.removeValueInBulk({collectionId:this.collectionId,groupId:this.groupId,bodyParams:{metadatum_id:i.metadatum.id,value:i.newValue}}).then((function(){e.finalizeProcedure(t)}))):i.action===this.editionActions.clear?(Object.assign(this.bulkEditionProcedures[t],{isExecuting:!0}),this.clearValuesInBulk({collectionId:this.collectionId,groupId:this.groupId,bodyParams:{metadatum_id:i.metadatum.id}}).then((function(){e.finalizeProcedure(t)}))):i.action===this.editionActions.copy&&(Object.assign(this.bulkEditionProcedures[t],{isExecuting:!0}),this.copyValuesInBulk({collectionId:this.collectionId,groupId:this.groupId,bodyParams:{metadatum_id_to:parseInt(i.metadatum.id),metadatum_id_from:i.metadatumIdCopyFrom}}).then((function(){e.finalizeProcedure(t)})))},addEditionCriterion:function(){var t=Math.floor(999*Math.random())+2;null==this.editionCriteria.find((function(e){return e==t}))?(this.editionCriteria.push(t),this.bulkEditionProcedures=Object.assign({},this.bulkEditionProcedures,r({},"".concat(t),{isDone:!1,isExecuting:!1,totalItemsEditedWithSuccess:0,tooltipShow:!0})),this.dones.push(!1)):this.addEditionCriterion()},removeThis:function(t){var e=this.editionCriteria.findIndex((function(e){return e==t}));this.editionCriteria[e]&&(this.editionCriteria.splice(e,1),delete this.bulkEditionProcedures[t],this.dones.splice(e,1))},getValidEditionActions:function(t){for(var e=JSON.parse(JSON.stringify(this.editionActions)),i=0,n=Object.keys(this.editionActions);i<n.length;i++){var a=n[i];if("yes"==t.multiple||"add"!=a&&"replace"!=a&&"remove"!=a)if("status"!=t.id&&"comments"!=t.id||"clear"!=a&&"copy"!=a){if("copy"==a&&t.metadata_type_object)(this.metadata.findIndex((function(e){return e.id!=t.id&&e.metadata_type_object.component==t.metadata_type_object.component&&e.parent<=0}))<0&&"tainacan-user"!=t.metadata_type_object.component||t.parent>0)&&delete e[a]}else delete e[a];else delete e[a]}return e},getAllowedMetadataForCopy:function(t){if(this.bulkEditionProcedures[t]&&this.bulkEditionProcedures[t].metadatum&&this.bulkEditionProcedures[t].action&&this.bulkEditionProcedures[t].action==this.editionActions.copy){var e=this.bulkEditionProcedures[t].metadatum;if(e.metadata_type_object&&e.metadata_type)return JSON.parse(JSON.stringify(this.metadata)).filter((function(t){return t.id!=e.id&&t.metadata_type==e.metadata_type&&("yes"==e.multiple||"yes"!=t.multiple&&"yes"!=e.multiple)}))}return[]},addToBulkEditionProcedures:function(t,e,i){Array.isArray(t)&&(t=t[0]),Object.assign(this.bulkEditionProcedures[i],r({},"".concat(e),t))}})}},85787:(t,e,i)=>{i.d(e,{X:()=>A});var n=i(6934),a={ref:"bulkEditionModal","aria-labelledby":"alert-dialog-title",autofocus:"",role:"alertdialog",tabindex:"-1","aria-modal":"",class:"tainacan-modal-content this-tainacan-modal-content"},o={class:"tainacan-modal-title"},d={class:"tainacan-total-objects-info"},l={class:"tainacan-form"},r={class:"modal-card-body no-overflow-modal-card-body"},u=["value"],c=["label"],s=["value"],m={value:{id:"status"}},p={value:{id:"comments"}},b=["value"],f={key:0,style:{"margin-left":"12px",display:"flex"}},k={class:"tainacan-bulk-edition-field tainacan-bulk-edition-field-not-last tainacan-by-text"},h=["value"],g=["value"],y=["value"],E=["label"],v=["value"],P={key:0,value:"created_by"},_=["onClick"],I={class:"icon"},C=["onMouseover"],x={class:"icon"},w=["disabled","onClick"],j={class:"icon"},V={key:3},$=["disabled"],X={class:"field is-grouped form-submit"},S={class:"control"},O=["disabled"],L={class:"control"},B=["disabled"];function A(t,e,i,A,T,F){var D=(0,n.g2)("b-select"),U=(0,n.gN)("tooltip");return(0,n.uX)(),(0,n.CE)("div",a,[(0,n.Lk)("header",o,[(0,n.Lk)("h2",null,[(0,n.eW)((0,n.v_)(i.modalTitle)+" ",1),(0,n.Lk)("small",d,(0,n.v_)("(".concat(i.totalItems," ").concat(i.objectType,")")),1)]),e[3]||(e[3]=(0,n.Lk)("hr",null,null,-1))]),(0,n.Lk)("div",l,[(0,n.Lk)("div",r,[(0,n.bF)(n.F,{name:"filter-item"},{default:(0,n.k6)((function(){return[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(T.editionCriteria,(function(i){return(0,n.uX)(),(0,n.CE)("div",{key:i,class:"tainacan-bulk-edition-inline-fields"},[(0,n.bF)(D,{loading:T.metadataIsLoading,class:(0,n.C4)([{"is-field-history":T.bulkEditionProcedures[i].isDone,"hidden-select-arrow":!!T.bulkEditionProcedures[i].metadatum},"tainacan-bulk-edition-field tainacan-bulk-edition-field-not-last"]),disabled:!!T.bulkEditionProcedures[i].metadatum||T.metadataIsLoading,placeholder:t.$i18n.get("instruction_select_a_metadatum"),"inherit-attrs":"false","onUpdate:modelValue":function(t){return F.addToBulkEditionProcedures(t,"metadatum",i)}},{default:(0,n.k6)((function(){return[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(t.metadata,(function(t,e){return(0,n.uX)(),(0,n.CE)(n.FK,{key:e},[t.id&&"tainacan-compound"!==t.metadata_type_object.component&&t.parent<=0?((0,n.uX)(),(0,n.CE)("option",{key:0,value:t},(0,n.v_)(t.name),9,u)):(0,n.Q3)("",!0),t.id&&"tainacan-compound"===t.metadata_type_object.component&&"yes"!==t.multiple?((0,n.uX)(),(0,n.CE)("optgroup",{key:1,label:t.name},[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(t.metadata_type_options.children_objects,(function(t,e){return(0,n.uX)(),(0,n.CE)(n.FK,{key:e},[t.id?((0,n.uX)(),(0,n.CE)("option",{key:0,value:t},(0,n.v_)(t.name),9,s)):(0,n.Q3)("",!0)],64)})),128))],8,c)):(0,n.Q3)("",!0)],64)})),128)),(0,n.Lk)("option",m,(0,n.v_)(t.$i18n.get("label_status")),1),(0,n.Lk)("option",p,(0,n.v_)(t.$i18n.get("label_allow_comments")),1)]})),_:2},1032,["loading","class","disabled","placeholder","onUpdate:modelValue"]),(0,n.bF)(D,{class:(0,n.C4)([{"is-field-history":T.bulkEditionProcedures[i].isDone,"hidden-select-arrow":!!T.bulkEditionProcedures[i].action},"tainacan-bulk-edition-field tainacan-bulk-edition-field-not-last"]),disabled:!!T.bulkEditionProcedures[i].action||!T.bulkEditionProcedures[i].metadatum,"model-value":T.bulkEditionProcedures[i].action?T.bulkEditionProcedures[i].action:void 0,placeholder:t.$i18n.get("instruction_select_a_action"),"onUpdate:modelValue":function(t){return F.addToBulkEditionProcedures(t,"action",i)}},{default:(0,n.k6)((function(){return[T.bulkEditionProcedures[i].metadatum?((0,n.uX)(!0),(0,n.CE)(n.FK,{key:0},(0,n.pI)(F.getValidEditionActions(T.bulkEditionProcedures[i].metadatum),(function(t,e){return(0,n.uX)(),(0,n.CE)("option",{key:e,value:t},(0,n.v_)(t),9,b)})),128)):(0,n.Q3)("",!0)]})),_:2},1032,["class","disabled","model-value","placeholder","onUpdate:modelValue"]),(0,n.bF)(n.eB,{name:"filter-item"},{default:(0,n.k6)((function(){return[T.bulkEditionProcedures[i]&&T.bulkEditionProcedures[i].metadatum&&T.bulkEditionProcedures[i].action?((0,n.uX)(),(0,n.CE)(n.FK,{key:0},[T.bulkEditionProcedures[i].action==T.editionActions.replace?((0,n.uX)(),(0,n.CE)("div",f,[((0,n.uX)(),(0,n.Wv)((0,n.$y)(T.bulkEditionProcedures[i].metadatum.metadata_type_object.component),{"forced-component-type":T.bulkEditionProcedures[i].metadatum.metadata_type_object.component.includes("taxonomy")?"tainacan-taxonomy-tag-input":"","item-metadatum":{metadatum:T.bulkEditionProcedures[i].metadatum},"allow-new":!1,maxtags:1,class:(0,n.C4)([{"is-field-history":T.bulkEditionProcedures[i].isDone},"tainacan-bulk-edition-field"]),disabled:T.bulkEditionProcedures[i].isDone,"onUpdate:value":function(t){return F.addToBulkEditionProcedures(t,"oldValue",i)}},null,40,["forced-component-type","item-metadatum","class","disabled","onUpdate:value"])),(0,n.Lk)("div",k,[(0,n.Lk)("small",null,(0,n.v_)(t.$i18n.get("info_by_inner")),1)]),((0,n.uX)(),(0,n.Wv)((0,n.$y)(T.bulkEditionProcedures[i].metadatum.metadata_type_object.component),{"forced-component-type":T.bulkEditionProcedures[i].metadatum.metadata_type_object.component.includes("taxonomy")?"tainacan-taxonomy-tag-input":"","item-metadatum":{metadatum:T.bulkEditionProcedures[i].metadatum},"allow-new":!1,maxtags:1,class:(0,n.C4)([{"is-field-history":T.bulkEditionProcedures[i].isDone},"tainacan-bulk-edition-field tainacan-bulk-edition-field-not-last"]),disabled:T.bulkEditionProcedures[i].isDone,"onUpdate:value":function(t){return F.addToBulkEditionProcedures(t,"newValue",i)}},null,40,["forced-component-type","item-metadatum","class","disabled","onUpdate:value"]))])):"status"==T.bulkEditionProcedures[i].metadatum.id?((0,n.uX)(),(0,n.Wv)(D,{key:1,class:(0,n.C4)([{"is-field-history":T.bulkEditionProcedures[i].isDone,"hidden-select-arrow":T.bulkEditionProcedures[i].isDone},"tainacan-bulk-edition-field tainacan-bulk-edition-field-last"]),disabled:T.bulkEditionProcedures[i].isDone,placeholder:t.$i18n.get("instruction_select_a_status2"),"onUpdate:modelValue":function(t){return F.addToBulkEditionProcedures(t,"newValue",i)}},{default:(0,n.k6)((function(){return[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(t.$statusHelper.getStatuses().filter((function(t){return"trash"!=t.value})),(function(t,e){return(0,n.uX)(),(0,n.CE)("option",{key:e,value:t.slug},(0,n.v_)(t.name),9,h)})),128))]})),_:2},1032,["class","disabled","placeholder","onUpdate:modelValue"])):"comments"==T.bulkEditionProcedures[i].metadatum.id?((0,n.uX)(),(0,n.Wv)(D,{key:2,class:(0,n.C4)([{"is-field-history":T.bulkEditionProcedures[i].isDone,"hidden-select-arrow":T.bulkEditionProcedures[i].isDone},"tainacan-bulk-edition-field tainacan-bulk-edition-field-last"]),disabled:T.bulkEditionProcedures[i].isDone,placeholder:t.$i18n.get("instruction_select_a_comments_status"),"onUpdate:modelValue":function(t){return F.addToBulkEditionProcedures(t,"newValue",i)}},{default:(0,n.k6)((function(){return[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(t.$commentsStatusHelper.getStatuses(),(function(t,e){return(0,n.uX)(),(0,n.CE)("option",{key:e,value:t.slug},(0,n.v_)(t.name),9,g)})),128))]})),_:2},1032,["class","disabled","placeholder","onUpdate:modelValue"])):T.bulkEditionProcedures[i].action==T.editionActions.copy?((0,n.uX)(),(0,n.Wv)(D,{key:3,loading:T.metadataIsLoading,class:(0,n.C4)([{"is-field-history":T.bulkEditionProcedures[i].isDone,"hidden-select-arrow":!!T.bulkEditionProcedures[i].metadatumIdCopyFrom},"tainacan-bulk-edition-field tainacan-bulk-edition-field-last"]),disabled:T.bulkEditionProcedures[i].isDone||T.bulkEditionProcedures[i].isExecuting&&!!T.bulkEditionProcedures[i].metadatumIdCopyFrom||T.metadataIsLoading,placeholder:t.$i18n.get("instruction_select_a_metadatum"),"onUpdate:modelValue":function(t){return F.addToBulkEditionProcedures(t,"metadatumIdCopyFrom",i)}},{default:(0,n.k6)((function(){return[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(F.getAllowedMetadataForCopy(i),(function(e,i){return(0,n.uX)(),(0,n.CE)(n.FK,{key:i},[e.id&&"tainacan-compound"!==e.metadata_type_object.component&&e.parent<=0?((0,n.uX)(),(0,n.CE)("option",{key:0,value:e.id},(0,n.v_)(e.name),9,y)):(0,n.Q3)("",!0),e.id&&"tainacan-compound"===e.metadata_type_object.component?((0,n.uX)(),(0,n.CE)("optgroup",{key:1,label:e.name},[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.metadata_type_options.children_objects,(function(e,i){return(0,n.uX)(),(0,n.CE)(n.FK,{key:i},[t.childMetadatumForCopy.id?((0,n.uX)(),(0,n.CE)("option",{key:0,value:t.childMetadatumForCopy.id},(0,n.v_)(t.childMetadatumForCopy.name),9,v)):(0,n.Q3)("",!0)],64)})),128))],8,E)):(0,n.Q3)("",!0)],64)})),128)),T.bulkEditionProcedures[i].metadatum.metadata_type_object&&"tainacan-user"==T.bulkEditionProcedures[i].metadatum.metadata_type_object.component?((0,n.uX)(),(0,n.CE)("option",P,(0,n.v_)(t.$i18n.get("label_created_by")),1)):(0,n.Q3)("",!0)]})),_:2},1032,["loading","class","disabled","placeholder","onUpdate:modelValue"])):T.bulkEditionProcedures[i].action!=T.editionActions.clear?((0,n.uX)(),(0,n.Wv)((0,n.$y)(T.bulkEditionProcedures[i].metadatum.metadata_type_object.component),{key:4,"forced-component-type":T.bulkEditionProcedures[i].metadatum.metadata_type_object.component.includes("taxonomy")?"tainacan-taxonomy-tag-input":"","item-metadatum":{metadatum:T.bulkEditionProcedures[i].metadatum},"allow-new":!1,maxtags:1,class:(0,n.C4)([{"is-field-history":T.bulkEditionProcedures[i].isDone},"tainacan-bulk-edition-field tainacan-bulk-edition-field-last"]),disabled:T.bulkEditionProcedures[i].isDone||T.bulkEditionProcedures[i].isExecuting,"onUpdate:value":function(t){return F.addToBulkEditionProcedures(t,"newValue",i)}},null,40,["forced-component-type","item-metadatum","class","disabled","onUpdate:value"])):(0,n.Q3)("",!0)],64)):(0,n.Q3)("",!0)]})),_:2},1024),(0,n.Lk)("div",{style:(0,n.Tr)({marginRight:T.bulkEditionProcedures[i].isDone||T.bulkEditionProcedures[i].isExecuting?0:"-7.4px"}),class:"field bulk-last-field"},[T.bulkEditionProcedures[i].isDone||T.bulkEditionProcedures[i].isExecuting?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("button",{key:0,class:"button is-white is-pulled-right",onClick:function(t){return F.removeThis(i)}},[(0,n.bo)(((0,n.uX)(),(0,n.CE)("span",I,e[4]||(e[4]=[(0,n.Lk)("i",{class:"has-text-gray4 tainacan-icon tainacan-icon-1-25em tainacan-icon-cancel"},null,-1)]))),[[U,{content:t.$i18n.get("remove_bulk_edit"),autoHide:!0,placement:"auto-end",popperClass:["tainacan-tooltip","tooltip"]}]])],8,_)),T.bulkEditionProcedures[i].isDone?((0,n.uX)(),(0,n.CE)("div",{key:1,class:"is-pulled-right",onMouseover:function(t){return Object.assign(T.bulkEditionProcedures[i],{tooltipShow:!T.bulkEditionProcedures[i].tooltipShow})}},[(0,n.bo)(((0,n.uX)(),(0,n.CE)("span",x,e[5]||(e[5]=[(0,n.Lk)("i",{class:"has-text-success tainacan-icon tainacan-icon-1-25em tainacan-icon-approvedcircle"},null,-1)]))),[[U,{content:t.$i18n.get("info_bulk_edit_process_added"),autoHide:!0,placement:"auto",popperClass:["tainacan-tooltip","tooltip"],triggers:[],show:T.bulkEditionProcedures[i].tooltipShow}]])],40,C)):(0,n.Q3)("",!0),!T.bulkEditionProcedures[i].isDone&&!T.bulkEditionProcedures[i].isExecuting&&T.bulkEditionProcedures[i].metadatum&&T.bulkEditionProcedures[i].action&&(T.bulkEditionProcedures[i].action!=T.editionActions.copy||T.bulkEditionProcedures[i].action==T.editionActions.copy&&T.bulkEditionProcedures[i].metadatumIdCopyFrom)?((0,n.uX)(),(0,n.CE)("button",{key:2,disabled:!T.groupId,class:"button is-white is-pulled-right",onClick:function(t){return F.executeBulkEditionProcedure(i)}},[(0,n.bo)(((0,n.uX)(),(0,n.CE)("span",j,e[6]||(e[6]=[(0,n.Lk)("i",{class:"has-text-gray4 tainacan-icon tainacan-icon-1-25em tainacan-icon-play"},null,-1)]))),[[U,{content:t.$i18n.get("label_apply_changes"),autoHide:!0,placement:"auto-end",popperClass:["tainacan-tooltip","tooltip"]}]])],8,w)):(0,n.Q3)("",!0),T.bulkEditionProcedures[i].isExecuting?((0,n.uX)(),(0,n.CE)("div",V,e[7]||(e[7]=[(0,n.Lk)("button",{class:"button is-white is-loading"},null,-1)]))):(0,n.Q3)("",!0)],4)])})),128))]})),_:1}),(0,n.Lk)("a",{disabled:!1===T.dones.every((function(t){return!0===t})),class:"has-text-right is-inline-block add-link",onClick:e[0]||(e[0]=function(t){return F.addEditionCriterion()})},[e[8]||(e[8]=(0,n.Lk)("span",{class:"icon is-small"},[(0,n.Lk)("i",{class:"tainacan-icon has-text-secondary tainacan-icon-add"})],-1)),(0,n.eW)("  "+(0,n.v_)(t.$i18n.get("new_bulk_edit_criterion")),1)],8,$)]),(0,n.Lk)("footer",X,[(0,n.Lk)("p",S,[(0,n.Lk)("button",{disabled:Object.keys(T.bulkEditionProcedures).length&&T.bulkEditionProcedures[T.editionCriteria[T.editionCriteria.length-1]].isExecuting||!1,type:"button",class:"button is-outlined",onClick:e[1]||(e[1]=function(e){t.$eventBusSearch.loadItems(),t.$emit("close")})},(0,n.v_)(t.$i18n.get("close")),9,O)]),(0,n.Lk)("p",L,[(0,n.Lk)("button",{disabled:!1===T.dones.every((function(t){return!0===t})),class:"button is-success",type:"button",onClick:e[2]||(e[2]=function(e){t.$emitter.emit("openProcessesPopup"),t.$eventBusSearch.loadItems(),t.$emit("close")})},(0,n.v_)(t.$i18n.get("finish")),9,B)])])])],512)}},75030:(t,e,i)=>{i.d(e,{A:()=>l});var n=i(31601),a=i.n(n),o=i(76314),d=i.n(o)()(a());d.push([t.id,"@media screen and (max-width: 768px){.tainacan-bulk-edition-inline-fields{flex-direction:column !important}.tainacan-bulk-edition-inline-fields .tainacan-bulk-edition-field:not(:first-child){padding-left:0 !important}.tainacan-bulk-edition-inline-fields .bulk-last-field{margin-left:0 !important;justify-content:center !important}}.this-tainacan-modal-content{min-height:300px}.this-tainacan-modal-content .button.is-white.is-loading{cursor:inherit;color:var(--tainacan-gray4) !important}.this-tainacan-modal-content .is-pulled-right .is-success{background-color:transparent !important}.this-tainacan-modal-content .add-link{font-size:0.875em}.this-tainacan-modal-content .form-submit{padding:42px 0 0.4em 0 !important}.no-overflow-modal-card-body{padding:0 !important;overflow:unset !important}.tainacan-total-objects-info{font-size:0.75em;font-weight:normal}.tainacan-by-text{max-width:28px}.tainacan-bulk-edition-inline-fields{display:inline-flex;flex-direction:row;flex-wrap:wrap;width:100%}.tainacan-bulk-edition-inline-fields .control .select{width:100% !important}.tainacan-bulk-edition-inline-fields .control .select select{width:100% !important}.tainacan-bulk-edition-inline-fields .taginput-container{height:32px !important}.tainacan-bulk-edition-inline-fields .taginput-container .tags{margin-bottom:calc(0.275em - 1px) !important}.tainacan-bulk-edition-inline-fields .taginput-container .tags .tag{height:2em !important;padding-left:0.75em !important;padding-right:0.75em !important;margin-right:0 !important}.tainacan-bulk-edition-inline-fields .taginput-container .icon{height:28px !important}.tainacan-bulk-edition-inline-fields .is-field-history .input[disabled],.tainacan-bulk-edition-inline-fields .is-field-history .taginput [disabled].taginput-container.is-focusable,.tainacan-bulk-edition-inline-fields .is-field-history .textarea[disabled]{color:var(--tainacan-black) !important;border:none !important;background-color:var(--tainacan-input-background-color) !important}.tainacan-bulk-edition-inline-fields .is-field-history .taginput-container .tags{color:var(--tainacan-black) !important;background-color:var(--tainacan-white) !important;border:none !important}.tainacan-bulk-edition-inline-fields .is-field-history .taginput-container .tags .tag.is-delete{display:none !important}.tainacan-bulk-edition-inline-fields .is-field-history .taginput-container .tags .tag{max-width:100% !important}.tainacan-bulk-edition-inline-fields .is-field-history .taginput-container .tags:hover,.tainacan-bulk-edition-inline-fields .is-field-history .taginput-container .tags .tag{background-color:var(--tainacan-white) !important}.tainacan-bulk-edition-inline-fields .is-field-history .taginput-container .icon{display:none !important}.tainacan-bulk-edition-inline-fields .is-field-history input{color:var(--tainacan-black) !important;border:none !important;background-color:var(--tainacan-white) !important}.tainacan-bulk-edition-inline-fields .is-field-history textarea{color:var(--tainacan-black) !important;border:none !important;background-color:var(--tainacan-white) !important;min-height:auto !important;line-height:1.5em}.tainacan-bulk-edition-inline-fields .is-field-history .select:after{display:none !important}.tainacan-bulk-edition-inline-fields .is-field-history .select select{border:none !important}.tainacan-bulk-edition-inline-fields .tainacan-bulk-edition-field{flex-direction:column;flex-grow:1;flex-shrink:1;text-align:center;padding-bottom:9px;flex-basis:10%}.tainacan-bulk-edition-inline-fields .tainacan-bulk-edition-field:not(:first-child){padding-left:13px}.tainacan-bulk-edition-inline-fields .tainacan-bulk-edition-field :deep(.is-special-hidden-for-mobile),.tainacan-bulk-edition-inline-fields .tainacan-bulk-edition-field :deep(.is-special-hidden-for-mobile):focus,.tainacan-bulk-edition-inline-fields .tainacan-bulk-edition-field :deep(.is-special-hidden-for-mobile):focus-visible{opacity:0;width:0;height:0 !important;min-height:0;min-width:0;padding:0 !important;line-height:0px !important;border:none !important;border-color:transparent !important;border-width:0px !important;font-size:0px !important;display:block !important}.tainacan-bulk-edition-inline-fields .bulk-last-field{display:flex;align-items:center;height:32px;margin-left:10px;flex-direction:row-reverse}.tainacan-bulk-edition-inline-fields .bulk-last-field .icon.has-text-gray4:hover{color:var(--tainacan-heading-color) !important}.tainacan-add-edition-criterion-button{font-size:0.75em;color:var(--tainacan-turquoise5)}.tainacan-add-edition-criterion-button-disabled{cursor:not-allowed !important}\n",""]);const l=d},87583:(t,e,i)=>{var n=i(85072),a=i.n(n),o=i(97825),d=i.n(o),l=i(77659),r=i.n(l),u=i(55056),c=i.n(u),s=i(10540),m=i.n(s),p=i(63494),b=i.n(p),f=i(75030),k={};k.styleTagTransform=b(),k.setAttributes=c(),k.insert=r().bind(null,"head"),k.domAPI=d(),k.insertStyleElement=m();a()(f.A,k),f.A&&f.A.locals&&f.A.locals},19741:(t,e,i)=>{i.r(e),i.d(e,{default:()=>o});var n=i(17244),a=i(75370);i(35546);const o=(0,i(66262).A)(a.A,[["render",n.X]])},75370:(t,e,i)=>{i.d(e,{A:()=>n.A});var n=i(27493)},17244:(t,e,i)=>{i.d(e,{X:()=>n.X});var n=i(85787)},35546:(t,e,i)=>{i(87583)}}]);