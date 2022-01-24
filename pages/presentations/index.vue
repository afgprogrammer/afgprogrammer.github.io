<template>
  <section class="mx-auto max-w-6xl px-6 xl:px-0">
    <div class="flex py-6">
      <breadcrumb :links="breadcrumbLinks()"></breadcrumb>
    </div>
    <div class="h-4"></div>
    <adsbygoogle 
      ad-slot="9238225491" 
      ad-format="auto"
      ad-label="presentation-ads"
    />
    <div class="h-4"></div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8" v-for="(presentation, index) of presentations" :key="index">
      <img :src="presentation.image" :alt="presentation.title" class="rounded-lg">
      <div class="grid">
        <div>
          <h1 class="text-3xl md:text-4xl font-bold tracking-wide">{{ presentation.title }}</h1>
          <div class="my-8 text-md md:text-lg text-gray-700 font-light" v-html="presentation.description"></div>
        </div>
        <div class="self-end grid grid-cols-2 mt-9 lg:mt-0">
          <div>
            <span class="text-xs text-gray-600">{{ formatDate(presentation.date) }}</span>
            <div>
              <span v-for="(tag, index) in presentation.tags" :key="index" class="mr-5 text-blue-900">{{ tag }}</span>
            </div>
          </div>
          <div class="self-end justify-self-end">
            <a href="/presentations/how-to-write-clean-code-in-laravel" class="text-sm text-blue-600">Read more or Download</a>
          </div>
        </div>
      </div>
    </div>
    <div class="h-28"></div>
  </section>
</template>
<script>
export default {
  async asyncData({ $content }) {
    let presentations = await $content('presentations')
      .only(['title', 'description', 'image', 'slug', 'date', 'tags'])
      .sortBy('date', 'desc')
      .fetch()

    return {
      presentations
    }
  },

  head: {
    title: 'Presentations presented by Mohammad Rahmani - afgprogrammer',
    meta: [
      { 
        name: 'author', 
        content: 'Mohammad Rahmani - afgprogrammer' 
      },
      {
        name: 'description',
        content: 'I’m Mohammad Rahmani from Kabul, Afghanistan. These are the list of presentations that I have presented so far.',
      },
      {
        key: 'og:title',
        property: 'og:title',
        content: 'Presentations presented by Mohammad Rahmani - afgprogrammer',
      },
      {
        key: 'og:description',
        property: 'og:description',
        content: 'I’m Mohammad Rahmani from Kabul, Afghanistan. These are the list of presentations that I have presented so far.',
      },
      {
        key: 'og:url',
        property: 'og:url',
        content: 'https://afgprogrammer.com/presentations',
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Presentations presented by Mohammad Rahmani - afgprogrammer',
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
        content: 'I’m Mohammad Rahmani from Kabul, Afghanistan. These are the list of presentations that I have presented so far.',
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
          title: 'Presentations',
          to: '/presentations'
        }
      ]
    }
  }
}
</script>