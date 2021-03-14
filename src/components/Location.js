import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: '8px',
  },
  button: {
    backgroundColor: '#004d40',
  },
})) 

const Location = (props) => {
  const classes = useStyles()
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
    <div className={classes.box}>
      <div style={hideVisible}>
        <Button variant='contained' color='primary' id='getLocation' className={classes.button} onClick={handleSearchLocation}>
              位置情報取得
        </Button>
      </div>
      <div style={showVisible}>
        <Button variant='contained' color='primary' id='getLocation' className={classes.button} onClick={handleDeleteLocation}>
              位置情報削除
        </Button>
      </div>
    </div>
  )
}

export default Location