import{B as x}from"./TableImg.995cc952.js";import{T}from"./BasicForm.c1ea146d.js";import{u as _}from"./useTable.b9297d9e.js";import{g as C}from"./system.064f6cd5.js";import{P as S}from"./index.d2278103.js";import F from"./DeptTree.6002d5b1.js";import{b as w}from"./index.f0ea68d9.js";import{A as B,c as A,s as D}from"./AccountModal.6a48792b.js";import{_ as M,k as y}from"./index.a20e0ed4.js";import{A as I,P as k,a0 as t,B as E,a1 as v,a6 as i,w as s,ae as R}from"./vendor.223c82b6.js";/* empty css                *//* empty css              */import"./useForm.f8f25125.js";/* empty css                *//* empty css                *//* empty css               */import"./uuid.2b29000c.js";import"./useWindowSizeFn.c7db1b07.js";/* empty css               */import"./useSortable.28b0a306.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.a3e79b75.js";/* empty css                *//* empty css                *//* empty css                */import"./download.b3ddab45.js";import"./base64Conver.bb012c73.js";import"./index.4b7b6195.js";/* empty css               *//* empty css                */import"./useContentViewHeight.d6003c94.js";import"./Tree.vue_vue&type=style&index=0&lang.0278cf17.js";import"./useContextMenu.bc08b6e9.js";const P=I({name:"AccountManagement",components:{BasicTable:x,PageWrapper:S,DeptTree:F,AccountModal:B,TableAction:T},setup(){const o=y(),[b,{openModal:a}]=w(),r=k({}),[j,{reload:c,updateTableDataRecord:l}]=_({title:"\u8D26\u53F7\u5217\u8868",api:C,rowKey:"id",columns:A,formConfig:{labelWidth:120,schemas:D,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(e){return console.log("handleSearchInfoFn",e),e},actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}}});function d(){a(!0,{isUpdate:!1})}function u(e){console.log(e),a(!0,{record:e,isUpdate:!0})}function p(e){console.log(e)}function m({isUpdate:e,values:h}){if(e){const g=l(h.id,h);console.log(g)}else c()}function f(e=""){r.deptId=e,c()}function n(e){o("/system/account_detail/"+e.id)}return{registerTable:j,registerModal:b,handleCreate:d,handleEdit:u,handleDelete:p,handleSuccess:m,handleSelect:f,handleView:n,searchInfo:r}}}),V=R("\u65B0\u589E\u8D26\u53F7");function W(o,b,a,r,j,c){const l=t("DeptTree"),d=t("a-button"),u=t("TableAction"),p=t("BasicTable"),m=t("AccountModal"),f=t("PageWrapper");return E(),v(f,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:i(()=>[s(l,{class:"w-1/4 xl:w-1/5",onSelect:o.handleSelect},null,8,["onSelect"]),s(p,{onRegister:o.registerTable,class:"w-3/4 xl:w-4/5",searchInfo:o.searchInfo},{toolbar:i(()=>[s(d,{type:"primary",onClick:o.handleCreate},{default:i(()=>[V]),_:1},8,["onClick"])]),action:i(({record:n})=>[s(u,{actions:[{icon:"clarity:info-standard-line",tooltip:"\u67E5\u770B\u7528\u6237\u8BE6\u60C5",onClick:o.handleView.bind(null,n)},{icon:"clarity:note-edit-line",tooltip:"\u7F16\u8F91\u7528\u6237\u8D44\u6599",onClick:o.handleEdit.bind(null,n)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"\u5220\u9664\u6B64\u8D26\u53F7",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,n)}}]},null,8,["actions"])]),_:1},8,["onRegister","searchInfo"]),s(m,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var _e=M(P,[["render",W]]);export{_e as default};
