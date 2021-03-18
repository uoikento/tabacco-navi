import React,{useState} from 'react'
import KeywordForm from './Form/KeywordForm'
import Location from './Form/Location'
import SubmitButton from './Form/SubmitButton'
import SelectForm from './Form/SelectForm'
import Button from '@material-ui/core/Button'
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
  const deleteForm = () => {
    setSearchKeyword('')
    setSearchGenre('')
    setSearchLat('')
    setSearchLng('')
  }

  return (
    <div className={classes.searchForm}>
      <form onSubmit={postWord}>
        <SelectForm genres={props.genres} setSearchGenre={setSearchGenre} searchGenre={searchGenre}/>
        <KeywordForm setSearchKeyword={setSearchKeyword} searchKeyword={searchKeyword} />
        <SubmitButton />
        <Location setSearchLat={setSearchLat} setSearchLng={setSearchLng} searchLat={searchLat}/>
      </form>
      <Button onClick={deleteForm}>delete</Button>
    </div>
  )
}

export default Form