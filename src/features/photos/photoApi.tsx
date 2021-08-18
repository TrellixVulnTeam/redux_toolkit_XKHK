import axios from "axios"

const requestPhotoList = () => {
    const rs = axios({
      method:'get',
      url:'https://jsonplaceholder.typicode.com/photos'
    }).then(res => res.data)
    return rs
}

export const photoAPI = {
  requestPhotoList
}