var c=(e,o,t)=>new Promise((n,r)=>{var p=a=>{try{s(t.next(a))}catch(i){r(i)}},d=a=>{try{s(t.throw(a))}catch(i){r(i)}},s=a=>a.done?n(a.value):Promise.resolve(a.value).then(p,d);s((t=t.apply(e,o)).next())});import{u as f}from"./useScript.ffdc0eae.js";import{_ as u}from"./index.a20e0ed4.js";import{A as m,r as l,_ as w,B as h,D as _,X as M,$ as v,u as y}from"./vendor.223c82b6.js";const A="https://webapi.amap.com/maps?v=2.0&key=d7bb98e7185300250dd5f918c12f484b",b=m({name:"AMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=l(null),{toPromise:o}=f({src:A});function t(){return c(this,null,function*(){yield o(),yield v();const n=y(e);if(!n)return;const r=window.AMap;new r.Map(n,{zoom:11,center:[116.397428,39.90923],viewMode:"3D"})})}return w(()=>{t()}),{wrapRef:e}}});function g(e,o,t,n,r,p){return h(),_("div",{ref:"wrapRef",style:M({height:e.height,width:e.width})},null,4)}var j=u(b,[["render",g]]);export{j as default};
