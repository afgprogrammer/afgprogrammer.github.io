<template>
  <section class="mx-auto max-w-6xl">
    <div class="flex py-6 px-6 xl:px-0">
      <breadcrumb :links="breadcrumbLinks()"></breadcrumb>
    </div>
    <div class="h-4"></div>
    <div class="flex justify-center">
      <a href="https://a-ads.com?partner=2152742" target="_blank">
        <img data-src="/images/crypto_advertising_network.gif" alt="Crypto Advertising Network" v-lazy-load/>
      </a>
    </div>
    <!-- <adsbygoogle
      ad-slot="9238225491"
      ad-format="auto"
      ad-label="php-ads"
    /> -->
    <div class="h-4"></div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-0">
      <div v-for="(article, index) of articles" :key="index">
        <router-link :to="{ name: 'php-slug', params: { slug: article.slug } }">
          <img :data-src="article.image" :alt="article.title" class="rounded-t-lg" v-lazy-load/>
          <div class="mt-5">
            <h2 class="text-xl font-medium text-gray-800">{{ article.title }}</h2>
            <p class="mt-3 text-gray-600 text-sm">{{ article.summery.substring(0, 150) }} ...</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="h-28"></div>
  </section>
</template>
<script>
export default {
  async asyncData({ $content }) {
    let articles = await $content('php')
      .only(['title', 'summery', 'image', 'slug', 'date', 'tags'])
      .sortBy('date', 'desc')
      .fetch()

    return {
      articles
    }
  },

  head: {
    title: 'Everyday PHP example - afgprogrammer',
    meta: [
      {
        name: 'author',
        content: 'Mohammad Rahmani - afgprogrammer'
      },
      {
        name: 'description',
        content: 'PHP is a widely used server-side programming language that’s become increasingly fast and powerful over the years. afgprogrammer.com is a free interactive PHP tutorial for people who want to learn PHP, fast.',
      },
      {
        key: 'og:title',
        property: 'og:title',
        content: 'Everyday PHP example - afgprogrammer',
      },
      {
        key: 'og:description',
        property: 'og:description',
        content: 'PHP is a widely used server-side programming language that’s become increasingly fast and powerful over the years. afgprogrammer.com is a free interactive PHP tutorial for people who want to learn PHP, fast.',
      },
      {
        key: 'og:url',
        property: 'og:url',
        content: 'https://afgprogrammer.com/php',
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Everyday PHP example - afgprogrammer',
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
        content: 'PHP is a widely used server-side programming language that’s become increasingly fast and powerful over the years. afgprogrammer.com is a free interactive PHP tutorial for people who want to learn PHP, fast.',
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
          title: 'PHP',
          to: '/php'
        }
      ]
    }
  }
}
</script>
