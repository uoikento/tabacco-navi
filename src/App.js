import React, { useState, useEffect, useRef } from 'react'
import Shop from './services/shops'
import Genre from './services/genres'
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/Form'
import Notification from './components/Notification'
import ToggleShow from './components/ToggleShow'
import ScrollTop from './components/ScrollTop'
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
    backgroundColor: "#fff",
    minHeight: "100vh",
  },
  bodyContainer: {
    color: "#6c584c",
    // margin: "0 auto",
    // width: "50%",
    },
  bodyContent: {
    textAlign: "center",
    fontSize: "3rem",
  },
  shopBox: {
    paddingTop: "8px",
    margin: "0 2em 2em",
    backgroundColor: "#fff",
  }
}))

const App = () => {
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
      <ThemeProvider theme={theme}>
        <div display={'none'} ref={refTop}/>
      <Header />
        <Container className={classes.bodyContainer}>
        <Notification message={errorMessage} />
        <Form postWord={postWord} genres={genres} />
        </Container>
        <div className={classes.shopBox}>
          {shops !== null
            ? (shops.length == 0
              ? <Typography className={classes.bodyContent}>Should I smoke or not, should smoke</Typography>
                : <ToggleShow shops={shops}/>)
            : <Typography className={classes.bodyContent}>Sorry! don't find shop...</Typography>
          }
        </div>
      <Footer />
      </ThemeProvider>
      <ScrollTop refTop={refTop}/>
      </div>
  )
} 

export default App;