"use strict";(self.webpackChunkpos_unipar=self.webpackChunkpos_unipar||[]).push([[1580],{3905:function(e,a,o){o.d(a,{Zo:function(){return u},kt:function(){return c}});var t=o(7294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function l(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=t.createContext({}),p=function(e){var a=t.useContext(i),o=a;return e&&(o="function"==typeof e?e(a):l(l({},a),e)),o},u=function(e){var a=p(e.components);return t.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var o=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(o),c=n,f=m["".concat(i,".").concat(c)]||m[c]||d[c]||r;return o?t.createElement(f,l(l({ref:a},u),{},{components:o})):t.createElement(f,l({ref:a},u))}));function c(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=m;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<r;p++)l[p]=o[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1928:function(e,a,o){o.r(a),o.d(a,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var t=o(7462),n=o(3366),r=(o(7294),o(3905)),l=["components"],s={slug:"10",title:"#10 - Banco de Dados",author:"Lucas Elias Baccan",author_url:"https://github.com/lucasbaccan",author_image_url:"https://avatars.githubusercontent.com/u/2676484?s=400&v=4",tags:["blog","unipar","14/08/2021","08/2021","2021","fernando","banco de dados","remoto"]},i=void 0,p={permalink:"/blog/10",editUrl:"https://github.com/pos-unipar/pos-unipar.github.io/edit/master/blog/2021-08-14-aula-10.md",source:"@site/blog/2021-08-14-aula-10.md",title:"#10 - Banco de Dados",description:"14/08/2021 - Aula 2 de Banco de dados (Remoto)",date:"2021-08-14T00:00:00.000Z",formattedDate:"August 14, 2021",tags:[{label:"blog",permalink:"/blog/tags/blog"},{label:"unipar",permalink:"/blog/tags/unipar"},{label:"14/08/2021",permalink:"/blog/tags/14-08-2021"},{label:"08/2021",permalink:"/blog/tags/08-2021"},{label:"2021",permalink:"/blog/tags/2021"},{label:"fernando",permalink:"/blog/tags/fernando"},{label:"banco de dados",permalink:"/blog/tags/banco-de-dados"},{label:"remoto",permalink:"/blog/tags/remoto"}],readingTime:1.935,truncated:!1,nextItem:{title:"#9 - Banco de Dados",permalink:"/blog/9"}},u=[],d={toc:u};function m(e){var a=e.components,o=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,t.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"14/08/2021 - Aula 2 de Banco de dados")," (Remoto)"),(0,r.kt)("p",null,"A aula demorou um pouco pra come\xe7ar, pois alguns alunos pensaram que seria presencial, e est\xe3o na universidade, ent\xe3o o professor aguardou at\xe9 eles irem para algum laborat\xf3rio."),(0,r.kt)("p",null,"O professor ",(0,r.kt)("a",{parentName:"p",href:"/professores/fernando"},"Fernando")," come\xe7ou a aula revisando a ",(0,r.kt)("a",{parentName:"p",href:"/docs/banco-de-dados#atividade-2"},"atividade 2"),", explicando o objetivo e tirando alguma duvida que algu\xe9m possa ter ainda. Al\xe9m disso, o professor fez uma revis\xe3o da aula anterior, pois ele alterou o material e adicionou novas explica\xe7\xf5es."),(0,r.kt)("p",null,"Comandos DDL s\xe3o sempre comandos que v\xe3o mudar na estrutura das tabelas, dentre elas temos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adicionar ou Remover columns"),(0,r.kt)("li",{parentName:"ul"},"Adicionar ou Remover constraints"),(0,r.kt)("li",{parentName:"ul"},"Mudar valores default"),(0,r.kt)("li",{parentName:"ul"},"Mudar tipos de dados da coluna"),(0,r.kt)("li",{parentName:"ul"},"Renomear Colunas"),(0,r.kt)("li",{parentName:"ul"},"Renomear Tabelas")),(0,r.kt)("p",null,"J\xe1 o DML, ele manipula os dados."),(0,r.kt)("p",null,"A aula seguiu utilizando o material que est\xe1 no ",(0,r.kt)("a",{parentName:"p",href:"https://bit.ly/pos_bd"},"link"),", l\xe1 est\xe1 duas apresenta\xe7\xf5es, a apresenta\xe7\xe3o utilizada foi essa ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1ombu1k5Xl_-oHz_ui2oVhrEyncy-cM8h1jTfbV9FvnQ/edit#slide=id.ge735401a6e_0_0"},"aqui"),"."),(0,r.kt)("p",null,"Professor pediu para criamos um banco de dados novo, e rodar o seguinte SQL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE departamentos(\n  id_departamento INT PRIMARY KEY,\n  nome VARCHAR(60),\n  responsavel VARCHAR(60)\n);\n\nCREATE TABLE grupos(\n  id_grupo serial,\n  nome VARCHAR(60),\n  id_departamento INT REFERENCES departamentos\n);\n")),(0,r.kt)("p",null,"Depois, populamos o banco de dados com alguns ",(0,r.kt)("em",{parentName:"p"},"INSERTS"),";"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"INSERTS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Informando todos os campos:\nINSERT INTO departamentos VALUES (1,'Eletr\xf4nicos','Fernando');\n\n-- M\xfaltiplos INSERTS:\nINSERT INTO departamentos VALUES \n--(1,'Eletr\xf4nicos','Fernando'), \n(2,'Port\xe1teis','Fernando'), \n(3,'Eletrodom\xe9sticos','Fernando');\n\n-- Informando apenas valores obrigat\xf3rios:\nINSERT INTO grupos (id_grupo, id_departamento) VALUES (1,1);\n\n-- Tabela com campo Serial:\nINSERT INTO grupos (nome, id_departamento) VALUES ('Smartphone',1);\n\n-- A partir de dados de outra tabela:\nINSERT INTO grupos (nome, id_departamento) \n  SELECT nome, id_departamento FROM novo_grupos WHERE id_grupo > 10;\n"))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Professor fez mais alguns exemplos, adicionando ",(0,r.kt)("em",{parentName:"p"},"constraints")," para garantir a integridade do banco de dados, fazendo ",(0,r.kt)("em",{parentName:"p"},"selects"),", ",(0,r.kt)("em",{parentName:"p"},"updates")," e ",(0,r.kt)("em",{parentName:"p"},"deletes"),"."),(0,r.kt)("p",null,"Ap\xf3s a explica\xe7\xe3o, professor passou uma atividade, utilizando o mesmo grupo da aula passada, \xe9 a ",(0,r.kt)("a",{parentName:"p",href:"/docs/banco-de-dados#atividade-3"},"atividade 3"),"."),(0,r.kt)("p",null,"Finalizamos a manha at\xe9 esse ponto, e no per\xedodo da tarde voltamos vendo a parte de ",(0,r.kt)("em",{parentName:"p"},"selects")," com o material do ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1sZoznJP4HaDXseo5S0_COBhVv_zRQfsMRKUGSZ7nFSg/edit"},"link"),". Vimos os tipos de join, e como fazer um ",(0,r.kt)("em",{parentName:"p"},"join")," entre tabelas, como utilizar o ",(0,r.kt)("em",{parentName:"p"},"group by")," e como utilizar o ",(0,r.kt)("em",{parentName:"p"},"order by")," e por fim, o ",(0,r.kt)("em",{parentName:"p"},"limit"),"."),(0,r.kt)("p",null,"Depois disso, professor passou uma ",(0,r.kt)("a",{parentName:"p",href:"/docs/banco-de-dados#atividade-4"},"atividade 4"),", que pode ser entregue at\xe9 a pr\xf3xima aula."),(0,r.kt)("p",null,"Professor ficou para tirar as duvidas da atividade, e com isso finalizamos a aula de hoje."))}m.isMDXComponent=!0}}]);