function authReducer(state = {currentUserId: null, currentUsername: null, loggedIn: false, isLoading: (localStorage.getItem("loading") == 'true')}, action){
  console.log("auth reducer, action", action.payload)
  switch (action.type) {
    case "LOG_IN":
      return Object.assign({}, state, {currentUserId: action.payload.id, currentUsername: action.payload.spotify_user_id, loggedIn: true})
    case "LOG_OUT":
      localStorage.removeItem('token')
      return Object.assign({}, state, {currentUserId: null, currentUsername: null, loggedIn: false})
    case "IS_LOADING":
      console.log('setting loading', action.payload)
      return Object.assign({}, state, {isLoading: action.payload})
    default:
      return state
  }
}

export default authReducer
