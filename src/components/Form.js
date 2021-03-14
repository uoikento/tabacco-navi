import React,{useState} from 'react'
import KeywordForm from './KeywordForm'
import Location from './Location'
import SubmitButton from './Button'
import SelectForm from './SelectForm'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  searchForm: {
    // display: "flex",
    textAlign: "center",
  },
}))

const Form = (props) => {
  const [searchKeyword, setSearchKeyword] = useState('')
  const [searchLat, setSearchLat] = useState('')
  const [searchLng, setSearchLng] = useState('')
  const [searchGenre, setSearchGenre] = useState([])
  const classes = useStyles()

  const postWord = (e) => {
    e.preventDefault()
    props.postWord({
      keyword: searchKeyword,
      genre: searchGenre.code,
      lat: searchLat,
      lng: searchLng
    })
  }
  return (
    <div className={classes.searchForm}>
      <form onSubmit={postWord}>
        <SelectForm genres={props.genres} setSearchGenre={setSearchGenre} searchGenre={searchGenre}/>
        <KeywordForm setSearchKeyword={setSearchKeyword} searchKeyword={searchKeyword} />
        <SubmitButton />
        <Location setSearchLat={setSearchLat} setSearchLng={setSearchLng} />
      </form>
    </div>
  )
}

export default Form