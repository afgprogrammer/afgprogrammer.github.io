<template>
  <article class="mx-auto max-w-7xl px-6 xl:px-0">
    <div class="flex py-6">
      <breadcrumb :links="breadcrumbLinks()"></breadcrumb>
    </div>
    <div class="h-4"></div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <img :src="blog.image" :alt="blog.title" class="rounded-t-lg">
      </div>
      <div class="grid">
        <div>
          <h1 class="text-4xl font-bold tracking-wide">{{ blog.title }}</h1>
          <div class="mt-8 text-lg text-gray-700 font-light" v-html="blog.description"></div>
        </div>
        <div class="self-end grid grid-cols-2 mt-9 lg:mt-0">
          <div>
            <span class="text-xs text-gray-600">{{ formatDate(blog.date) }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="h-4"></div>
    <adsbygoogle 
      ad-slot="9754475321" 
      ad-format="auto"
      ad-label="php-ads"
    />
    <div class="h-4"></div>
    <nuxt-content :document="blog" class="py-9"/>
  </article>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content('blog', params.slug).fetch()

    return { blog }
  },

  head () {
    return {
      title: `${this.blog.title} - afgprogrammer`,
      meta: [
        { 
          name: 'author', 
          content: 'Mohammad Rahmani - afgprogrammer' 
        },
        {
          name: 'description',
          content: this.blog.summery
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: `${this.blog.title}`,
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: `https://afgprogrammer.com${this.blog.image}`,
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: this.blog.summery,
        },
        {
          key: 'og:url',
          property: 'og:url',
          content: `https://afgprogrammer.com${this.blog.path}`,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: `${this.blog.title}`,
        },
        
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: this.blog.summery,
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
          content: `https://afgprogrammer.com${this.blog.image}`,
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
          title: 'Blog',
          to: '/blog'
        },
        {
          title: this.blog.title,
          to: this.blog.slug
        },
      ]
    }
  }
}
</script>
<style>
.nuxt-content-highlight pre {
  border-radius: 10px;
  padding: 25px;
  background-color: #212733;
}
</style>
