import React from 'react' 
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const searchForm = (props) => {
  // form中身の変更内容を取得
  const handleSearchKeywordChange = (e) => {
    props.setSearchKeyword(e.target.value)
  }
  return (
    <div>
      <TextField
        value={props.searchKeyword}
        onChange={handleSearchKeywordChange}
        placeholder="キーワード"
        />
    </div>
  )
}

export default searchForm