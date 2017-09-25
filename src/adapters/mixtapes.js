import url from './url'

class Mixtapes {

  static getMixtapes(userId, token){
    return fetch(`${url}/users/${userId}/mixtapes`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      })
    .then(res => res.json())
  }

  static getPlaylists(userId, token){
    return fetch(`${url}/users/${userId}/mixtapes/new`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      })
    .then(res => res.json())
  }

  static createPlaylist(userId, token, body){
    console.log(body)
    return fetch(`${url}/users/${userId}/mixtapes/new`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(body)
      })
    .then(res => res.json())
  }

  static getPlaylistForRecipient(mixtapeUrl){
    return fetch(`${url}/mixtapes/${mixtapeUrl}`)
    .then(res => res.json())
  }
}

export default Mixtapes
