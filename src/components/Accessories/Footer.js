import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { maxHeight } from '@material-ui/system';

const useStyles = makeStyles(() => ({
  bar: {
    color: "#6c584c",
    backgroundColor: "#fff",
    height: "10%",
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
      <div className={classes.bar}>
        <div className={classes.title}>
          <Typography variant="h6">
            Powered by <a href="http://webservice.recruit.co.jp/" className={classes.icon}>ホットペッパー Webサービス</a> <br/>
            Produced by Ips.k <br/>
          </Typography>
        </div>
      </div>
  )
}

export default Footer