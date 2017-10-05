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

  static buildPlaylist(body, token){
    return fetch(`${url}/mixtapes/build`,
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

  static getLastMixtapesSent(){
    return fetch(`${url}/mixtapes/feed`)
    .then(res => res.json())
  }

}

export default Mixtapes
