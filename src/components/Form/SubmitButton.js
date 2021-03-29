import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles(() => ({
  button: {
    // backgroundColor: '#adc178',
    color: "#6c584c",
    marginTop: '8px',
    // minWidth: "5%",
  },
}))
const SubmitButton = () => {
  const classes = useStyles()
  return (
    <Button type='submit' className={classes.button}>
      <SearchIcon fontSize="large"/>
    </Button>
  )
}
export default SubmitButton