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


export function handleMixtapeSubmit(mixtape) {
  return {
    type: "HANDLE_MIXTAPE_SUBMIT",
    payload: mixtape
  }
}
