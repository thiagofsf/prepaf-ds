import{j as G}from"./jsx-runtime-ffb262ed.js";import{c as H}from"./clsx-1229b3e0.js";import{$ as J}from"./index-000e0488.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";function m({type:e="main",size:r="full",onclick:T,children:I,asChild:O}){const R=O?J:"button";return G.jsx(R,{onClick:T,className:H("py-4 px-3 font-bold text-white text-md rounded transition-colors focus:ring-2 ring-black-800",{"bg-prepaf-orange":e=="main","hover:bg-orange-200":e=="main","bg-green-400":e=="confirm","hover:bg-green-300":e=="confirm","bg-red-800":e=="critical","hover:bg-red-600":e=="critical","w-full max-w-[200px]":r=="sm","w-full max-w-[400px]":r=="md","w-full max-w-[600px]":r=="lg","w-full":r=="full"}),children:I})}try{m.displayName="Button",m.__docgenInfo={description:"",displayName:"Button",props:{type:{defaultValue:{value:"main"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"main"'},{value:'"confirm"'},{value:'"critical"'}]}},size:{defaultValue:{value:"full"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"auto"'},{value:'"full"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},onclick:{defaultValue:null,description:"",name:"onclick",required:!1,type:{name:"(() => void)"}}}}}catch{}const Y={title:"Components/Buttons/Button",component:m,tags:["autodocs"],args:{children:"Button Text",type:"main"},argTypes:{size:{options:["sm","md","lg","auto","full"],control:{type:"inline-radio"}}}},a={},s={args:{type:"confirm"}},o={args:{type:"critical"}},t={args:{size:"sm"}},n={args:{size:"md"}},c={args:{size:"lg"}},l={args:{size:"auto"}},i={args:{size:"full"}},u={args:{size:"full",onclick:()=>{alert("teste")}}};var p,d,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var f,x,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'confirm'
  }
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var y,z,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: 'critical'
  }
}`,...(S=(z=o.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var _,b,C;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(C=(b=t.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var h,w,B;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...(B=(w=n.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var k,q,A;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(A=(q=c.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var V,$,j;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    size: 'auto'
  }
}`,...(j=($=l.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var N,D,E;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: 'full'
  }
}`,...(E=(D=i.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var F,L,M;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'full',
    onclick: () => {
      alert('teste');
    }
  }
}`,...(M=(L=u.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const Z=["Default","Confirm","Critical","Small","Medium","Large","Auto","Full","Action"];export{u as Action,l as Auto,s as Confirm,o as Critical,a as Default,i as Full,c as Large,n as Medium,t as Small,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=Button.stories-12ef1ba1.js.map
