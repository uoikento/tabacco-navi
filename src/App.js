import React, { useState, useEffect } from 'react'
// import './index.css'
import Shop from './services/shops'
import Genre from './services/genres'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import Show from './components/Show'
import Location from './components/Location'
import Select from 'react-select'
import { Box } from '@material-ui/core'

const App = () => {
  const [shops, setShops] = useState([])
  const [searchKeyword, setSearchKeyword] = useState('')
  const [genres, setGenres] = useState([])
  const [searchLat, setSearchLat] = useState('')
  const [searchLng, setSearchLng] = useState('')
  const [searchGenre, setSearchGenre] = useState('')

  useEffect(() => {
    Genre
      .getGenres()
      .then(allLocates => {
        setGenres(allLocates)
        // console.log(genres)
    })
  }, [])
  
  const postWord = (e) => {
    e.preventDefault()
    const searchObject = {
      keyword: searchKeyword,
      genre: searchGenre.value,
      lat: searchLat,
      lng: searchLng
    }
    // console.log(searchObject)
    Shop
      .getShops(searchObject)
      .then(searchShops => {
        const smoke = searchShops.filter(shop => shop.non_smoking !== "全面禁煙")
        if (smoke.length === 0) {
          setShops(null)
        } else {
          setShops(smoke)
        }
        // console.log(smoke)
      })
      // .then(setSearchKeyword(''))
  }

  return (
    <Box >
      <Header />
      <form onSubmit={postWord}>
        <SearchForm setSearchKeyword={setSearchKeyword} searchKeyword={searchKeyword}/>
        <button type="submit">
          keyword:（{searchKeyword}）
          genre: （{searchGenre.label}）
          location:{searchLat== ''
            ? "地名"
            : "現在地"
          }
          <br />
          検索
        </button>
      </form>
      <Location setSearchLat={ setSearchLat } setSearchLng={setSearchLng}/>
      <Select options={genres} defaultValue={searchGenre} onChange={setSearchGenre} isClearable={true}/>
      <div>
        {shops !== null
          ? (shops.length == 0
            ? <p>ヤニ切れ</p>
            :<Show shops={shops} />)
          : <p>該当するお店を見つけることが出来ませんでした。。。</p>
        }
      </div>
    </Box>
  )
}

export default App;