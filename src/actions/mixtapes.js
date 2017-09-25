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
export function handleMixtapeSubmit(input) {
  return {
    type: "HANDLE_MIXTAPE_SUBMIT",
    payload: {
      spotifyPlaylistId: input.spotifyPlaylistId,
      playlistName: input.playlistName,
      mixtapeName: input.mixtapeName,
      senderName: input.senderName,
      mixtapeNote: input.mixtapeNote,
      sendEmail: input.sendEmail
    }
  }
}
