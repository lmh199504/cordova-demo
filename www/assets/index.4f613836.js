import{o as y}from"./back.9355f2a3.js";import{h as k}from"./header.9cee4da0.js";import{d as g,c as e,b as f,a as r,F as C,u as x,e as N,r as _,o as S,g as L}from"./index.a0335495.js";import{D as w}from"./function-call.e62a170f.js";const j={"ready-confirm":"_ready-confirm_1rgm2_1","icon-history":"_icon-history_1rgm2_4"},b={"confirm-wrapper":"_confirm-wrapper_prjsx_1"},F="_time_19ojg_4",T="_line_19ojg_53",t={"confirm-item":"_confirm-item_19ojg_1",time:F,"confirm-card":"_confirm-card_19ojg_10","card-header":"_card-header_19ojg_15","user-info":"_user-info_19ojg_18","user-info-left":"_user-info-left_19ojg_25","card-header-img":"_card-header-img_19ojg_29","card-header-username":"_card-header-username_19ojg_41","card-header-text":"_card-header-text_19ojg_45","confirm-code":"_confirm-code_19ojg_49","line-dot":"_line-dot_19ojg_53","dot-left":"_dot-left_19ojg_57",line:T,"dot-right":"_dot-right_19ojg_67","finish-icon":"_finish-icon_19ojg_73","enter-list":"_enter-list_19ojg_79","enter-item":"_enter-item_19ojg_82","enter-process":"_enter-process_19ojg_89","entered-num":"_entered-num_19ojg_93","enter-all":"_enter-all_19ojg_97","confirm-btn":"_confirm-btn_19ojg_105","confirm-scan":"_confirm-scan_19ojg_117","confirm-text":"_confirm-text_19ojg_124","enter-item-vol":"_enter-item-vol_19ojg_127","enter-item-name":"_enter-item-name_19ojg_131","enter-item-right":"_enter-item-right_19ojg_136","confirm-item-finish":"_confirm-item-finish_19ojg_140","item-finish":"_item-finish_19ojg_156"},E=g({name:"ConfirmItem",props:{type:{type:Number,default:1},confirmDetail:{type:Object,default:()=>({})}},emits:["scan"],setup(a,{emit:c}){const i=()=>{a.confirmDetail.trueAndFalse||c("scan")};return()=>e(C,null,[e("div",{class:[t["confirm-item"],a.confirmDetail.trueAndFalse?t["confirm-item-finish"]:""]},[e("div",{class:t.time},[a.confirmDetail.userTime||"-"]),e("div",{class:t["confirm-card"]},[e("div",{class:t["card-header"]},[e("div",{class:t["user-info"]},[e("div",{class:t["user-info-left"]},[e("div",{class:t["card-header-img"]},[e("img",{src:a.confirmDetail.avatar||k,alt:""},null)]),e("div",{class:t["card-header-username"]},[a.confirmDetail.dispatchUserName])]),e("div",{class:t["confirm-code"]},[f("\u7F16\u7801\uFF1A"),a.confirmDetail.confirmCode||"-"])]),e("div",{class:t["confirm-btn"],onClick:i},[e("div",{class:t["confirm-scan"]},[e(r("svg-icon"),{name:"confirm-scan"},null)]),e("div",{class:t["confirm-text"]},[f("\u626B\u7801\u5165\u5E93")])])]),e("div",{class:t["line-dot"]},[e("div",{class:t["dot-left"]},null),e("div",{class:"dashed-line"},null),e("div",{class:t["dot-right"]},null)]),e("div",{class:t["enter-list"]},[a.confirmDetail.detailsDOS.map(n=>e("div",{class:[t["enter-item"],[1,2].includes(n.type)&&n.onNum>=n.num||n.type==3&&n.onNum>=1?t["item-finish"]:""]},[e("div",{class:t["enter-item-left"]},[e("div",{class:t["enter-item-name"]},[n.name]),e("div",{class:t["enter-item-vol"]},[f("\xD7"),n.num])]),n.type==1||n.type==2?e("div",{class:t["enter-item-right"]},[n.onNum>=n.num?e("div",{class:t["enter-finish"]},[f("\u5DF2\u5B8C\u6210")]):e("div",{class:t["enter-process"]},[e("div",{class:t["entered-num"]},[n.onNum||0]),e("div",{class:t["enter-all"]},[f("/")]),e("div",{class:t["enter-all"]},[n.num])])]):e("div",{class:t["enter-item-right"]},[n.onNum>=1?"\u5DF2\u5B8C\u6210":"\u5F85\u5165\u5E93"])]))]),a.confirmDetail.trueAndFalse?e("div",{class:t["finish-icon"]},[e(r("svg-icon"),{name:"icon-all-finish"},null)]):null])])])}}),A=""+new URL("ready-empty.49d72d3c.png",import.meta.url).href,I="_img_1xe0g_8",U="_btn_1xe0g_11",p={"empty-wrapper":"_empty-wrapper_1xe0g_1",img:I,btn:U},q=g({name:"ConfirmEmpty",setup(){const a=x(),c=()=>{a.push("/confirmHistory")};return()=>e("div",{class:p["empty-wrapper"]},[e("div",null,[e("img",{class:p.img,src:A,alt:""},null)]),e("div",null,[e(r("van-button"),{onClick:c,type:"primary",block:!0,class:p.btn},{default:()=>[f("\u67E5\u770B\u5C31\u7EEA\u5386\u53F2")]})])])}}),B=a=>N({url:"/rk/checkTask/confirmApp",method:"GET",params:a}),h=g({name:"PipeConfirm",props:{type:{type:Number,default:1}},emits:["scan"],setup(a,{emit:c}){let i=0;const n=_([]),o=_(!1),l=_(!1),u=_(!1),v=()=>{i==1&&(n.value=[]),o.value=!0,B({pageNum:i,pageSize:10,type:a.type}).then(s=>{n.value=n.value.concat(s.data.rows),o.value=!1,u.value=!1,s.data.total&&n.value.length>=s.data.total?l.value=!0:l.value=!1,s.data.total==0&&(l.value=!0)}).catch(()=>{o.value=!1,u.value=!1,l.value=!0})},m=()=>{i++,v()},d=()=>{i=1,v()},D=()=>{c("scan")};return()=>e("div",{class:b["confirm-wrapper"]},[e(r("van-pull-refresh"),{modelValue:u.value,"onUpdate:modelValue":s=>u.value=s,onRefresh:d},{default:()=>[e(r("van-list"),{loading:o.value,"onUpdate:loading":s=>o.value=s,finished:l.value,onLoad:m,"finished-text":n.value.length?"\u6CA1\u6709\u66F4\u591A\u4E86":""},{default:()=>[e("div",{class:b["histroy-list"]},[n.value.map(s=>e(E,{confirmDetail:s,onScan:D},null))])]})]}),!o.value&&n.value.length==0?e(q,null,null):null])}}),$=g({name:"ReadyConfirm",setup(){const a=_(0),c=sessionStorage.getItem("readyConfromTab");a.value=c?Number(c):0;const i=x(),n=()=>{i.push("/confirmHistory")};let o=!1;const l=_(1),u=m=>{l.value=m,sessionStorage.setItem("readyConfromTab",a.value+""),o=!0,cordova.plugins.barcodeScanner.scan(function(d){d.text&&(l.value==1?i.push({path:"/pipePut",query:{type:1,rackCode:d.text}}):l.value==2?i.push({path:"/pipePut",query:{type:2,rackCode:d.text}}):i.push({path:"/reagentPut",query:{rackCode:d.text}})),setTimeout(()=>{o=!1},200)},function(){setTimeout(()=>{o=!1},200),w.alert({title:"\u63D0\u793A",message:"\u626B\u63CF\u5931\u8D25",confirmButtonColor:"#00A9A9"})})},v=m=>{o?m.preventDefault():y()};return S(()=>{document.addEventListener("backbutton",v)}),L(()=>{document.removeEventListener("backbutton",v)}),()=>e(C,null,[e("div",{class:j["ready-confirm"]},[e(r("van-nav-bar"),{title:"\u5C31\u7EEA\u786E\u8BA4",fixed:!0,placeholder:!0,"left-arrow":!0,border:!1,onClickLeft:y},{right:()=>e("div",{onClick:n,class:j["icon-history"]},[e(r("svg-icon"),{name:"history"},null)])}),e(r("van-tabs"),{active:a.value,"onUpdate:active":m=>a.value=m,border:!0,sticky:!0,"offset-top":"1.22667rem"},{default:()=>[e(r("van-tab"),{title:"\u7BA1\u6750"},{default:()=>[e(h,{type:1,onScan:()=>u(1)},null)]}),e(r("van-tab"),{title:"\u8017\u6750"},{default:()=>[e(h,{type:2,onScan:()=>u(2)},null)]}),e(r("van-tab"),{title:"\u8BD5\u5242"},{default:()=>[e(h,{type:3,onScan:()=>u(3)},null)]})]})])])}});export{$ as default};
