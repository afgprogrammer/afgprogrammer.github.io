<template>
  <section class="mx-auto max-w-7xl">
    <div class="flex py-6 px-6 xl:px-0">
      <breadcrumb :links="breadcrumbLinks()"></breadcrumb>
    </div>
    <div class="h-4"></div>
    <adsbygoogle 
      ad-slot="5508803088" 
      ad-format="auto"
      ad-label="flutter-ads"
    />
    <div class="h-8"></div>
    <div class="py-5 px-3 flex flex-col items-center">
      <img src="/images/afgprogrammer-logo.png" alt="afgprogrammer-logo" class="rounded-full w-16">
      <h1 class="text-2xl mt-4 text-gray-800">The Flutter Lover</h1>
      <a href="https://instagram.com/theflutterlover" class="text-md text-blue-500 mt-1">@theflutterlover</a>
      <p class="max-w-2xl px-5 md:px-0 text-center mt-10 text-xl text-gray-700 font-light">
        Hey there 👋🏼
        I'm Mohammad Rahmani, a Software Engineer based in Kabul, Afghanistan. I love Flutter, and Web Development. I'm currently working on Flutter 100 Days Challenge 👨🏽‍💻. 
        <br>
        <br>
        👇🏼👇🏼👇🏼👇🏼
      </p>
    </div>
    <div class="h-4"></div>
    <div class="grid grid-cols-1 md:grid-cols-2 border-t pt-8" v-if="days">
      <div v-for="(day, index) in days" :key="index">
        <div class="p-5 md:p-3 border-b border-gray-200 mb-5">
          <iframe class="rounded-xl" width="100%" height="500" :src="day.video.replace('youtu.be', 'youtube.com/embed')" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h3 class="mt-4">{{ day.name }}</h3>
          <p class="text-gray-400 tracking-wider text-xs mt-2">{{ day.summery }}</p>
          <div class="mt-5 flex items-center">
            <a :href="day.video" title="" class="text-red-700">Video Link</a>
            <div class="w-2 h-2 mx-3 bg-gray-200 rounded-full"></div>
            <a :href="day.repository" title="">Source Code</a>
          </div>
        </div>
      </div>
    </div>
    <div class="h-40"></div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    let days = await $content('flutter').fetch()
    days = days[0].data.reverse()

    return { days }
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
        content: 'Hey there! I\'m Mohammad Rahmani, a Flutter developer based in Kabul. I love Flutter, and I\'m always looking for new challenges. In this page you can find my 100 days of Flutter journey.',
      },
      {
        key: 'og:title',
        property: 'og:title',
        content: 'Everyday Flutter UI Design Example - afgprogrammer',
      },
      {
        key: 'og:description',
        property: 'og:description',
        content: 'Hey there! I\'m Mohammad Rahmani, a Flutter developer based in Kabul. I love Flutter, and I\'m always looking for new challenges. In this page you can find my 100 days of Flutter journey.',
      },
      {
        key: 'og:url',
        property: 'og:url',
        content: 'https://afgprogrammer.com/flutter',
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
        content: 'Hey there! I\'m Mohammad Rahmani, a Flutter developer based in Kabul. I love Flutter, and I\'m always looking for new challenges. In this page you can find my 100 days of Flutter journey.',
      }
    ]
  },

  methods: {
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
