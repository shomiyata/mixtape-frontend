export function login(user) {
  console.log('user in actions', user)
  return {
    type: "LOG_IN",
    payload: user
  }
}

export function logout(user) {
  return {
    type: "LOG_OUT",
    payload: user
  }
}
