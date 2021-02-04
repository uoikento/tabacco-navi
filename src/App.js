import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import './index.css'
import Shop from './services/shops'

const App = () => {
  const [shops, setShops] = useState([])
  console.log(shops)
  useEffect(() => {
    console.log('effect')
    Shop.getAll()
      .then(firstShops => {
        setShops(firstShops)
      })
  }, [])
  
  return (
    <div>
      <p>hello</p>
      <ul>
        {shops.map(a => a.name)}
      </ul>
      <TextField >
        Hello World
      </TextField>
    </div>
  )
}

export default App;

