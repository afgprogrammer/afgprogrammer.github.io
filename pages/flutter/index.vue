<template>
  <section class="mx-auto max-w-7xl">
    <div class="flex py-6 px-6 xl:px-0">
      <breadcrumb :links="breadcrumbLinks()"></breadcrumb>
    </div>
    <div class="h-4"></div>
    <ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-2490274469917078"
      data-ad-slot="5508803088"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
    <div class="h-4"></div>
    <div v-if="videos.length">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-6 lg:px-0">
        <div class="rounded-t-xl overflow-hidden" v-for="(video, index) of videos" :key="index">
          <iframe width="100%" height="350" :src="'https://www.youtube.com/embed/'+video.id.videoId" frameborder="10" allowfullscreen></iframe>
        </div>
      </div>
      <div class="h-28"></div>
      <p class="text-center">
        <a href="https://youtube.com/afgprogrammer" title="">Watch more</a>
      </p>
      <div class="h-28"></div>
    </div>
    <div class="loading" v-if="videos.length <= 0">
      <p class="text-center font-bold">
        Loading Videos ...
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      key: 'AIzaSyBwXQk8IuFvMp5h47amTeh8shzz7fdNRFI',
      part: 'snippet',
      maxResults: '20',
      channelId: 'UCuXm84E6yWF0dIKmwvwc9sQ',
      videos: [],
    }
  },

  mounted() {
    this.getVideos();
  },

  methods: {
    getVideos() {
      this.$axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: this.key,
          part: this.part,
          maxResults: this.maxResults,
          channelId: this.channelId,
          order: 'date'
        }
      }).then((response) => {
        this.videos = response.data.items;
      }).catch((err) => {
        console.log(err)
      })
    },

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
  },

  head: {
    title: 'Everyday Flutter UI Design Example - afgprogrammer',
    meta: [
      { 
        name: 'author', 
        content: 'Mohammad Rahmani - afgprogrammer' 
      },
      {
        name: 'description',
        content: 'Creating videos for educational purposes regarding topics like Flutter, Laravel, VueJS, Invision Studio, mainly focused on mobile application development.',
      },
      {
        key: 'og:title',
        property: 'og:title',
        content: 'Everyday Flutter UI Design Example - afgprogrammer',
      },
      {
        key: 'og:description',
        property: 'og:description',
        content: 'Creating videos for educational purposes regarding topics like Flutter, Laravel, VueJS, Invision Studio, mainly focused on mobile application development.',
      },
      {
        key: 'og:url',
        property: 'og:url',
        content: 'https://afgprogrammer.com/php',
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
        content: 'Creating videos for educational purposes regarding topics like Flutter, Laravel, VueJS, Invision Studio, mainly focused on mobile application development.',
      }
    ]
  },
}
</script>
