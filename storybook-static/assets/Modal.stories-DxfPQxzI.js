import{r as d,R as e}from"./iframe-0VR2hwUa.js";import{r as g}from"./index-Ctbp8swA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bg8Enyik.js";const m=({isOpen:t,onClose:a,title:r,children:p,footer:c,preventCloseOnOutsideClick:u=!1})=>{if(d.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[t]),!t)return null;const f=i=>{!u&&i.target===i.currentTarget&&a()};return g.createPortal(e.createElement("div",{className:"modal-overlay",onClick:f},e.createElement("div",{className:"modal-container",role:"dialog","aria-modal":"true"},e.createElement("div",{className:"modal-header"},e.createElement("h3",{className:"modal-title"},r),e.createElement("button",{className:"close-btn",onClick:a,"aria-label":"Close modal"},"×")),e.createElement("div",{className:"modal-body"},p),c&&e.createElement("div",{className:"modal-footer"},c))),document.body)},v={title:"UI Library/Modal",component:m,tags:["autodocs"],argTypes:{isOpen:{control:"boolean"},title:{control:"text"},preventCloseOnOutsideClick:{control:"boolean"}}},s=t=>{const[a,r]=d.useState(!1);return e.createElement("div",null,e.createElement("button",{onClick:()=>r(!0),style:{padding:"10px 20px",fontSize:"14px"}},"Open Modal"),e.createElement(m,{...t,isOpen:a,onClose:()=>r(!1),footer:e.createElement("div",{style:{display:"flex",gap:"10px"}},e.createElement("button",{onClick:()=>r(!1),style:{padding:"8px 16px"}},"Cancel"),e.createElement("button",{onClick:()=>r(!1),style:{padding:"8px 16px",background:"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"}},"Confirm"))},e.createElement("p",null,"This is a reusable modal window! You can put any content here."),e.createElement("p",null,"It has a nice backdrop animation and smooth fade-in effect.")))},o={render:t=>e.createElement(s,{...t}),args:{title:"Confirm Action"}},n={render:t=>e.createElement(s,{...t}),args:{title:"Information",footer:void 0}},l={render:t=>e.createElement(s,{...t}),args:{title:"Important: Cannot Close by Clicking Outside",preventCloseOnOutsideClick:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    title: 'Confirm Action'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    title: 'Information',
    footer: undefined
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    title: 'Important: Cannot Close by Clicking Outside',
    preventCloseOnOutsideClick: true
  }
}`,...l.parameters?.docs?.source}}};const k=["Default","WithoutFooter","PreventOutsideClick"];export{o as Default,l as PreventOutsideClick,n as WithoutFooter,k as __namedExportsOrder,v as default};
