import{f as $}from"./index-iZ8NAl3x.js";import"./index-DmM0KDA7.js";var d={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y;function L(){if(y)return o;y=1;var c=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function a(m,r,e){var p=null;if(e!==void 0&&(p=""+e),r.key!==void 0&&(p=""+r.key),"key"in r){e={};for(var i in r)i!=="key"&&(e[i]=r[i])}else e=r;return r=e.ref,{$$typeof:c,type:m,key:p,ref:r!==void 0?r:null,props:e}}return o.Fragment=u,o.jsx=a,o.jsxs=a,o}var b;function P(){return b||(b=1,d.exports=L()),d.exports}var _=P();const F=({primary:c=!1,size:u="medium",backgroundColor:a,label:m,...r})=>{const e=c?"storybook-button--primary":"storybook-button--secondary";return _.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${u}`,e].join(" "),style:{backgroundColor:a},...r,children:m})},T={title:"Example/Button",component:F,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:$()}},t={args:{primary:!0,label:"Button"}},n={args:{label:"Button"}},s={args:{size:"large",label:"Button"}},l={args:{size:"small",label:"Button"}};var g,f,k;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: "Button"
  }
}`,...(k=(f=t.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var v,S,B;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Button"
  }
}`,...(B=(S=n.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var x,j,z;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "Button"
  }
}`,...(z=(j=s.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var C,h,E;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Button"
  }
}`,...(E=(h=l.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};const q=["Primary","Secondary","Large","Small"];export{s as Large,t as Primary,n as Secondary,l as Small,q as __namedExportsOrder,T as default};
