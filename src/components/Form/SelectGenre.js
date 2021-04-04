import React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "30%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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
        // className={classes.form}
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