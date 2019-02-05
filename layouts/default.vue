<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <main-toolbar :drawer.sync="drawer" :title="title" />
    <v-progress-linear :active="active" :indeterminate="true" style="position:absolute;margin-top:48px;" />
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import MainToolbar from '@/components/layout/MainToolbar.vue'
export default {
  middleware: 'status',
  components: {
    MainToolbar
  },
  data() {
    return {
      active: false,
      drawer: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Diary',
          to: '/diary'
        }
      ],
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
