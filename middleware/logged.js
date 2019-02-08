export default function({ store, redirect }) {
  // has logged in
  if (store.state.token) {
    return redirect('/diary')
  }
}
