import axios from "axios"
const baseUrl = 'http://localhost:3001'

const getAll = () => {
  const getRequest = axios.get(baseUrl)
  return getRequest.then(response => {
    // const responseData = response.data
    // console.log(responseData)
    console.log(response.data["results"]["shop"])
    return response.data["results"]["shop"]
  })
}

// const getFind = () => {
//   const 
// }

export default { getAll }