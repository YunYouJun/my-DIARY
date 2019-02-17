<template>
  <v-bottom-nav
    v-if="$store.state.token"
    :color="theme.color"
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
import { mapMutations, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['theme'])
  },
  methods: {
    ...mapMutations('app', ['toggleDrawer'])
  }
}
</script>
