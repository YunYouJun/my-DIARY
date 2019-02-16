<template>
  <v-bottom-nav
    :color="color"
    :value="true"
    app
    dark
    fixed
  >
    <v-btn dark @click="toggleDrawer">
      <v-icon>menu</v-icon>
    </v-btn>

    <v-btn dark>
      <v-icon>edit</v-icon>
    </v-btn>

    <v-btn dark>
      <v-icon>camera_alt</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    color: {
      type: String,
      default: ''
    }
  },
  methods: {
    ...mapMutations('app', ['toggleDrawer'])
  }
}
</script>
