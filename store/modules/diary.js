import { set, toggle } from '@/util/vuex'

export default {
  namespaced: true,

  mutations: {
    setEditDialog: set('editDialog'),
    toggleEditDialog: toggle('editDialog')
  },

  state: () => ({
    editDialog: null
  })
}
