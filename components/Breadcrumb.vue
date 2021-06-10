<template>
  <ul class="m-0 flex flex-wrap" v-if="links && links.length > 0">
    <li v-for="(link, index) in links" :key="index" class="relative mr-2">
      <a :href="link.to" :title="link.title" class="text-gray-500 text-sm last:text-gray-900 last:font-medium">
        <span>{{ link.title }}</span>
      </a> <span class="text-gray-500 ml-2" v-if="index < links.length - 1">/</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: []
    }
  },

  methods: {
    isRouteActive(name) {
      return this.$route.path.includes(name)
    }
  }
}
</script>
