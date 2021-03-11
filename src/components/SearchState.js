import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexWrap: 'wrap',
//     '& > *': {
//       width: theme.spacing(16),
//       height: theme.spacing(16),
//     },
//   },
// }));
const SearchState = (props) => {
  // const classes=useStyles()
  return (
    <div>
      <Paper>
        keyword:（{props.searchKeyword}）
        genre: （{props.searchGenre.label}）
        {props.searchLat== ''
          ? ""
          : "location: 現在地"
        }
      </Paper>
    </div>
  )
}

export default SearchState