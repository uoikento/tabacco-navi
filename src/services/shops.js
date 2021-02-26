import axios from "axios"
const baseUrl = 'http://localhost:3001/api/shops'

const getShops = (keyword) => {
  const getRequest = axios.post(baseUrl, keyword )
  return (
    getRequest.then(response => {
      const data = response.data
      // console.log(data)
      return data
    })
  )
}
export default { getShops }