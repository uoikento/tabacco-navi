import React, { useState, useEffect, useRef } from 'react'
import Shop from './services/shops'
import Genre from './services/genres'
import Header from './components/Atoms/Header'
import Footer from './components/Atoms/Footer'
import Notification from './components/Atoms/Notification'
import ScrollTop from './components/Atoms/ScrollTop'
import Form from './components/Form'
import ToggleShow from './components/ToggleShow'
import TopImage from './components/TopImage'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'
import './App.css'

const font = "'Corben', sans-serif"
const theme = createMuiTheme({
  typography: {
    fontFamily: font,
  },
})

const useStyles = makeStyles(() => ({
  root: {
    // backgroundColor: "#fefae0",
    minHeight: "100vh",
  },
  bodyContainer: {
    color: "#6c584c",
    marginTop: "2em",
    },
  bodyContent: {
    textAlign: "center",
    // fontSize: "3rem",
  },
  shopBox: {
    paddingTop: "8px",
    margin: "0 2em 6em",
    // backgroundColor: "#fefae0",
  }
}))

const App = () => {
  console.log("app")
  const [shops, setShops] = useState([])
  const [genres, setGenres] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const refTop = useRef()
  const classes = useStyles()
  
  useEffect(() => {
    Genre
      .getGenres()
      .then(allLocates => {
        setGenres(allLocates)
        // console.log(genres)
    })
  }, [])
  
  const postWord = (searchObject) => {
    console.log(searchObject)
    Shop
      .getShops(searchObject)
      .then(searchShops => {
        // console.log(searchShops)
        const smoke = searchShops.filter(shop => shop.non_smoking !== "全面禁煙")
        if (smoke.length === 0) {
          setShops(null)
        } else {
          setShops(smoke)
        }
        const non = smoke.map(smoke => smoke.non_smoking)
        console.log(non)
      })
      .catch(error => {
        setErrorMessage(
          'Please include at least one condition.'
        )
        setTimeout(() => {
          setErrorMessage(null)
        },5000)
      })
  }
  
  return (
    <div className={classes.root} >
      <div display={'none'} ref={refTop}/>
      {/* <Header /> */}
        <Container className={classes.bodyContainer}>
          <Notification message={errorMessage} />
          <Form postWord={postWord} genres={genres} />
        </Container>
        <div className={classes.shopBox}>
          {shops !== null
            ? (shops.length !== 0
              && <ToggleShow shops={shops}/>)
            : <Typography className={classes.bodyContent}>Sorry! don't find shop...</Typography>
          }
        </div>
      <Footer />
      <ScrollTop refTop={refTop} />
      </div>
  )
} 

export default App;