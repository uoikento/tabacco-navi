import React, { useState, useEffect } from 'react'
import './index.css'
import Shop from './services/shops'
import Genre from './services/genres'
import Header from './components/Header'
import Show from './components/Show'
import Select from 'react-select'

const App = () => {
  const [shops, setShops] = useState([])
  const [genres, setGenres] = useState([])
  const [searchKeyword, setSearchKeyword] = useState('')
  const [searchLat, setSearchLat] = useState('')
  const [searchLng, setSearchLng] = useState('')
  const [searchGenre, setSearchGenre] = useState('')
  const [visible, setVisible] = useState(false)

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
  const handleSearchKeywordChange = (e) => {
    setSearchKeyword(e.target.value)
  }

  const handleSearchLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
        const lat = position.coords.latitude
        const lng = position.coords.longitude
        setSearchLat(lat)
        setSearchLng(lng)
        setVisible(!visible)
      })
  }
  const handleDeleteLocation = () => {
    setSearchLat('')
    setSearchLng('')
    setVisible(!visible)
  }
  const hideVisible = { display: visible ? 'none': '' }
  const showVisible = {display: visible ? '': 'none'}

  return (
    <div>
      <Header />
      <form onSubmit={postWord}>
        <input
          value={searchKeyword}
        onChange={handleSearchKeywordChange}
        placeholder="キーワード"
        />
        <button type="submit">
          keyword:（{searchKeyword}）
          {/* genre: （{searchGenre.label}） */}
          location:{searchLat== ''
            ? "地名"
            : "現在地"
          }
          <br />
          検索
        </button>
      </form>
      <div style={hideVisible}>
        <button id='getLocation' onClick={handleSearchLocation}>
          位置情報取得
        </button>
      </div>
      <div style={showVisible}>
        <button onClick={handleDeleteLocation}>
          位置情報削除
        </button>
      </div>
      <Select options={genres} defaultValue={searchGenre} onChange={setSearchGenre} isClearable={true}/>
      <div>
        {shops !== null
          ? (shops.length == 0
            ? <p>ヤニ切れ</p>
            :<Show shops={shops} />)
          : <p>該当するお店を見つけることが出来ませんでした。。。</p>
        }
      </div>
    </div>
  )
}

export default App;