import{l as r,i as m,j as p,k as u,T as f}from"./entry.79fb4c01.js";import{o as y}from"./query.d067d72d.js";import{G as i,h as c,H as d,u as L,C as _}from"./runtime-core.esm-bundler.266f19db.js";import"./_plugin-vue_export-helper.c27b6911.js";const h=i({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(n,t){const e=await r[n.name]().then(a=>a.default||a);return()=>c(e,t.attrs,t.slots)}}),R=i({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(n,t){const e=L("_route"),a=e===y()?m():e,o=d(()=>_(n.name)??a.meta.layout??"default");return()=>{const s=o.value&&o.value in r,l=a.meta.layoutTransition??p;return u(f,s&&l,{default:()=>u(h,s&&{key:o.value,name:o.value,...t.attrs},t.slots).default()}).default()}}});export{R as default};
