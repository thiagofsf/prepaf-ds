import{j as e}from"./jsx-runtime-ffb262ed.js";import{c as f}from"./clsx-1229b3e0.js";import{T as x}from"./Text-f2f986c6.js";import{C as k}from"./CalendarEvent-96bf16d2.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-000e0488.js";import"./extends-98964cd2.js";function t({day:o=1,children:y,onclick:g}){return e.jsxs("div",{onClick:g,className:f("py-2 px-2 font-bold transition-all bg-gray-100 hover:bg-yellow-200 w-full max-w-[200px] flex items-center flex-col min-h-[200px] z-40"),children:[e.jsx(x,{size:"md",weight:"medium",align:"center",children:e.jsx("p",{className:"pb-2",children:o})}),y]})}try{t.displayName="CalendarDayContainer",t.__docgenInfo={description:"",displayName:"CalendarDayContainer",props:{day:{defaultValue:{value:"1"},description:"",name:"day",required:!1,type:{name:"number"}},onclick:{defaultValue:null,description:"",name:"onclick",required:!1,type:{name:"(() => void)"}}}}}catch{}const A={title:"Components/Calendar/CalendarDayContainer",component:t,tags:["autodocs"],args:{children:"Children",day:new Date().getDay()},argTypes:{}},a={},r={args:{onclick:()=>{alert("Click in Day Calendar")}}},n={parameters:{},args:{children:e.jsx(e.Fragment,{children:e.jsx(k,{title:"Evento",starts:"08:00",ends:"11:00",type:"treino",onclick:()=>alert("Click in Calendar Event")})})}};var s,i,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,d,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    onclick: () => {
      alert('Click in Day Calendar');
    }
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,C,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {},
  args: {
    children: <>\r
            <CalendarEvent title='Evento' starts='08:00' ends='11:00' type='treino' onclick={() => alert('Click in Calendar Event')}></CalendarEvent>\r
        </>

    //onclick: ()=>{alert('Click in Day Calendar')},
  }
}`,...(u=(C=n.parameters)==null?void 0:C.docs)==null?void 0:u.source}}};const N=["Default","Action","Advanced"];export{r as Action,n as Advanced,a as Default,N as __namedExportsOrder,A as default};
//# sourceMappingURL=CalendarDayContainer.stories-d92d0567.js.map
