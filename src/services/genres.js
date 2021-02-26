import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/genres'

const getGenres = () => {
  const getResponse = axios.get(baseUrl)
  return (
    getResponse.then(res => {
      const data = res.data.genre
      // console.log(data.map(codes => codes.code))
      const genreCode = data.map(datas => ({value: datas.code, label: datas.name} ))
      console.log(genreCode)
      return genreCode
    })
  )
}
export default { getGenres }