import React, { useState } from "react"
import {prefecture} from './Atoms/prefecture'
import Area from '../services/areas'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Chip from '@material-ui/core/Chip'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "30vw",
    height: 224,
  },
  form: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    margin: theme.spacing(1),
    minWidth: 120,
  },
  title: {
    marginBottom: "2em",
    textAlign:"center"
  },
  select: {
    width: "50%",
  },
  text: {
    width: "50%",
  },
}))

const GetArea = (props) => {
  const classes = useStyles()
  const [middleAreas, setMiddleAreas] = useState([])
  const [prefectureCode, setPrefectureCode] = useState("")
  const selectMiddle = props.selectMiddle
// console.log(prefectureCode)
  const handlePrefectureChange = (e) => {
    setPrefectureCode(e.target.value)
  }

  const handleMiddleChange = (e) => {
    const keyword = e.target.value
    Area
      .getAreas({
        large_area: prefectureCode,
        keyword: `${keyword}`
      })
      .then(middleAreas => {
        setMiddleAreas(middleAreas)
      })
    }

  const handleClick = (m_code) => {
    props.setSelectMiddle(selectMiddle.concat(m_code))
  }

  const handleDelete = (index) => {
    if (selectMiddle.length == 1) {
      props.setSelectMiddle([])
    } else {
      const deleteSelectMiddle = selectMiddle.splice(index, 1)
      console.log(deleteSelectMiddle)
      props.setSelectMiddle(deleteSelectMiddle)
    }
  }

console.log(selectMiddle)
// console.log(middleAreas)
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>select area</Typography>
        {selectMiddle.length !== 0
          && <div>{selectMiddle.map((selectMiddle, index) => <Chip size="small" key={index} label={selectMiddle.name} onDelete={() => handleDelete(index)} color="primary" />) }</div>
        }
      <FormControl className={classes.form}>
      <InputLabel>Prefecture</InputLabel>
      <Select
        className={classes.select}
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
        && <div>
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
      }
      </FormControl>
    </div>
  )
}

export default GetArea