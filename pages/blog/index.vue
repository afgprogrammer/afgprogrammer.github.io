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
    <div class="h-4"></div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 lg:px-0">
      <div v-for="(post, index) of posts" :key="index" class="border rounded-xl">
        <router-link :to="{ name: 'blog-slug', params: { slug: post.slug } }">
          <img :data-src="post.image" :alt="post.title" class="rounded-t-xl" v-lazy-load/>
          <div class="mt-5 px-3">
            <small class="text-gray-400">{{ formatDate(post.date) }}</small>
            <h2 class="text-xl text-gray-800 mt-3">{{ post.title }}</h2>
            <div class="text-right my-5">
              <span class="text-blue-500 text-sm">Read Article</span>
            </div>
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
    let posts = await $content('blog')
      .only(['title', 'summery', 'image', 'slug', 'date',])
      .sortBy('date', 'desc')
      .fetch()

    return {
      posts
    }
  },

  head: {
    title: 'Afgprogrammer blog',
    meta: [
      {
        name: 'author',
        content: 'Mohammad Rahmani - afgprogrammer'
      },
      {
        name: 'description',
        content: 'vue-uicon is a Vue component that allows you to use SVG icons easily in your Vue application.',
      },
      {
        key: 'og:title',
        property: 'og:title',
        content: 'Afgprogrammer blog',
      },
      {
        key: 'og:description',
        property: 'og:description',
        content: 'vue-uicon is a Vue component that allows you to use SVG icons easily in your Vue application.',
      },
      {
        key: 'og:url',
        property: 'og:url',
        content: 'https://afgprogrammer.com/blog',
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Afgprogrammer blog',
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
        content: 'vue-uicon is a Vue component that allows you to use SVG icons easily in your Vue application.',
      }
    ]
  },

  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },

    breadcrumbLinks() {
      return [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'Blog',
          to: '/blog'
        }
      ]
    }
  }
}
</script>
