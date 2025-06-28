import{j as _}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-5lOG3TmN.js";const D="_button_13jx9_1",P={button:D};function N(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var m={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var b;function O(){return b||(b=1,function(e){(function(){var l={}.hasOwnProperty;function n(){for(var t="",r=0;r<arguments.length;r++){var o=arguments[r];o&&(t=s(t,u(o)))}return t}function u(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var r="";for(var o in t)l.call(t,o)&&t[o]&&(r=s(r,o));return r}function s(t,r){return r?t?t+" "+r:t+r:t}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(m)),m.exports}var w=O();const A=N(w),C=d.memo(({className:e,children:l,type:n="button",role:u="button",onClick:s,stopPropagation:t=!1,...r})=>{const o=d.useCallback(p=>{t&&p.stopPropagation(),s==null||s(p)},[s,t]);return _.jsx("button",{className:A(P.button,e),type:n,onClick:o,role:u,...r,children:l})});C.displayName="Button";const E={title:"UI/Button",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked",description:"Функция, вызываемая при клике на кнопку."},className:{control:"text",description:"Дополнительный CSS-класс."},type:{control:{type:"select"},options:["button","submit","reset"],description:"HTML-тип кнопки."},role:{control:"text",description:"ARIA-роль кнопки (если требуется)."},disabled:{control:"boolean",description:"Отключает кнопку."},stopPropagation:{control:"boolean",description:"Останавливает всплытие события клика."}},args:{type:"button",disabled:!1,stopPropagation:!1}},a={args:{children:"Click me"}},i={args:{children:"Disabled Button",disabled:!0}},c={args:{children:"Submit Form",type:"submit"}};var f,g,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: "Click me"
  }
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var x,S,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: "Disabled Button",
    disabled: true
  }
}`,...(h=(S=i.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var v,j,k;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Submit Form",
    type: "submit"
  }
}`,...(k=(j=c.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const F=["Default","Disabled","SubmitType"];export{a as Default,i as Disabled,c as SubmitType,F as __namedExportsOrder,E as default};
