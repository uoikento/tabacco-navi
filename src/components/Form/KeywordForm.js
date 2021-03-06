import React from 'react' 
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles'
import { InputBase } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  formControl: {
    '@media (max-width: 560px)': {
      display: "table",
      height: "100%",
      width: "75%",
    },
    display: "table",
    height: "100%",
    width: "80%"
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
    display: "table-cell",
    verticalAlign: "middle",
    paddingLeft: "1em",
    paddingTop: "0.5em",
  },
}))

const KeywordForm = (props) => {
  // console.log(props.searchKeyword)
  const classes = useStyles()
  const handleSearchKeywordChange = (e) => {
    props.setSearchKeyword(e.target.value)
  }
  return (
    <FormControl className={classes.formControl}>
    <InputBase
        inputProps={{ 'aria-label': 'search google maps' }}
        className={classes.selectEmpty}
        value={props.searchKeyword}
        onChange={handleSearchKeywordChange}
        placeholder="Keyword"
        />
    </FormControl>
  )
}

export default KeywordForm