import { set } from '@/utils/vuex'
import app from './modules/app'
import diary from './modules/diary'
import theme from './modules/theme'

export const modules = {
  app,
  diary,
  theme
}

export const state = () => ({
  token: localStorage.getItem('token') || '',
  userid: localStorage.getItem('userid') || '',
  user_config: JSON.parse(localStorage.getItem('user_config')) || {
    avatar: '',
    email: '',
    name: '',
    role: ''
  }
})

export const mutations = {
  setToken: set('token'),
  setUserid: set('userid'),
  setUserConfig: set('user_config')
}

export const actions = {
  login: (context, data) => {
    context.commit('setToken', data.token)
    context.commit('setUserid', data.userid)
    context.commit('setUserConfig', data.user_config)
    localStorage.setItem('token', data.token)
    localStorage.setItem('userid', data.userid)
    localStorage.setItem('user_config', JSON.stringify(data.user_config))
  },
  logout: context => {
    context.dispatch('removeUserinfo')
    context.dispatch('theme/removeTheme')
  },
  removeUserinfo: context => {
    context.commit('setToken', '')
    context.commit('setUserid', 0)
    context.commit('setUserConfig', {
      avatar: '',
      email: '',
      name: '',
      role: ''
    })
    localStorage.removeItem('token')
    localStorage.removeItem('userid')
    localStorage.removeItem('user_config')
  }
}
