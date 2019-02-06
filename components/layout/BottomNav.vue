<template>
  <v-bottom-nav
    :active.sync="bottomNav"
    :color="color"
    :value="true"
    dark
    fixed
  >
    <v-btn dark>
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
export default {
  data() {
    return {
      color: 'blue lighten-2',
      bottomNav: 3
    }
  }
}
</script>
