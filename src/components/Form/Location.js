import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import GpsNotFixedIcon from '@material-ui/icons/GpsNotFixed'
import GpsOffIcon from '@material-ui/icons/GpsOff';
import Snackbar from '@material-ui/core/Snackbar'
import CircularProgress from '@material-ui/core/CircularProgress'
import Alert from '@material-ui/lab/Alert'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const Theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: "#fff",
        },
      },
    },
  })
const deleteTheme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        backgroundColor:"#5D8017",
      },
    },
  },
})
const useStyles = makeStyles(() => ({
  box: {
    marginTop: '8px',
  },
  button: {
    // margin: 0,
    // top: 'auto',
    // right: 20,
    // bottom: 140,
    // left: 'auto',
    // position: 'fixed',
    // zIndex: 2,
  },
})) 

const Location = (props) => {
  const classes = useStyles()
  const [locateState, setLocateState] = useState('default')
  // const [visible, setVisible] = useState(false)
  const [state, setState] = useState(false)

  // const hideVisible = { display: visible ? 'none': '' }
  // const showVisible = { display: visible ? '' : 'none' }

  const handleSearchLocation = () => {
    setLocateState('lodding')
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
        const lat = position.coords.latitude
        const lng = position.coords.longitude
        props.setSearchLat(lat)
        props.setSearchLng(lng)
      setLocateState('get')
      setState(true)
    })
  }
  const handleDeleteLocation = () => {
    props.setSearchLat('')
    props.setSearchLng('')
    setLocateState('default')
  }

  const handleClose = () => {
    setState(false)
  }
  setTimeout(handleClose, 5000)

  return (
    <div className={classes.box}>
      <div>
        {locateState !== 'default'
          && (locateState == 'lodding'
            ? <CircularProgress />
            : (locateState == 'get'
              ? <Snackbar
                open={state}
                onClose={handleClose}
                message="位置情報を取得しました"
                key={locateState}
                />
              : <Alert severity="error">（Failed）取得に失敗しました 位置情報の設定を確認後、再度実行をお願いいたします。</Alert>
            )
          )
        }
      </div>
        {props.searchLat !== ''
        ? <MuiThemeProvider theme={Theme}>
            <Button className={classes.button}  onClick={handleDeleteLocation}>
              <GpsNotFixedIcon />
            </Button>
          </MuiThemeProvider>
        : <MuiThemeProvider theme={deleteTheme}>
            <Button className={classes.button} onClick={handleSearchLocation}>
              <GpsOffIcon color="error" />
            </Button>
          </MuiThemeProvider>
          }
      {/* <div style={hideVisible}>
        <Button variant='contained' color='primary' id='getLocation' className={classes.button} onClick={handleSearchLocation}>
              位置情報取得
        </Button>
      </div>
      <div style={showVisible}>
        <Button variant='contained' color='primary' id='getLocation' className={classes.button} onClick={handleDeleteLocation}>
              位置情報削除
        </Button>
      </div> */}
    </div>
  )
}

export default Location