import React from 'react' 
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
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
    <div>
      <TextField
        className={classes.formControl}
        value={props.searchKeyword}
        onChange={handleSearchKeywordChange}
        placeholder="Keyword"
        />
    </div>
  )
}

export default KeywordForm