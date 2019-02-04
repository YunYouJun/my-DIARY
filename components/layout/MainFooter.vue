<template>
  <v-footer
    height="auto"
    color="primary lighten-1"
    :fixed="fixed"
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
        round
      >
        {{ link }}
      </v-btn>
      <v-flex
        primary
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy;2019 — <strong>my DIARY</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    links: ['GitHub', 'About', 'Blog', 'Contact']
  })
}
</script>

<style>
</style>
