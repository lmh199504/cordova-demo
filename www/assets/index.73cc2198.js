import{o as _}from"./back.9355f2a3.js";import{W as y,P as C}from"./index.c8560d34.js";import{r as L}from"./index.2b7553c5.js";import{e as k,d as T,r as l,f as p,c as e,a as r,b as n,S as R,T as w}from"./index.a0335495.js";const I="_container_ebqp3_23",t={"flex-between":"_flex-between_ebqp3_1","plate-info":"_plate-info_ebqp3_7","font-14-white":"_font-14-white_ebqp3_12","font-14-gray":"_font-14-gray_ebqp3_16","border-box":"_border-box_ebqp3_20",container:I,"choose-warehouse":"_choose-warehouse_ebqp3_26","choose-title":"_choose-title_ebqp3_30","lenged-wrapper":"_lenged-wrapper_ebqp3_33","bottom-btn":"_bottom-btn_ebqp3_36","bind-btn":"_bind-btn_ebqp3_47","disabled-btn":"_disabled-btn_ebqp3_50"},A=c=>k({url:"/rk/rkReagentLibrary/scanningAllWarehousing",method:"GET",params:c}),W=c=>k({url:"/rk/rkReagentLibrary/byReagentCode",method:"GET",params:c}),S=T({name:"ReagentPut",setup(){const h=R().query.rackCode;if(!h){_();return}const s=l(),b=l(!1),d=l(!0),u=l([]),f=l(),i=l(),q=p(()=>!!f.value),g=p(()=>u.value.length==15),m=p(()=>!g.value&&!q.value&&d.value&&!b.value),x=()=>{L().then(a=>{u.value=a.data.data;const o=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];u.value.forEach(v=>{const D=o.findIndex(P=>v.rackPosition==P);D!=-1&&o.splice(D,1)}),o.length&&(i.value=o[0])})},B=()=>{var a;f.value=f.value=(a=u.value.find(o=>o.rackPosition==i.value))==null?void 0:a.id},E=async()=>{const a=await W({rackCode:h});a.data.data?(s.value=a.data.data,a.data.data.status==1?b.value=!0:a.data.data.status==2&&(d.value=!1)):d.value=!1},F=()=>{var o;const a=w.loading({message:"\u52A0\u8F7D\u4E2D...",overlay:!0,mask:!0,duration:0});A({id:(o=s==null?void 0:s.value)==null?void 0:o.id,rackPosition:i.value}).then(()=>{a.clear(),w.success("\u7ED1\u5B9A\u6210\u529F"),setTimeout(()=>{_()},1500)}).catch(()=>{a.clear()})};return E(),x(),()=>{var a,o;return e("div",null,[e(r("van-nav-bar"),{title:"\u8BD5\u5242\u5165\u5E93",fixed:!0,placeholder:!0,"left-arrow":!0,border:!1,onClickLeft:_},null),b.value?e(r("van-notice-bar"),{color:"#FF4747",background:"#44343B","left-icon":"close"},{default:()=>[n("\u5F53\u524D\u8BD5\u5242\u5DF2\u7ED1\u5B9A")]}):null,d.value?null:e(r("van-notice-bar"),{color:"#FF4747",background:"#44343B","left-icon":"close"},{default:()=>[n("\u8BD5\u5242\u7C7B\u578B\u4E0E\u6E05\u5355\u4E0D\u5339\u914D")]}),g.value?e(r("van-notice-bar"),{color:"#FF7614",background:"#443936","left-icon":"info-o"},{default:()=>[n("\u8BD5\u5242\u4ED3\u4F4D\u5DF2\u6EE1")]}):null,e("div",{class:t.container},[e("div",{class:t["plate-info"]},[e("div",{class:t["flex-between"]},[e("div",{class:t["font-14-white"]},[n("\u8BD5\u5242\u4FE1\u606F")])]),e("div",{class:[t["flex-between"],t["border-box"]]},[e("div",{class:t["font-14-gray"]},[n("\u8BD5\u5242\u7C7B\u578B")]),e("div",{class:t["font-14-white"]},[(a=s.value)==null?void 0:a.name])]),e("div",{class:[t["flex-between"],t["border-box"]]},[e("div",{class:t["font-14-gray"]},[n("\u8BD5\u5242\u6570\u91CF")]),e("div",{class:t["font-14-white"]},[(o=s.value)==null?void 0:o.num,n("L")])])]),e("div",{class:t["choose-warehouse"]},[e("div",{class:[t["font-14-white"],t["choose-title"]]},[n("\u9009\u62E9\u4ED3\u4F4D")]),e(y,{hasList:u.value,selectPosition:i.value,"onUpdate:selectPosition":v=>i.value=v,onChangePosition:B},null),e("div",{class:t["lenged-wrapper"]},[e(C,{hasText:"\u5DF2\u6709\u8BD5\u5242",noText:"\u6682\u65E0\u8BD5\u5242"},null)])])]),e("div",{class:t["bottom-btn"]},[e(r("van-button"),{onClick:F,type:"primary",class:[t["bind-btn"],m.value?"":t["disabled-btn"]],disabled:!m.value,block:!0},{default:()=>[n("\u7ED1\u5B9A\u4ED3\u4F4D")]})])])}}});export{S as default};
