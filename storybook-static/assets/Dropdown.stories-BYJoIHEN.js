import{r as o,R as n}from"./iframe-0VR2hwUa.js";import"./preload-helper-PPVm8Dsz.js";function l({options:a,value:t,onChange:r,placeholder:s="Select...",label:f,disabled:w=!1}){const[b,d]=o.useState(!1),p=o.useRef(null);o.useEffect(()=>{function e(v){p.current&&(p.current.contains(v.target)||d(!1))}function h(v){v.key==="Escape"&&d(!1)}return document.addEventListener("mousedown",e),document.addEventListener("keydown",h),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("keydown",h)}},[]);const m=a.find(e=>e.value===t);return n.createElement("div",{className:`dropdown ${w?"disabled":""}`,ref:p},f&&n.createElement("label",{className:"dropdown-label"},f),n.createElement("button",{type:"button",className:"dropdown-toggle",onClick:()=>d(e=>!e),"aria-haspopup":"listbox","aria-expanded":b,disabled:w},n.createElement("span",{className:`dropdown-selected ${m?"":"placeholder"}`},m?m.label:s),n.createElement("span",{className:"dropdown-caret"},"▾")),b&&n.createElement("ul",{className:"dropdown-menu",role:"listbox"},a.map(e=>n.createElement("li",{key:e.value,role:"option","aria-selected":e.value===t,className:`dropdown-item ${e.value===t?"selected":""}`,onClick:()=>{r(e.value),d(!1)}},e.label))))}l.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:"List of options to display"},value:{required:!1,tsType:{name:"string"},description:"Currently selected value"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when an option is selected"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text when nothing is selected",defaultValue:{value:"'Select...'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label above the dropdown"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable interaction",defaultValue:{value:"false",computed:!1}}}};const C={title:"UI Library (ui-library)/Dropdown",component:l},g=[{label:"Option One",value:"one"},{label:"Option Two",value:"two"},{label:"Option Three",value:"three"}],i={render:a=>{const[t,r]=o.useState(a.value);return n.createElement(l,{...a,value:t,onChange:s=>r(s)})},args:{options:g,placeholder:"Choose an option"}},c={render:a=>{const[t,r]=o.useState(a.value||"two");return n.createElement(l,{...a,value:t,onChange:s=>r(s)})},args:{options:g}},u={render:a=>{const[t,r]=o.useState(a.value);return n.createElement(l,{...a,value:t,onChange:s=>r(s),disabled:!0})},args:{options:g}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = useState<string | undefined>(args.value);
    return <Dropdown {...args} value={val} onChange={v => setVal(v)} />;
  },
  args: {
    options: sampleOptions,
    placeholder: 'Choose an option'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = useState<string | undefined>(args.value || 'two');
    return <Dropdown {...args} value={val} onChange={v => setVal(v)} />;
  },
  args: {
    options: sampleOptions
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = useState<string | undefined>(args.value);
    return <Dropdown {...args} value={val} onChange={v => setVal(v)} disabled />;
  },
  args: {
    options: sampleOptions
  }
}`,...u.parameters?.docs?.source}}};const O=["Default","Preselected","Disabled"];export{i as Default,u as Disabled,c as Preselected,O as __namedExportsOrder,C as default};
