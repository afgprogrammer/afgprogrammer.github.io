<template>
  <section class="mx-auto max-w-7xl">
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
      <div v-for="(post, index) of posts" :key="index">
        <router-link :to="{ name: 'blog-slug', params: { slug: post.slug } }">
          <img :data-src="post.image" :alt="post.title" class="rounded-t-lg" v-lazy-load/>
          <div class="mt-5">
            <h2 class="text-xl font-medium text-gray-800">{{ post.title }}</h2>
            <p class="mt-3 text-gray-600 text-sm">{{ post.summery.substring(0, 150) }} ...</p>
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