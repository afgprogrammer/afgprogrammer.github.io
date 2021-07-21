<template>
  <header id="main-header" class="py-3 px-6 xl:px-0">
    <div class="flex justify-between items-center">
      <Logo></Logo>
      <nav class="text-gray-600 text-sm">
        <a href="/php" title="afgprogrammer-blog" :class="{'font-medium text-gray-900': isRouteActive('php')}">PHP</a>
        <a href="/flutter" title="afgprogrammer-flutter" class="mx-4" :class="{'font-medium text-gray-900': isRouteActive('flutter')}">Flutter</a>
        <a href="/presentations" title="presentations - afgprogrammer" :class="{'font-medium text-gray-900': isRouteActive('presentation')}">Presentations</a>
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
