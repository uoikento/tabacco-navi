import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/areas'

const getAreas = () => {
  const getResponse = axios.get(baseUrl)
  return (
    getResponse.then(res => {
      const areas = res.data["large_area"]
      console.log(areas)
      return areas
    })
  )
}
export default { getAreas }