import React, {useState} from 'react'
// import Icon from './hotpepper-s.gif'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
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
  },
  gridList: {
    width: 1000,
    height: 700,
  },
  icon: {
    color: '#004d40',
  },
  button: {
    color: '#fff',
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
})

const Show = (props) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [openShop, setOpenShop] = useState(0)
  const shop = props.shops
  // console.log(props.shops)
  const handleClickOpen = (index) => {
    setOpen(true)
    setOpenShop(index)
  }
  const handleClose = () => {
    setOpen(false)
    setOpenShop(0)
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={150} className={classes.gridList} spacing={10} cols={3}>
        {shop.map((shop, index) => (
          <GridListTile key={shop.id} >
            <img srcSet={shop.photo.pc.l} alt={shop.name} />
              <GridListTileBar
                title={shop.name}
                actionIcon={
                    <Button onClick={() => handleClickOpen(index)} className={classes.button}>
                      詳細
                    </Button>
                }
              />
            </GridListTile>
        ))}
      </GridList>
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
            <DialogTitle id="alert-dialog-slide-title">{shop[openShop].name}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                住所：{shop[openShop].address} <br/>
                営業時間：{shop[openShop].open} <br/>
                wifi：{shop[openShop].wifi}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Disagree
              </Button>
              <Typography >
                <a id="urlButton" href={shop[openShop].urls.pc} target="_blank" rel="noopener noreferrer" className={classes.icon} >
                  →HotPepper
                </a>
              </Typography>
            </DialogActions>
        </Dialog>
    </div>
  )
}
export default Show
