import{j as e}from"./jsx-runtime-ffb262ed.js";import{c as d}from"./clsx-1229b3e0.js";import{T as w}from"./Text-f2f986c6.js";import{$ as E}from"./index-000e0488.js";import{H}from"./Heading-87b8f567.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";function l({children:c,align:r="left",asChild:R}){return e.jsx("div",{className:d("w-full bg-gray-200 p-5 flex",{"justify-center":r=="center","justify-start":r=="left","justify-end":r=="right"}),children:e.jsx("div",{className:d({"text-center":r=="center","text-right":r=="right","text-left":r=="left","text-justify":r=="justify"}),children:R?e.jsx(E,{children:c}):e.jsx(w,{size:"sm",align:r,children:c})})})}try{l.displayName="Footer",l.__docgenInfo={description:"",displayName:"Footer",props:{align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"center"'},{value:'"justify"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const O={title:"Components/Layout/Footer",component:l,tags:["autodocs"],args:{children:"Lorem ipsum.",align:"right"},argTypes:{align:{options:["left","center","right","justify"],control:{type:"inline-radio"}}}},s={},a={args:{align:"left"}},t={args:{align:"center"}},n={args:{align:"right"}},o={args:{align:"justify"}},i={args:{asChild:!0,align:"center",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full text-center",children:e.jsx(H,{size:"sm",children:"Exemplo de Rodapé com Componentes"})}),e.jsx("div",{className:"w-full text-center",children:e.jsx(w,{children:"Você pode passar um ou mais componentes usando a propriedade 'AsChild' para o rodapé"})})]})},argTypes:{children:{table:{disable:!0}},asChild:{table:{disable:!0}}}};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,f,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    align: 'left'
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,y,j;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    align: 'center'
  }
}`,...(j=(y=t.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var C,v,_;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    align: 'right'
  }
}`,...(_=(v=n.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var b,A,N;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    align: 'justify'
  }
}`,...(N=(A=o.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var T,F,S;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    asChild: true,
    align: 'center',
    children: <>\r
            <div className='w-full text-center'>\r
            <Heading size='sm'>Exemplo de Rodapé com Componentes</Heading>\r
            </div>\r
            <div className='w-full text-center'>\r
            <Text>Você pode passar um ou mais componentes usando a propriedade 'AsChild' para o rodapé</Text>\r
            </div>\r
            </>
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}`,...(S=(F=i.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};const k=["Default","AlignLeft","AlignCenter","AlignRight","AlignJustify","CustomComponent"];export{t as AlignCenter,o as AlignJustify,a as AlignLeft,n as AlignRight,i as CustomComponent,s as Default,k as __namedExportsOrder,O as default};
//# sourceMappingURL=Footer.stories-15587c30.js.map
