import React, { useState, useEffect, useRef } from 'react'
import Shop from './services/shops'
import Genre from './services/genres'
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/Form'
import ToggleShow from './components/ToggleShow'
import ScrollTop from './components/ScrollTop'
import SearchState from './components/SearchState'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
// import Fab from '@material-ui/core/Fab'
// import Button from '@material-ui/core/Button'
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

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  bodyContainer: {
    color: "#004d40",
  },
  shopBox: {
    marginBottom: '8px',
  }
}))

const App = () => {
  const [shops, setShops] = useState([])
  const [genres, setGenres] = useState([])
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
        // console.log(smoke)
      })
      .catch(error => {
        console.error('error')
      })
  }

  // const scrollTop = () => {
  //   console.log(refTop.current)
  //   const { top } = refTop.current.getBoundingClientRect()
  //   window.scrollTo({
  //     top: top ,
  //     behavior: "smooth"
  //   })
  // }
  return (
    <Box className={classes.root} >
      <ThemeProvider theme={theme}>
        <div display={'none'} ref={refTop}/>
      <Header />
      <Container className={classes.bodyContainer}>
          {/* <SearchState searchKeyword={searchKeyword} searchLat={searchLat} searchLng={searchLng} searchGenre={searchGenre}/> */}
        <Form postWord={postWord} genres={genres} />
        <div className={classes.shopBox}>
          {shops !== null
            ? (shops.length == 0
              ? <p>ヤニ切れ</p>
                : <ToggleShow shops={shops}/>)
            : <p>該当するお店を見つけることが出来ませんでした。。。</p>
          }
        </div>
        </Container>
      <Footer />
      </ThemeProvider>
      <ScrollTop refTop={refTop}/>
        {/* <Button variant='contained' color='primary' onClick={scrollTop}/> */}
      </Box>
  )
} 

export default App;