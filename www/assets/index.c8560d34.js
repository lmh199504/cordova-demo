import{d as r,f as d,c as s}from"./index.a0335495.js";const m={"list-wrapper":"_list-wrapper_qx0fa_1"},a={"sample-box":"_sample-box_1s7m7_1","sample-box-inner":"_sample-box-inner_1s7m7_6","active-inner":"_active-inner_1s7m7_15","sample-box-has":"_sample-box-has_1s7m7_23","sample-box-active":"_sample-box-active_1s7m7_50"},p=r({name:"PlateItem",props:{rackPosition:{type:Number,default:0},hasList:{type:Array,default:()=>[]},selectPosition:{type:Number,default:0}},emits:["select"],setup(e,{emit:i}){const o=d(()=>e.hasList.length&&e.hasList.map(t=>t.rackPosition).includes(e.rackPosition)),n=d(()=>e.rackPosition==e.selectPosition),c=()=>{i("select",e.rackPosition)};return()=>s("div",{onClick:c,class:[a["sample-box"],o.value?a["sample-box-has"]:"",n.value?a["sample-box-active"]:""]},[s("div",{class:a["sample-box-inner"]},null),n.value?s("div",{class:a["active-inner"]},null):null])}}),_=r({name:"WarehouseList",props:{hasList:{type:Array,default:()=>[]},selectPosition:{type:Number,default:0}},emits:["update:selectPosition","changePosition"],setup(e,{emit:i}){const o=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],n=d({get(){return e.selectPosition},set(t){i("update:selectPosition",t),i("changePosition",t)}}),c=t=>{n.value=t};return()=>s("div",{class:m["list-wrapper"]},[o.map(t=>s(p,{key:t,rackPosition:t,hasList:e.hasList,selectPosition:n.value,onSelect:c},null))])}}),l={"sample-lenged":"_sample-lenged_c3hpn_1","sample-lenged-item":"_sample-lenged-item_c3hpn_5","lenged-label":"_lenged-label_c3hpn_13","lenged-box":"_lenged-box_c3hpn_20","lenged-box-none":"_lenged-box-none_c3hpn_26","lenged-box-has":"_lenged-box-has_c3hpn_31"},b=r({name:"PlateLenged",props:{hasText:{type:String,default:"\u5DF2\u6709\u76D8\u67B6"},noText:{type:String,default:"\u6682\u65E0\u76D8\u67B6"}},setup(e){return()=>s("div",{class:l["sample-lenged"]},[s("div",{class:l["sample-lenged-item"]},[s("div",{class:[l["lenged-box"],l["lenged-box-none"]]},null),s("div",{class:l["lenged-label"]},[e.noText])]),s("div",{class:l["sample-lenged-item"]},[s("div",{class:[l["lenged-box"],l["lenged-box-has"]]},null),s("div",{class:l["lenged-label"]},[e.hasText])])])}});export{b as P,_ as W};
