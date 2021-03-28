import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  bar: {
    top: "auto",
    bottom: 0,
    color: "#6c584c",
    backgroundColor: "#fefae0",
    // backgroundColor: "rgba(254,250,224,0.5)",
  },
  title: {
    textAlign: "center",
    margin: "0 2em",
    paddingTop: "1em",
    paddingBottom: "1em",
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
          <Typography>
            Powered by <a href="http://webservice.recruit.co.jp/" className={classes.icon}>ホットペッパー Webサービス</a> <br/>
            Produced by Ips.k <br/>
          </Typography>
        </div>
      </AppBar>
  )
}

export default Footer