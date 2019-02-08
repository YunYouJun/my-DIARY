export const state = () => ({
  avatar: '',
  email: '',
  token: '',
  userid: 0,
  name: ''
})

export const mutations = {
  login: (state, data) => {
    state.avatar = data.avatar
    state.email = data.email
    state.token = data.token
    state.userid = data.userid
    state.name = data.name
    localStorage.setItem('avatar', data.avatar)
    localStorage.setItem('email', data.email)
    localStorage.setItem('token', data.token)
    localStorage.setItem('userid', data.userid)
    localStorage.setItem('name', data.name)
  },
  logout: state => {
    state.avatar = ''
    state.email = ''
    state.token = ''
    state.userid = 0
    state.name = ''
    localStorage.removeItem('avatar')
    localStorage.removeItem('email')
    localStorage.removeItem('token')
    localStorage.removeItem('userid')
    localStorage.removeItem('name')
  }
}

export const actions = {
  //
}
