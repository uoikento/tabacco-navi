import React from 'react' 
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
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

const KeywordForm = (props) => {
  // console.log(props.searchKeyword)
  const classes = useStyles()
  // form中身の変更内容を取得
  const handleSearchKeywordChange = (e) => {
    props.setSearchKeyword(e.target.value)
  }
  return (
    <FormControl className={classes.formControl}>
      <TextField
        className={classes.selectEmpty}
        value={props.searchKeyword}
        onChange={handleSearchKeywordChange}
        placeholder="Keyword"
        />
    </FormControl>
  )
}

export default KeywordForm