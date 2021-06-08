<template>
  <section>
    <div class="background relative w-full h-full filter blur-2xl">
      <div class="absolute w-44 h-44 lg:w-80 lg:h-80 right-60 top-36 rounded-full bg-yellow-400 custom-animate-pulse"></div>
      <div class="absolute w-44 h-44 lg:w-80 lg:h-80 right-96 top-72 rounded-full bg-blue-600 custom-animate-pulse"></div>
      <div class="absolute w-44 h-44 lg:w-80 lg:h-80 right-60 top-96 rounded-full bg-red-600 custom-animate-pulse"></div>
    </div>
    <div class="foreground">
      <section class="mx-auto max-w-6xl tracking-wide">
        <div class="h-60"></div>
        <h1 class="text-6xl font-semibold"> Hello!
          <div class="h-3"></div>
          I'm Mohammad.
        </h1>
        <div class="max-w-6xl">
          <h3 class="text-2xl font-light text-gray-700 mt-6 leading-9">
            A Full-stack Developer who writes code. I work across Software Design, Software Development and prototyping to create intuitive development for products.
            I am currently working as 
            Sr. Software Developer at <a href="https://www.netlinks.af" title="@netlinks" target="_blank" class="text-blue-800">@netlinks</a> company based in Kabul, Afghanistan. <br>
            I love open-source and try to develop useful and tangible software.
            I love to learn and discover all things Flutter, PHP, JavaScript, HTML, CSS, Laravel and VueJs.
          </h3>
        </div>
        <div class="h-60"></div>
        <div class="flex justify-between items-center flex-wrap">
          <div>
            <span class="text-base font-light text-gray-600">Like my work?</span>
            <a href="https://github.com/afgprogrammer" title="Support me on GitHub - afgprogrammer">
              <h4 class="text-sm text-gray-900 font-medium m-0 mt-2">Support me on GitHub</h4>
            </a>
          </div>
          <div class="mb-3 md:mb-0">
            <span class="font-light text-sm">
              Follow me on &nbsp;
              <a href="https://twitter.com/afgprogrammer" title="afgprogrammer - Twitter Page" class="underline text-gray-700" target="_blank"><span>Twitter</span></a>, &nbsp;
              <a href="https://instagram.com/afgprogrammer" title="afgprogrammer - Instagram Page" class="underline text-gray-700" target="_blank"><span>Instagram</span></a>, &nbsp;
              <a href="https://youtube.com/afgprogrammer" title="afgprogrammer - Youtube Channel" class="underline text-gray-700" target="_blank"><span>Youtube</span></a>.</span>
          </div>
        </div>
        <div class="h-20"></div>
      </section>
    </div>
  </section>
</template>

<script>
export default {

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
