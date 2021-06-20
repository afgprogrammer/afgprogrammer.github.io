(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{155:function(n,t,e){var content=e(218);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(69).default)("d706d280",content,!0,{sourceMap:!1})},168:function(n,t,e){"use strict";e.r(t);e(32),e(47);var r={methods:{isRouteActive:function(n){return this.$route.path.includes(n)}}},o=e(22),component=Object(o.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("header",{staticClass:"py-3 px-6 xl:px-0",attrs:{id:"main-header"}},[e("div",{staticClass:"flex justify-between items-center"},[e("Logo"),n._v(" "),e("nav",{staticClass:"text-gray-600 text-sm"},[e("router-link",{staticClass:"m-4",class:{"font-medium text-gray-900":!n.isRouteActive("php")},attrs:{to:"/",title:"afgprogrammer-home"}},[n._v("Home")]),n._v(" "),e("a",{class:{"font-medium text-gray-900":n.isRouteActive("php")},attrs:{href:"/php",title:"afgprogrammer-blog"}},[n._v("PHP")])],1)],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Logo:e(231).default,Header:e(168).default})},176:function(n,t,e){"use strict";var r=e(22),component=Object(r.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{attrs:{id:"app"}},[e("Header",{staticClass:"mx-auto max-w-7xl"}),n._v(" "),e("Nuxt")],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{Header:e(168).default})},179:function(n,t,e){e(180),n.exports=e(181)},218:function(n,t,e){var r=e(68)((function(i){return i[1]}));r.push([n.i,"/*! tailwindcss v2.1.4 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n.bg-red-600{\n  --tw-bg-opacity:1;\n  background-color:rgba(220, 38, 38, var(--tw-bg-opacity));\n}\n\n.bg-yellow-300{\n  --tw-bg-opacity:1;\n  background-color:rgba(252, 211, 77, var(--tw-bg-opacity));\n}\n\n.bg-blue-600{\n  --tw-bg-opacity:1;\n  background-color:rgba(37, 99, 235, var(--tw-bg-opacity));\n}\n\n.rounded-full{\n  border-radius:9999px;\n}\n\n.rounded-t-lg{\n  border-top-left-radius:0.5rem;\n  border-top-right-radius:0.5rem;\n}\n\n.flex{\n  display:flex;\n}\n\n.table{\n  display:table;\n}\n\n.grid{\n  display:grid;\n}\n\n.flex-col{\n  flex-direction:column;\n}\n\n.flex-wrap{\n  flex-wrap:wrap;\n}\n\n.items-center{\n  align-items:center;\n}\n\n.self-end{\n  align-self:flex-end;\n}\n\n.justify-between{\n  justify-content:space-between;\n}\n\n.justify-self-end{\n  justify-self:end;\n}\n\n.font-light{\n  font-weight:300;\n}\n\n.font-medium{\n  font-weight:500;\n}\n\n.font-semibold{\n  font-weight:600;\n}\n\n.font-bold{\n  font-weight:700;\n}\n\n.last\\:font-medium:last-child{\n  font-weight:500;\n}\n\n.h-4{\n  height:1rem;\n}\n\n.h-6{\n  height:1.5rem;\n}\n\n.h-10{\n  height:2.5rem;\n}\n\n.h-20{\n  height:5rem;\n}\n\n.h-28{\n  height:7rem;\n}\n\n.h-32{\n  height:8rem;\n}\n\n.h-40{\n  height:10rem;\n}\n\n.h-44{\n  height:11rem;\n}\n\n.h-full{\n  height:100%;\n}\n\n.text-xs{\n  font-size:0.75rem;\n  line-height:1rem;\n}\n\n.text-sm{\n  font-size:0.875rem;\n  line-height:1.25rem;\n}\n\n.text-base{\n  font-size:1rem;\n  line-height:1.5rem;\n}\n\n.text-lg{\n  font-size:1.125rem;\n  line-height:1.75rem;\n}\n\n.text-xl{\n  font-size:1.25rem;\n  line-height:1.75rem;\n}\n\n.text-4xl{\n  font-size:2.25rem;\n  line-height:2.5rem;\n}\n\n.text-5xl{\n  font-size:3rem;\n  line-height:1;\n}\n\n.leading-10{\n  line-height:2.5rem;\n}\n\n.m-0{\n  margin:0px;\n}\n\n.m-4{\n  margin:1rem;\n}\n\n.mx-auto{\n  margin-left:auto;\n  margin-right:auto;\n}\n\n.mt-2{\n  margin-top:0.5rem;\n}\n\n.mr-2{\n  margin-right:0.5rem;\n}\n\n.ml-2{\n  margin-left:0.5rem;\n}\n\n.mt-3{\n  margin-top:0.75rem;\n}\n\n.mt-5{\n  margin-top:1.25rem;\n}\n\n.mr-5{\n  margin-right:1.25rem;\n}\n\n.mt-8{\n  margin-top:2rem;\n}\n\n.mt-9{\n  margin-top:2.25rem;\n}\n\n.max-w-6xl{\n  max-width:72rem;\n}\n\n.max-w-7xl{\n  max-width:80rem;\n}\n\n.py-3{\n  padding-top:0.75rem;\n  padding-bottom:0.75rem;\n}\n\n.py-6{\n  padding-top:1.5rem;\n  padding-bottom:1.5rem;\n}\n\n.px-6{\n  padding-left:1.5rem;\n  padding-right:1.5rem;\n}\n\n.py-9{\n  padding-top:2.25rem;\n  padding-bottom:2.25rem;\n}\n\n.static{\n  position:static;\n}\n\n.absolute{\n  position:absolute;\n}\n\n.relative{\n  position:relative;\n}\n\n.right-20{\n  right:5rem;\n}\n\n.top-60{\n  top:15rem;\n}\n\n.top-64{\n  top:16rem;\n}\n\n.right-72{\n  right:18rem;\n}\n\n*{\n  --tw-shadow:0 0 #0000;\n}\n\n*{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n.text-gray-500{\n  --tw-text-opacity:1;\n  color:rgba(107, 114, 128, var(--tw-text-opacity));\n}\n\n.text-gray-600{\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity));\n}\n\n.text-gray-700{\n  --tw-text-opacity:1;\n  color:rgba(55, 65, 81, var(--tw-text-opacity));\n}\n\n.text-gray-800{\n  --tw-text-opacity:1;\n  color:rgba(31, 41, 55, var(--tw-text-opacity));\n}\n\n.text-gray-900{\n  --tw-text-opacity:1;\n  color:rgba(17, 24, 39, var(--tw-text-opacity));\n}\n\n.text-blue-900{\n  --tw-text-opacity:1;\n  color:rgba(30, 58, 138, var(--tw-text-opacity));\n}\n\n.last\\:text-gray-900:last-child{\n  --tw-text-opacity:1;\n  color:rgba(17, 24, 39, var(--tw-text-opacity));\n}\n\n.underline{\n  text-decoration:underline;\n}\n\n.tracking-wide{\n  letter-spacing:0.025em;\n}\n\n.w-8{\n  width:2rem;\n}\n\n.w-44{\n  width:11rem;\n}\n\n.w-full{\n  width:100%;\n}\n\n.gap-8{\n  gap:2rem;\n}\n\n.grid-cols-1{\n  grid-template-columns:repeat(1, minmax(0, 1fr));\n}\n\n.grid-cols-2{\n  grid-template-columns:repeat(2, minmax(0, 1fr));\n}\n\n.transform{\n  --tw-translate-x:0;\n  --tw-translate-y:0;\n  --tw-rotate:0;\n  --tw-skew-x:0;\n  --tw-skew-y:0;\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n  transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.filter{\n  --tw-blur:var(--tw-empty,/*!*/ /*!*/);\n  --tw-brightness:var(--tw-empty,/*!*/ /*!*/);\n  --tw-contrast:var(--tw-empty,/*!*/ /*!*/);\n  --tw-grayscale:var(--tw-empty,/*!*/ /*!*/);\n  --tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);\n  --tw-invert:var(--tw-empty,/*!*/ /*!*/);\n  --tw-saturate:var(--tw-empty,/*!*/ /*!*/);\n  --tw-sepia:var(--tw-empty,/*!*/ /*!*/);\n  --tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);\n  filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.blur{\n  --tw-blur:blur(8px);\n}\n\n.blur-2xl{\n  --tw-blur:blur(40px);\n}\n\n.backdrop-filter{\n  --tw-backdrop-blur:var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-brightness:var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-contrast:var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-grayscale:var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-hue-rotate:var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-invert:var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-opacity:var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-saturate:var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-sepia:var(--tw-empty,/*!*/ /*!*/);\n  -webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n          backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n\nbody{\n  font-family:\"Sora\",sans-serif\n}\n\n@media (min-width: 640px){\n}\n\n@media (min-width: 768px){\n  .md\\:grid-cols-2{\n    grid-template-columns:repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (min-width: 1024px){\n  .lg\\:h-52{\n    height:13rem;\n  }\n\n  .lg\\:h-60{\n    height:15rem;\n  }\n\n  .lg\\:h-80{\n    height:20rem;\n  }\n\n  .lg\\:text-2xl{\n    font-size:1.5rem;\n    line-height:2rem;\n  }\n\n  .lg\\:text-8xl{\n    font-size:6rem;\n    line-height:1;\n  }\n\n  .lg\\:mt-0{\n    margin-top:0px;\n  }\n\n  .lg\\:px-0{\n    padding-left:0px;\n    padding-right:0px;\n  }\n\n  .lg\\:w-52{\n    width:13rem;\n  }\n\n  .lg\\:w-80{\n    width:20rem;\n  }\n\n  .lg\\:grid-cols-2{\n    grid-template-columns:repeat(2, minmax(0, 1fr));\n  }\n\n  .lg\\:grid-cols-3{\n    grid-template-columns:repeat(3, minmax(0, 1fr));\n  }\n}\n\n@media (min-width: 1280px){\n  .xl\\:px-0{\n    padding-left:0px;\n    padding-right:0px;\n  }\n\n  .xl\\:right-1\\/3{\n    right:33.333333%;\n  }\n\n  .xl\\:right-1\\/4{\n    right:25%;\n  }\n}\n\n@media (min-width: 1536px){\n}",""]),r.locals={},n.exports=r},231:function(n,t,e){"use strict";e.r(t);var r=e(22),component=Object(r.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("a",{attrs:{href:"/",title:"afgprogrammer - mohammad rahmani"}},[t("div",{staticClass:"w-8"},[t("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"rounded-full",attrs:{"data-src":"/images/afgprogrammer-logo.png",alt:"afgprogrammer-logo"}})])])}),[],!1,null,null,null);t.default=component.exports}},[[179,7,1,8]]]);