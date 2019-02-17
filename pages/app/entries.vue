<template>
  <div>
    <no-entries :dialog="dialog" />
  </div>
</template>

<script>
import NoEntries from '@/components/nav/entries/NoEntries'
export default {
  components: {
    NoEntries
  },
  data() {
    return {
      dialog: true
    }
  }
}
</script>

<style>
</style>
