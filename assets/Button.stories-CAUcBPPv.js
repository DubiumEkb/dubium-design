import{f as x}from"./index-BZkcKs8Z.js";import"./index-D4lIrffr.js";var p={exports:{}},e={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y;function S(){if(y)return e;y=1;var s=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function t(u,r,o){var l=null;if(o!==void 0&&(l=""+o),r.key!==void 0&&(l=""+r.key),"key"in r){o={};for(var m in r)m!=="key"&&(o[m]=r[m])}else o=r;return r=o.ref,{$$typeof:s,type:u,key:l,ref:r!==void 0?r:null,props:o}}return e.Fragment=c,e.jsx=t,e.jsxs=t,e}var i;function j(){return i||(i=1,p.exports=S()),p.exports}var B=j();const C=({primary:s=!1,size:c="medium",backgroundColor:t,label:u,...r})=>{const o=s?"storybook-button--primary":"storybook-button--secondary";return B.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${c}`,o].join(" "),style:{backgroundColor:t},...r,children:u})},$={title:"Example/Button",component:C,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:x()}},a={args:{primary:!0,label:"Button"}},n={args:{label:"Button"}};var d,b,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: "Button"
  }
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var g,k,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Button"
  }
}`,...(v=(k=n.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const P=["Primary","Secondary"];export{a as Primary,n as Secondary,P as __namedExportsOrder,$ as default};
