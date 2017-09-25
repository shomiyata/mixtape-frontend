function mixtapesReducer(state = {mixtapes: [{name: "You haven't sent any mixtapes yet!" }], playlists: [], submittedMixtape: null}, action){
  console.log('actions', action)
  switch (action.type) {
    case "SET_MIXTAPES":
      return Object.assign({}, state, {mixtapes: action.payload.mixtapes})
    case "SET_PLAYLISTS":
      return Object.assign({}, state, {playlists: action.payload})
    case "HANDLE_MIXTAPE_SUBMIT":
      return Object.assign({}, state, {submittedMixtape: action.payload})
    default:
      return state
  }
}

export default mixtapesReducer
