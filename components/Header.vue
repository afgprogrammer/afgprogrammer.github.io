<template>
  <header id="main-header" class="border-b border-gray-100 py-3 px-6 xl:px-0">
    <div class="flex justify-between items-center">
      <Logo></Logo>
      <nav class="text-gray-600 text-sm">
        <router-link to="/" title="afgprogrammer-home" class="m-4" :class="{'font-medium text-gray-900': !isRouteActive('blog')}">Home</router-link>
        <a href="/blog" title="afgprogrammer-blog" :class="{'font-medium text-gray-900': isRouteActive('blog')}">Blog</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    isRouteActive(name) {
      return this.$route.path.includes(name)
    }
  }
}
</script>
