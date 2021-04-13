import React, { useState, useRef } from "react"
import {prefecture} from '../Accessories/prefecture'
import Area from '../../services/areas'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Chip from '@material-ui/core/Chip'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, IconButton } from "@material-ui/core"
import { CoffeeLoading } from 'react-loadingg'

const useStyles = makeStyles((theme) => ({
  root: {
    '@media (max-width: 560px)': {
      maxWidth: "90vw"
    },
    maxWidth: "30vw",
    height: 224,
  },
  form: {
    '@media (max-width: 560px)': {
      margin: theme.spacing(3),
    },
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    margin: theme.spacing(4),
    minWidth: 150,
  },
  title: {
    color: "#F0A94C",
    marginBottom: "2em",
    textAlign:"center"
  },
  exampleChip: {
    marginTop: "0.4em",
    color: "#adb5bd",
  },
  exampleTitle: {
    display: "flex",
    marginLeft: "2em",
  },
  select: {
    width: "70%",
  },
  text: {
    width: "70%",
  },
}))

const GetArea = (props) => {
  console.count("area")

  const classes = useStyles()
  const [middleAreas, setMiddleAreas] = useState([])
  const [loadingBool, setLoadingBool] = useState(false)
  // const inputPrefecture = useRef(null)
  const [prefectureCode, setPrefectureCode] = useState("")
  const selectMiddle = props.selectMiddle
  console.table(middleAreas)

  const postArea = (prefecture, keyword) => {
    setLoadingBool(true)
    // console.log(prefecture)
    // console.log(keyword)
    Area
      .getAreas({
        large_area: prefecture,
        keyword: `${keyword}`
      })
      .then(middleAreas => {
        setMiddleAreas(middleAreas)
        setLoadingBool(false)
      })
  }
  
  const handlePrefectureChange = (e) => {
    // setPrefectureCode('')
    // console.log(e.target.value)
    setPrefectureCode(e.target.value)
    postArea(e.target.value)
  }

  const handleMiddleChange = (e) => {
    const keyword = e.target.value
    // console.log(inputPrefecture.current.value)
    postArea(prefectureCode, keyword)
  }

  const handleClick = (m_code) => {
    props.setSelectMiddle(selectMiddle.concat(m_code))
  }

  const handleDelete = (index) => {
    if (selectMiddle.length == 1) {
      props.setSelectMiddle([])
    } else {
      const newSelectMiddle = [...selectMiddle]
      newSelectMiddle.splice(index, 1)
      props.setSelectMiddle(newSelectMiddle)
    }
    console.table(selectMiddle)
  }

  const handleClose = () => {
    props.setDrawState(false)
  }

  return (
    <div className={classes.root}>
      <IconButton onClick={handleClose}>
        <ChevronLeftIcon/>
      </IconButton>
      <Typography variant="h5" className={classes.title}>Select Area</Typography>
        {selectMiddle.length !== 0
        ? <div>
            {selectMiddle.map((selectMiddle, index) =>
              <Chip size="small" key={index} label={selectMiddle.name} onDelete={() => handleDelete(index)} color="primary" />
            )}
          </div>
        : <div className={classes.exampleTitle}>
            <Typography className={classes.exampleChip}>(例)</Typography>
          <Chip size="small" key="0" label="銀座" />
          <Chip size="small" key="1" label="梅田" />
          </div>
        }
      <FormControl className={classes.form}>
      <InputLabel>Prefecture</InputLabel>
      <Select
          className={classes.select}
          // ref = { inputPrefecture }
          value={prefectureCode}
          onChange={handlePrefectureChange}
      >
        <MenuItem key='delete' value={''}>-</MenuItem>
          {prefecture.map((prefecture) => (
            <MenuItem key={prefecture.name} value={prefecture.code} >{prefecture.name}</MenuItem>
          ))}
      </Select>
        <TextField className={classes.text} id="standard-basic" label="city" onChange={handleMiddleChange} />
      {middleAreas.length !== 0
          && (loadingBool == false
            &&
            < div >
              {middleAreas.map(middle =>
                <Chip
                  variant="outlined"
                  size="small"
                  label={middle.name}
                  key={middle.code}
                  onClick={() => handleClick(middle)}
                  color="primary"
                />
                )
              }
            </div>
          )
      }
      </FormControl>
      {loadingBool &&
        <CoffeeLoading color="#fb8500"/>
      }
    </div>
  )
}

export default GetArea