import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    top: "auto",
    bottom: 0,
    color: "#e0f2f1",
    backgroundColor: "#004d40"
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
        hotpepper <br />
        genre <br />
        keyword
      </AppBar>
    </div>
  )
}

export default Footer