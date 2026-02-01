import{r as t,R as r}from"./iframe-0VR2hwUa.js";import"./preload-helper-PPVm8Dsz.js";const u=({options:a,value:n,onChange:b,label:h,placeholder:y="Select an option",disabled:v=!1,error:w})=>{const[s,o]=t.useState(!1),f=t.useRef(null),D=a.find(e=>e.value===n);t.useEffect(()=>{const e=E=>{f.current&&!f.current.contains(E.target)&&o(!1)};if(s)return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[s]);const O=e=>{b(e),o(!1)},S=e=>{e.key==="Escape"&&o(!1)};return r.createElement("div",{className:"dropdown-wrapper",ref:f},h&&r.createElement("label",{className:"dropdown-label"},h),r.createElement("button",{className:`dropdown-trigger ${w?"error":""} ${v?"disabled":""}`,onClick:()=>!v&&o(!s),onKeyDown:S,disabled:v,"aria-haspopup":"listbox","aria-expanded":s},r.createElement("span",{className:"dropdown-value"},D?D.label:y),r.createElement("span",{className:`dropdown-arrow ${s?"open":""}`},"▼")),s&&r.createElement("div",{className:"dropdown-menu",role:"listbox"},a.map(e=>r.createElement("button",{key:e.value,className:`dropdown-item ${e.value===n?"selected":""} ${e.disabled?"disabled":""}`,onClick:()=>!e.disabled&&O(e.value),disabled:e.disabled,role:"option","aria-selected":e.value===n},e.label))),w&&r.createElement("span",{className:"dropdown-error"},w))};u.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:"Array of dropdown options"},value:{required:!1,tsType:{name:"string"},description:"Currently selected value"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when selection changes"},label:{required:!1,tsType:{name:"string"},description:"Label displayed above the dropdown"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text when no value is selected",defaultValue:{value:"'Select an option'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable the dropdown",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"Error state for validation"}}};const T={title:"UI Library/Dropdown",component:u,tags:["autodocs"]},m=[{value:"javascript",label:"JavaScript"},{value:"typescript",label:"TypeScript"},{value:"python",label:"Python"},{value:"rust",label:"Rust"},{value:"go",label:"Go"}],g=a=>{const[n,b]=t.useState("");return r.createElement(u,{...a,value:n,onChange:b})},l={render:a=>r.createElement(g,{...a}),args:{options:m,label:"Choose a Language",placeholder:"Select a language..."}},d={render:()=>{const[a,n]=t.useState("typescript");return r.createElement(u,{options:m,value:a,onChange:n,label:"Programming Language",placeholder:"Select..."})}},p={render:a=>r.createElement(g,{...a}),args:{options:m,label:"Required Language",error:"Please select a language"}},i={render:a=>r.createElement(g,{...a}),args:{options:m,label:"Disabled Dropdown",disabled:!0}},c={render:a=>r.createElement(g,{...a}),args:{options:[{value:"opt1",label:"Option 1"},{value:"opt2",label:"Option 2 (Disabled)",disabled:!0},{value:"opt3",label:"Option 3"},{value:"opt4",label:"Option 4 (Disabled)",disabled:!0}],label:"Some Options Disabled",placeholder:"Try clicking disabled options..."}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <DropdownWrapper {...args} />,
  args: {
    options: sampleOptions,
    label: 'Choose a Language',
    placeholder: 'Select a language...'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('typescript');
    return <Dropdown options={sampleOptions} value={selected} onChange={setSelected} label="Programming Language" placeholder="Select..." />;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <DropdownWrapper {...args} />,
  args: {
    options: sampleOptions,
    label: 'Required Language',
    error: 'Please select a language'
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <DropdownWrapper {...args} />,
  args: {
    options: sampleOptions,
    label: 'Disabled Dropdown',
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <DropdownWrapper {...args} />,
  args: {
    options: [{
      value: 'opt1',
      label: 'Option 1'
    }, {
      value: 'opt2',
      label: 'Option 2 (Disabled)',
      disabled: true
    }, {
      value: 'opt3',
      label: 'Option 3'
    }, {
      value: 'opt4',
      label: 'Option 4 (Disabled)',
      disabled: true
    }],
    label: 'Some Options Disabled',
    placeholder: 'Try clicking disabled options...'
  }
}`,...c.parameters?.docs?.source}}};const q=["Default","Preselected","WithError","Disabled","WithDisabledOptions"];export{l as Default,i as Disabled,d as Preselected,c as WithDisabledOptions,p as WithError,q as __namedExportsOrder,T as default};
