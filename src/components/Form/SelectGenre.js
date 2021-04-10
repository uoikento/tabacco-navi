import React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  formControl: {
    '@media (max-width: 650px)': {
      marginBottom: "2em",
      minWidth: "40%",
      display: "none",
    },
    // margin: theme.spacing(1),
    minWidth: "20%",
    marginRight: "2em",
  },
  selectEmpty: {
    marginRight: "2em",
  },
}))

const SelectGenre = (props) => {
  const classes = useStyles()
  const genre = props.genres
  const handleSelectChange = (e) => {
    props.setSearchGenre(e.target.value)
  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">Genre</InputLabel>
      <Select
        value={props.searchGenre}
        onChange={handleSelectChange}
      >
        <MenuItem key='delete' value={''}>-</MenuItem>
        {genre.map((genre) => (
          <MenuItem key={genre.label} value={genre} >{genre.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectGenre