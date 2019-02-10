<template>
  <div>
    <template v-if="$store.state.token">
      <v-navigation-drawer v-model="drawer" app>
        <v-toolbar :color="color" class="pt-5 pb-4" dark>
          <v-list>
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img :src="gravatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>{{ $store.state.user_config.name }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ $store.state.user_config.description }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-toolbar>

        <v-list class="pt-0">
          <template v-for="(item) in items">
            <v-list-tile
              :key="item.title"
              :to="item.to"
              router
              exact
              class="pa-2"
            >
              <v-list-tile-action>
                <v-icon :color="color">
                  {{ item.icon }}
                </v-icon>
              </v-list-tile-action>
              <v-list-tile-content :class="textColor">
                <v-list-tile-title v-text="item.title" />
              </v-list-tile-content>
            </v-list-tile>
            <v-divider :key="item.title + '-divider'" :class="color" />
          </template>

          <v-bottom-nav
            :value="true"
            absolute
          >
            <v-layout align-center>
              <v-flex xs10 align-self-center>
                <div class="ml-2">
                  <v-text-field
                    solo
                    label="Search..."
                    prepend-inner-icon="search"
                    clearable
                    hide-details
                    dark
                    color="white"
                    :background-color="color"
                  />
                </div>
              </v-flex>
              <v-flex xs2>
                <div class="text-xs-center">
                  <v-icon :color="color">
                    settings
                  </v-icon>
                </div>
              </v-flex>
            </v-layout>
          </v-bottom-nav>
        </v-list>
      </v-navigation-drawer>
    </template>

    <v-toolbar app>
      <template v-if="$store.state.token">
        <v-toolbar-side-icon @click="drawer = !drawer" />
      </template>
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
import api from '@/api'
export default {
  props: {
    color: {
      type: String,
      default: ''
    },
    textColor: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      progress: false,
      drawer: false,
      items: [
        {
          icon: 'phone',
          title: '紧急',
          to: '/'
        },
        {
          icon: 'book',
          title: 'TAKI',
          to: '/diary'
        },
        {
          icon: 'book',
          title: 'DIARY',
          to: '/diary'
        },
        {
          icon: 'error_outline',
          title: '禁止事项',
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
  computed: {
    gravatar() {
      let avatar = 'https://gravatar.com/avatar/'
      if (this.$store.state.user_config.avatar) {
        avatar = api.ohShenghuo.url + this.$store.state.user_config.avatar
      }
      return avatar
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

<style>
.v-input__control {
  min-height: 20px !important;
}
</style>
