"use strict";(self.webpackChunktainacan=self.webpackChunktainacan||[]).push([[7207,9588],{5625:(t,a,e)=>{e.d(a,{A:()=>i});const i={props:{itemMetadatum:Object,value:[String,Number,Array],disabled:!1},emits:["update:value","blur","mobile-special-focus"],data:function(){return{localValue:""}},computed:{getMaxlength:function(){return this.itemMetadatum&&this.itemMetadatum.metadatum.metadata_type_options&&null!==this.itemMetadatum.metadatum.metadata_type_options.maxlength&&void 0!==this.itemMetadatum.metadatum.metadata_type_options.maxlength&&""!==this.itemMetadatum.metadatum.metadata_type_options.maxlength?Number(this.itemMetadatum.metadatum.metadata_type_options.maxlength):void 0}},created:function(){this.localValue=this.value?JSON.parse(JSON.stringify(this.value)):""},methods:{onInput:function(t){var a=this.$refs["tainacan-item-metadatum_id-"+this.itemMetadatum.metadatum.id+(this.itemMetadatum.parent_meta_id?"_parent_meta_id-"+this.itemMetadatum.parent_meta_id:"")];a&&this.getMaxlength&&!a.checkHtml5Validity()||(this.localValue=t,this.changeValue(t))},changeValue:_.debounce((function(t){this.$emit("update:value",t)}),750),onBlur:function(){this.$emit("blur")},onMobileSpecialFocus:function(){this.$emit("mobile-special-focus")}}}},47806:(t,a,e)=>{e.d(a,{X:()=>m});var i=e(6934);function m(t,a,e,m,u,d){var n=(0,i.g2)("b-input");return(0,i.uX)(),(0,i.Wv)(n,{id:"tainacan-item-metadatum_id-"+e.itemMetadatum.metadatum.id+(e.itemMetadatum.parent_meta_id?"_parent_meta_id-"+e.itemMetadatum.parent_meta_id:""),ref:"tainacan-item-metadatum_id-"+e.itemMetadatum.metadatum.id+(e.itemMetadatum.parent_meta_id?"_parent_meta_id-"+e.itemMetadatum.parent_meta_id:""),disabled:e.disabled,placeholder:e.itemMetadatum.metadatum.placeholder?e.itemMetadatum.metadatum.placeholder:"","model-value":u.localValue,type:"textarea",maxlength:d.getMaxlength,"onUpdate:modelValue":a[0]||(a[0]=function(t){return d.onInput(t)}),onBlur:d.onBlur,onFocus:d.onMobileSpecialFocus},null,8,["id","disabled","placeholder","model-value","maxlength","onBlur","onFocus"])}},37207:(t,a,e)=>{e.r(a),e.d(a,{default:()=>u});var i=e(84007),m=e(22396);const u=(0,e(66262).A)(m.A,[["render",i.X]])},22396:(t,a,e)=>{e.d(a,{A:()=>i.A});var i=e(5625)},84007:(t,a,e)=>{e.d(a,{X:()=>i.X});var i=e(47806)}}]);