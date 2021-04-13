import React, { useState } from 'react'
import Yani from './Accessories/image/tantei.png'
import KeywordForm from './Form/KeywordForm'
import Location from './Form/Location'
import SubmitButton from './Form/SubmitButton'
import SelectGenre from './Form/SelectGenre'
// import SearchState from './Form/SearchState'
import GetArea from './Form/GetArea'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import GpsNotFixedIcon from '@material-ui/icons/GpsNotFixed'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'
import { Typography, Paper, Box } from '@material-ui/core'

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
  img: {
    '@media (max-width:560px)': {
      width: "80vw",
      marginLeft: "5%",
      marginTop: "4em",
    },
    objectFit: "cover",
    width: "50%",
    textAlign: "center",
    marginLeft: "25%",
    marginTop: "8em",
  },
  Form: {
    '@media (max-width:560px)': {
      width: "100%",
      display: "revert",
      // margin: "0 auto",
      height: "40px",
    },
    display: "flex",
    textAlign: "center",
    margin: "0 auto",
    height: "40px",
    width: "70%",
  },
  paper: {
    '@media (max-width: 560px)': {
      width: "95%",
      borderRadius: 4,
      display: "flex",
    },
    // margin: "8px",
    borderRadius: 4,
    display: "flex",
    width: "70%",
  },
  selectAreaButton: {
    backgroundColor: "#fff",
    color: "#F0A94C",
    textTransform: "none",
    padding: "unset",
  },
  buttonStyle: {
    '@media (max-width: 560px)': {
      width: "10%",
      marginLeft: "0",
    },
    minWidth: "1%",
    marginLeft: "auto",
    // marginTop: '8px',
  },
  deleteButton: {
    color: "#6c584c",
    marginTop: '8px',
    minWidth: "5%",
  },
}))

const Form = (props) => {
  console.count("form")
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
            <Typography variant="h5">Select Area</Typography>
          </Button>
          <Location setSearchLat={setSearchLat} setSearchLng={setSearchLng} searchLat={searchLat} />
        </div>
      </div>
      {/* <SearchState searchKeyword={searchKeyword} searchLat={searchLat} searchGenre={searchGenre} /> */}
      <Box >
        <img src={Yani} className={classes.img}/>
      </Box>
      <form onSubmit={postWord} className={classes.Form}>
        <SelectGenre genres={props.genres} setSearchGenre={setSearchGenre} searchGenre={searchGenre} />
        
        <Paper className={classes.paper}>
          <KeywordForm setSearchKeyword={setSearchKeyword} searchKeyword={searchKeyword} />
          <div className={classes.buttonStyle}>
            <SubmitButton />
          </div>
          </Paper>
      </form>
      {/* <Button onClick={deleteForm} className={classes.deleteButton}>
        <DeleteForeverIcon fontSize="large" color="error"/>
      </Button> */}
        <Drawer open={drawState} onClose={() => setDrawState(false)}>
          <GetArea selectMiddle={selectMiddle} setSelectMiddle={setSelectMiddle} setDrawState={setDrawState}/>
        </Drawer>
    </div>
  )
}

export default Form