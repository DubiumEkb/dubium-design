import{B as m}from"./Tabs-CLQsVV9-.js";import"./index-C_VjMC7g.js";import"./index-D4lIrffr.js";import"./index-DsJinFGm.js";const y={title:"UI/Button",component:m,tags:["autodocs"],argTypes:{onClick:{action:"clicked",description:"Функция, вызываемая при клике на кнопку."},className:{control:"text",description:"Дополнительный CSS-класс."},type:{control:{type:"select"},options:["button","submit","reset"],description:"HTML-тип кнопки."},role:{control:"text",description:"ARIA-роль кнопки (если требуется)."},disabled:{control:"boolean",description:"Отключает кнопку."},stopPropagation:{control:"boolean",description:"Останавливает всплытие события клика."}},args:{type:"button",disabled:!1,stopPropagation:!1}},e={args:{children:"Click me"}},t={args:{children:"Disabled Button",disabled:!0}},r={args:{children:"Submit Form",type:"submit"}};var o,s,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: "Click me"
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var n,i,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: "Disabled Button",
    disabled: true
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,p,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: "Submit Form",
    type: "submit"
  }
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const f=["Default","Disabled","SubmitType"];export{e as Default,t as Disabled,r as SubmitType,f as __namedExportsOrder,y as default};
