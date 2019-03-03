<template>
  <div>
    <nuxt-child />
    <bottom-nav />
    <edit-diary />
  </div>
</template>

<script>
import BottomNav from '@/components/layout/BottomNav.vue'
import EditDiary from '@/components/diary/EditDiary.vue'

export default {
  middleware: 'auth',
  components: {
    BottomNav,
    EditDiary
  }
}
</script>

<style>
</style>
