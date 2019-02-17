<template>
  <div>
    <nuxt-child />
    <bottom-nav />
  </div>
</template>

<script>
import BottomNav from '@/components/layout/BottomNav.vue'
export default {
  middleware: 'auth',
  components: {
    BottomNav
  }
}
</script>

<style>
</style>
