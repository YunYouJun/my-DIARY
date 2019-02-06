export const state = () => ({
  a: '', // email
  t: '', // token
  type: 1,
  id: ''
})

export const mutations = {
  login: (state, data) => {
    state.a = data.a
    state.t = data.t
    state.type = data.type
    state.id = data.id
    localStorage.setItem('a', data.a)
    localStorage.setItem('t', data.t)
    localStorage.setItem('type', data.type)
    localStorage.setItem('id', data.id)
  },
  logout: state => {
    state.a = ''
    state.t = ''
    state.type = 0
    state.id = ''
    localStorage.removeItem('a')
    localStorage.removeItem('t')
    localStorage.removeItem('type')
    localStorage.removeItem('id')
    localStorage.removeItem('diaries')
  }
}

export const actions = {
  //
}
