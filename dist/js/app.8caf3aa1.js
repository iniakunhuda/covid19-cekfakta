(function(t){function e(e){for(var r,n,l=e[0],c=e[1],o=e[2],d=0,f=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&f.push(i[n][0]),i[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,o||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,l=1;l<a.length;l++){var c=a[l];0!==i[c]&&(r=!1)}r&&(s.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},i={app:0},s=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/covid19-cekfakta/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"13df":function(t,e,a){},"353d":function(t,e,a){"use strict";var r=a("13df"),i=a.n(r);i.a},"452c":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Articles"),a("Footer")],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"hero has-background-info"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title has-text-white"},[t._v(" Cek Fakta Covid-19 ")]),a("h2",{staticClass:"subtitle is-6 has-text-white"},[t._v(" Total: "+t._s(t.articles.length)+" post ")]),a("br"),a("br"),a("br")])])]),a("section",{staticClass:"container"},[a("div",{staticStyle:{"margin-top":"-100px"}},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("div",{staticClass:"card has-text-left"},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"field"},[a("strong",[t._v("Filter")]),a("div",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{type:"text",placeholder:"Cari Fakta / Hoax"},on:{input:t.filterData}})]),a("br"),a("div",{staticClass:"control"},[a("div",{staticClass:"select"},[a("select",{on:{change:t.filterKategori}},[a("option",{attrs:{value:""}},[t._v("Kategori")]),t._l(t.categories,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(" "+t._s(e.fields.Name)+" ")])}))],2)])])])])])]),t._m(0)])]),a("br"),a("br"),t.articles.length>0?a("div",t._l(t.filteredArticles,(function(t){return a("Card",{key:t.id,attrs:{title:t.fields.Judul,desc:t.fields.Text,url:t.fields.URL,date:t.fields.Tanggal,kategori:t.fields.KategoriLabel,sumber:t.fields.SumberLabel,attachs:t.fields.Attachments}})})),1):a("div",[t._v(" Data not found ")])]),t.articles.length>0?a("section",{staticClass:"container has-text-left"},[a("h3",{staticClass:"title is-5"},[t._v("Sumber Data :")]),a("ul",t._l(t.sumbers.filter((function(t){return"Tidak Diketahui"!=t.fields.Name})),(function(e){return a("li",{key:e.id},[a("a",{attrs:{href:e.fields.URL,target:"_blank"}},[t._v(t._s(e.fields.Name))])])})),0)]):t._e(),a("br"),a("br"),a("br")])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column"},[a("div",{staticClass:"card has-text-left"},[a("div",{staticClass:"card-content"},[a("h2",[t._v(" Ayo bantu kontribusi untuk menyebarkan berita - berita yang benar kepada keluarga terdekat kamu. Apabila kamu menemukan berita hoax dan mau mengklarifikasinya, kamu bisa mengirimkan surel kepada kami melalui email "),a("a",{attrs:{href:"mailto:iniakunhuda@gmail.com"}},[t._v("iniakunhuda@gmail.com")]),t._v(". Kami akan memposting berita tersebut di halaman ini. "),a("strong",[t._v("Mari bersama lawan HOAX")])])])])])}],c=(a("4de4"),a("4160"),a("caad"),a("45fc"),a("ac1f"),a("2532"),a("841c"),a("159b"),a("96cf"),a("1da1")),o=a("d4ec"),u=a("bee2"),d=a("49e1"),f=new d({apiKey:"keyiBvXqBMcs7Lf9F"}).base("appANn2hOJzq7WWua"),h=function(){function t(){Object(o["a"])(this,t)}return Object(u["a"])(t,[{key:"getTable",value:function(t){var e=new Object;return e="Artikel"==t?f(t).select({sort:[{field:"Updated At",direction:"desc"}]}).all():f(t).select({}).all(),e}}]),t}(),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"card has-text-left"},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-one-third"},[this.attachs&&this.attachs.length>0?a("div",[a("carousel",{attrs:{perPage:t.carouselimg}},t._l(t.attachs,(function(t){return a("slide",{key:t.id},[a("img",{staticClass:"image",attrs:{src:t.url}})])})),1)],1):a("div",[a("carousel",{attrs:{perPage:t.carouselimg}},[a("slide",[a("img",{staticClass:"image",attrs:{src:"http://placehold.it/400x400?text=Tidak ada gambar"}})])],1)],1)]),a("div",{staticClass:"column"},[a("h3",{staticClass:"title is-5 is-spaced bd-anchor-title",attrs:{id:"text-color"}},[a("a",{staticClass:"bd-anchor-link",attrs:{href:"#text-color"}},[t._v(" # ")]),a("span",{staticClass:"bd-anchor-name"},t._l(t.kategori,(function(e){return a("span",{key:e.id},[t._v(" "+t._s(e.fields.Name)+" ")])})),0)]),a("hr"),a("p",{staticClass:"title is-4"},[a("a",{attrs:{href:this.url,target:"_blank"}},[t._v(t._s(this.title))])]),a("read-more",{attrs:{"more-str":"read more",text:this.desc,link:"#","less-str":"read less","max-chars":100}}),a("br"),a("b",[t._v("Sumber :")]),t._l(t.sumber,(function(e){return a("span",{key:e.id},[a("a",{attrs:{href:e.fields.URL,target:"_blank"}},[t._v(" "+t._s(e.fields.Name))])])})),a("br"),a("b",[t._v("Tanggal : ")]),t._v(" "+t._s(this.date)+" ")],2)])])]),a("br"),a("br")])},b=[],p={name:"Card",props:["title","desc","url","date","kategori","sumber","attachs"],data:function(){return{carouselimg:1}}},m=p,g=a("2877"),_=Object(g["a"])(m,v,b,!1,null,null,null),k=_.exports,C=new h,y={name:"Articles",components:{Card:k},data:function(){return{articles:[],filteredArticles:[],categories:[],sumbers:[],search:"",searchKategori:""}},methods:{getData:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.getTable("Kategori").then((function(e){t.categories=e}));case 2:return e.next=4,C.getTable("Sumber").then((function(e){t.sumbers=e}));case 4:return e.next=6,C.getTable("Artikel").then((function(e){var a=t;e.forEach((function(t){var e=t;e.fields.KategoriLabel=[],e.fields.SumberLabel=[],t.fields.Kategori.forEach((function(t){var r=a.categories.filter((function(e){return e.id==t}));if(r.length>0){var i=r[0];e.fields.KategoriLabel.push(i)}})),t.fields.Sumber.forEach((function(t){var r=a.sumbers.filter((function(e){return e.id==t}));if(r.length>0){var i=r[0];e.fields.SumberLabel.push(i)}})),a.articles.push(e),a.filteredArticles.push(e)}))}));case 6:case"end":return e.stop()}}),e)})))()},filterData:function(t){this.search=t.target.value,this.filter()},filterKategori:function(t){this.searchKategori=t.target.value,this.filter()},filter:function(){var t=this;this.filteredArticles=this.articles.filter((function(e){return""!=t.searchKategori?e.fields.Kategori.includes(t.searchKategori):e})),this.filteredArticles=this.filterMultiple(this.search,this.filteredArticles,["Judul","Text"])},filterMultiple:function(t,e,a){var r=t.toLowerCase();return e.filter((function(t){return a.some((function(e){return t.fields[e].toLowerCase().includes(r)}))}))}},mounted:function(){this.getData()}},x=y,w=Object(g["a"])(x,n,l,!1,null,null,null),O=w.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("footer",{staticClass:"footer"},[a("div",{staticClass:"content has-text-centered"},[a("p",[t._v(" Build with "),a("strong",[t._v("Bulma")]),t._v(", "),a("strong",[t._v("Vue")]),t._v(", "),a("strong",[t._v("Airtable")]),t._v(" by "),a("a",{attrs:{href:"https://iniakunhuda.github.io"}},[t._v("Huda")]),a("br"),t._v(" Support this project at "),a("a",{attrs:{href:"https://github.com/iniakunhuda/covid19-cekfakta"}},[t._v("Github")]),a("br"),t._v(" © 2020 ")])])])])}],K={name:"Footer"},S=K,T=Object(g["a"])(S,A,j,!1,null,null,null),L=T.exports,P={name:"App",components:{Articles:O,Footer:L},created:function(){document.title="Cek Fakta Covid-19"}},E=P,F=(a("353d"),a("b0a0"),Object(g["a"])(E,i,s,!1,null,null,null)),M=F.exports,D=a("289d"),$=(a("5abe"),a("f684")),N=a("0a63"),J=a.n(N);r["a"].use(D["a"]),r["a"].use($["a"]),r["a"].use(J.a),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(M)}}).$mount("#app")},b0a0:function(t,e,a){"use strict";var r=a("452c"),i=a.n(r);i.a}});
//# sourceMappingURL=app.8caf3aa1.js.map