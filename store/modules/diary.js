import { set, toggle } from '@/utils/vuex'

export const setDiaryAttr = property => (store, payload) =>
  (store.curEditDiary[property] = payload)

export default {
  namespaced: true,

  modules: {
    // curEditDiary
  },

  mutations: {
    setTitle: setDiaryAttr('title'),
    setContent: setDiaryAttr('content'),
    setCurEditDiary: set('curEditDiary'),
    setOldDiary: set('oldDiary'),
    setEditDialog: set('editDialog'),
    toggleEditDialog: toggle('editDialog')
  },

  state: () => ({
    oldDiary: {},
    curEditDiary: {
      id: '',
      title: '',
      content: '',
      createddate: ''
    },
    editDialog: null
  }),

  getters: {
    title: state => state.curEditDiary.title,
    content: state => state.curEditDiary.content,
    date: state => state.curEditDiary.createddate
  }
}
