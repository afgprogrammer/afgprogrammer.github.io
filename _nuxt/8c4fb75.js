(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{320:function(t,e,r){"use strict";r.r(e);r(41),r(57);var n={props:{links:{type:Array,default:[]}},methods:{isRouteActive:function(t){return this.$route.path.includes(t)}}},o=r(16),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return t.links&&t.links.length>0?e("ul",{staticClass:"m-0 flex flex-wrap"},t._l(t.links,(function(link,r){return e("li",{key:r,staticClass:"relative mr-2"},[e("a",{staticClass:"text-gray-500 text-sm last:text-gray-900 last:font-medium",attrs:{href:link.to,title:link.title}},[e("span",[t._v(t._s(link.title))])]),t._v(" "),r<t.links.length-1?e("span",{staticClass:"text-gray-500 ml-2"},[t._v("/")]):t._e()])})),0):t._e()}),[],!1,null,null,null);e.default=component.exports},321:function(t,e,r){var content=r(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(75).default)("392fabf2",content,!0,{sourceMap:!1})},323:function(t,e,r){"use strict";r(321)},324:function(t,e,r){var n=r(74)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.nuxt-content-highlight pre{\n  border-radius:10px;\n  padding:25px;\n  background-color:#212733\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},342:function(t,e,r){"use strict";r.r(e);r(22),r(42);var n=r(8),o=(r(40),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("blog",n.slug).fetch();case 3:return o=e.sent,e.abrupt("return",{blog:o});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"".concat(this.blog.title," - afgprogrammer"),meta:[{name:"author",content:"Mohammad Rahmani - afgprogrammer"},{name:"description",content:this.blog.summery},{key:"og:title",property:"og:title",content:"".concat(this.blog.title)},{key:"og:image",property:"og:image",content:"https://afgprogrammer.com".concat(this.blog.image)},{key:"og:description",property:"og:description",content:this.blog.summery},{key:"og:url",property:"og:url",content:"https://afgprogrammer.com".concat(this.blog.path)},{key:"twitter:title",name:"twitter:title",content:"".concat(this.blog.title)},{key:"twitter:description",name:"twitter:description",content:this.blog.summery},{key:"twitter:creator",name:"twitter:creator",content:"@afgprogrammer"},{key:"twitter:card",name:"twitter:card",content:"summary"},{key:"twitter:image",name:"twitter:image",content:"https://afgprogrammer.com".concat(this.blog.image)}]}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})},breadcrumbLinks:function(){return[{title:"Home",to:"/"},{title:"Blog",to:"/blog"},{title:this.blog.title,to:this.blog.slug}]}}}),l=(r(323),r(16)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("article",{staticClass:"mx-auto max-w-6xl px-6 xl:px-0"},[e("div",{staticClass:"flex py-6"},[e("breadcrumb",{attrs:{links:t.breadcrumbLinks()}})],1),t._v(" "),e("div",{staticClass:"h-4"}),t._v(" "),e("div",{staticClass:"grid grid-cols-1 lg:grid-cols-2 gap-8"},[e("div",[e("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"rounded-t-lg",attrs:{"data-src":t.blog.image,alt:t.blog.title}})]),t._v(" "),e("div",{staticClass:"grid"},[e("div",[e("h1",{staticClass:"text-4xl font-bold tracking-wide"},[t._v(t._s(t.blog.title))]),t._v(" "),e("div",{staticClass:"mt-8 text-lg text-gray-700 font-light",domProps:{innerHTML:t._s(t.blog.description)}})]),t._v(" "),e("div",{staticClass:"self-end grid grid-cols-2 mt-9 lg:mt-0"},[e("div",[e("span",{staticClass:"text-xs text-gray-600"},[t._v(t._s(t.formatDate(t.blog.date)))])])])])]),t._v(" "),e("div",{staticClass:"h-4"}),t._v(" "),e("nuxt-content",{staticClass:"py-9",attrs:{document:t.blog}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Breadcrumb:r(320).default})}}]);