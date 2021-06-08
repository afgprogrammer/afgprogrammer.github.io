<template>
  <article class="mx-auto max-w-6xl">
    <div class="flex py-6">
      <breadcrumb :links="breadcrumbLinks()"></breadcrumb>
    </div>
    <div class="h-4"></div>
    <div class="grid grid-cols-2 gap-8">
      <div>
        <img :src="article.image" :alt="article.title">
      </div>
      <div class="grid">
        <div>
          <h1 class="text-4xl font-bold tracking-wide">{{ article.title }}</h1>
          <p class="mt-8 text-lg text-gray-700 font-light">
            {{ article.description }}
          </p>
        </div>
        <div class="self-end">
          <span class="text-xs text-gray-600">{{ formatDate(article.date) }}</span>
          <div>
            <span v-for="(tag, index) in article.tags" :key="index" class="mr-5 text-blue-900">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
    <nuxt-content :document="article" />
  </article>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    console.log(article, params)
    return { article }
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
        },
        {
          title: this.article.title,
          to: this.article.slug
        },
      ]
    }
  }
}
</script>
