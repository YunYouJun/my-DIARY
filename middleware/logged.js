export default function({ store, redirect }) {
  // has logged in
  if (store.state.username) {
    return redirect('/diary')
  }
}
