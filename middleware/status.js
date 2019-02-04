export default function({ $axios, store }) {
  if (!store.state.t) {
    if (localStorage.getItem('t') !== null) {
      store.commit('login', {
        a: localStorage.getItem('a'),
        type: localStorage.getItem('type'),
        t: localStorage.getItem('t'),
        id: localStorage.getItem('id')
      })
    }
  }
}
