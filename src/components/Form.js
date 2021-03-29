import React, { useState } from 'react'
import Yani from './Atoms/image/tanyani.jpeg'
import KeywordForm from './Form/KeywordForm'
import Location from './Form/Location'
import SubmitButton from './Form/SubmitButton'
import SelectGenre from './Form/SelectGenre'
import SearchState from './Form/SearchState'
import GetArea from './Form/GetArea'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import GpsNotFixedIcon from '@material-ui/icons/GpsNotFixed'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Paper } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  searchForm: {
    // margin: "0 10%",
  },
  header: {
    maxHeight: "20vh",
    display: "flex",
    // marginLeft: "auto",
  },
  locate: {
    display: "flex",
    marginLeft: "auto",
  },
  title: {
    // backgroundImage: `url(${Yani})`,
    // backgroundRepeat: "no-repeat",
    // color: "#e63946",
    objectFit: "cover",
    width: "30%",
    textAlign: "center",
    marginLeft: "35%",
  },
  Form: {
    display: "flex",
    textAlign: "center",
    paddingLeft: "15%",
    // marginRight: "auto",
    maxHeight: "10%",
  },
  paper: {
    // backgroundColor: "#ddd",
    borderRadius: 4,
    display: "flex",
    minWidth: "80%",
  },
  selectAreaButton: {
    backgroundColor: "#fff",
    color: "#5c4d7d",
    textTransform: "none",
    padding: "unset",
  },
  buttonStyle: {
    minWidth: "5%",
    marginLeft: "auto",
    marginTop: '8px',
  },
  deleteButton: {
    // backgroundColor: '#E0794C',
    color: "#6c584c",
    marginTop: '8px',
    minWidth: "5%",
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
    setSearchLat('')
    setSearchLng('')
    setSearchGenre([])
    setSelectMiddle([])
  }

  return (
    <div className={classes.searchForm}>
      <div className={classes.header}>
        <div><p></p></div>
        <div className={classes.locate}>
          <Button className={classes.selectAreaButton} onClick={() => setDrawState(true)}>
            <GpsNotFixedIcon />
            <Typography>Select Area</Typography>
          </Button>
          <Location setSearchLat={setSearchLat} setSearchLng={setSearchLng} searchLat={searchLat} />
        </div>
      </div>
      {/* <SearchState searchKeyword={searchKeyword} searchLat={searchLat} searchGenre={searchGenre} /> */}
      {/* <div className={classes.title} > */}
        <img src={Yani} className={classes.title}/>
      {/* </div> */}
      <form onSubmit={postWord} className={classes.Form}>
        <Paper className={classes.paper}>
          <SelectGenre genres={props.genres} setSearchGenre={setSearchGenre} searchGenre={searchGenre}/>
          <KeywordForm setSearchKeyword={setSearchKeyword} searchKeyword={searchKeyword} />
          <div className={classes.buttonStyle}>
            <SubmitButton />
          </div>
          </Paper>
            <Button onClick={deleteForm} className={classes.deleteButton}>
              <DeleteForeverIcon fontSize="large" color="error"/>
            </Button>
      </form>
        <Drawer open={drawState} onClose={() => setDrawState(false)}>
          <GetArea selectMiddle={selectMiddle} setSelectMiddle={setSelectMiddle} setDrawState={setDrawState}/>
        </Drawer>
    </div>
  )
}

export default Form