import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import hotpepper from './hotpepper-s.gif'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    top: "auto",
    bottom: 0,
    color: "#000",
    backgroundColor: "#fff",
  },
  you: {
    paddingRight: 4,
  },
  title: {
    flexGrow: 1,
  },
}))
const Footer = () => {
  const classes = useStyles()
  return (
    <div>
      <AppBar className={classes.bar}>
        <div className={classes.you}>
        <Typography >
          yaninavi <br/>
          Powered by <a href="http://webservice.recruit.co.jp/">ホットペッパー Webサービス</a>
          </Typography>
          </div>
      </AppBar>
    </div>
  )
}

export default Footer