import React, { useState, useEffect } from 'react'
import './index.css'
import Shop from './services/shops'

const App = () => {
  const [shops, setShops] = useState([])
  const [searchWord, setSearchWord] = useState('')
  // console.log(shops)

  // useEffect(() => {
  //   console.log('effect')
  //   Shop.getShops()
  //     .then(searchShops => {
  //       setShops(searchShops)
  //     })
  // }, [])
  // const yakiniku = "YAKINIKU MITSUKUNI 焼肉 ミツクニ 光肉"
  // const shop = shops.filter(s => s.name == yakiniku)
  // console.log(shop)

  const postWord = (e) => {
    e.preventDefault()
    const searchObject = {
      keyword: searchWord
    }
    console.log(searchObject)
    Shop
      .getShops(searchObject)
      .then(searchShops => {
        setShops(searchShops)
      })
      .then(setSearchWord(''))
  }
  const handleSearchChange = (event) => {
    // console.log(event.target.value)
    setSearchWord(event.target.value)
  }
  return (
    <div>
      <p>hello</p>
        {(() => {
          if (shops.length === 0) {
            return <p>naiyo</p>
          } else {
            return <ul>{shops.map(s => s.name)}</ul>
          }
        })()}
        <form onSubmit={postWord}>
          <input
            value={searchWord}
            onChange={handleSearchChange}
        />
          <button type="submit">save</button>
        </form>
    </div>
  )
}

export default App;