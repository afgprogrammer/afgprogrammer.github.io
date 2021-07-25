---
title: How to use SVG icons in Vue with vue-uicon
date: 2021-07-25 14:22:52
slug: how-to-use-svg-icons-in-vue
image: '/images/blog/vue-uicon.png'
summery: "vue-uicon is a Vue component that allows you to use SVG icons easily in your Vue application."
description: "vue-uicon is a Vue component that allows you to use SVG icons easily in your Vue application."
---

<h2 class="text-2xl font-semibold border-b pb-3 text-gray-800">@openafg/vue-uicon</h2>
<div class="h-8"></div>
<p class="text-gray-700">Use your SVG icons easily with vue-uicon</p>
<div class="h-8"></div>


<h2 class="text-2xl font-semibold border-b pb-3">Installation</h2>
<div class="h-4"></div>

<p class="text-gray-700">Terminal:</p>

```bash
// With npm

npm install --save @openafg/vue-uicon
```

<div class="h-8"></div>
<h2 class="text-2xl font-semibold border-b pb-3 text-gray-800">Usage</h2>
<div class="h-4"></div>

<p class="text-gray-700">Add the following code in to your <em>app.js</em> file:</p>

```js
import Uicon from '@openafg/vue-uicon'
....

Vue.use(Uicon, { 
  /* options */
  icons: {
    iconName: 'SVG path'
  }
})
```
```html
<template>
   <ui-icon name="iconName"></ui-icon>
</template>
```
<div class="h-4"></div>

<p class="text-gray-700">Available props</p>

```html
<template>
   <ui-icon name="iconName" color="#00f" size="40" viewBox="0 0 32 32"></ui-icon>
</template>
```
<div class="h-8"></div>
<h2 class="text-2xl font-semibold border-b pb-3 text-gray-800">Options</h2>
<div class="h-4"></div>
<p class="text-gray-700">Currently supported options</p>

```js
Vue.use(Uicon, { 
  defaultColor: '#aaa',
  defaultSize: 20, // default is 20
  viewBox: '0 0 60 60', // default is 0 0 32 32
  strokeLinecap: 'round', // default is round
  strokeLinejoin: 'round', // default is round,
  strokeWidth: 1 // default is 0.5
  icons: {
    ....
  }
})
```
<div class="h-10"></div>
<h2 class="text-2xl font-semibold border-b pb-3 text-gray-800">Links</h2>
<div class="h-4"></div>

<a href="https://github.com/openafg/vue-uicon" target="blank" class="block text-blue-900 mb-3" title="Github repository">Github</a>
<a href="https://twitter.com/afgprogrammer" target="blank" class="block text-blue-900 mb-3" title="Twitter account">Twitter</a>
<a href="https://instagram.com/afgprogrammer" target="blank" class="block text-blue-900" title="Instagram account">Instagram</a>
<div class="h-40"></div>
