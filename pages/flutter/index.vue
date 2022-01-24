<template>
  <section class="mx-auto max-w-6xl px-6 xl:px-0">
    <div class="h-4"></div>
    <adsbygoogle 
      ad-slot="5508803088" 
      ad-format="auto"
      ad-label="flutter-ads"
    />
    <div class="h-4"></div>
    <div class="grid grid-cols-1 md:grid-cols-2 pt-8 gap-10" v-if="days">
      <div v-for="(day, index) in days" :key="index" class="bg-white rounded-lg border-2 border-gray-100">
        <div class="">
          <iframe class="rounded-t-xl" width="100%" height="400" :src="day.video.replace('youtu.be', 'youtube.com/embed')" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="p-4 pr-2">
            <h3 class="mt-4 font-medium text-gray-700">{{ day.name }}</h3>
            <p class="text-gray-400 tracking-wider text-xs mt-2">{{ day.summery }}</p>
            <div class="mt-5 text-right">
              <a :href="day.repository" title="" class="hover:bg-gray-100 px-4 py-2 rounded-full"> 🔗 Source code</a>
            </div>
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
    title: 'Flutter 100 Days of Code UI Design Example - afgprogrammer',
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
