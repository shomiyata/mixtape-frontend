class Auth {

  static decipherCode(props){
    return props.location.search.split("=")[1]
  }

  static login(userPayload){
    return fetch('http://localhost:3000/api/v1/users/create',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        mode: 'cors',
        body: JSON.stringify(userPayload)
      })
    .then(res => res.json())
  }

  static me(){
    const jwtToken = localStorage.getItem('token')
    return fetch('http://localhost:3000/api/v1/me',{
      headers:{
        "Authorization":`Bearer ${jwtToken}`,
        "Accept":"application/json"
      }
    })
    .then(res => res.json())
  }

  static logOut(){
    localStorage.removeItem('token')
  }
}

export default Auth
