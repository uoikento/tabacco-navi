import React,{useState} from 'react'
import KeywordForm from './Form/KeywordForm'
import Location from './Form/Location'
import SubmitButton from './Form/SubmitButton'
import SelectForm from './Form/SelectForm'
import SearchState from './SearchState'
import GetArea from './GetArea'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  searchForm: {
    textAlign: "center",
  },
  Form: {
  },
  buttonStyle: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    backgroundColor: '#E0794C',
    color: "#6c584c",
    marginTop: '8px',
  },
}))

const Form = (props) => {
  console.log("Form")
  const [searchKeyword, setSearchKeyword] = useState('')
  const [searchLat, setSearchLat] = useState('')
  const [searchLng, setSearchLng] = useState('')
  const [searchGenre, setSearchGenre] = useState([])
  const [selectMiddle, setSelectMiddle] = useState([])
  const [drawState, setDrawState] = useState(false)
  const classes = useStyles()
  const middleCode = selectMiddle.map(selectMiddle => selectMiddle.code)
  // console.log(middleCode)
  const postWord = (e) => {
    e.preventDefault()
    props.postWord({
      keyword: searchKeyword,
      genre: searchGenre.code,
      lat: searchLat,
      lng: searchLng,
      middle_area: middleCode 
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
      <SearchState searchKeyword={searchKeyword} searchLat={searchLat} searchGenre={searchGenre}/>
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
        <Button onClick={() => setDrawState(true)}>Select Area</Button>
        <Drawer open={drawState} onClose={() => setDrawState(false)}>
          <GetArea selectMiddle={selectMiddle} setSelectMiddle={setSelectMiddle}/>
        </Drawer>
      </form>
    </div>
  )
}

export default Form