<template>
  <section>
    <div class="background relative w-full h-full filter blur-2xl">
      <div class="absolute w-44 h-44 lg:w-80 lg:h-80 right-20 xl:right-1/4 top-36 rounded-full bg-yellow-300 custom-animate-pulse"></div>
      <div class="absolute w-44 h-44 lg:w-80 lg:h-80 right-72 xl:right-1/3 top-80 rounded-full bg-blue-600 custom-animate-pulse"></div>
      <div class="absolute w-44 h-44 lg:w-80 lg:h-80 right-20 xl:right-1/4 top-96 rounded-full bg-red-600 custom-animate-pulse"></div>
    </div>
    <div class="foreground">
      <section class="mx-auto max-w-6xl tracking-wide px-6 xl:px-0">
        <div class="h-40 lg:h-60"></div>
        <h1 class="text-5xl lg:text-6xl font-semibold"> Hello!
          <div class="h-3"></div>
          I'm Mohammad.
        </h1>
        <div class="max-w-6xl">
          <h2 class="text-lg lg:text-2xl font-light text-gray-700 mt-6 leading-9">
            A Full-stack Developer who writes code. I work across Software Design, Software Development and prototyping to create intuitive development for products.
            I am currently working as 
            Sr. Software Developer at <a href="https://www.netlinks.af" title="@netlinks" target="_blank" class="text-blue-800">@netlinks</a> company based in Kabul, Afghanistan. <br>
            I love open-source and try to develop useful and tangible software.
            I love to learn and discover all things Flutter, PHP, JavaScript, HTML, CSS, Laravel and VueJs.
          </h2>
        </div>
        <div class="h-32"></div>
         <div>
          <span class="font-light text-sm">
            Follow me on &nbsp;
            <a href="https://twitter.com/afgprogrammer" title="afgprogrammer - Twitter Page" class="underline text-gray-700" target="_blank"><span>Twitter</span></a>, &nbsp;
            <a href="https://instagram.com/afgprogrammer" title="afgprogrammer - Instagram Page" class="underline text-gray-700" target="_blank"><span>Instagram</span></a>, &nbsp;
            <a href="https://youtube.com/afgprogrammer" title="afgprogrammer - Youtube Channel" class="underline text-gray-700" target="_blank"><span>Youtube</span></a>.</span>
        </div>
        <div class="h-6"></div>
        <div class="flex flex-col">
          <div>
            <span class="text-base font-light text-gray-600">Like my work?</span>
            <a href="https://github.com/afgprogrammer" title="Support me on GitHub - afgprogrammer">
              <h4 class="text-sm text-gray-900 font-medium m-0 mt-2">Support me on GitHub</h4>
            </a>
          </div>
        </div>
        <div class="h-40"></div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
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
  },
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
