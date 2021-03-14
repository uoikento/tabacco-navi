import React, {useState} from 'react' 
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

const SearchForm = (props) => {
  // const [keyword, setKeyword] = useState('')
  const classes = useStyles()
  console.log(props.searchKeyword)
  // form中身の変更内容を取得
  const handleSearchKeywordChange = (e) => {
    // setKeyword(e.target.value)
    props.setSearchKeyword(e.target.value)
  }
  return (
    <div>
      <TextField
        className={classes.formControl}
        value={props.searchKeyword}
        onChange={handleSearchKeywordChange}
        placeholder="キーワード"
        />
    </div>
  )
}

export default SearchForm