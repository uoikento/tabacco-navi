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
    // margin: "0 auto",
    // width: "50%",
    // textAlign: "center",
  },
  Form: {
    textAlign: "center",
  },
  buttonStyle: {
    // display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    // width: "15em",
  },
  button: {
    backgroundColor: '#E0794C',
    color: "#6c584c",
    marginTop: '8px',
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
      <form onSubmit={postWord} className={classes.Form}>
        <SelectForm genres={props.genres} setSearchGenre={setSearchGenre} searchGenre={searchGenre}/>
        <KeywordForm setSearchKeyword={setSearchKeyword} searchKeyword={searchKeyword} />
        <Location setSearchLat={setSearchLat} setSearchLng={setSearchLng} searchLat={searchLat}/>
        <div className={classes.buttonStyle}>
          <SubmitButton /> &nbsp;
          <Button variant='contained' onClick={deleteForm} className={classes.button}>
            Delete
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Form