import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: '8px',
  },
  button: {
    backgroundColor: '#004d40'
  },
}))
const SubmitButton = () => {
  const classes = useStyles()
  return (
    <div className={classes.box}>
      <Button variant='contained' color='primary' type='submit' className={classes.button}>
        検索
      </Button>
    </div>
  )
}
export default SubmitButton