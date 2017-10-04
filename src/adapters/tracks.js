import url from './url'

class Tracks {

  static getTracks(mixtapeId, token){
    return fetch(`${url}/mixtapes/${mixtapeId}/tracks`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      })
    .then(res => res.json())
  }

  static addTracks(mixtapeId, token, body){
    return fetch(`${url}/mixtapes/${mixtapeId}/tracks`,
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

  static searchTracks(searchQuery, token){
    return fetch(`${url}/tracks/${searchQuery}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
  }


  // static createPlaylist(userId, token, body){
  //   console.log(body)
  //   return fetch(`${url}/users/${userId}/mixtapes/new`,
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Authorization': `Bearer ${token}`,
  //         'Content-Type': 'application/json'
  //       },
  //       mode: 'cors',
  //       body: JSON.stringify(body)
  //     })
  //   .then(res => res.json())
  // }
  //
  // static getPlaylistForRecipient(mixtapeUrl){
  //   return fetch(`${url}/mixtapes/${mixtapeUrl}`)
  //   .then(res => res.json())
  // }
  //
  // static buildPlaylist(userId, body, token){
  //   return fetch(`${url}/users/${userId}/permissions/new`,
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Authorization': `Bearer ${token}`,
  //         'Content-Type': 'application/json'
  //       },
  //       mode: 'cors',
  //       body: JSON.stringify(body)
  //     })
  //   .then(res => res.json())
  // }
}

export default Tracks
