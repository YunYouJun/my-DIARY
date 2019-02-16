import { set, toggle } from '@/util/vuex'

export default {
  namespaced: true,

  mutations: {
    setDrawer: set('drawer'),
    toggleDrawer: toggle('drawer')
  },

  state: () => ({
    drawer: null
  })
}
