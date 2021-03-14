import React from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    color: "#000",
    backgroundColor: "#ddd",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: "2rem",
  },
}))

const Header = () => {
  const classes = useStyles()
  // const color = theme()
  return (
    // <ThemeProvider theme={theme}>
    <div className="Header" >
        <AppBar position="static" className={classes.bar}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Yaninavi
            </Typography>
          </Toolbar>
        </AppBar>
        </div>
      // </ThemeProvider>
  )
}

export default Header