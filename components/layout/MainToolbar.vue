<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-toolbar v-if="$store.state.token" flat class="transparent" style="padding-bottom:8px;">
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img :src="gravatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ $store.state.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list>
        <v-divider />
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
    <v-toolbar app>
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title" />

      <v-spacer />

      <template v-if="!$store.state.token">
        <v-btn flat nuxt to="/login">
          login
        </v-btn>
      </template>
      <template v-else>
        <v-menu offset-y bottom left>
          <v-btn slot="activator" icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile
              v-for="option in options"
              :key="option.key"
              @click="logout"
            >
              <v-list-tile-title>{{ option.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </template>
    </v-toolbar>
  </div>
</template>

<script>
// import md5 from 'md5'
import api from '@/api'
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      progress: false,
      drawer: false,
      // gravatar: 'https://gravatar.com/avatar/' + md5(this.$store.state.email),
      gravatar: api.ohShenghuo.url + this.$store.state.avatar,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'book',
          title: 'Diary',
          to: '/diary'
        }
      ],
      options: [
        {
          key: 'logout',
          title: 'Log out'
        }
      ]
    }
  },
  methods: {
    logout() {
      this.$store.commit('logout')
      this.$router.push('/')
    }
  }
}
</script>
