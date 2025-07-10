import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-oBMKabMz.js";const d="_button_13jx9_1",g={button:d};function b(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var l={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var m;function x(){return m||(m=1,function(e){(function(){var u={}.hasOwnProperty;function n(){for(var t="",r=0;r<arguments.length;r++){var o=arguments[r];o&&(t=a(t,c(o)))}return t}function c(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var r="";for(var o in t)u.call(t,o)&&t[o]&&(r=a(r,o));return r}function a(t,r){return r?t?t+" "+r:t+r:t}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(l)),l.exports}var _=x();const v=b(_),f=p.memo(({className:e,children:u,type:n="button",role:c="button",onClick:a,stopPropagation:t=!1,...r})=>{const o=p.useCallback(i=>{t&&i.stopPropagation(),a?.(i)},[a,t]);return y.jsx("button",{className:v(g.button,e),type:n,onClick:o,role:c,...r,children:u})});f.displayName="Button";const{fn:O}=__STORYBOOK_MODULE_TEST__,S={title:"Example/DubiumButton",component:f,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["button","submit","reset"]}},args:{onClick:O()}},s={args:{children:"Button",type:"reset"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Button",
    type: "reset"
  }
}`,...s.parameters?.docs?.source}}};const E=["Primary"];export{s as Primary,E as __namedExportsOrder,S as default};
