import axios from "axios"
const baseUrl = 'https://yaninavi.herokuapp.com/api/shops'

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