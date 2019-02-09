export default function({ $axios, redirect, store }) {
  if (store.state.token) {
    $axios.setHeader('auth', 'token ' + store.state.token)
  }
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
