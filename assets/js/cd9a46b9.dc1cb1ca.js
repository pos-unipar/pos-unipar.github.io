(self.webpackChunkpos_unipar=self.webpackChunkpos_unipar||[]).push([[9938],{3905:function(e,a,r){"use strict";r.d(a,{Zo:function(){return p},kt:function(){return d}});var t=r(7294);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function n(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?n(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,t,o=function(e,a){if(null==e)return{};var r,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),u=function(e){var a=t.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},p=function(e){var a=u(e.components);return t.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,g=m["".concat(i,".").concat(d)]||m[d]||c[d]||n;return r?t.createElement(g,l(l({ref:a},p),{},{components:r})):t.createElement(g,l({ref:a},p))}));function d(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=m;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<n;u++)l[u]=r[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8077:function(e,a,r){"use strict";r.r(a),r.d(a,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var t=r(2122),o=r(9756),n=(r(7294),r(3905)),l=["components"],s={slug:"7",title:"#7 - Angular",author:"Lucas Elias Baccan",author_url:"https://github.com/lucasbaccan",author_image_url:"https://avatars.githubusercontent.com/u/2676484?s=400&v=4",tags:["blog","unipar","12/06/2021","06/2021","2021","jean","angular","remoto"]},i=void 0,u={permalink:"/blog/7",editUrl:"https://github.com/pos-unipar/pos-unipar.github.io/edit/master/blog/2021-06-12-aula-7.md",source:"@site/blog/2021-06-12-aula-7.md",title:"#7 - Angular",description:"12/06/2021 - Aula 3 de Angular (Remoto)",date:"2021-06-12T00:00:00.000Z",formattedDate:"June 12, 2021",tags:[{label:"blog",permalink:"/blog/tags/blog"},{label:"unipar",permalink:"/blog/tags/unipar"},{label:"12/06/2021",permalink:"/blog/tags/12-06-2021"},{label:"06/2021",permalink:"/blog/tags/06-2021"},{label:"2021",permalink:"/blog/tags/2021"},{label:"jean",permalink:"/blog/tags/jean"},{label:"angular",permalink:"/blog/tags/angular"},{label:"remoto",permalink:"/blog/tags/remoto"}],readingTime:1.69,truncated:!1,nextItem:{title:"#6 - Angular",permalink:"/blog/6"}},p=[],c={toc:p};function m(e){var a=e.components,s=(0,o.Z)(e,l);return(0,n.kt)("wrapper",(0,t.Z)({},c,s,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"12/06/2021 - Aula 3 de Angular")," (Remoto)"),(0,n.kt)("p",null,"Come\xe7amos a terceira aula as 08:10, com o professor ",(0,n.kt)("a",{parentName:"p",href:"/professores/jean"},"Jean")," revisando uma atividade que ele tinha pedido, que era a implementa\xe7\xe3o de clientes, ele atualizou o projeto e est\xe1 dispon\xedvel j\xe1 em ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pos-unipar/app-unipar2"},"Github"),"."),(0,n.kt)("p",null,"O material que o professor utilizou foi esse aqui em ",(0,n.kt)("a",{target:"_blank",href:r(9850).Z},".PDF"),"."),(0,n.kt)("p",null,'Come\xe7amos a aula vendo o construtor "pipe" (|), que serve para formatar valores de acordo com o que voc\xea passar. Vimos tamb\xe9m como criar um validador personalizado para validar campos de CPF e CNPJ.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Instalar uma biblioteca para ajudar na formata\xe7\xe3o e valida\xe7\xe3o dos campos\nnpm install angular2-text-mask --save\nnpm install ng2-currency-mask --save\n")),(0,n.kt)("p",null,"Depois de importar as bibliotecas, foi alterado o arquivo do cliente e o modal do cliente, para inserir as valida\xe7\xf5es."),(0,n.kt)("p",null,"Fizemos um intervalo as 10h, e depois demos continuidade na aula vendo gr\xe1ficos, utilizando outra biblioteca"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Instalar uma biblioteca para ajudar nos gr\xe1ficos\nnpm install ng2-charts@2.4.2 --save\nnpm install chart.js@2.9.3 --save\n")),(0,n.kt)("p",null,"Depois do almo\xe7o, continuamos trabalhando com a parte de gr\xe1fico, criamos um componente pra ele, o que ajudou a reduzir o c\xf3digo da tela Home."),(0,n.kt)("p",null,"Por volta das 15h fizemos um intervalo e na volta come\xe7amos a ver um pouco sobre testes unit\xe1rios, mas o professor comentou que na pr\xf3xima aula vai ser aprofundado no assunto."),(0,n.kt)("p",null,'Come\xe7amos a ver ent\xe3o a fun\xe7\xe3o "Drag and Drop", utilizando um plugin'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Instalar uma biblioteca para ajudar nos gr\xe1ficos\nnpm install ng2-dnd@5.0.2 --save\n")),(0,n.kt)("p",null,"Implementamos em um exemplo de lista de produtos, com a\xe7\xf5es disparadas ao soltar. Trabalhamos tamb\xe9m com componente de selecionar item com um dropdown, vendo v\xe1rios recursos e como utilizar eles."),(0,n.kt)("p",null,"Ouve algumas duvidas de alunos, e foi discutido os assuntos, como linguagem melhor para se trabalhar, se precisa fazer o backend em Javascrip, se consigo fazer toda a aplica\xe7\xe3o s\xf3 com Angular, etc etc."),(0,n.kt)("p",null,"Foi conversado um pouco sobre o trabalho que vai ser passado, mas professor tem qeu verificar uns detalhes ainda antes de passar para n\xf3s."),(0,n.kt)("p",null,"Com isso terminamos a aula de hoje."))}m.isMDXComponent=!0},9850:function(e,a,r){"use strict";a.Z=r.p+"assets/files/angular-aula3-7a8276b4eddf6f77469d0d8b67ca343c.pdf"}}]);