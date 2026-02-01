import{R as n}from"./iframe-0VR2hwUa.js";import"./preload-helper-PPVm8Dsz.js";const r=({text:t,isSender:a})=>n.createElement("div",{className:`bubble ${a?"sent":"received"}`},t);r.__docgenInfo={description:"",methods:[],displayName:"MessageBubble",props:{text:{required:!0,tsType:{name:"string"},description:""},isSender:{required:!0,tsType:{name:"boolean"},description:""}}};const c={title:"Messenger/MessageBubble",component:r},e={args:{text:"Hello! I sent this.",isSender:!1}},s={args:{text:"I received this!",isSender:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Hello! I sent this.',
    isSender: false
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'I received this!',
    isSender: false
  }
}`,...s.parameters?.docs?.source}}};const d=["Sent","Received"];export{s as Received,e as Sent,d as __namedExportsOrder,c as default};
