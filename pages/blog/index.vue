<template>
  <section class="mx-auto max-w-6xl">
    <div class="flex py-6 px-6 xl:px-0">
      <breadcrumb :links="breadcrumbLinks()"></breadcrumb>
    </div>
    <div class="h-4"></div>
    <ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-2490274469917078"
      data-ad-slot="9238225491"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
    <div class="h-4"></div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-0">
      <div v-for="(article, index) of articles" :key="index">
        <router-link :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <img :src="article.image" :alt="article.title" class="rounded-t-lg"/>
          <div class="mt-5">
            <h2 class="text-xl font-medium text-gray-800">{{ article.title }}</h2>
            <p class="mt-3 text-gray-600 text-sm tracking-wide">{{ article.description.substring(0, 150) }} ...</p>
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
    let articles = await $content('articles')
      .only(['title', 'description', 'image', 'slug', 'date', 'tags'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      articles
    }
  },

  head: {
    title: 'Afgprogrammer - Blog',
    meta: [
      { 
        name: 'author', 
        content: 'Mohammad Rahmani - afgprogrammer' 
      },
      {
        name: 'description',
        content: 'Creating videos for educational purposes regarding topics like Flutter, Laravel, VueJS, Invision Studio, mainly focused on mobile and web application development. Mohamnmd Rahmani - afgprogrammer',
      },
      {
        key: 'og:title',
        property: 'og:title',
        content: 'Afgprogrammer - Blog',
      },
      {
        key: 'og:description',
        property: 'og:description',
        content: 'Creating videos for educational purposes regarding topics like Flutter, Laravel, VueJS, Invision Studio, mainly focused on mobile and web application development. Mohamnmd Rahmani - afgprogrammer',
      },
      {
        key: 'og:url',
        property: 'og:url',
        content: 'https://afgprogrammer.com/blog',
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Afgprogrammer - Blog',
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
        content: 'Creating videos for educational purposes regarding topics like Flutter, Laravel, VueJS, Invision Studio, mainly focused on mobile and web application development. Mohamnmd Rahmani - afgprogrammer',
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
          title: 'Blog',
          to: '/blog'
        }
      ]
    }
  }
}
</script>