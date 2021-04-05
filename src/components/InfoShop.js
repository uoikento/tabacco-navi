import React from 'react'
import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
// import classes from '*.module.scss';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  icon: {
    color: '#6c584c',
  },
  title: {
    color: "#370617",
  },
  })) 
  

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
})

const InfoShop = (props) => {
  const shop = props.shop
  const open = props.open
  const openShopIndex = props.openShopIndex
  const shopGoogleMapUrl = `https://maps.google.com/maps?q=${shop[openShopIndex].lat},${shop[openShopIndex].lng}`
  const classes = useStyles()

  return (
    <Dialog
      TransitionComponent={Transition}
      keepMounted
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      maxWidth="xl"
      fullwidth="true"
      open={open}
    >
      <DialogTitle id="alert-dialog-slide-title">{shop[openShopIndex].name}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description" className={classes.title}>
          住所：{shop[openShopIndex].address} &nbsp;
          <a href={shopGoogleMapUrl} target="_blank" rel="noopener noreferrer" className={classes.icon}>→googleMap</a>
          <br/>
          営業時間：{shop[openShopIndex].open} <br/>
          wifi：{shop[openShopIndex].wifi} <br/>
          smoke：{shop[openShopIndex].non_smoking}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Typography >
          <a id="urlButton" href={shop[openShopIndex].urls.pc} target="_blank" rel="noopener noreferrer" className={classes.icon} >
            →HotPepper
          </a>
        </Typography>
      </DialogActions>
  </Dialog>
  )
}
export default InfoShop