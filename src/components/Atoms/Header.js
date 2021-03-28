import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxHeight: "20vh",
    color: "#dda15e",
    bottom: "auto",
    top: 0,
  },
  bar: {
    borderBottom: "solid 1px #dde5b6",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    // fontSize: "4rem",
    marginLeft: "0.2em",
    padding: "0.4em 0",
  },
  headerRight: {
    marginRight: "auto",
  }
}))

const Header = () => {
  console.log("Header")
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Toolbar className={classes.bar}>
        <Typography variant="h3" className={classes.title}>
          YaniNavi
        </Typography>
        <div className={classes.headerRight}>
          <a href="https://qiita.com/fishperson19"> Qiita </a>
          </div>
      </Toolbar>
    </div>
  )
}

export default Header