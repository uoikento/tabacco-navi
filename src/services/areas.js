import axios from 'axios'

const baseUrl = 'https://yaninavi.herokuapp.com/api/areas'
// const baseUrl = 'http://localhost:3001/api/areas'

const getAreas = (object) => {
  const getRequest = axios.post(baseUrl, object)
  return (
    getRequest.then(response => {
      const data = response.data.middle_area
      // console.log(data)
      return data
    })
  ) 
}
export default { getAreas }