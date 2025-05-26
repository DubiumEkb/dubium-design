import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{R as b}from"./index-D4lIrffr.js";import{s as m}from"./dd.es-B49fsXvm.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";const M={title:"UI/Tabs",component:m,tags:["autodocs"],argTypes:{onChange:{action:"tab changed"}}},i=[{key:"home",label:"Главная"},{key:"profile",label:"Профиль"},{key:"settings",label:"Настройки"},{key:"about",label:"О сайте"}],S=e=>{const[s,a]=b.useState(e.isActive||i[0].key);return t.jsx(m,{...e,tabs:e.tabs||i,isActive:s,onChange:r=>{a(r.key)}})},o={render:e=>t.jsx(S,{...e}),args:{tabs:i,isActive:i[0].key}},x=()=>{const e=Array.from({length:15},(r,y)=>({key:`tab-${y+1}`,label:`Вкладка ${y+1}`})),[s,a]=b.useState(e[0].key);return t.jsx(m,{tabs:e,isActive:s,onChange:r=>{a(r.key)}})},n={render:()=>t.jsx(x,{})},A=()=>{const[e,s]=b.useState("");return t.jsx(m,{tabs:[],isActive:e,onChange:a=>{s(a.key)}})},c={render:()=>t.jsx(A,{})};var p,u,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <DefaultTabsStory {...args} />,
  args: {
    tabs: defaultTabs,
    isActive: defaultTabs[0].key
  }
}`,...(l=(u=o.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var d,T,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <ManyTabsStory />
}`,...(g=(T=n.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var f,k,v;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <EmptyTabsStory />
}`,...(v=(k=c.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const R=["Default","ManyTabs","EmptyTabs"];export{o as Default,c as EmptyTabs,n as ManyTabs,R as __namedExportsOrder,M as default};
