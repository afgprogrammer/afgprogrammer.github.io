<template>
  <header id="main-header" class="py-5 px-6 xl:px-0">
    <div class="flex items-center bg-white py-3 px-5 rounded-full header-shadow">
      <Logo></Logo>
      <div class="flex flex-1 justify-between items-center">
        <nav class="text-gray-800 text-sm font-normal ml-5">
          <a href="/blog" title="blog" class="hover:bg-gray-100 px-4 py-2 rounded-full" :class="{'font-medium text-gray-900 bg-gray-100': isRouteActive('blog')}">Blog</a>
          <a href="/php" title="php" class="hover:bg-gray-100 px-4 py-2 rounded-full" :class="{'font-medium text-gray-900 bg-gray-100': isRouteActive('php')}">PHP</a>
          <a href="/flutter" title="flutter" class="hover:bg-gray-100 px-4 py-2 rounded-full" :class="{'font-medium text-gray-900 bg-gray-100': isRouteActive('/flutter')}">Flutter</a>
          <a href="/presentations" title="presentations" class="hover:bg-gray-100 px-4 py-2 rounded-full hidden" :class="{'font-medium text-gray-900 bg-gray-100': isRouteActive('presentation')}">Presentations</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      user: null
    }
  },

  methods: {
    isRouteActive(name) {
      return this.$route.path.includes(name)
    },
  }
}
</script>
