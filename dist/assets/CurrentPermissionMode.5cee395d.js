import{V as d,am as m,bb as c,_ as p}from"./index.a20e0ed4.js";import{A as _,b1 as l,j as F,a0 as r,B as f,D as A,w as o,a6 as u,ae as s,J as C}from"./vendor.223c82b6.js";/* empty css               */const M=_({name:"CurrentPermissionMode",components:{Divider:l},setup(){const e=d(),n=F(()=>e.getProjectConfig.permissionMode),{togglePermissionMode:t}=m();return{permissionMode:n,PermissionModeEnum:c,togglePermissionMode:t}}}),D={class:"mt-2"},P=s(" \u5F53\u524D\u6743\u9650\u6A21\u5F0F\uFF1A "),g=s(" \u5207\u6362\u6743\u9650\u6A21\u5F0F ");function v(e,n,t,b,h,j){const i=r("a-button"),a=r("Divider");return f(),A("div",D,[P,o(i,{type:"link"},{default:u(()=>[s(C(e.permissionMode===e.PermissionModeEnum.BACK?"\u540E\u53F0\u6743\u9650\u6A21\u5F0F":"\u524D\u7AEF\u89D2\u8272\u6743\u9650\u6A21\u5F0F"),1)]),_:1}),o(i,{class:"ml-4",onClick:e.togglePermissionMode,type:"primary"},{default:u(()=>[g]),_:1},8,["onClick"]),o(a)])}var y=p(M,[["render",v]]);export{y as default};
