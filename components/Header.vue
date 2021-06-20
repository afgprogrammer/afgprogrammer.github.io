<template>
  <header id="main-header" class="py-3 px-6 xl:px-0">
    <div class="flex justify-between items-center">
      <Logo></Logo>
      <nav class="text-gray-600 text-sm">
        <router-link to="/" title="afgprogrammer-home" class="m-4" :class="{'font-medium text-gray-900': !isRouteActive('php')}">Home</router-link>
        <a href="/php" title="afgprogrammer-blog" :class="{'font-medium text-gray-900': isRouteActive('php')}">PHP</a>
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
