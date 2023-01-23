<template>
  <section>
    <div class="mx-auto max-w-5xl tracking-wide px-6 xl:px-0">
      <div class="h-24"></div>
      <div class="text-center">
        <h1 class="text-4xl leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight xl:text-6xl font-semibold xl:leading-tight">
          I'm Mohammad - Software Developer, Content Creator and Flutter Enthusiast
        </h1>
        <div class="h-8"></div>
        <span class="font-light text-lg">
          <a href="https://github.com/afgprogrammer" title="afgprogrammer - Github" class="underline text-gray-700" target="_blank"><span>Github</span></a>,&nbsp;
          <a href="https://youtube.com/afgprogrammer" title="afgprogrammer - Youtube Channel" class="underline text-gray-700" target="_blank"><span>Youtube</span></a>,&nbsp;
          <a href="https://instagram.com/theflutterlover" title="theflutterlover - Instagram Page" class="underline text-gray-700" target="_blank"><span>Instagram</span></a>
        </span>
        <div class="h-40"></div>
        <iframe data-aa='2157356' src='//acceptable.a-ads.com/2157356' style='border:0px; padding:0; width:100%; height:100%; overflow:hidden; background-color: transparent;'></iframe>
      </div>
    </div>
    <div class="mx-auto max-w-6xl tracking-wide px-6 xl:px-0">
      <div class="h-24"></div>
      <div class="flex flex-col items-center">
        <h2 class="text-2xl font-light">Featured Works</h2>
        <div class="h-2 w-20 bg-gray-100 rounded-full mt-3"></div>
      </div>
      <div class="h-28"></div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div class="border border-gray-100 rounded-xl">
          <div class="overflow-hidden rounded-xl" style="background-color: #f9f1f9">
            <img src="images/home/home-service-ui-kit.png" alt="home-service">
          </div>
          <div class="p-3 pr-2">
            <div class="h-2"></div>
            <h2 class="text-md font-normal">Flutter Home Service App UI Kit</h2>
            <div class="h-2"></div>
            <p class="text-sm font-light text-gray-600 leading-5">
              Flutter Home Service App is a UI Kit for Home Service App.
            </p>
            <div class="h-6"></div>
            <div class="flex justify-between items-end">
              <span class="bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm" title="price">Free</span>
              <a href="https://github.com/afgprogrammer/Flutter-home-service-app" class="hover:bg-gray-100 px-4 py-2 rounded-full text-md" title="download">View →﻿</a>
            </div>
          </div>
        </div>
        <div class="border border-gray-100 rounded-xl">
          <div class="overflow-hidden rounded-xl" style="background-color: #f9f1f9">
            <img src="images/home/e-commerce-app.png" alt="e-commerce-app">
          </div>
          <div class="p-3 pr-2">
            <div class="h-2"></div>
            <h2 class="text-md font-normal">Flutter e-commerce App UI Kit</h2>
            <div class="h-2"></div>
            <p class="text-sm font-light text-gray-600 leading-5">
              Flutter e-commerce App is a UI Kit for e-commerce App.
            </p>
            <div class="h-6"></div>
            <div class="flex justify-between items-end">
              <span class="bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm" title="price">Free</span>
              <a href="https://github.com/afgprogrammer/Flutter-e-commerce-app-example" class="hover:bg-gray-100 px-4 py-2 rounded-full text-md" title="download">View →﻿</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-40"></div>
    <div class="py-14">
      <div class="text-center">
        <div class="flex flex-col items-center">
          <h2 class="text-2xl font-light">Let's work together</h2>
          <div class="h-2 w-20 bg-gray-100 rounded-full mt-3"></div>
        </div>
        <!-- <h2 class="text-3xl font-light">Let's work together</h2> -->
        <div class="h-20"></div>
        <a href="mailto:rto1680@gmail.com" class="text-3xl text-gray-600" title="contact">rto1680@gmail.com</a>
      </div>
    </div>
    <div class="h-32"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isFirefox: false
    }
  },

  mounted() {
    this.checkBrowser()
  },

  methods: {
    checkBrowser() {
      if (navigator.userAgent.indexOf("Firefox") != -1)
        this.isFirefox = true
    }
  },

  head: {
    title: 'Afgprogrammer - Mohammad Rahmani',
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
        content: 'Mohammad Rahmani - Afgprogrammer',
      },
      {
        key: 'og:description',
        property: 'og:description',
        content: 'Creating videos for educational purposes regarding topics like Flutter, Laravel, VueJS, Invision Studio, mainly focused on mobile and web application development. Mohamnmd Rahmani - afgprogrammer',
      },
      {
        key: 'og:url',
        property: 'og:url',
        content: 'https://afgprogrammer.com',
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Mohammad Rahmani - Afgprogrammer',
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
      },
      {
        key: 'twitter:image',
        name: 'twitter:image',
        content: 'https://afgprogrammer.com/images/afgprogrammer-logo.png',
      }
    ]
  }
}
</script>

<style>
.foreground {
  backdrop-filter: blur(100px);
}

.custom-animate-pulse {
  animation: custom-pulse 5s infinite;
}

@keyframes custom-pulse {
  from {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.85);
    opacity: 0.5;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
