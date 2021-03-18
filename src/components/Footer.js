import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import hotpepper from './hotpepper-s.gif'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  bar: {
    top: "auto",
    bottom: 0,
    color: "#6c584c",
    backgroundColor: "#dde5b6",
    // margin: "0 2em",
  },
  title: {
    textAlign: "center",
    margin: "0 2em",
  },
  icon: {
    color: '#a98467',
  },
}))
const Footer = () => {
  const classes = useStyles()
  return (
      <AppBar className={classes.bar}>
        <div className={classes.title}>
        <Typography >
          Produced by Ips.k <br/>
          Powered by <a href="http://webservice.recruit.co.jp/" className={classes.icon}>ホットペッパー Webサービス</a>
          </Typography>
          </div>
      </AppBar>
  )
}

export default Footer