import React, { useState, useEffect } from 'react'
import Shop from './services/shops'
import Genre from './services/genres'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchForm from './components/SearchForm'
import Show from './components/Show'
import Location from './components/Location'
import SubmitButton from './components/Button'
import SelectForm from './components/SelectForm'
import SearchState from './components/SearchState'
import Box from '@material-ui/core/Box'
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

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  bodyContainer: {
    color: "#004d40",
  },
  searchForm: {
    // display: "flex",
    textAlign: "center",
  },
  shopBox: {
    marginBottom: '8px',
  }
}))

const App = () => {
  const [shops, setShops] = useState([])
  const [genres, setGenres] = useState([])
  const [searchKeyword, setSearchKeyword] = useState('')
  const [searchLat, setSearchLat] = useState('')
  const [searchLng, setSearchLng] = useState('')
  const [searchGenre, setSearchGenre] = useState('')
  const classes = useStyles()

  useEffect(() => {
    Genre
      .getGenres()
      .then(allLocates => {
        setGenres(allLocates)
        // console.log(genres)
    })
  }, [])
  
  const postWord = (e) => {
    e.preventDefault()
    const searchObject = {
      keyword: searchKeyword,
      genre: searchGenre.code,
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
      .then()
      // .then(setSearchKeyword(''))
  }

  return (
    <Box className={classes.root}>
        <ThemeProvider theme={theme}>
      <Header />
      <Container className={classes.bodyContainer}>
        <div className={classes.searchForm}>
          <SearchState searchKeyword={searchKeyword} searchLat={searchLat} searchLng={searchLng} searchGenre={searchGenre}/>
          <SelectForm genres={genres} setSearchGenre={setSearchGenre} searchGenre={searchGenre}/>
          <form onSubmit={postWord}>
            <SearchForm setSearchKeyword={setSearchKeyword} searchKeyword={searchKeyword} />
            <SubmitButton searchKeyword={searchKeyword} searchGenre={searchGenre} searchLat={searchLat}/>
          </form>
          <Location setSearchLat={setSearchLat} setSearchLng={setSearchLng} />
        </div>
        <div className={classes.shopBox}>
          {shops !== null
            ? (shops.length == 0
              ? <p>ヤニ切れ</p>
              :<Show shops={shops} />)
            : <p>該当するお店を見つけることが出来ませんでした。。。</p>
          }
        </div>
      </Container>
        <Footer />
        </ThemeProvider>
      </Box>
  )
}

export default App;