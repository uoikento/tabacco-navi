import axios from "axios"
const baseUrl = 'http://localhost:3001'

const getShops = (keyword) => {
  const getRequest = axios.post(baseUrl, keyword )
  return (
    getRequest.then(response => {
      const data = response.data
      console.log(data)
      if (data.length === 0) {
        return console.log("kara")
      } else {
        console.log(data)
        return data
      }
    })
  )
}

// const create = searchObject => {
//   const request = axios.post(baseUrl, searchObject)
//   return request.then(response => response.data)
// }

export default { getShops }