<template>
  <section class="mx-auto max-w-7xl">
    <div class="flex py-6 px-6 xl:px-0">
      <breadcrumb :links="breadcrumbLinks()"></breadcrumb>
    </div>
    <div class="h-4"></div>
    <ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-2490274469917078"
      data-ad-slot="5508803088"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
    <div class="h-8"></div>
    <div class="py-3 text-center bg-gray-100 rounded-lg">
      <a class="text-blue-600" href="https://github.com/afgprogrammer"><span class="text-gray-900">Find repositories on my Github page</span>@afgprogrammer</a>
    </div>
    <div class="h-4"></div>
    <div class="grid grid-cols-1">
      <div v-for="(day, index) in days" :key="index">
        <div v-if="day.hasOwnProperty('type')" class="ad my-10">
          <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-2490274469917078"
            data-ad-slot="5508803088"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        </div>
        <div v-else class="p-3 border-b border-gray-200 mb-5">
          <h3 class="">{{ day.name }}</h3>
          <p class="text-gray-400 tracking-wider text-xs mt-2">{{ day.summery }}</p>
          <div class="mt-5 flex items-center">
            <a :href="day.video" title="" class="text-red-700">Video Link</a>
            <div class="w-2 h-2 mx-3 bg-gray-200 rounded-full"></div>
            <a :href="day.repository" title="">Source Code</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { data } from '../../lib/100days.json';

export default {
  data() {
    return {
      days: [],
    }
  },


  mounted() {
    this.days = data.reverse();
  },

  head: {
    title: 'Everyday Flutter UI Design Example - afgprogrammer',
    meta: [
      { 
        name: 'author', 
        content: 'Mohammad Rahmani - afgprogrammer' 
      },
      {
        name: 'description',
        content: 'Creating videos for educational purposes regarding topics like Flutter, Laravel, VueJS, Invision Studio, mainly focused on mobile application development.',
      },
      {
        key: 'og:title',
        property: 'og:title',
        content: 'Everyday Flutter UI Design Example - afgprogrammer',
      },
      {
        key: 'og:description',
        property: 'og:description',
        content: 'Creating videos for educational purposes regarding topics like Flutter, Laravel, VueJS, Invision Studio, mainly focused on mobile application development.',
      },
      {
        key: 'og:url',
        property: 'og:url',
        content: 'https://afgprogrammer.com/php',
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Everyday Flutter UI Design Example - afgprogrammer',
      },
      {
        key: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        key: 'twitter:creator',
        name: 'twitter:creator',
        content: '@afgprogrammer',
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Creating videos for educational purposes regarding topics like Flutter, Laravel, VueJS, Invision Studio, mainly focused on mobile application development.',
      }
    ]
  },

  methods: {
    showAd() {
      console.log("fuck")
    },
    breadcrumbLinks() {
      return [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'Flutter',
          to: '/flutter'
        }
      ]
    }
  }
}
</script>
