import{o as v}from"./back.9355f2a3.js";import{W as E,P as L}from"./index.c8560d34.js";import{e as w,d as A,C as T,r as c,f as _,c as e,a as d,b as n,S as W,T as h}from"./index.a0335495.js";import{r as N}from"./index.9225a351.js";const I="_container_ebqp3_23",a={"flex-between":"_flex-between_ebqp3_1","plate-info":"_plate-info_ebqp3_7","font-14-white":"_font-14-white_ebqp3_12","font-14-gray":"_font-14-gray_ebqp3_16","border-box":"_border-box_ebqp3_20",container:I,"choose-warehouse":"_choose-warehouse_ebqp3_26","choose-title":"_choose-title_ebqp3_30","lenged-wrapper":"_lenged-wrapper_ebqp3_33","bottom-btn":"_bottom-btn_ebqp3_36","bind-btn":"_bind-btn_ebqp3_47","disabled-btn":"_disabled-btn_ebqp3_50"},H=l=>w({url:"/rk/rkPipeConsumableLibrary/byRackTypeId",method:"GET",params:l}),G=l=>w({url:"/rk/rkPipeConsumableLibrary/scanningAllWarehousing",method:"GET",params:l}),U=A({name:"PipePut",setup(){const l=W(),m=l.query.rackCode,i=l.query.type,o=T({rackCode:"",rackLong:0,rackPosition:"",rackWide:0,numberHoles:0,applicableAppliancesName:"",id:0,aperture:0}),p=c(!1),b=c(!0),u=c([]),f=c(),r=c();if(!i||!m){v();return}const C=()=>{N({type:i}).then(s=>{u.value=s.data.data;const t=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];u.value.forEach(q=>{const y=t.findIndex(F=>q.rackPosition==F);y!=-1&&t.splice(y,1)}),t.length&&(r.value=t[0])})},D=()=>{const s=h.loading({message:"\u52A0\u8F7D\u4E2D...",overlay:!0,mask:!0,duration:0});H({rackCode:m,type:i}).then(t=>{t.data.data?(o.rackCode=t.data.data.rackCode,o.rackLong=t.data.data.rackLong,o.rackWide=t.data.data.rackWide,o.numberHoles=t.data.data.numberHoles,o.id=t.data.data.id,o.applicableAppliancesName=t.data.data.applicableAppliancesName,o.aperture=t.data.data.aperture,t.data.data.status==1?p.value=!0:t.data.data.status==2&&(b.value=!1)):b.value=!1,s.clear()}).catch(()=>{})},B=()=>{var s;f.value=f.value=(s=u.value.find(t=>t.rackPosition==r.value))==null?void 0:s.id},x=_(()=>!!f.value),k=_(()=>u.value.length==15),g=_(()=>!k.value&&!x.value&&b.value&&!p.value),P=()=>{const s=h.loading({message:"\u52A0\u8F7D\u4E2D...",overlay:!0,mask:!0,duration:0});G({id:o.id,type:i,rackPosition:r.value}).then(()=>{s.clear(),h.success("\u7ED1\u5B9A\u6210\u529F"),setTimeout(()=>{v()},1500)}).catch(()=>{s.clear()})};return D(),C(),()=>e("div",null,[e(d("van-nav-bar"),{title:i=="1"?"\u7BA1\u6750\u5165\u5E93":"\u8017\u6750\u5165\u5E93",fixed:!0,placeholder:!0,"left-arrow":!0,border:!1,onClickLeft:v},null),p.value?e(d("van-notice-bar"),{color:"#FF4747",background:"#44343B","left-icon":"close"},{default:()=>[n("\u5F53\u524D\u76D8\u67B6\u5DF2\u7ED1\u5B9A")]}):null,b.value?null:e(d("van-notice-bar"),{color:"#FF4747",background:"#44343B","left-icon":"close"},{default:()=>[n("\u76D8\u67B6\u7C7B\u578B\u4E0E\u6E05\u5355\u4E0D\u5339\u914D")]}),k.value?e(d("van-notice-bar"),{color:"#FF7614",background:"#443936","left-icon":"info-o"},{default:()=>[i=="1"?"\u7BA1\u6750":"\u8017\u6750",n("\u4ED3\u4F4D\u5DF2\u6EE1")]}):null,e("div",{class:a.container},[e("div",{class:a["plate-info"]},[e("div",{class:a["flex-between"]},[e("div",{class:a["font-14-white"]},[n("\u76D8\u67B6\u4FE1\u606F")])]),e("div",{class:[a["flex-between"],a["border-box"]]},[e("div",{class:a["font-14-gray"]},[n("\u76D8\u67B6\u7C7B\u578B")]),e("div",{class:a["font-14-white"]},[o.rackWide,n("X"),o.rackLong,n(" "),o.aperture,n("mm")])]),e("div",{class:[a["flex-between"],a["border-box"]]},[e("div",{class:a["font-14-gray"]},[n("\u76D8\u67B6\u7F16\u7801")]),e("div",{class:a["font-14-white"]},[o.rackCode])]),e("div",{class:[a["flex-between"],a["border-box"]]},[e("div",{class:a["font-14-gray"]},[n("\u7BA1\u6750\u7C7B\u578B")]),e("div",{class:a["font-14-white"]},[o.applicableAppliancesName])]),e("div",{class:[a["flex-between"],a["border-box"]]},[e("div",{class:a["font-14-gray"]},[n("\u7BA1\u6750\u6570\u91CF")]),e("div",{class:a["font-14-white"]},[o.numberHoles])])]),e("div",{class:a["choose-warehouse"]},[e("div",{class:[a["font-14-white"],a["choose-title"]]},[n("\u9009\u62E9\u4ED3\u4F4D")]),e(E,{hasList:u.value,selectPosition:r.value,"onUpdate:selectPosition":s=>r.value=s,onChangePosition:B},null),e("div",{class:a["lenged-wrapper"]},[e(L,null,null)])])]),e("div",{class:a["bottom-btn"]},[e(d("van-button"),{onClick:P,type:"primary",class:[a["bind-btn"],g.value?"":a["disabled-btn"]],disabled:!g.value,block:!0},{default:()=>[n("\u7ED1\u5B9A\u4ED3\u4F4D")]})])])}});export{U as default};
