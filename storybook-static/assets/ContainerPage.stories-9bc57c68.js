import{j as e}from"./jsx-runtime-ffb262ed.js";import{c as T}from"./clsx-1229b3e0.js";import{H as w}from"./Heading-87b8f567.js";import{T as P}from"./Text-f2f986c6.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-000e0488.js";import"./extends-98964cd2.js";function i({children:c,align:o="left",className:A=""}){return e.jsx("div",{className:T("w-full max-w-[1200px] p-5 flex",{"justify-center":o=="center","justify-start":o=="left","justify-end":o=="right"},A),children:c})}try{i.displayName="ContainerPage",i.__docgenInfo={description:"",displayName:"ContainerPage",props:{align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"center"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const z={title:"Components/Layout/ContainerPage",component:i,tags:["autodocs"],args:{children:"Page Content"},argTypes:{align:{options:["left","center","right"],control:{type:"inline-radio"}}}},r={},a={args:{align:"left"}},n={args:{align:"center"}},s={args:{align:"right"}},t={args:{align:"center",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full text-center",children:e.jsx(w,{size:"sm",children:"Exemplo de Rodapé com Componentes"})}),e.jsx("div",{className:"w-full text-center",children:e.jsx(P,{children:"Você pode passar um ou mais componentes usando a propriedade 'AsChild' para o rodapé"})})]})},argTypes:{children:{table:{disable:!0}}}};var l,p,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    align: 'left'
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,x,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    align: 'center'
  }
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var C,y,v;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    align: 'right'
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var j,_,N;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
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
    }
  }
}`,...(N=(_=t.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const D=["Default","AlignLeft","AlignCenter","AlignRight","CustomComponent"];export{n as AlignCenter,a as AlignLeft,s as AlignRight,t as CustomComponent,r as Default,D as __namedExportsOrder,z as default};
//# sourceMappingURL=ContainerPage.stories-9bc57c68.js.map
