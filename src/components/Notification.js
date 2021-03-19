import React from 'react'
import Alert from '@material-ui/lab/Alert'
const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      <Alert severity="warning">{message}</Alert>
    </div>
  )
}

export default Notification