<template>
  <div>
    <user-drawer v-if="$store.state.token"/>

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
              flat
              small
              :color="color" 
              :value="navItem.title"
              active-class="nav-btn-active"
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
          to: ''
        },
        {
          title: 'Calendar',
          to: ''
        },
        {
          title: 'Diary',
          to: ''
        }
      ]
    }
  },
  computed: {
    extended() {
      if (this.activeNav) {
        return true
      }
      return false
    },
    color() {
      return this.$store.state.theme.color
    },
    textColor() {
      return this.$store.state.theme.textColor
    }
  }
}
</script>

<style lang="stylus">
$border-radius = 8px;
// search input
.v-input__control
  min-height: 20px !important

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

.nav-btn-active
  background-color: currentColor

  .v-btn__content
    color: white

</style>
