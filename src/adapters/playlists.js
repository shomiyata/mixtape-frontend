import url from './url'

class Playlists {

  static createNewPlaylist(body, userId, token){
    return fetch(`${url}/users/${userId}/playlists/new`,
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

}

export default Playlists
