import{j as e}from"./jsx-runtime-ffb262ed.js";import{c as F}from"./clsx-1229b3e0.js";import{A as V}from"./Avatar-619f45ab.js";import{T as s}from"./Text-f2f986c6.js";import{$ as S}from"./index-000e0488.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";function d({children:l,photo:_="./assets/userIcon.svg",align:r="center",asChild:q,noPhoto:A,title:N,noTitle:P}){return e.jsxs("div",{className:"w-full transition-all rounded overflow-hidden",children:[A?e.jsx(e.Fragment,{}):e.jsx("div",{className:"flex items-center justify-center py-6 bg-prepaf-orange",children:e.jsx(V,{image:_,size:"lg"})}),e.jsxs("div",{className:"flex flex-col items-center p-4 md:pt-10 md:pb-7 justify-center gap-4 md:gap-11 bg-white ",children:[P?e.jsx(e.Fragment,{}):e.jsx(s,{size:"md",align:r,children:e.jsx("b",{children:N})}),e.jsx("div",{className:F({"text-center":r=="center","text-right":r=="right","text-left":r=="left","text-justify":r=="justify"}),children:q?e.jsx(S,{children:l}):e.jsx(s,{size:"sm",align:r,children:l})})]})]})}try{d.displayName="PlayerCard",d.__docgenInfo={description:"",displayName:"PlayerCard",props:{noPhoto:{defaultValue:null,description:"",name:"noPhoto",required:!1,type:{name:"boolean"}},photo:{defaultValue:{value:"./assets/userIcon.svg"},description:"",name:"photo",required:!1,type:{name:"string"}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"center"'},{value:'"justify"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},noTitle:{defaultValue:null,description:"",name:"noTitle",required:!0,type:{name:"boolean"}}}}}catch{}const k={title:"Components/Cards/PlayerCard",component:d,tags:["autodocs"],args:{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum quam vitae ante viverra elementum. Praesent id aliquet neque, quis consectetur magna.",photo:"./assets/userIcon.svg",align:"center",title:"Card Title"},argTypes:{align:{options:["right","left","center","justify"],control:{type:"inline-radio"}}},parameters:{backgrounds:{default:"gray",values:[{name:"gray",value:"#F8F8F8"},{name:"dark",value:"rgb(51, 51, 51)"}]}}},a={},t={args:{align:"left"}},n={args:{align:"right"}},o={args:{align:"justify"}},i={args:{asChild:!0,noTitle:!0,children:e.jsxs(e.Fragment,{children:[e.jsxs(s,{size:"md",children:[" ",e.jsx("b",{children:"Nome do Jogador"})]}),e.jsx("br",{}),e.jsx(s,{size:"xs",children:"Escrevendo segunda propriedade"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(s,{size:"xs",children:"Usando Componentes"}),e.jsx("br",{}),e.jsx(s,{size:"xs",children:"Construção de Card Com Componentes"})]})},argTypes:{children:{table:{disable:!0}},asChild:{table:{disable:!0}}}};var c,u,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,g,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    align: 'left'
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,h,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    align: 'right'
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var j,b,C;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    align: 'justify'
  }
}`,...(C=(b=o.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var v,T,z;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    asChild: true,
    noTitle: true,
    children: <>\r
            <Text size="md"> <b>Nome do Jogador</b></Text><br />\r
            <Text size="xs">Escrevendo segunda propriedade</Text><br />\r
            <br />\r
            <Text size="xs">Usando Componentes</Text><br />\r
            <Text size="xs">Construção de Card Com Componentes</Text>\r
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
}`,...(z=(T=i.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};const D=["Default","AlignLeft","AlignRight","AlignJustify","CustomComponent"];export{o as AlignJustify,t as AlignLeft,n as AlignRight,i as CustomComponent,a as Default,D as __namedExportsOrder,k as default};
//# sourceMappingURL=PlayerCard.stories-b9e87aa9.js.map
