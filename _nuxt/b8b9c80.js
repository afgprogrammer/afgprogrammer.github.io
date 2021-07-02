(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2],{236:function(t,e,r){"use strict";r.r(e);r(34),r(49);var n={props:{links:{type:Array,default:[]}},methods:{isRouteActive:function(t){return this.$route.path.includes(t)}}},o=r(13),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.links&&t.links.length>0?r("ul",{staticClass:"m-0 flex flex-wrap"},t._l(t.links,(function(link,e){return r("li",{key:e,staticClass:"relative mr-2"},[r("a",{staticClass:"text-gray-500 text-sm last:text-gray-900 last:font-medium",attrs:{href:link.to,title:link.title}},[r("span",[t._v(t._s(link.title))])]),t._v(" "),e<t.links.length-1?r("span",{staticClass:"text-gray-500 ml-2"},[t._v("/")]):t._e()])})),0):t._e()}),[],!1,null,null,null);e.default=component.exports},254:function(t,e,r){"use strict";r.r(e);var n=r(5),o=(r(38),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("presentations").only(["title","description","image","slug","date","tags"]).sortBy("date","desc").fetch();case 3:return n=e.sent,e.abrupt("return",{presentations:n});case 5:case"end":return e.stop()}}),e)})))()},head:{title:"Presentations presented by Mohammad Rahmani - afgprogrammer",meta:[{name:"author",content:"Mohammad Rahmani - afgprogrammer"},{name:"description",content:"I’m Mohammad Rahmani from Kabul, Afghanistan. These are the list of presentations that I have presented so far."},{key:"og:title",property:"og:title",content:"Presentations presented by Mohammad Rahmani - afgprogrammer"},{key:"og:description",property:"og:description",content:"I’m Mohammad Rahmani from Kabul, Afghanistan. These are the list of presentations that I have presented so far."},{key:"og:url",property:"og:url",content:"https://afgprogrammer.com/presentations"},{key:"twitter:title",name:"twitter:title",content:"Presentations presented by Mohammad Rahmani - afgprogrammer"},{key:"twitter:card",name:"twitter:card",content:"summary"},{key:"twitter:creator",name:"twitter:creator",content:"@afgprogrammer"},{key:"twitter:description",name:"twitter:description",content:"I’m Mohammad Rahmani from Kabul, Afghanistan. These are the list of presentations that I have presented so far."}]},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})},breadcrumbLinks:function(){return[{title:"Home",to:"/"},{title:"Presentations",to:"/presentations"}]}}}),l=r(13),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"mx-auto max-w-7xl px-6 xl:px-0"},[r("div",{staticClass:"flex py-6"},[r("breadcrumb",{attrs:{links:t.breadcrumbLinks()}})],1),t._v(" "),r("div",{staticClass:"h-4"}),t._v(" "),r("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-client":"ca-pub-2490274469917078","data-ad-slot":"9238225491","data-ad-format":"auto","data-full-width-responsive":"true"}}),t._v(" "),r("div",{staticClass:"h-4"}),t._v(" "),t._l(t.presentations,(function(e,n){return r("div",{key:n,staticClass:"grid grid-cols-1 lg:grid-cols-2 gap-8"},[r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"rounded-lg",attrs:{"data-src":e.image,alt:e.title}}),t._v(" "),r("div",{staticClass:"grid"},[r("div",[r("h1",{staticClass:"text-3xl md:text-4xl font-bold tracking-wide"},[t._v(t._s(e.title))]),t._v(" "),r("div",{staticClass:"my-8 text-md md:text-lg text-gray-700 font-light",domProps:{innerHTML:t._s(e.description)}})]),t._v(" "),r("div",{staticClass:"self-end grid grid-cols-2 mt-9 lg:mt-0"},[r("div",[r("span",{staticClass:"text-xs text-gray-600"},[t._v(t._s(t.formatDate(e.date)))]),t._v(" "),r("div",t._l(e.tags,(function(e,n){return r("span",{key:n,staticClass:"mr-5 text-blue-900"},[t._v(t._s(e))])})),0)]),t._v(" "),t._m(0,!0)])])])})),t._v(" "),r("div",{staticClass:"h-28"})],2)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"self-end justify-self-end"},[r("a",{staticClass:"text-sm text-blue-600",attrs:{href:"/presentations/how-to-write-clean-code-in-laravel"}},[t._v("Read more or Download")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Breadcrumb:r(236).default})}}]);