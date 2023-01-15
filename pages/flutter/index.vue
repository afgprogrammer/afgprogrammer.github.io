<template>
  <section class="mx-auto max-w-6xl px-6 xl:px-0">
    <div class="h-4"></div>
    <!-- <adsbygoogle
      ad-slot="5508803088"
      ad-format="auto"
      ad-label="flutter-ads"
    />
    <div class="h-4"></div> -->
    <iframe data-aa='2152646' src='//acceptable.a-ads.com/2152646' style='border:0px; padding:0; width:100%; height:100%; overflow:hidden; background-color: transparent;'></iframe>
    <div class="h-4"></div>
    <div class="flex">
      <div class="w-full border border-gray-100 rounded-xl p-6 ">
        <p class="mb-4 text-lg font-medium">Search in 100+ Flutter Examples </p>
        <div class="h-4"></div>
        <input type="text" v-model="input" placeholder="search eg. day 22, GetX, Login" class="border border-gray-200 focus:border-blue-600 focus:shadow-md outline-none text-gray-600 text-md py-3 px-4 rounded-lg w-full bg-gray-100">
      </div>
    </div>
    <div class="h-4"></div>
    <div class="grid grid-cols-1 md:grid-cols-2 pt-8 gap-10" v-if="days && days.length">
      <div v-for="(day, index) in days" :key="index" class="bg-white rounded-xl border-2 border-gray-100">
        <div class="">
          <iframe class="rounded-t-xl" width="100%" height="400" :src="day.video.replace('youtu.be', 'youtube.com/embed')" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="p-4 pr-2">
            <h3 class="mt-4 font-medium text-gray-700">{{ day.name }}</h3>
            <p class="text-gray-400 tracking-wider text-xs mt-2">{{ day.summery }}</p>
            <div class="mt-5 text-right">
              <a :href="day.repository" title="" class="hover:bg-gray-100 px-4 py-2 rounded-full"> 🔗 Source code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="text-center mt-10">
        <h1 class="text-xl font-bold tracking-wide">No Flutter Examples Found</h1>
        <p class="text-gray-600 text-lg mt-4">
          Please try another search
        </p>
      </div>
    </div>
    <div class="h-40"></div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    let days = await $content('flutter').fetch()
    days = days[0].data.reverse()

    return { days }
  },

  data() {
    return {
      timeout: null,
      searchKey: '',
      days: [],
      originalDays: [],
    }
  },

  mounted() {
    this.originalDays = this.days
  },

  computed: {
    input: {
      get() {
        return this.searchKey
      },
      set(value) {
        if (this.timeout) clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.search(value)
        }, 500)
      }
    }
  },

  methods: {
    search(value) {
      this.searchKey = value

      if (value.length > 0) {
        this.days = this.originalDays.filter(day => {
          return day.name.toLowerCase().includes(value.toLowerCase())
        })
      } else {
        this.days = this.originalDays
      }
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
    title: 'Flutter 100 Days of Code UI Design Example - afgprogrammer',
    meta: [
      {
        name: 'author',
        content: 'Mohammad Rahmani - afgprogrammer'
      },
      {
        name: 'description',
        content: 'Hey there! I\'m Mohammad Rahmani, a Flutter developer based in Kabul. I love Flutter, and I\'m always looking for new challenges. In this page you can find my 100 days of Flutter journey.',
      },
      {
        key: 'og:title',
        property: 'og:title',
        content: 'Everyday Flutter UI Design Example - afgprogrammer',
      },
      {
        key: 'og:description',
        property: 'og:description',
        content: 'Hey there! I\'m Mohammad Rahmani, a Flutter developer based in Kabul. I love Flutter, and I\'m always looking for new challenges. In this page you can find my 100 days of Flutter journey.',
      },
      {
        key: 'og:url',
        property: 'og:url',
        content: 'https://afgprogrammer.com/flutter',
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
        content: 'Hey there! I\'m Mohammad Rahmani, a Flutter developer based in Kabul. I love Flutter, and I\'m always looking for new challenges. In this page you can find my 100 days of Flutter journey.',
      }
    ]
  }
}
</script>
