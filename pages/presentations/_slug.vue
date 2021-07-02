<template>
  <div>
    <a href="/presentations" class="text-xs font-light text-white fixed left-4 top-4 z-10">Back to Presentations</a>
    <full-page>
      <nuxt-content :document="presentation"/>
    </full-page>
  </div>
</template>
<script>
export default {
  layout: 'presentation',

  async asyncData({ $content, params }) {
    const presentation = await $content('presentations', params.slug).fetch()

    return { presentation }
  },

  head () {
    return {
      title: `${this.presentation.title} - afgprogrammer`,
      meta: [
        { 
          name: 'author', 
          content: 'Mohammad Rahmani - afgprogrammer' 
        },
        {
          name: 'description',
          content: this.presentation.summery
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: `${this.presentation.title}`,
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: `https://afgprogrammer.com${this.presentation.image}`,
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: this.presentation.summery,
        },
        {
          key: 'og:url',
          property: 'og:url',
          content: `https://afgprogrammer.com${this.presentation.path}`,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: `${this.presentation.title}`,
        },
        
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: this.presentation.summery,
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
          content: `https://afgprogrammer.com${this.presentation.image}`,
        }
      ]
    }
  }
}
</script>
