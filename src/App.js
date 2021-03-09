import React, { useState, useEffect } from 'react'
// import './index.css'
import Shop from './services/shops'
import Genre from './services/genres'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import Show from './components/Show'
import Location from './components/Location'
import SubmitButton from './components/Button'
import SelectForm from './components/Select'
import { Box } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const App = () => {
  const [shops, setShops] = useState([])
  const [searchKeyword, setSearchKeyword] = useState('')
  const [genres, setGenres] = useState([])
  const [searchLat, setSearchLat] = useState('')
  const [searchLng, setSearchLng] = useState('')
  const [searchGenre, setSearchGenre] = useState('')

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
      genre: searchGenre.value,
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
      // .then(setSearchKeyword(''))
  }

  return (
    <Box >
      <Header />
      <form onSubmit={postWord}>
        <SearchForm setSearchKeyword={setSearchKeyword} searchKeyword={searchKeyword} />
        <SubmitButton searchKeyword={searchKeyword} searchGenre={searchGenre} setSearchLat={searchLat}/>
      </form>
      <Location setSearchLat={ setSearchLat } setSearchLng={setSearchLng}/>
      <SelectForm genres={genres} setSearchGenre={setSearchGenre} searchGenre={searchGenre}/>
      <div>
        {shops !== null
          ? (shops.length == 0
            ? <p>ヤニ切れ</p>
            :<Show shops={shops} />)
          : <p>該当するお店を見つけることが出来ませんでした。。。</p>
        }
      </div>
    </Box>
  )
}

export default App;