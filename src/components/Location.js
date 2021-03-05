import React, { useState } from 'react'

const Location = (props) => {
  const [visible, setVisible] = useState(false)

  const hideVisible = { display: visible ? 'none': '' }
  const showVisible = { display: visible ? '' : 'none' }

  const handleSearchLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
        const lat = position.coords.latitude
        const lng = position.coords.longitude
        props.setSearchLat(lat)
        props.setSearchLng(lng)
        setVisible(!visible)
    })
  }
  const handleDeleteLocation = () => {
    props.setSearchLat('')
    props.setSearchLng('')
    setVisible(!visible)
  }

  return (
    <div>
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
    </div>
  )
}

export default Location