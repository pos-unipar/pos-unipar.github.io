"use strict";(self.webpackChunkpos_unipar=self.webpackChunkpos_unipar||[]).push([[2870],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=r.createContext({}),s=function(e){var a=r.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=s(e.components);return r.createElement(u.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=n,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,l(l({ref:a},c),{},{components:t})):r.createElement(f,l({ref:a},c))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},61877:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=t(87462),n=t(63366),o=(t(67294),t(3905)),l=["components"],i={slug:"18",title:"#18 - Android",authors:"LucasEliasBaccan",tags:["blog","unipar","05/03/2022","03/2022","2022","paulo","android","presencial"]},u=void 0,s={permalink:"/blog/18",editUrl:"https://github.com/pos-unipar/pos-unipar.github.io/edit/master/blog/2022-03-05-aula-18.md",source:"@site/blog/2022-03-05-aula-18.md",title:"#18 - Android",description:"05/03/2022 - Aula 3 de Android (Presencial)",date:"2022-03-05T00:00:00.000Z",formattedDate:"March 5, 2022",tags:[{label:"blog",permalink:"/blog/tags/blog"},{label:"unipar",permalink:"/blog/tags/unipar"},{label:"05/03/2022",permalink:"/blog/tags/05-03-2022"},{label:"03/2022",permalink:"/blog/tags/03-2022"},{label:"2022",permalink:"/blog/tags/2022"},{label:"paulo",permalink:"/blog/tags/paulo"},{label:"android",permalink:"/blog/tags/android"},{label:"presencial",permalink:"/blog/tags/presencial"}],readingTime:.65,hasTruncateMarker:!1,authors:[{name:"Lucas Elias Baccan",url:"https://github.com/lucasbaccan",imageURL:"https://avatars.githubusercontent.com/u/2676484?s=400&v=4",key:"LucasEliasBaccan"}],frontMatter:{slug:"18",title:"#18 - Android",authors:"LucasEliasBaccan",tags:["blog","unipar","05/03/2022","03/2022","2022","paulo","android","presencial"]},prevItem:{title:"#19 - Android",permalink:"/blog/19"},nextItem:{title:"#17 - Android",permalink:"/blog/17"}},c={authorsImageUrls:[void 0]},p=[],m={toc:p};function d(e){var a=e.components,t=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"05/03/2022 - Aula 3 de Android")," (Presencial)"),(0,o.kt)("p",null,"O Professor ",(0,o.kt)("a",{parentName:"p",href:"/professores/paulo"},"Paulo")," come\xe7a a aula as 08:25h, atrasado novamente."),(0,o.kt)("p",null,"Come\xe7amos a aula revisando o que foi feito na aula anterior, e vamos implementar banco de dados, para isso vai ser utilizado o ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chennaione/sugar"},"Sugar ORM"),". Seguimos a documenta\xe7\xe3o do Sugar para configurar o banco de dados no projeto."),(0,o.kt)("p",null,"Criamos um DAO para o Aluno, com os m\xe9todos de CRUD. E vamos para o intervalo as 9:50."),(0,o.kt)("p",null,"Ap\xf3s o intervalo, implementamos o snackbar para notificar se deu certo ou n\xe3o salvar o Aluno."),(0,o.kt)("p",null,"A aula voltou a tarde, 20 minutos atrasados, come\xe7ando as 13:50."),(0,o.kt)("p",null,"A aula continua com o desenvolvimento da tela que vai listar todos os alunos cadastrados."),(0,o.kt)("p",null,"Com isso terminamos a aula de hoje, as 17h, 1h mais cedo do que deveria."))}d.isMDXComponent=!0}}]);