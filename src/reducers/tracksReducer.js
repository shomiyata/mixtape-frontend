function tracksReducer(state = {tracks: []}, action){
  console.log('actions', action)
  switch (action.type) {
    case "SET_TRACKS":
      return Object.assign({}, state, {tracks: action.payload})
    default:
      return state
  }
}

export default tracksReducer
