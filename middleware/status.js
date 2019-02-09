// import ohShenghuo from '@/api/ohShenghuo.json'
export default function({ store }) {
  if (!store.state.token) {
    const token = localStorage.getItem('token')
    if (token) {
      store.commit('login', {
        avatar: localStorage.getItem('avatar'),
        email: localStorage.getItem('email'),
        token: localStorage.getItem('token'),
        userid: localStorage.getItem('userid'),
        name: localStorage.getItem('name')
      })
    }
  }
}
