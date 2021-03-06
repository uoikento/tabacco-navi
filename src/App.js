import React, { useState, useEffect, useRef } from 'react'
import Shop from './services/shops'
import Genre from './services/genres'
import Footer from './components/Accessories/Footer'
import Notification from './components/Accessories/Notification'
import ScrollTop from './components/Accessories/ScrollTop'
import LoadingSkelton from './components/Accessories/LoadingSkelton'
import Form from './components/Form'
import ToggleShow from './components/ToggleShow'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'
import './App.css'

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    // backgroundColor: "#cecece",
    // opacity: "0.6",
    // backgroundSize: "12px 12px",
    // backgroundImage: repeating-linear-gradient("0deg", "#bababa", "#bababa 0.6000000000000001px", "#cecece 0.6000000000000001px", "#cecece")
  },
  bodyContainer: {
    color: "#6c584c",
    marginTop: "2em",
    },
  bodyContent: {
    textAlign: "center",
  },
  shopBox: {
    paddingTop: "8px",
    margin: "0 2em 4em",
  },
  about: {
    '@media (max-width:560px)': {
      marginBottom: "0em",
      marginTop: "2em",
    },
    marginTop: "8em",
    marginBottom: "12em",
    textAlign: "center",
  },
  skelton: {
    margin: "0 auto",
    minHeight: "300px",
    width: "50%",
    minWidth: "100px",
  },
}))

const App = () => {
  console.count("app")
  const [shops, setShops] = useState([])
  const [shopState, setShopState] = useState('default')
  const [genres, setGenres] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const refTop = useRef()
  const classes = useStyles()
  const theme = createMuiTheme()
  const font = "'Corben', sans-serif"
  const themeFontFamily = createMuiTheme({
    typography: {
      fontFamily: font,
    }
  })
  theme.typography.h6 = {
  fontSize: '0.5rem',
  '@media (min-width:600px)': {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.0rem',
    },
  }
  theme.typography.h5 = {
    fontSize: '0.5rem',
    '@media (min-width:600px)': {
      fontSize: '0.9rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
    },
  }

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
    setShopState('loading')
    Shop
      .getShops(searchObject)
      .then(searchShops => {
        // console.log(searchShops)
        const smoke = searchShops.filter(shop => shop.non_smoking !== "全面禁煙"&&shop.non_smoking !=="未確認")
        if (smoke.length === 0) {
          setShops(null)
          setShopState('get')
        } else {
          setShops(smoke)
          setShopState('get')
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
        }, 5000)
        setShops([])
        setShopState('get')
      })
  }
  
  return (
    <div className={classes.root} >
      <div display={'none'} ref={refTop}/>
      {/* <Header /> */}
      <ThemeProvider theme={themeFontFamily}>
      <ThemeProvider theme={theme}>
        <Container className={classes.bodyContainer}>
          <Notification message={errorMessage} />
          <Form postWord={postWord} genres={genres} />
        </Container>
        <div className={classes.shopBox}>
          {shopState !== 'default'
            ? (shopState == 'loading')
              ?  <LoadingSkelton/>
              : (shopState == 'get'
                  && (shops !== null
                  ? (shops.length !== 0
                      && <ToggleShow shops={shops} />
                    )
                  : <Typography variant="h6" className={classes.bodyContent}>Sorry! don't find shop...</Typography>
                )
                )
              : <div className={classes.about}>
                  <Typography variant="h6">
                    喫煙できてwifiのあるカフェの快適さや、<br />
                    喫煙しながら飲むお酒の美味しさを知っている方が、ご利用していただくアプリです。<br />
                  </Typography>
                </div>
            }
        </div>
        <Footer />
        </ThemeProvider>
        </ThemeProvider>
      <ScrollTop refTop={refTop} />
      </div>
  )
} 

export default App;