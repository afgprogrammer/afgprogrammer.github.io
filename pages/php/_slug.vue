<template>
  <article class="mx-auto max-w-6xl px-6 xl:px-0">
    <div class="flex py-6">
      <breadcrumb :links="breadcrumbLinks()"></breadcrumb>
    </div>
    <div class="h-4"></div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <img :src="article.image" :alt="article.title" class="rounded-t-lg">
      </div>
      <div class="grid">
        <div>
          <h1 class="text-4xl font-bold tracking-wide">{{ article.title }}</h1>
          <div class="mt-8 text-lg text-gray-700 font-light" v-html="article.description"></div>
        </div>
        <div class="self-end grid grid-cols-2 mt-9 lg:mt-0">
          <div>
            <span class="text-xs text-gray-600">{{ formatDate(article.date) }}</span>
            <div>
              <span v-for="(tag, index) in article.tags" :key="index" class="mr-5 text-blue-900">{{ tag }}</span>
            </div>
          </div>
          <div class="self-end justify-self-end">
            <a class="text-sm text-blue-900" :href="article.instagram" target="_blank" title="language.php - Instagram">Instagram</a>
          </div>
        </div>
      </div>
    </div>
    <div class="h-4"></div>
    <adsbygoogle 
      ad-slot="4018468658" 
      ad-format="auto"
      ad-label="php-ads"
    />
    <div class="h-4"></div>
    <!-- <nuxt-content :document="article" class="py-9"/> -->
  </article>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('php', params.slug).fetch()

    return { article }
  },

  head () {
    return {
      title: `${this.article.title} - afgprogrammer`,
      meta: [
        { 
          name: 'author', 
          content: 'Mohammad Rahmani - afgprogrammer' 
        },
        {
          name: 'description',
          content: this.article.summery
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: `${this.article.title}`,
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: `https://afgprogrammer.com${this.article.image}`,
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: this.article.summery,
        },
        {
          key: 'og:url',
          property: 'og:url',
          content: `https://afgprogrammer.com${this.article.path}`,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: `${this.article.title}`,
        },
        
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: this.article.summery,
        },
        {
          key: 'twitter:creator',
          name: 'twitter:creator',
          content: '@afgprogrammer',
        },
        {
          key: 'twitter:card',
          name: 'twitter:card',
          content: 'summary',
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: `https://afgprogrammer.com${this.article.image}`,
        }
      ]
    }
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
          title: 'PHP',
          to: '/php'
        },
        {
          title: this.article.title,
          to: this.article.slug
        }
      ]
    }
  }
}
</script>
