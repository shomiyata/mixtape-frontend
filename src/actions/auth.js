export function login(user) {
  console.log('user in actions', user)
  return {
    type: "LOG_IN",
    payload: user
  }
}

export function logout() {
  return {
    type: "LOG_OUT"
  }
}

export function isLoading(load) {
  return {
    type: "IS_LOADING",
    payload: load
  }
}
