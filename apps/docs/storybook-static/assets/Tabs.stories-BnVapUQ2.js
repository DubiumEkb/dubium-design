import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{s as m}from"./style-DsC_wB3k.js";import"./index-D4lIrffr.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";const h={title:"UI/Tabs",component:m,tags:["autodocs"],argTypes:{onChange:{action:"tab changed"}}},t=[{key:"home",label:"Главная"},{key:"profile",label:"Профиль"},{key:"settings",label:"Настройки"},{key:"about",label:"О сайте"}],p=e=>d.jsx(m,{...e}),a={render:p,args:{tabs:t,isActive:t[0].key,onChange:e=>console.log("Tab changed:",e.key)}},s={render:p,args:{tabs:[],isActive:t[0].key,onChange:e=>console.log("Tab changed:",e.key)}};var o,n,r;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: Template,
  args: {
    tabs: defaultTabs,
    isActive: defaultTabs[0].key,
    onChange: tab => console.log("Tab changed:", tab.key)
  }
}`,...(r=(n=a.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var c,l,b;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: Template,
  args: {
    tabs: [],
    isActive: defaultTabs[0].key,
    onChange: tab => console.log("Tab changed:", tab.key)
  }
}`,...(b=(l=s.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};const k=["DefaultTabs","EmptyTabs"];export{a as DefaultTabs,s as EmptyTabs,k as __namedExportsOrder,h as default};
