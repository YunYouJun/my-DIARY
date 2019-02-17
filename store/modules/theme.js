import { setLocal } from '@/util/vuex'
import theme from '@/config/theme.js'

export default {
  namespaced: true,

  mutations: {
    setColor: setLocal('color'),
    setTextColor: setLocal('textColor')
  },

  state: () => ({
    color: localStorage.getItem('color') || '',
    textColor: localStorage.getItem('textColor') || ''
  }),

  actions: {
    setTheme(context, role) {
      let myTheme = {
        color: '',
        textColor: ''
      }
      if (role === 'boy') {
        myTheme = theme.boy
      } else if (role === 'girl') {
        myTheme = theme.girl
      }
      context.commit('setColor', myTheme.color)
      context.commit('setTextColor', myTheme.textColor)
    }
  }
}
