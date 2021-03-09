import React, {useState} from 'react'
import Select from '@material-ui/core/Select'
// import Select from 'react-select'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  form: {
    color: '#fff',
  },
}))

const SelectForm = (props) => {
  const classes = useStyles()
  // const [selectGenre, setSelectGenre] = useState('')
  const genre = props.genres
  const handleChange = (key) => {
    console.log(key)
    props.setSearchGenre(genre[key])
    // props.setSearchGenre(selectGenre)
  }
  // const display = () => {

  // }
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Genre</InputLabel>
        <Select
          className={classes.form}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={''}
        >
{/* マップを使うとselect内inputの値が変更しないようになる */}
          <MenuItem value="dd">
            <em>None</em>
          </MenuItem>
          {genre.map((genre, i) => (
            <MenuItem key={genre.label} value={genre.code} onClick={()=>handleChange(i)}>{genre.label}</MenuItem>
          ))}
        </Select>
        {/* <Select options={props.genres} defaultValue={props.searchGenre} onChange={props.setSearchGenre} isClearable={true}/> */}
      </FormControl>
    </div>
  )
}

export default SelectForm
{/* <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> */}