import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
const useStyles = makeStyles(() => ({
  button: {
  },
  icon: {
    '@media (min-width:650px)': {
      fontSize: "3em",
    },
    '@media (max-width:650px)': {
      fontSize: "2em",
      // width: "10%",
    },
  }
}))
const SubmitButton = () => {
  const classes = useStyles()

  return (
    <Button type='submit' className={classes.button}>
      <SearchIcon className={classes.icon}/>
    </Button>
  )
}
export default SubmitButton