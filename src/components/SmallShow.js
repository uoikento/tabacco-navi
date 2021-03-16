import React, {useState} from 'react'
// import Icon from './hotpepper-s.gif'
import { makeStyles } from '@material-ui/core/styles'
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginTop: '8px',
    // paddingBottom: '8px',
  },
  icon: {
    color: '#004d40',
  },
  cover: {
    width: 80,
    height: 80,
  },
  details: {
    width: 'calc(100% - 120px)',
    flexWrap: "nowrap",
    // textOverflow: "ellipsis",
    overflow: "hidden"
  },
  content: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    // whiteSpace: "nowrap"
  },
  list: {
    display: "flex",
  },
  button: {
    color: '#000',
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
})

const SmallShow = (props) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [openShopIndex, setOpenShopIndex] = useState(0)
  const shop = props.shops
  // console.log(props.shops)
  const shopGoogleMapUrl =  `https://maps.google.com/maps?q=${shop[openShopIndex].lat},${shop[openShopIndex].lng}`
  const handleClickOpen = (index) => {
    setOpen(true)
    setOpenShopIndex(index)
  }
  const handleClose = () => {
    setOpen(false)
    setOpenShopIndex(0)
  }

  return (
    <div className={classes.root}>
      <Grid direction="column">
      {shop.map((shop, index) => (
        <Card key={shop.id} className={classes.list}>
          <CardMedia className={classes.cover} image={shop.photo.pc.l} title={shop.name} />
          <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography>
              {shop.name}
            </Typography>
            <Button onClick={() => handleClickOpen(index)} className={classes.button}>
              詳細
            </Button>
            </CardContent>
            </div>
        </Card>
      ))}
        </Grid>
        <Dialog
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
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
            <a href={shopGoogleMapUrl} target="_blank" rel="noopener noreferrer" className={classes.icon}>→googleMap</a>
            <br/>
            営業時間：{shop[openShopIndex].open} <br/>
            wifi：{shop[openShopIndex].wifi}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Typography >
            <a id="urlButton" href={shop[openShopIndex].urls.pc} target="_blank" rel="noopener noreferrer" className={classes.icon} >
              →HotPepper
            </a>
          </Typography>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default SmallShow
