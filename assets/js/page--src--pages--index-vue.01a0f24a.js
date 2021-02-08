(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"BA+P":function(t,e,a){"use strict";var s={props:["post"]},i=a("KHd+"),o=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-xl-6"},[a("div",{staticClass:"posts__item rounded-10 mb-5"},[a("g-image",{staticClass:"w-100",attrs:{src:t.post.image}}),a("div",{staticClass:"mt-3"},[a("span",{staticClass:"text-blue-600"},[t._v(t._s(t.post.tags[0]))]),a("g-link",{staticClass:"text-gray-800",attrs:{to:t.post.path}},[a("h1",{staticClass:"text-lg mt-2 mb-3"},[t._v(t._s(t.post.title))])]),a("p",{staticClass:"m-0 text-sm font-weight-light text-gray-700"},[t._v(t._s(t.post.description))]),a("div",{staticClass:"height-50p"}),a("span",{staticClass:"text-xsm text-gray-600"},[t._v(t._s(t.post.date))])],1)],1)])}),[],!1,null,null,null);e.a=o.exports},EKFf:function(t,e,a){},iyQ6:function(t,e,a){"use strict";a.r(e);var s=a("vDqi"),i=a.n(s),o={data:function(){return{key:"AIzaSyBwXQk8IuFvMp5h47amTeh8shzz7fdNRFI",part:"snippet",maxResults:"9",channelId:"UCuXm84E6yWF0dIKmwvwc9sQ",videos:[]}},mounted:function(){this.getVideos()},methods:{getVideos:function(){var t=this;i.a.get("https://www.googleapis.com/youtube/v3/search",{params:{key:this.key,part:this.part,maxResults:this.maxResults,channelId:this.channelId,order:"date"}}).then((function(e){t.videos=e.data.items})).catch((function(t){console.log(t)}))}}},r=(a("ki1V"),a("KHd+")),n={name:"home",components:{YoutubeComponent:Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"youtube"},[t._m(0),t.videos&&t.videos.length>0?a("div",{staticClass:"row"},[t._l(t.videos,(function(t){return a("div",{key:t.id.videoId,staticClass:"col-lg-4 col-md-6"},[a("div",{staticClass:"video"},[a("iframe",{attrs:{width:"100%",height:"200",src:"https://www.youtube.com/embed/"+t.id.videoId,frameborder:"0",allowfullscreen:""}})])])})),t._m(1),a("div",{staticClass:"height-200p"})],2):t._e(),!t.videos||t.videos.length<=0?a("div",{staticClass:"loading"},[a("p",{staticClass:"text-center text-secondary font-weight-bold"},[t._v("\n      Loading Videos ...\n    ")])]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"d-flex align-items-center mb-4"},[e("h2",{staticClass:"section-title mr-2"},[this._v("My last videos")]),e("div",{staticClass:"g-ytsubscribe",attrs:{"data-channelid":"UCuXm84E6yWF0dIKmwvwc9sQ","data-layout":"default","data-count":"hidden"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12"},[e("div",{staticClass:"watch-more mt-4"},[e("a",{attrs:{href:"https://youtube.com/afgprogrammer",title:""}},[this._v("Watch more")])])])}],!1,null,null,null).exports,PostCard:a("BA+P").a},metaInfo:{title:"Mohammad Rahmani",meta:[{name:"author",content:"Mohammad Rahmani - afgprogrammer"},{name:"description",content:"Creating videos for educational purposes regarding topics like Flutter, Laravel, VueJS, Invision Studio, mainly focused on mobile and web application development."},{key:"og:title",property:"og:title",content:"Mohammad Rahmani - afgprogrammer"},{key:"og:image",property:"og:image",content:"https://afgprogrammer.com/my/media.png"},{key:"twitter:title",property:"twitter:title",content:"Mohammad Rahmani - afgprogrammer"},{key:"og:description",property:"og:description",content:"Creating videos for educational purposes regarding topics like Flutter, Laravel, VueJS, Invision Studio, mainly focused on mobile and web application development."},{key:"twitter:description",property:"twitter:description",content:"Creating videos for educational purposes regarding topics like Flutter, Laravel, VueJS, Invision Studio, mainly focused on mobile and web application development."},{key:"twitter:creator",property:"twitter:creator",content:"@afgprogrammer"},{key:"twitter:card",property:"twitter:card",content:"summary"},{key:"twitter:image",property:"twitter:image",content:"https://afgprogrammer.com/my/media.png"},{key:"og:url",property:"og:url",content:"https://afgprogrammer.com"}]}},l=null,c=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("layout",[a("section",{staticClass:"container"},[a("div",{staticClass:"main-content"},[a("div",{staticClass:"height-150p"}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-6"},[a("h1",{staticClass:"m-0 text-xlg"},[t._v(" Hello!\n            "),a("br"),t._v("I'm Mohammad Rahmani.\n          ")])]),a("div",{staticClass:"col-xl-12"},[a("h3",{staticClass:"font-weight-light text-custom-height-line text-md"},[t._v("\n            A Full-stack Developer who writes code. I work across Software Design, Software Development and prototyping to create intuitive development for products.\n            I am currently working as \n            Sr. Software Developer at "),a("a",{attrs:{href:"https://www.netlinks.af",title:"@netlinks",target:"_blank"}},[t._v("@netlinks")]),t._v(" company based in Kabul, Afghanistan. "),a("br"),t._v("\n            I love open-source and try to develop useful and tangible software.\n            I love to learn and discover all things Flutter, PHP, JavaScript, HTML, CSS, Laravel and VueJs.\n          ")])])]),a("div",{staticClass:"height-200p"}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12"},[a("div",{staticClass:"d-flex flex-wrap-reverse justify-content-between"},[a("div",[a("span",{staticClass:"text-xsm"},[t._v("Like my work?")]),a("a",{attrs:{href:"https://github.com/afgprogrammer",title:"Support me on GitHub - afgprogrammer"}},[a("h4",{staticClass:"text-sm text-gray-900 font-weight-black m-0 mt-2"},[t._v("Support me on GitHub")])])]),a("div",{staticClass:"mb-3 mb-md-0"},[a("span",{staticClass:"font-weight-light text-sm"},[t._v("\n                Follow me on  \n                "),a("a",{staticClass:"trans8s twitter text-gray-800",attrs:{href:"https://twitter.com/afgprogrammer",title:"afgprogrammer - Twitter Page",target:"_blank"}},[a("span",[t._v("Twitter")])]),t._v(",  \n                "),a("a",{staticClass:"trans8s instagram text-gray-800",attrs:{href:"https://instagram.com/afgprogrammer",title:"afgprogrammer - Instagram Page",target:"_blank"}},[a("span",[t._v("Instagram")])]),t._v(",  \n                "),a("a",{staticClass:"trans8s youtube text-gray-800",attrs:{href:"https://www.youtube.com/afgprogrammer",title:"afgprogrammer - Youtube Channel",target:"_blank"}},[a("span",[t._v("Youtube")])]),t._v(".")])])])])]),a("div",{staticClass:"height-50p"})]),a("YoutubeComponent")],1)])}),[],!1,null,null,null);"function"==typeof l&&l(c);e.default=c.exports},ki1V:function(t,e,a){"use strict";a("EKFf")}}]);