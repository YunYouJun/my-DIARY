<template>
  <v-app>
    <main-toolbar :color="color" :text-color="textColor" :title="title" />
    <v-progress-linear
      :active="progress"
      :indeterminate="true"
      style="position:absolute;margin-top:48px;"
    />
    <v-content>
      <nuxt :color="color" />
    </v-content>
  </v-app>
</template>

<script>
import MainToolbar from '@/components/layout/MainToolbar.vue'
export default {
  components: {
    MainToolbar
  },
  data() {
    return {
      color: this.$store.state.theme.color,
      textColor: this.$store.state.theme.textColor,
      progress: false,
      title: 'my DIARY'
    }
  },
  methods: {
    showProgress() {
      this.active = true
    }
  }
}
</script>

<style lang="stylus">
#app {
  font-family: 'Nunito', 'Kosugi Maru', 'Segoe UI', Tahoma, Geneva, Verdana,
    sans-serif;
}
</style>
