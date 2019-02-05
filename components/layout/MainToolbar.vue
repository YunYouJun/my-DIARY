<template>
  <v-toolbar 
    clipped-left
    app
  >
    <v-toolbar-side-icon @click="$emit('update:drawer', !drawer)" />
    <v-toolbar-title v-text="title" />

    <v-spacer />

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>
    
    <template v-if="!$store.state.a">
      <v-btn flat nuxt to="/login">
        login
      </v-btn>
    </template>
    <template v-else>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </template>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      drawer: null
    }
  }
}
</script>
