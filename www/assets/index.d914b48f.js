import{d as k,e as D,c as e,f as K,r as p,w as F,a as _,b as y,F as J,T as g,D as Q,i as X,u as ee,g as j,v as z,h as ae,o as te,j as le,p as B}from"./index.70606483.js";import{o as N}from"./back.aed9095d.js";import{r as ne,a as se,b as P,c as A,d as ie,e as ue}from"./index.e35daa60.js";import{P as oe}from"./index.9ece17ad.js";const G={"lib-manage":"_lib-manage_zoacm_1","lib-dropdown-menu":"_lib-dropdown-menu_zoacm_6"},S={"area-btn-lenged":"_area-btn-lenged_1p2hk_1","area-btn-wrapper":"_area-btn-wrapper_1p2hk_6","area-btn":"_area-btn_1p2hk_1","area-btn-active":"_area-btn-active_1p2hk_20"};var v=(a=>(a[a.YP=1]="YP",a[a.LH1=2]="LH1",a[a.LH2=3]="LH2",a[a.NC=4]="NC",a[a.GW=5]="GW",a[a.GZ=6]="GZ",a[a.SJ1=7]="SJ1",a[a.SJ2=8]="SJ2",a))(v||{});const t={"disk-rack-wrapper":"_disk-rack-wrapper_1uy7y_1","disk-top":"_disk-top_1uy7y_5","disk-info":"_disk-info_1uy7y_10","disk-icon":"_disk-icon_1uy7y_13","disk-text":"_disk-text_1uy7y_18","disk-name":"_disk-name_1uy7y_23","disk-no":"_disk-no_1uy7y_27","disk-menu":"_disk-menu_1uy7y_31","disk-list":"_disk-list_1uy7y_41","disk-item":"_disk-item_1uy7y_41","disk-item-index":"_disk-item-index_1uy7y_49","disk-item-content":"_disk-item-content_1uy7y_55","disk-item-name":"_disk-item-name_1uy7y_61","disk-item-no":"_disk-item-no_1uy7y_66","disk-item-num":"_disk-item-num_1uy7y_72","gzq-info":"_gzq-info_1uy7y_76","gzq-label":"_gzq-label_1uy7y_82","gzq-value":"_gzq-value_1uy7y_86","empty-wrapper":"_empty-wrapper_1uy7y_90","select-btn":"_select-btn_1uy7y_90","scan-btn":"_scan-btn_1uy7y_104","scan-code":"_scan-code_1uy7y_115","scan-icon":"_scan-icon_1uy7y_131","scan-text":"_scan-text_1uy7y_136","menu-list":"_menu-list_1uy7y_141","menu-item":"_menu-item_1uy7y_144","menu-name":"_menu-name_1uy7y_148","menu-icon":"_menu-icon_1uy7y_154"},O={"plate-wrapper":"_plate-wrapper_1tby8_1","plate-wrapper-grid":"_plate-wrapper-grid_1tby8_5"},C={"sample-box":"_sample-box_50c22_1","sample-box-inner":"_sample-box-inner_50c22_6","active-inner":"_active-inner_50c22_41","sample-box-has":"_sample-box-has_50c22_49","sample-box-active":"_sample-box-active_50c22_56"},ce=k({name:"PlateItem",props:{plateData:{type:Object,required:!0},selectId:{type:Number,required:!0}},emits:["select"],setup(a,{emit:s}){const i=D(()=>a.selectId==a.plateData.id),u=()=>{s("select",a.plateData.id)};return()=>e("div",{onClick:u,class:[C["sample-box"],a.plateData.isExist==1?C["sample-box-has"]:"",i.value?C["sample-box-active"]:""]},[e("div",{class:C["sample-box-inner"]},[a.plateData.area,a.plateData.areaCode]),i.value?e("div",{class:C["active-inner"]},null):null])}}),de=k({name:"PlateList",props:{plateList:{type:Array,required:!0},selectId:{type:Number,required:!0},areaData:{type:Object,required:!0}},emits:["select"],setup(a,{emit:s}){const i=m=>{s("select",m)},u=D(()=>`grid-template-columns: repeat(${a.areaData.width}, 62px);grid-template-columns: repeat(${a.areaData.length}, 62px);`);return()=>e("div",{class:O["plate-wrapper"]},[e("div",{class:O["plate-wrapper-grid"],style:u.value},[a.plateList.map(m=>e(ce,{plateData:m,selectId:a.selectId,onSelect:i},null))])])}}),L=""+new URL("warehouse-empty.f9a25e20.png",import.meta.url).href,re=""+new URL("reagent-empty.3eeac3fa.png",import.meta.url).href,me="_checked_15yj6_75",h={"popup-content":"_popup-content_15yj6_1","popup-tool":"_popup-tool_15yj6_8","cancel-btn":"_cancel-btn_15yj6_17","popup-title":"_popup-title_15yj6_22","confirm-btn":"_confirm-btn_15yj6_27","list-wrapper":"_list-wrapper_15yj6_32","select-item":"_select-item_15yj6_38","select-item-left":"_select-item-left_15yj6_48","item-params":"_item-params_15yj6_52","item-desc":"_item-desc_15yj6_60","select-item-right":"_select-item-right_15yj6_68",checked:me},ve=()=>K({url:"/rk/rkSampleLibrary/getNotWarehousing",method:"GET"}),_e=k({name:"SelectPopup",props:{show:{type:Boolean,default:!1}},emits:["update:show","confirm"],setup(a,{emit:s}){const i=D({get(){return a.show},set(o){s("update:show",o)}}),u=p(),m=()=>{i.value=!1},l=()=>{i.value=!1,u.value&&s("confirm",u.value),u.value=void 0},f=p([]),d=()=>{ve().then(o=>{f.value=o.data.data})},b=o=>{u.value=o.id};return F(()=>a.show,o=>{o&&d()}),()=>e(J,null,[e(_("van-popup"),{show:i.value,"onUpdate:show":o=>i.value=o,position:"bottom",round:!0},{default:()=>[e("div",{class:h["popup-content"]},[e("div",{class:h["popup-tool"]},[e("div",{class:h["cancel-btn"],onClick:m},[y("\u53D6\u6D88")]),e("div",{class:h["popup-title"]},[y("\u76D8\u67B6\u5165\u5E93")]),e("div",{class:h["confirm-btn"],onClick:l},[y("\u786E\u5B9A")])]),e("div",{class:h["list-wrapper"]},[f.value.map(o=>e("div",{class:h["select-item"],onClick:()=>b(o)},[e("div",{class:h["select-item-left"]},[e("div",{class:h["item-params"]},[e("span",null,[o.rackCode])]),e("div",{class:h["item-desc"]},[o.rackDescribe])]),e("div",{class:h["select-item-right"]},[e("div",{class:h.checked},[u.value==o.id?e(_("svg-icon"),{name:"icon-success"},null):null])])]))])])]})])}}),pe="_content_1xf1q_1",w={content:pe,"flex-box":"_flex-box_1xf1q_4","flex-label":"_flex-label_1xf1q_11","flex-value":"_flex-value_1xf1q_15"},fe=k({name:"GzModal",props:{show:{type:Boolean,default:!1},gzqInfo:{type:Object,required:!0}},emits:["update:show","confirm"],setup(a,{emit:s}){const i=D({get(){return a.show},set(l){s("update:show",l)}}),u=()=>{s("confirm")},m=()=>{i.value=!1};return()=>e(_("van-dialog"),{show:i.value,"onUpdate:show":l=>i.value=l,title:"\u5E72\u71E5\u4FE1\u606F",confirmButtonText:"\u653E\u5165\u4ED3\u4F4D","show-cancel-button":!0,"cancel-button-text":"\u53D6\u6D88","cancel-button-color":"#fff","confirm-button-color":"#00a9a9",onConfirm:u,onCancel:m},{default:()=>{var l,f;return[e("div",{class:w.content},[e("div",{class:w["flex-box"]},[e("div",{class:w["flex-label"]},[y("\u7C7B\u578B\uFF1A")]),e("div",{class:w["flex-value"]},[(l=a.gzqInfo)==null?void 0:l.containerTypeManageName])]),e("div",{class:w["flex-box"]},[e("div",{class:w["flex-label"]},[y("\u7F16\u7801\uFF1A")]),e("div",{class:w["flex-value"]},[(f=a.gzqInfo)==null?void 0:f.rackCode])])])]}})}}),ye=k({name:"AreaItem",props:{areaData:{type:Object,required:!0},show:{type:Boolean,required:!0},module:{type:Number,required:!0}},setup(a){const s=X("setIsScaning"),i=p(!1),u=ee();let m=!1;const l=p(-1),f=p(!1),d=p(!1),b=p(),o=p(a.areaData.details||[]),U=()=>{var n;if(((n=b.value)==null?void 0:n.isOut)==1){g.fail("\u5F53\u524D\u4ED3\u4F4D\u5F85\u51FA\u4ED3\uFF0C\u7981\u6B62\u64CD\u4F5C\uFF01");return}u.push({path:"/bindSample",query:{id:l.value}})},M=()=>{var n;if(((n=b.value)==null?void 0:n.isOut)==1){g.fail("\u5F53\u524D\u4ED3\u4F4D\u5F85\u51FA\u4ED3\uFF0C\u7981\u6B62\u64CD\u4F5C\uFF01");return}f.value=!1,Q.confirm({message:"\u8BF7\u786E\u8BA4\u5DF2\u4ECE\u4ED3\u4F4D\u4E2D\u53D6\u8D70\u9009\u4E2D\u7684\u76D8\u67B6",cancelButtonColor:"#fff",confirmButtonColor:"#00A9A9"}).then(()=>{ne({id:l.value}).then(()=>{g.success("\u51FA\u5E93\u6210\u529F"),setTimeout(()=>{const c=o.value.find(r=>r.id===l.value);c&&(c.isExist=0),x()},1500)})}).catch(()=>{console.log("\u53D6\u6D88\u4E86\u51FA\u5E93")})},$=n=>{const c=n+1;return c>9?c:"0"+c},T=()=>{d.value=!0},H=n=>{const c=g.loading({message:"\u5165\u5E93\u4E2D...",duration:0,overlay:!0,mask:!0});se({id:n,warehouseId:l.value}).then(()=>{c.clear(),g.success("\u5165\u5E93\u6210\u529F");const r=o.value.find(q=>q.id===l.value);r&&(r.isExist=1),x()}).catch(()=>{c.clear()}),d.value=!1},W=()=>{s(!0),cordova.plugins.barcodeScanner.scan(async function(n){if(n.text){const c=await P({rackCode:n.text});c.data.data?A({warehouseId:l.value,id:c.data.data.id}).then(()=>{const r=o.value.find(q=>q.id===l.value);r&&(r.isExist=1),x()}):g("\u76D8\u67B6\u4E0D\u5B58\u5728")}setTimeout(()=>{s(!1)},200)},function(n){console.log(n),setTimeout(()=>{s(!1)},200)})},Z=()=>{u.push({path:"/bindSample"})},V=n=>{l.value=n,x()},Y=()=>{a.areaData.details.length&&(l.value=a.areaData.details[0].id,m=!0,x())},x=()=>{ie({id:l.value}).then(n=>{b.value=n.data.data})},I=p({id:-1,containerTypeManageId:-1,containerTypeManageName:"",remarks:"",status:null,lists:[],rackCode:"",fullCount:0}),E=()=>{s(!0),cordova.plugins.barcodeScanner.scan(async function(n){if(n.text){const c=await P({rackCode:n.text});c.data.data?(i.value=!0,I.value=c.data.data):g("\u76D8\u67B6\u4E0D\u5B58\u5728")}setTimeout(()=>{s(!1)},200)},function(n){console.log(n),setTimeout(()=>{s(!1)},200)})},R=()=>{var n;i.value=!1,A({warehouseId:l.value,id:(n=I.value)==null?void 0:n.id}).then(()=>{const c=o.value.find(r=>r.id===l.value);c&&(c.isExist=1),x()})};return F(()=>a.show,()=>{!m&&a.show==!0&&Y()},{immediate:!0}),()=>{var n,c;return e("div",null,[e(de,{areaData:a.areaData,plateList:o.value,selectId:l.value,onSelect:V},null),(n=b.value)!=null&&n.id?e("div",{class:t["disk-rack-wrapper"]},[e("div",{class:t["disk-top"]},[e("div",{class:t["disk-info"]},[e("div",{class:t["disk-icon"]},[e(_("svg-icon"),{name:[v.SJ1,v.SJ2].includes(a.module)?"icon-reagent":[v.GZ].includes(a.module)?"icon-gzq":"disk-icon"},null)]),e("div",{class:t["disk-text"]},[e("div",{class:t["disk-name"]},[(c=b.value)==null?void 0:c.rackCode])])]),e(_("van-popover"),{class:"my-popover",show:f.value,"onUpdate:show":r=>f.value=r,theme:"dark",placement:"bottom-end"},{reference:()=>e("div",{class:t["disk-menu"]},[e(_("svg-icon"),{name:"dot-menu"},null)]),default:()=>e("div",{class:t["menu-list"]},[[v.YP].includes(a.module)?e("div",{class:t["menu-item"],onClick:U},[e("div",{class:t["menu-icon"]},[e(_("svg-icon"),{name:"icon-edit"},null)]),e("div",{class:t["menu-name"]},[y("\u7F16\u8F91")])]):null,e("div",{class:t["menu-item"],onClick:M},[e("div",{class:t["menu-icon"]},[e(_("svg-icon"),{name:"icon-export"},null)]),e("div",{class:t["menu-name"]},[y("\u6574\u67B6\u51FA\u5E93")])])])})]),[v.GZ].includes(a.module)?e("div",{class:t["gzq-info"]},[e("div",{class:t["gzq-label"]},[y("\u5668\u5177\u6570\u91CF")]),e("div",{class:t["gzq-value"]},[b.value.fullCount||"-"])]):e("div",{class:t["disk-list"]},[b.value.details.map((r,q)=>e("div",{class:t["disk-item"]},[e("div",{class:t["disk-item-index"]},[$(q)]),e("div",{class:t["disk-item-content"]},[e("div",{class:t["disk-item-name"]},[r.name]),r.code?e("div",{class:t["disk-item-no"]},[r.code]):null]),[v.GZ].includes(a.module)?e("div",{class:t["disk-item-num"]},[r.number]):null]))])]):[v.YP].includes(a.module)?e("div",{class:t["empty-wrapper"]},[e(_("van-empty"),{image:L,description:"\u5F53\u524D\u4ED3\u4F4D\u6682\u65E0\u76D8\u67B6"},null),e("div",{class:t["select-btn"],onClick:T},[y("\u4ECE\u5217\u8868\u9009\u62E9\u5165\u5E93")]),e("div",{class:t["scan-btn"],onClick:W},[y("\u626B\u76D8\u67B6\u7801\u5165\u5E93")])]):a.module==v.GZ?e("div",{class:t["empty-wrapper"]},[e(_("van-empty"),{image:L,description:"\u5F53\u524D\u4ED3\u4F4D\u6682\u65E0\u5E72\u71E5\u5668"},null),e("div",{class:t["select-btn"],onClick:E},[y("\u626B\u7801\u5F55\u5165")])]):[v.GW,v.LH1,v.LH2,v.NC].includes(a.module)?e("div",{class:t["empty-wrapper"]},[e(_("van-empty"),{image:L,description:"\u5F53\u524D\u4ED3\u4F4D\u6682\u65E0\u76D8\u67B6"},null)]):e("div",{class:t["empty-wrapper"]},[e(_("van-empty"),{image:re,description:"\u5F53\u524D\u4ED3\u4F4D\u6682\u65E0\u8BD5\u5242"},null)]),[v.YP].includes(a.module)?e("div",{class:t["scan-code"],onClick:Z},[e("div",{class:t["scan-icon"]},[e(_("svg-icon"),{name:"icon-scan"},null)]),e("div",{class:t["scan-text"]},[y("\u6837\u54C1\u7ED1\u5B9A")])]):null,e(_e,{show:d.value,"onUpdate:show":r=>d.value=r,onConfirm:H},null),e(fe,{show:i.value,"onUpdate:show":r=>i.value=r,onConfirm:R,gzqInfo:I.value},null)])}}}),be=k({name:"LevelItem",props:{levelData:{type:Object,required:!0},show:{type:Boolean,required:!0},module:{type:Number,required:!0}},setup(a){const s=p("A"),i=u=>{s.value=u};return()=>e("div",null,[e("div",{class:S["area-btn-lenged"]},[e("div",{class:S["area-btn-wrapper"]},[a.levelData.details.map(u=>e("div",{onClick:()=>i(u.area),class:[S["area-btn"],u.area==s.value?S["area-btn-active"]:""]},[u.area,y("\u533A")]))]),e(oe,{hasText:[v.SJ1,v.SJ2].includes(a.module)?"\u5DF2\u6709\u8BD5\u5242":"\u5DF2\u6709\u76D8\u67B6",noText:[v.SJ1,v.SJ2].includes(a.module)?"\u6682\u65E0\u8BD5\u5242":"\u6682\u65E0\u76D8\u67B6"},null)]),a.levelData.details.map(u=>j(e(ye,{areaData:u,key:u.area,show:a.show&&s.value===u.area,module:a.module},null),[[z,s.value===u.area]]))])}});function he(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!ae(a)}const ge=k({name:"LibItem",props:{moduleData:{type:Object,required:!0},libType:{type:Number,required:!0},show:{type:Boolean,required:!0}},setup(a){const s=p(),i=p(0),u=D(()=>a.libType===a.moduleData.module);return()=>{let m;return e("div",null,[u.value?e(_("van-tabs"),{active:i.value,"onUpdate:active":l=>i.value=l,ref:s.value},he(m=a.moduleData.details.map(l=>e(_("van-tab"),{title:l.levelName},null)))?m:{default:()=>[m]}):null,e("div",null,[a.moduleData.details.map((l,f)=>j(e(be,{levelData:l,key:l.level,show:f==i.value&&a.show,module:a.moduleData.module},null),[[z,f==i.value]]))])])}}}),Ce=k({name:"LibManageNew",setup(){const a=p(0),s=p([]),i=p([]);(()=>{const d=g.loading({duration:0,message:"\u52A0\u8F7D\u4E2D..."});ue().then(b=>{i.value=b.data.data,s.value=b.data.data.map(o=>({text:o.moduleName,value:o.module})),s.value.length&&(a.value=s.value[0].value),d.clear()}).catch(()=>{d.clear()})})();const m=p(!1),l=d=>{m.value?d.preventDefault():N()};te(()=>{document.addEventListener("backbutton",l)}),le(()=>{document.removeEventListener("backbutton",l)});const f=d=>{m.value=d};return B("isScaning",m),B("setIsScaning",f),()=>e(J,null,[e("div",{class:[G["lib-manage"],"lib-manage"]},[e(_("van-nav-bar"),{title:"\u5E93\u7BA1\u7406",fixed:!0,placeholder:!0,"left-arrow":!0,border:!1,onClickLeft:N,"z-index":"100"},{title:()=>e("div",{class:[G["lib-dropdown-menu"],"lib-dropdown-menu"]},[e(_("van-dropdown-menu"),{"active-color":"#00A9A9"},{default:()=>[e(_("van-dropdown-item"),{modelValue:a.value,"onUpdate:modelValue":d=>a.value=d,options:s.value},null)]})])}),i.value.map(d=>j(e(ge,{libType:a.value,key:d.module,moduleData:d,show:d.module===a.value},null),[[z,d.module===a.value]]))])])}});export{Ce as default};
