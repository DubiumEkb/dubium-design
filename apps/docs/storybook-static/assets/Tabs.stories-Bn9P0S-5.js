import{j as u}from"./index-C_VjMC7g.js";import{R as y}from"./index-D4lIrffr.js";import{T as d}from"./Tabs-CLQsVV9-.js";import"./index-DsJinFGm.js";const A={title:"UI/Tabs",component:d,tags:["autodocs"],argTypes:{onChange:{action:"tab changed"}}},s=[{key:"home",label:"Главная"},{key:"profile",label:"Профиль"},{key:"settings",label:"Настройки"},{key:"about",label:"О сайте"}],p=e=>{const[T,g]=y.useState(e.isActive);return u.jsx(d,{...e,isActive:T,onChange:o=>{var n;g(o.key),(n=e.onChange)==null||n.call(e,o)}})},a={render:p,args:{tabs:s,isActive:s[0].key,onChange:e=>console.log("Tab changed:",e.key)}},t={render:p,args:{tabs:[],isActive:s[0].key,onChange:e=>console.log("Tab changed:",e.key)}};var r,c,l;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const C=["DefaultTabs","EmptyTabs"];export{a as DefaultTabs,t as EmptyTabs,C as __namedExportsOrder,A as default};
