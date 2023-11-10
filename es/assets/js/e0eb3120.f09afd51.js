"use strict";(self.webpackChunk_semaphore_protocol_website=self.webpackChunk_semaphore_protocol_website||[]).push([[3822],{3905:(e,r,a)=>{a.d(r,{Zo:()=>p,kt:()=>h});var o=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,o)}return a}function t(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,o,n=function(e,r){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),d=function(e){var r=o.useContext(l),a=r;return e&&(a="function"==typeof e?e(r):t(t({},r),e)),a},p=function(e){var r=d(e.components);return o.createElement(l.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=n,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return a?o.createElement(h,t(t({ref:r},p),{},{components:a})):o.createElement(h,t({ref:r},p))}));function h(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=a.length,t=new Array(i);t[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[c]="string"==typeof e?e:n,t[1]=s;for(var d=2;d<i;d++)t[d]=a[d];return o.createElement.apply(null,t)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7177:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=a(7462),n=(a(7294),a(3905));const i={sidebar_position:7},t="Glosario",s={unversionedId:"glossary",id:"version-V3/glossary",title:"Glosario",description:"Identidad Semaphore",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-V3/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/es/docs/glossary",draft:!1,editUrl:"https://github.com/semaphore-protocol/website/edit/main/versioned_docs/version-V3/glossary.md",tags:[],version:"V3",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"version-V3/mySidebar",previous:{title:"Subgrafo",permalink:"/es/docs/subgraph"},next:{title:"FAQ",permalink:"/es/docs/faq"}},l={},d=[{value:"Identidad Semaphore",id:"identidad-semaphore",level:2},{value:"Compromiso de identidad (Identity commitment)",id:"compromiso-de-identidad-identity-commitment",level:2},{value:"Grupo Semaphore",id:"grupo-semaphore",level:2},{value:"\xc1rbol de Merkle (Merkle tree)",id:"\xe1rbol-de-merkle-merkle-tree",level:2},{value:"Anulador (Nullifier)",id:"anulador-nullifier",level:2},{value:"Retransmisor (Relayer)",id:"retransmisor-relayer",level:2},{value:"Archivos confiables de configuraci\xf3n (Trusted setup files)",id:"archivos-confiables-de-configuraci\xf3n-trusted-setup-files",level:2},{value:"Se\xf1ales (Signals)",id:"se\xf1ales-signals",level:2}],p={toc:d},c="wrapper";function u(e){let{components:r,...a}=e;return(0,n.kt)(c,(0,o.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"glosario"},"Glosario"),(0,n.kt)("h2",{id:"identidad-semaphore"},"Identidad Semaphore"),(0,n.kt)("p",null,"La identidad de un usuario en el protocolo Semaphore.\nUna identidad contiene los tres valores que se mencionan a continuaci\xf3n:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#identity-commitment"},"Compromiso de identidad")," (identity commitment): el valor p\xfablico."),(0,n.kt)("li",{parentName:"ul"},"Identidad trampilla (identity trapdoor) y anulador de identidad (identity nullifier): valores secretos que \xfanicamente son del conocimiento del usuario.")),(0,n.kt)("h2",{id:"compromiso-de-identidad-identity-commitment"},"Compromiso de identidad (Identity commitment)"),(0,n.kt)("p",null,"El valor p\xfablico de la ",(0,n.kt)("a",{parentName:"p",href:"#semaphore-identity"},"identidad Semaphore")," utilizado en los ",(0,n.kt)("a",{parentName:"p",href:"#semaphore-group"},"grupos Semaphore"),"."),(0,n.kt)("p",null,"Semaphore utiliza la funci\xf3n hash ",(0,n.kt)("a",{parentName:"p",href:"https://www.poseidon-hash.info/"},"Poseidon")," para crear un compromiso de identidad a partir de los valores secretos de la identidad Semaphore."),(0,n.kt)("h2",{id:"grupo-semaphore"},"Grupo Semaphore"),(0,n.kt)("p",null,"Un grupo es un ",(0,n.kt)("a",{parentName:"p",href:"#merkle-tree"},"\xe1rbol de Merkle")," binario e incremental en el que cada hoja contiene un ",(0,n.kt)("a",{parentName:"p",href:"#identity-commitment"},"compromiso de identidad")," para un usuario.\nEl compromiso de identidad comprueba que un usuario es un miembro del grupo sin revelar la identidad Semaphore del usuario."),(0,n.kt)("p",null,"Semaphore utiliza la funci\xf3n hash ",(0,n.kt)("strong",{parentName:"p"},"Poseidon")," para crear \xe1rboles de Merkle.\nPara mayor informaci\xf3n, vea el ",(0,n.kt)("a",{parentName:"p",href:"https://www.poseidon-hash.info/"},"sitio web de Poseidon"),"."),(0,n.kt)("h2",{id:"\xe1rbol-de-merkle-merkle-tree"},"\xc1rbol de Merkle (Merkle tree)"),(0,n.kt)("p",null,"Un \xe1rbol en el que cada hoja (es decir, un nodo que no tiene hijos) es etiquetado con el hash criptogr\xe1fico de un bloque de datos,\ny cada nodo, que no es una hoja, es etiquetado con el hash criptogr\xe1fico de las etiquetas de sus nodos hijos.\nEn los protocolos de conocimiento zero (ZK), los \xe1rboles de Merkle pueden ser utilizados para resumir y validar de forma eficiente grandes conjuntos de datos.\nPara validar que un \xe1rbol contiene una hoja en espec\xedfico, un verificador s\xf3lo necesita una porci\xf3n de la estructura completa de datos."),(0,n.kt)("p",null,"Para m\xe1s informaci\xf3n, vea ",(0,n.kt)("a",{parentName:"p",href:"https://es.wikipedia.org/wiki/%C3%81rbol_de_Merkle"},"\xe1rbol de Merkle en Wikipedia"),"."),(0,n.kt)("h2",{id:"anulador-nullifier"},"Anulador (Nullifier)"),(0,n.kt)("p",null,"Un valor utilizado para prevenir registros dobles o dos se\xf1ales emitidas por el mismo usuario."),(0,n.kt)("p",null,"Ver ",(0,n.kt)("a",{parentName:"p",href:"/docs/technical-reference/circuits/#nullifier-hash"},"hash de circuito nullifier"),"."),(0,n.kt)("h2",{id:"retransmisor-relayer"},"Retransmisor (Relayer)"),(0,n.kt)("p",null,"Un tercero que recibe una comisi\xf3n por incluir transacciones retransmitidas en la blockchain (McMenamin, Daza, and Fitz. ",(0,n.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2022/155.pdf"},"https://eprint.iacr.org/2022/155.pdf"),", p.3).\nPara preservar la anonimidad del usuario emitiendo una se\xf1al con Semaphore, una aplicaci\xf3n puede utilizar un retransmisor para publicar la transacci\xf3n de la se\xf1al en Ethereum en nombre del usuario."),(0,n.kt)("p",null,"Las aplicaciones pueden ofrecer recompensas a los retransmisores e implementar mecanismos para prevenir ventajas maliciosas, como requerir que las se\xf1ales incluyan la direcci\xf3n del retransmisor, vinculando as\xed la se\xf1al a esa direcci\xf3n en espec\xedfico (",(0,n.kt)("a",{parentName:"p",href:"https://semaphore.pse.dev/whitepaper-v1.pdf"},"https://semaphore.pse.dev/whitepaper-v1.pdf"),", p.6)."),(0,n.kt)("h2",{id:"archivos-confiables-de-configuraci\xf3n-trusted-setup-files"},"Archivos confiables de configuraci\xf3n (Trusted setup files)"),(0,n.kt)("p",null,"Los par\xe1metros verificables y seguros generados por la ceremonia de configuraci\xf3n de confianza de Semaphore.\nSemaphore utiliza los archivos confiables de configuraci\xf3n para generar y verificar pruebas v\xe1lidas de conocimiento cero.\nPara generar o verificar pruebas v\xe1lidas de conocimiento cero con Semaphore, las aplicaciones deben incluir los siguientes archivos ",(0,n.kt)("em",{parentName:"p"},"confiables de configuraci\xf3n")," de Semaphore."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"semaphore.zkey"),(0,n.kt)("li",{parentName:"ul"},"semaphore.wasm"),(0,n.kt)("li",{parentName:"ul"},"semaphore.json")),(0,n.kt)("p",null,"Para ver una lista completa de archivos listos para utilizarse, vea ",(0,n.kt)("a",{parentName:"p",href:"http://www.trusted-setup-pse.org"},"http://www.trusted-setup-pse.org"),".\nPara aprender m\xe1s, vea la ",(0,n.kt)("a",{parentName:"p",href:"https://storage.googleapis.com/trustedsetup-a86f4.appspot.com/semaphore/semaphore_top_index.html"},"ceremonia de configuraci\xf3n de confianza")," (trusted setup ceremony)."),(0,n.kt)("h2",{id:"se\xf1ales-signals"},"Se\xf1ales (Signals)"),(0,n.kt)("p",null,'El t\xe9rmino "se\xf1ales" en Semaphore se refiere a los valores que el usuario transmite al votar, confirmar, enviar un mensaje, etc. Por otro lado, "',(0,n.kt)("a",{parentName:"p",href:"https://docs.circom.io/circom-language/signals/"},"se\xf1ales"),'" en Circom se refiere a datos que contienen elementos dentro del campo de Z/pZ. En Circom, las "se\xf1ales" se pueden definir como entrada o salida y, de lo contrario, se consideran se\xf1ales intermedias.'))}u.isMDXComponent=!0}}]);