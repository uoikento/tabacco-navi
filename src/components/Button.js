import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: '8px',
  },
  button: {
    backgroundColor: '#004d40'
  },
}))
const SubmitButton = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.box}>
      <Button variant='contained' color='primary' type='submit' className={classes.button}>
        keyword:（{props.searchKeyword}）
        genre: （{props.searchGenre.label}）
        location:{props.searchLat== ''
          ? "地名"
          : "現在地"
        }
        <br />
        検索
      </Button>
    </div>
  )
}
export default SubmitButton