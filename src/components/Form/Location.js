import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import LocationOffIcon from '@material-ui/icons/LocationOff'
import Snackbar from '@material-ui/core/Snackbar'
// import CircularProgress from '@material-ui/core/CircularProgress'
import Alert from '@material-ui/lab/Alert'
// import { createMuiTheme } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { CircleLoading } from 'react-loadingg'

const useStyles = makeStyles(() => ({
  box: {
    
  },
  resetButton: {
    color: "#b7094c",
    textTransform: "none",
    height: "100%",
    padding: "unset",
  },
  getButton: {
    color: "#0091ad",
    textTransform: "none",
    height: "100%",
    padding: "unset",
  },
  progress: {
    color: "#0091ad",
    // margin: 0,
    top: 'auto',
    bottom: "50%",
    left: 'auto',
    right: "50%",
    position: 'fixed',
    zIndex: 2,
  }
})) 

const Location = (props) => {
  console.count("locate")
  const classes = useStyles()
  const [loadingState, setLoadingState] = useState('default')
  const [state, setState] = useState(false)

  const handleSearchLocation = () => {
    setLoadingState('loading')
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
        const lat = position.coords.latitude
        const lng = position.coords.longitude
        props.setSearchLat(lat)
        props.setSearchLng(lng)
      setLoadingState('get')
      setState(true)
    })
  }
  const handleDeleteLocation = () => {
    props.setSearchLat('')
    props.setSearchLng('')
    setLoadingState('default')
    setState(true)
  }

  const handleClose = () => {
    setState(false)
  }
  setTimeout(handleClose, 5000)

  return (
    <div className={classes.box}>
        {loadingState !== 'default'
          && (loadingState == 'loading'
          ? <CircleLoading className={classes.progress}/>
            : (loadingState == 'get'
              ? <Snackbar
                open={state}
                onClose={handleClose}
                message="位置情報を取得しました"
                key={loadingState}
                />
              : <Alert severity="error">（Failed）取得に失敗しました 位置情報の設定を確認後、再度実行をお願いいたします。</Alert>
            )
          )
        }
        {props.searchLat !== ''
        ? <Button className={classes.resetButton} onClick={handleDeleteLocation}>
            <LocationOffIcon color="error" />
            <Typography variant="h5">Reset Locate</Typography>
          </Button>
        : <Button className={classes.getButton} onClick={handleSearchLocation}>
            <LocationOnIcon />
            <Typography variant="h5">Get Locate</Typography>
            {state && <Snackbar open={state} onClose={handleClose} message="位置情報を削除しました" key={loadingState} />}
          </Button>
          }
    </div>
  )
}

export default Location