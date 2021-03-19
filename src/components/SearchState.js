import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: 'wrap',
  },
  font: {
    color: "#9980CB"
  }
}));
const SearchState = (props) => {
  const classes=useStyles()
  return (
    <div>
      <Typography className={classes.font}>
        {props.searchLat == ''
          ? ""
          : "Search by now location"
          }
        </Typography>
      Keyword:
        <Typography className={classes.font}>{props.searchKeyword}</Typography>
      Genre:
        <Typography className={classes.font}>{props.searchGenre.label}</Typography>
      
        
    </div>
  )
}

export default SearchState