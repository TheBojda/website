"use strict";(self.webpackChunk_semaphore_protocol_website=self.webpackChunk_semaphore_protocol_website||[]).push([[6824],{3905:(e,a,r)=>{r.d(a,{Zo:()=>i,kt:()=>h});var t=r(7294);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function n(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?n(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function p(e,a){if(null==e)return{};var r,t,o=function(e,a){if(null==e)return{};var r,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),u=function(e){var a=t.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},i=function(e){var a=u(e.components);return t.createElement(l.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=u(r),c=o,h=m["".concat(l,".").concat(c)]||m[c]||d[c]||n;return r?t.createElement(h,s(s({ref:a},i),{},{components:r})):t.createElement(h,s({ref:a},i))}));function h(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=c;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[m]="string"==typeof e?e:o,s[1]=p;for(var u=2;u<n;u++)s[u]=r[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5162:(e,a,r)=>{r.d(a,{Z:()=>s});var t=r(7294),o=r(6010);const n={tabItem:"tabItem_Ymn6"};function s(e){let{children:a,hidden:r,className:s}=e;return t.createElement("div",{role:"tabpanel",className:(0,o.Z)(n.tabItem,s),hidden:r},a)}},5488:(e,a,r)=>{r.d(a,{Z:()=>d});var t=r(7462),o=r(7294),n=r(6010),s=r(2389),p=r(7392),l=r(7094),u=r(2466);const i={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function m(e){const{lazy:a,block:r,defaultValue:s,values:m,groupId:d,className:c}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??h.map((e=>{let{props:{value:a,label:r,attributes:t}}=e;return{value:a,label:r,attributes:t}})),g=(0,p.l)(b,((e,a)=>e.value===a.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===s?s:s??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==f&&!b.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:v}=(0,l.U)(),[y,N]=(0,o.useState)(f),S=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=d){const e=k[d];null!=e&&e!==y&&b.some((a=>a.value===e))&&N(e)}const w=e=>{const a=e.currentTarget,r=S.indexOf(a),t=b[r].value;t!==y&&(O(a),N(t),null!=d&&v(d,String(t)))},E=e=>{let a=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const r=S.indexOf(e.currentTarget)+1;a=S[r]??S[0];break}case"ArrowLeft":{const r=S.indexOf(e.currentTarget)-1;a=S[r]??S[S.length-1];break}}a?.focus()};return o.createElement("div",{className:(0,n.Z)("tabs-container",i.tabList)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},c)},b.map((e=>{let{value:a,label:r,attributes:s}=e;return o.createElement("li",(0,t.Z)({role:"tab",tabIndex:y===a?0:-1,"aria-selected":y===a,key:a,ref:e=>S.push(e),onKeyDown:E,onClick:w},s,{className:(0,n.Z)("tabs__item",i.tabItem,s?.className,{"tabs__item--active":y===a})}),r??a)}))),a?(0,o.cloneElement)(h.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,a)=>(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==y})))))}function d(e){const a=(0,s.Z)();return o.createElement(m,(0,t.Z)({key:String(a)},e))}},3086:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var t=r(7462),o=(r(7294),r(3905)),n=r(5488),s=r(5162);const p={sidebar_position:4,title:"Obteniendo datos"},l="Semaphore data",u={unversionedId:"guides/fetching-data",id:"version-V3/guides/fetching-data",title:"Obteniendo datos",description:"Para obtener datos on-chain del contrato Semaphore.sol, puedes usar la librer\xeda @semaphore-protocol/data.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-V3/guides/fetching-data.mdx",sourceDirName:"guides",slug:"/guides/fetching-data",permalink:"/es/docs/guides/fetching-data",draft:!1,editUrl:"https://github.com/semaphore-protocol/website/edit/main/versioned_docs/version-V3/guides/fetching-data.mdx",tags:[],version:"V3",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Obteniendo datos"},sidebar:"version-V3/mySidebar",previous:{title:"Pruebas",permalink:"/es/docs/guides/proofs"},next:{title:"Circuitos",permalink:"/es/docs/technical-reference/circuits"}},i={},m=[{value:"Instalar librer\xeda",id:"instalar-librer\xeda",level:2},{value:"Obtener datos usando SemaphoreSubgraph",id:"obtener-datos-usando-semaphoresubgraph",level:2},{value:"Obtener Ids de los grupos",id:"obtener-ids-de-los-grupos",level:3},{value:"Obtener los grupos",id:"obtener-los-grupos",level:3},{value:"Obtener un grupo",id:"obtener-un-grupo",level:3},{value:"Comprueba si un identity commitment es miembro de un grupo",id:"comprueba-si-un-identity-commitment-es-miembro-de-un-grupo",level:3},{value:"Obtener datos usando SemaphoreEthers",id:"obtener-datos-usando-semaphoreethers",level:2},{value:"Obtener Ids de los grupos",id:"obtener-ids-de-los-grupos-1",level:3},{value:"Obtener un grupo",id:"obtener-un-grupo-1",level:3},{value:"Obtener el admin de un grupo",id:"obtener-el-admin-de-un-grupo",level:3},{value:"Obtener los miembros de un grupo",id:"obtener-los-miembros-de-un-grupo",level:3},{value:"Obtener las pruebas verificadas de un grupo",id:"obtener-las-pruebas-verificadas-de-un-grupo",level:3}],d={toc:m},c="wrapper";function h(e){let{components:a,...r}=e;return(0,o.kt)(c,(0,t.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"semaphore-data"},"Semaphore data"),(0,o.kt)("p",null,"Para obtener datos on-chain del contrato ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/blob/main/packages/contracts/contracts/Semaphore.sol"},"Semaphore.sol"),", puedes usar la librer\xeda ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/tree/main/packages/data"},"@semaphore-protocol/data"),"."),(0,o.kt)("p",null,"Hay dos formas para hacer esto, usando ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/blob/main/packages/data/src/subgraph.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"SemaphoreSubgraph"))," o ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/blob/main/packages/data/src/ethers.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"SemaphoreEthers")),". La clase ",(0,o.kt)("inlineCode",{parentName:"p"},"SemaphoreSubgraph")," usa el ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/subgraph"},"subgrafo de Semaphore"),", el cual usa ",(0,o.kt)("a",{parentName:"p",href:"https://thegraph.com/"},"The Graph Protocol")," detr\xe1s del tel\xf3n, y la clase ",(0,o.kt)("inlineCode",{parentName:"p"},"SemaphoreEthers")," usa ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ethers-io/ethers.js/"},"Ethers"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#obtener-datos-usando-semaphoresubgraph"},(0,o.kt)("strong",{parentName:"a"},"Obtener datos usando SemaphoreSubgraph"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#obtener-datos-usando-semaphoreethers"},(0,o.kt)("strong",{parentName:"a"},"Obtener datos usando SemaphoreEthers")))),(0,o.kt)("h2",{id:"instalar-librer\xeda"},"Instalar librer\xeda"),(0,o.kt)(n.Z,{defaultValue:"npm",groupId:"package-managers",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"},{label:"pnpm",value:"pnpm"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @semaphore-protocol/data\n"))),(0,o.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @semaphore-protocol/data\n"))),(0,o.kt)(s.Z,{value:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @semaphore-protocol/data\n")))),(0,o.kt)("h2",{id:"obtener-datos-usando-semaphoresubgraph"},"Obtener datos usando SemaphoreSubgraph"),(0,o.kt)("p",null,"Para obtener datos usando el subgrafo de Semaphore puedes usar la clase ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/blob/main/packages/data/src/subgraph.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"SemaphoreSubgraph"))," del paquete ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/tree/main/packages/data"},"@semaphore-protocol/data"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { SemaphoreSubgraph } from "@semaphore-protocol/data"\n\nconst semaphoreSubgraph = new SemaphoreSubgraph()\n\n// or:\nconst semaphoreSubgraph = new SemaphoreSubgraph("arbitrum")\n\n// or:\nconst semaphoreSubgraph = new SemaphoreSubgraph(\n    "https://api.studio.thegraph.com/query/14377/<your-subgraph>/<your-version>"\n)\n')),(0,o.kt)("h3",{id:"obtener-ids-de-los-grupos"},"Obtener Ids de los grupos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const groupIds = await semaphoreSubgraph.getGroupIds()\n")),(0,o.kt)("h3",{id:"obtener-los-grupos"},"Obtener los grupos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const groups = await semaphoreSubgraph.getGroups()\n\n// or\n\nconst groups = await semaphoreSubgraph.getGroups({ members: true, verifiedProofs: true })\n")),(0,o.kt)("h3",{id:"obtener-un-grupo"},"Obtener un grupo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const group = await semaphoreSubgraph.getGroup("42")\n\n// or\n\nconst { members, verifiedProofs } = semaphoreSubgraph.getGroup("42", { members: true, verifiedProofs: true })\n')),(0,o.kt)("h3",{id:"comprueba-si-un-identity-commitment-es-miembro-de-un-grupo"},"Comprueba si un identity commitment es miembro de un grupo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'await semaphoreSubgraph.isGroupMember(\n    "42",\n    "16948514235341957898454876473214737047419402240398321289450170535251226167324"\n)\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Puedes crear un grupo off-chain usando la clase SemaphoreSubgraph para obtener los miembros de la siguiente forma:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Group } from "@semaphore-protocol/group"\nimport { SemaphoreSubgraph } from "@semaphore-protocol/data"\n\nconst groupId = "3"\nconst semaphoreSubgraph = new SemaphoreSubgraph("sepolia")\nconst { members } = await semaphoreSubgraph.getGroup(groupId, { members: true })\nconst group = new Group(groupId, 20, members)\n'))),(0,o.kt)("h2",{id:"obtener-datos-usando-semaphoreethers"},"Obtener datos usando SemaphoreEthers"),(0,o.kt)("p",null,"Para obtener datos usando Ethers puedes usar la clase ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/blob/main/packages/data/src/ethers.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"SemaphoreEthers"))," del paquete ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/tree/main/packages/data"},"@semaphore-protocol/data"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { SemaphoreEthers } from "@semaphore-protocol/data"\n\nconst semaphoreEthers = new SemaphoreEthers()\n\n// or:\nconst semaphoreEthers = new SemaphoreEthers("homestead", {\n    address: "semaphore-address",\n    startBlock: 0\n})\n\n// or:\nconst semaphoreEthers = new SemaphoreEthers("http://localhost:8545", {\n    address: "semaphore-address"\n})\n')),(0,o.kt)("h3",{id:"obtener-ids-de-los-grupos-1"},"Obtener Ids de los grupos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const groupIds = await semaphoreEthers.getGroupIds()\n")),(0,o.kt)("h3",{id:"obtener-un-grupo-1"},"Obtener un grupo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const group = await semaphoreEthers.getGroup("42")\n')),(0,o.kt)("h3",{id:"obtener-el-admin-de-un-grupo"},"Obtener el admin de un grupo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const admin = await semaphoreEthers.getGroupAdmin("42")\n')),(0,o.kt)("h3",{id:"obtener-los-miembros-de-un-grupo"},"Obtener los miembros de un grupo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const members = await semaphoreEthers.getGroupMembers("42")\n')),(0,o.kt)("h3",{id:"obtener-las-pruebas-verificadas-de-un-grupo"},"Obtener las pruebas verificadas de un grupo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const verifiedProofs = await semaphoreEthers.getGroupVerifiedProofs("42")\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Puedes crear un grupo off-chain usando la clase SemaphoreEthers para obtener los miembros de la siguiente forma:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Group } from "@semaphore-protocol/group"\nimport { SemaphoreEthers } from "@semaphore-protocol/data"\n\nconst groupId = "3"\nconst semaphoreEthers = new SemaphoreEthers("sepolia")\nconst members = await semaphoreEthers.getGroupMembers(groupId)\nconst group = new Group(groupId, 20, members)\n'))))}h.isMDXComponent=!0}}]);