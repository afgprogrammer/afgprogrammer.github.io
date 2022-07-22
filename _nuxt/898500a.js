(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2],{295:function(t,e,r){"use strict";r.r(e);r(41),r(56);var n={props:{links:{type:Array,default:[]}},methods:{isRouteActive:function(t){return this.$route.path.includes(t)}}},l=r(15),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.links&&t.links.length>0?r("ul",{staticClass:"m-0 flex flex-wrap"},t._l(t.links,(function(link,e){return r("li",{key:e,staticClass:"relative mr-2"},[r("a",{staticClass:"text-gray-500 text-sm last:text-gray-900 last:font-medium",attrs:{href:link.to,title:link.title}},[r("span",[t._v(t._s(link.title))])]),t._v(" "),e<t.links.length-1?r("span",{staticClass:"text-gray-500 ml-2"},[t._v("/")]):t._e()])})),0):t._e()}),[],!1,null,null,null);e.default=component.exports},315:function(t,e,r){"use strict";r.r(e);var n=r(7),l=(r(40),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("php").only(["title","summery","image","slug","date","tags"]).sortBy("date","desc").fetch();case 3:return n=e.sent,e.abrupt("return",{articles:n});case 5:case"end":return e.stop()}}),e)})))()},head:{title:"Everyday PHP example - afgprogrammer",meta:[{name:"author",content:"Mohammad Rahmani - afgprogrammer"},{name:"description",content:"PHP is a widely used server-side programming language that’s become increasingly fast and powerful over the years. afgprogrammer.com is a free interactive PHP tutorial for people who want to learn PHP, fast."},{key:"og:title",property:"og:title",content:"Everyday PHP example - afgprogrammer"},{key:"og:description",property:"og:description",content:"PHP is a widely used server-side programming language that’s become increasingly fast and powerful over the years. afgprogrammer.com is a free interactive PHP tutorial for people who want to learn PHP, fast."},{key:"og:url",property:"og:url",content:"https://afgprogrammer.com/php"},{key:"twitter:title",name:"twitter:title",content:"Everyday PHP example - afgprogrammer"},{key:"twitter:card",name:"twitter:card",content:"summary"},{key:"twitter:creator",name:"twitter:creator",content:"@afgprogrammer"},{key:"twitter:description",name:"twitter:description",content:"PHP is a widely used server-side programming language that’s become increasingly fast and powerful over the years. afgprogrammer.com is a free interactive PHP tutorial for people who want to learn PHP, fast."}]},methods:{breadcrumbLinks:function(){return[{title:"Home",to:"/"},{title:"PHP",to:"/php"}]}}}),o=r(15),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"mx-auto max-w-6xl"},[r("div",{staticClass:"flex py-6 px-6 xl:px-0"},[r("breadcrumb",{attrs:{links:t.breadcrumbLinks()}})],1),t._v(" "),r("div",{staticClass:"h-4"}),t._v(" "),r("adsbygoogle",{attrs:{"ad-slot":"9238225491","ad-format":"auto","ad-label":"php-ads"}}),t._v(" "),r("div",{staticClass:"h-4"}),t._v(" "),r("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-0"},t._l(t.articles,(function(article,e){return r("div",{key:e},[r("router-link",{attrs:{to:{name:"php-slug",params:{slug:article.slug}}}},[r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"rounded-t-lg",attrs:{"data-src":article.image,alt:article.title}}),t._v(" "),r("div",{staticClass:"mt-5"},[r("h2",{staticClass:"text-xl font-medium text-gray-800"},[t._v(t._s(article.title))]),t._v(" "),r("p",{staticClass:"mt-3 text-gray-600 text-sm"},[t._v(t._s(article.summery.substring(0,150))+" ...")])])])],1)})),0),t._v(" "),r("div",{staticClass:"h-28"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Breadcrumb:r(295).default})}}]);