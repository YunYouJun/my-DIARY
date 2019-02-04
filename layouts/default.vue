<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
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
    <v-toolbar
      :clipped-left="clipped"
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>{{ `chevron_${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
    </v-toolbar>
    <v-progress-linear :active="active" :indeterminate="true" style="position:absolute;margin-top:48px;" />
    <v-content>
      <v-container fill-height>
        <nuxt />
      </v-container>
    </v-content>
    <main-footer :fixed="fixed" />
  </v-app>
</template>

<script>
import MainFooter from '@/components/layout/MainFooter.vue'
export default {
  middleware: 'status',
  components: {
    MainFooter
  },
  data() {
    return {
      active: false,
      clipped: false,
      drawer: false,
      fixed: false,
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
      miniVariant: false,
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
