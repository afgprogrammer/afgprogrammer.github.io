(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{349:function(t,e,r){"use strict";r.r(e);r(26),r(59),r(31);var n=r(8),o=(r(60),r(147),r(32),r(10),r(41),r(58),r(40),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("flutter").fetch();case 3:return n=(n=e.sent)[0].data.reverse(),e.abrupt("return",{days:n});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{timeout:null,searchKey:"",days:[],originalDays:[]}},mounted:function(){this.originalDays=this.days},computed:{input:{get:function(){return this.searchKey},set:function(t){var e=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){e.search(t)}),500)}}},methods:{search:function(t){this.searchKey=t,t.length>0?this.days=this.originalDays.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):this.days=this.originalDays},breadcrumbLinks:function(){return[{title:"Home",to:"/"},{title:"Flutter",to:"/flutter"}]}},head:{title:"Flutter 100 Days of Code UI Design Example - afgprogrammer",meta:[{name:"author",content:"Mohammad Rahmani - afgprogrammer"},{name:"description",content:"Hey there! I'm Mohammad Rahmani, a Flutter developer based in Kabul. I love Flutter, and I'm always looking for new challenges. In this page you can find my 100 days of Flutter journey."},{key:"og:title",property:"og:title",content:"Everyday Flutter UI Design Example - afgprogrammer"},{key:"og:description",property:"og:description",content:"Hey there! I'm Mohammad Rahmani, a Flutter developer based in Kabul. I love Flutter, and I'm always looking for new challenges. In this page you can find my 100 days of Flutter journey."},{key:"og:url",property:"og:url",content:"https://afgprogrammer.com/flutter"},{key:"twitter:title",name:"twitter:title",content:"Everyday Flutter UI Design Example - afgprogrammer"},{key:"twitter:card",name:"twitter:card",content:"summary"},{key:"twitter:creator",name:"twitter:creator",content:"@afgprogrammer"},{key:"twitter:description",name:"twitter:description",content:"Hey there! I'm Mohammad Rahmani, a Flutter developer based in Kabul. I love Flutter, and I'm always looking for new challenges. In this page you can find my 100 days of Flutter journey."}]}}),l=r(16),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"mx-auto max-w-6xl px-6 xl:px-0"},[e("div",{staticClass:"h-4"}),t._v(" "),e("iframe",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticStyle:{border:"0px",padding:"0",width:"100%",height:"100%",overflow:"hidden","background-color":"transparent"},attrs:{"data-aa":"2152646","data-src":"//acceptable.a-ads.com/2152646"}}),t._v(" "),e("div",{staticClass:"h-4"}),t._v(" "),e("div",{staticClass:"flex"},[e("div",{staticClass:"w-full border border-gray-100 rounded-xl p-6"},[e("p",{staticClass:"mb-4 text-lg font-medium"},[t._v("Search in 100+ Flutter Examples ")]),t._v(" "),e("div",{staticClass:"h-4"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"border border-gray-200 focus:border-blue-600 focus:shadow-md outline-none text-gray-600 text-md py-3 px-4 rounded-lg w-full bg-gray-100",attrs:{type:"text",placeholder:"search eg. day 22, GetX, Login"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"h-4"}),t._v(" "),t.days&&t.days.length?e("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 pt-8 gap-10"},t._l(t.days,(function(r,n){return e("div",{key:n,staticClass:"bg-white rounded-xl border-2 border-gray-100"},[e("div",{},[e("iframe",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"rounded-t-xl",attrs:{width:"100%",height:"400","data-src":r.video.replace("youtu.be","youtube.com/embed"),title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),t._v(" "),e("div",{staticClass:"p-4 pr-2"},[e("h3",{staticClass:"mt-4 font-medium text-gray-700"},[t._v(t._s(r.name))]),t._v(" "),e("p",{staticClass:"text-gray-400 tracking-wider text-xs mt-2"},[t._v(t._s(r.summery))]),t._v(" "),e("div",{staticClass:"mt-5 text-right"},[e("a",{staticClass:"hover:bg-gray-100 px-4 py-2 rounded-full",attrs:{href:r.repository,title:""}},[t._v(" 🔗 Source code")])])])])])})),0):e("div",[t._m(0)]),t._v(" "),e("div",{staticClass:"h-40"})])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center mt-10"},[e("h1",{staticClass:"text-xl font-bold tracking-wide"},[t._v("No Flutter Examples Found")]),t._v(" "),e("p",{staticClass:"text-gray-600 text-lg mt-4"},[t._v("\n        Please try another search\n      ")])])}],!1,null,null,null);e.default=component.exports}}]);