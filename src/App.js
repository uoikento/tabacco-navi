import React, { useState } from 'react'
import './index.css'
import Shop from './services/shops'
import Show from './components/Show';

const App = () => {
  const [shops, setShops] = useState([])
  // const [showShops, setShowShop] = useState([])
  const [searchKeyword, setSearchKeyword] = useState('')
  const [searchLat, setSearchLat] = useState('')
  const [searchLng, setSearchLng] = useState('')

  const postWord = (e) => {
    e.preventDefault()
    const searchObject = {
      keyword: searchKeyword,
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
      .then(setSearchKeyword(''))
  }
  const handleSearchChange = (event) => {
    // console.log(event.target.value)
    setSearchKeyword(event.target.value)
  }
  const handleSearchLocation = () => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
        const lat = position.coords.latitude
        const lng = position.coords.longitude
        setSearchLat(lat)
        setSearchLng(lng)
      })
  }
  const handleDeleteLocation = () => {
    setSearchLat('')
    setSearchLng('')
  }
  
  // const showbody = () => {
    
  // }

  return (
    <div>
      <p>hello</p>
      {shops !== null
        ? (shops.length == 0
          ? <p>やにやに</p>
          :<Show shops={shops} />)
        : <p>該当するお店を見つけることが出来ませんでした。。。</p>
      }
        <form onSubmit={postWord}>
          <input
            value={searchKeyword}
          onChange={handleSearchChange}
          placeholder="キーワード"
          />
          <button type="submit">検索</button>
      </form>
      <button id='getLocation' onClick={handleSearchLocation}>
        位置情報取得
      </button>
      <button onClick={handleDeleteLocation}>
        位置情報削除
      </button>
    </div>
  )
}

export default App;