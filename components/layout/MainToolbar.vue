<template>
  <div>
    <user-drawer v-if="$store.state.token" />

    <v-toolbar 
      app 
      :class="textColor" 
      :extended="extended"
      extension-height="32"
    >
      <template v-if="!$store.state.token">
        <v-toolbar-title>
          my-DIARY
        </v-toolbar-title>
        <v-spacer />
        <v-btn flat nuxt to="/login">
          login
        </v-btn>
      </template>
      <template v-else>
        <div v-if="extended" slot="extension" :class="textColor + ' text-xs-center'" style="width:100%;">
          <div class="title font-weight-regular">
            {{ activeNav }}
          </div>
        </div>
        <div class="text-xs-center" style="width:100%;">
          <v-btn-toggle v-model="activeNav" mandatory>
            <v-btn 
              v-for="navItem in navItems" 
              :key="navItem.title"
              depressed
              :flat="activeNav !== navItem.title ? true : false"
              small
              :color="color" 
              :value="navItem.title"
              nuxt
              :to="navItem.to"
              style="width:90px;"
            >
              {{ navItem.title }}
            </v-btn>
          </v-btn-toggle>
        </div>
      </template>
    </v-toolbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import UserDrawer from '@/components/core/UserDrawer'
export default {
  components: {
    UserDrawer
  },
  data() {
    return {
      activeNav: '',
      progress: false,
      navItems: [
        {
          title: 'Entries',
          to: '/app/entries'
        },
        {
          title: 'Calendar',
          to: '/app/calendar'
        },
        {
          title: 'Diary',
          to: '/app/diary'
        }
      ]
    }
  },
  computed: {
    ...mapState('theme', ['color', 'textColor']),
    extended() {
      if (this.activeNav && this.$store.state.token) {
        if (this.activeNav !== 'Calendar') {
          console.log(this.activeNav)
          return true
        }
      }
      return false
    }
  }
}
</script>

<style lang="stylus">
$border-radius = 5px;

// nav
.v-btn-toggle
  color: currentColor
  border-radius: $border-radius !important
  border: 1px solid currentColor

  .v-btn

    &:first-child
      border-radius: $border-radius 0 0 $border-radius !important

    &:last-child
      border-radius: 0 $border-radius $border-radius 0 !important

    &:not(:first-child)
      border-left: 1px solid currentColor
      
    &:not(:last-child)
      border-right: 1px solid currentColor

// active color
.theme--light.v-btn-toggle .v-btn
  color: white
</style>
