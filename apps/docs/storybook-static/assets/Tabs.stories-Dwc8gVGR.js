import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{R as y}from"./index-D4lIrffr.js";import{s as p}from"./dd.es-DHI4ia9W.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";const C={title:"UI/Tabs",component:p,tags:["autodocs"],argTypes:{onChange:{action:"tab changed"}}},s=[{key:"home",label:"Главная"},{key:"profile",label:"Профиль"},{key:"settings",label:"Настройки"},{key:"about",label:"О сайте"}],d=e=>{const[g,T]=y.useState(e.isActive);return u.jsx(p,{...e,isActive:g,onChange:o=>{var n;T(o.key),(n=e.onChange)==null||n.call(e,o)}})},a={render:d,args:{tabs:s,isActive:s[0].key,onChange:e=>console.log("Tab changed:",e.key)}},t={render:d,args:{tabs:[],isActive:s[0].key,onChange:e=>console.log("Tab changed:",e.key)}};var r,c,l;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: Template,
  args: {
    tabs: defaultTabs,
    isActive: defaultTabs[0].key,
    onChange: tab => console.log("Tab changed:", tab.key)
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var b,i,m;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
  args: {
    tabs: [],
    isActive: defaultTabs[0].key,
    onChange: tab => console.log("Tab changed:", tab.key)
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const x=["DefaultTabs","EmptyTabs"];export{a as DefaultTabs,t as EmptyTabs,x as __namedExportsOrder,C as default};
