"use strict";(self.webpackChunkpos_unipar=self.webpackChunkpos_unipar||[]).push([[3608],{895:function(e,t,n){n.d(t,{dK:function(){return s},_k:function(){return u},vc:function(){return c.a},rx:function(){return l},qo:function(){return i},Hk:function(){return m},Iz:function(){return d}});var r=n(1336),a=n.n(r),o=n(813),c=n.n(o);n(892)(a()),n(1129)(a());var s=["pt"],u=!1,l="258a43e4",i=8,m=50,d={search_placeholder:"Pesquisa",see_all_results:"Veja todos os resultados",no_results:"Sem resultados.",search_results_for:'Resultados da pesquisa para "{{ keyword }}"',search_the_documentation:"Pesquise",count_documents_found:"{{ count }} documento encontrado",count_documents_found_plural:"{{ count }} documentos encontrados",no_documents_were_found:"Nenhum resultado encontrado"}},3012:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(7294),a=n(6698),o=n(6742),c=n(4973);function s(e){var t=e.year,n=e.posts;return r.createElement(r.Fragment,null,r.createElement("h3",null,t),r.createElement("ul",null,n.map((function(e){return r.createElement("li",{key:e.metadata.date},r.createElement(o.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))}))))}function u(e){var t=e.years;return r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},t.map((function(e,t){return r.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},r.createElement(s,e))})))))}function l(e){var t,n,o=e.archive,s=(0,c.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),l=(0,c.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),i=(t=o.blogPosts,n=t.reduceRight((function(e,t){var n=t.metadata.date.split("-")[0],r=e.get(n)||[];return e.set(n,[t].concat(r))}),new Map),Array.from(n,(function(e){return{year:e[0],posts:e[1]}})));return r.createElement(a.Z,{title:s,description:l},r.createElement("header",{className:"hero hero--primary"},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},s),r.createElement("p",{className:"hero__subtitle"},l))),r.createElement("main",null,i.length>0&&r.createElement(u,{years:i})))}}}]);