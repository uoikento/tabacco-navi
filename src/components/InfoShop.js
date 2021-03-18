import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'

const Styles = {
  icon: {
    color: '#6c584c',
  },
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
})

const InfoShop = (props) => {
  const shop = props.shop
  const open = props.open
  const openShopIndex = props.openShopIndex
  const shopGoogleMapUrl =  `https://maps.google.com/maps?q=${shop[openShopIndex].lat},${shop[openShopIndex].lng}`

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
          <DialogContentText id="alert-dialog-slide-description">
            住所：{shop[openShopIndex].address} &nbsp;
            <a href={shopGoogleMapUrl} target="_blank" rel="noopener noreferrer" style={Styles.icon}>→googleMap</a>
            <br/>
            営業時間：{shop[openShopIndex].open} <br/>
            wifi：{shop[openShopIndex].wifi}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Typography >
            <a id="urlButton" href={shop[openShopIndex].urls.pc} target="_blank" rel="noopener noreferrer" style={Styles.icon} >
              →HotPepper
            </a>
          </Typography>
        </DialogActions>
      </Dialog>
  )
}
export default InfoShop