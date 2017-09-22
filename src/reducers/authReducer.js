function authReducer(state = {currentUserId: null, currentUsername: null, loggedIn: false}, action){

  switch (action.type) {
    case "LOG_IN":
      return Object.assign({}, state, {currentUserId: action.payload.id, currentUsername: action.payload.spotify_user_id, loggedIn: true})
    case "LOG_OUT":
      localStorage.removeItem('token')
      return Object.assign({}, state, {currentUserId: null, currentUsername: null, loggedIn: false})
    default:
      return state
  }

}

export default authReducer
