<template>
  <v-navigation-drawer v-model="inputValue" app>
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
        <v-list-tile :key="item.title" :to="item.to" router exact class="pa-2">
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

      <v-bottom-nav :value="true" absolute>
        <v-layout align-center row wrap>
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
              <v-menu offset-x left>
                <v-btn 
                  slot="activator" 
                  icon 
                  :color="color"
                  class="config-btn"
                >
                  <v-icon>settings</v-icon>
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
            </div>
          </v-flex>
        </v-layout>
      </v-bottom-nav>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import api from '@/api'
import { mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      items: [
        {
          icon: 'phone',
          title: '紧急',
          to: '/'
        },
        {
          icon: 'book',
          title: 'TAKI',
          to: '/app/diary'
        },
        {
          icon: 'book',
          title: 'DIARY',
          to: '/app/diary'
        },
        {
          icon: 'error_outline',
          title: '禁止事项',
          to: '/'
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
    ...mapState('app', ['drawer']),
    color() {
      return this.$store.state.theme.color
    },
    textColor() {
      return this.$store.state.theme.textColor
    },
    gravatar() {
      let avatar = 'https://gravatar.com/avatar/'
      if (this.$store.state.user_config.avatar) {
        avatar = api.ohShenghuo.url + this.$store.state.user_config.avatar
      }
      return avatar
    },
    inputValue: {
      get() {
        return this.drawer
      },
      set(val) {
        this.setDrawer(val)
      }
    }
  },
  methods: {
    ...mapMutations('app', ['setDrawer']),
    logout() {
      this.$store.commit('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus">
.config-btn
  &.v-btn
    &--icon
      padding: 0 !important
      background: transparent !important
      box-shadow: none !important
      border-radius: 50% !important
      justify-content: center !important
      min-width: 0 !important
      width: 36px !important
      height: 36px !important

  .v-icon
    margin-bottom: 0px !important

</style>
