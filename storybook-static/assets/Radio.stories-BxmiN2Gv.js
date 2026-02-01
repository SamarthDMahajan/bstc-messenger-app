import{R as e}from"./iframe-0VR2hwUa.js";import"./preload-helper-PPVm8Dsz.js";const a=({label:s,error:n,className:m="",disabled:o,id:i,...c})=>{const d=i||`radio-${Math.random().toString(36).substr(2,9)}`;return e.createElement("div",{className:`radio-wrapper ${m} ${o?"disabled":""}`},e.createElement("input",{type:"radio",id:d,className:"radio-input",disabled:o,"aria-invalid":n,...c}),e.createElement("label",{htmlFor:d,className:`radio-label ${n?"error":""}`},e.createElement("span",{className:"custom-radio"}),s&&e.createElement("span",{className:"label-text"},s)))};a.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"string"},description:"Label displayed next to the radio button"},error:{required:!1,tsType:{name:"boolean"},description:"Error state"},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["InputHTMLAttributes"]};const b={title:"UI Library/Radio",component:a,tags:["autodocs"]},r={args:{label:"Option A",name:"example-group"}},t={render:()=>e.createElement("div",null,e.createElement(a,{name:"gender",label:"Male",value:"male"}),e.createElement(a,{name:"gender",label:"Female",value:"female"}),e.createElement(a,{name:"gender",label:"Other",value:"other"}))},l={args:{label:"Unavailable",disabled:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option A',
    name: 'example-group'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div>\r
      <Radio name="gender" label="Male" value="male" />\r
      <Radio name="gender" label="Female" value="female" />\r
      <Radio name="gender" label="Other" value="other" />\r
    </div>
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Unavailable',
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};const g=["Default","Group","Disabled"];export{r as Default,l as Disabled,t as Group,g as __namedExportsOrder,b as default};
