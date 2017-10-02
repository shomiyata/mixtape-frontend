function formsReducer(state = {formOpen: false}, action){
  console.log("actions from formsReducer", action)
  switch (action.type) {
    case "TOGGLE_FORM":
      return Object.assign({}, state, {formOpen: !state.formOpen})
    default:
      return state
  }
}

export default formsReducer
