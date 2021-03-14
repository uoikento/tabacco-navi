import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/genres'

const getGenres = () => {
  const getResponse = axios.get(baseUrl)
  return (
    getResponse.then(res => {
      const data = res.data.genre
      const genreCode = data.map(datas => ({code: datas.code, label: datas.name} ))
      // console.log(genreCode)
      return genreCode
    })
  )
}
export default { getGenres }