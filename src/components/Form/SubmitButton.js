import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: '#adc178',
    color: "#6c584c",
    marginTop: '8px',
  },
}))
const SubmitButton = () => {
  const classes = useStyles()
  return (
    <Button variant='contained' type='submit' className={classes.button}>
      Search
    </Button>
  )
}
export default SubmitButton