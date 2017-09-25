export function setMixtapes(mixtapes) {
  return {
    type: "SET_MIXTAPES",
    payload: mixtapes
  }
}

export function setPlaylists(playlists) {
  return {
    type: "SET_PLAYLISTS",
    payload: playlists
  }
}

//just set state
export function handleMixtapeSubmit(e) {
  console.log(e)
  return {
    type: "HANDLE_MIXTAPE_SUBMIT",
    payload: e
  }
}
