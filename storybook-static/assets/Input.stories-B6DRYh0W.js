import{I as o}from"./Input-Csrijz6M.js";import"./iframe-0VR2hwUa.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"UI Library/Input",component:o,tags:["autodocs"],argTypes:{variant:{control:"radio",options:["outlined","filled"]},disabled:{control:"boolean"}}},e={args:{placeholder:"Type something...",label:"Username"}},a={args:{label:"Email Address",defaultValue:"invalid-email",error:"Please enter a valid email address",variant:"outlined"}},r={args:{label:"Password",type:"password",helperText:"Must be at least 8 characters"}},s={args:{label:"Search",placeholder:"Search...",variant:"filled"}},l={args:{label:"Disabled Input",placeholder:"Cannot type here",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type something...',
    label: 'Username'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    defaultValue: 'invalid-email',
    error: 'Please enter a valid email address',
    variant: 'outlined'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    helperText: 'Must be at least 8 characters'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Search...',
    variant: 'filled'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot type here',
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};const i=["Default","WithError","Password","Filled","Disabled"];export{e as Default,l as Disabled,s as Filled,r as Password,a as WithError,i as __namedExportsOrder,c as default};
