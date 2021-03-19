import React, {useState} from 'react'
import InfoShop from './InfoShop'
import { makeStyles } from '@material-ui/core/styles'
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
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
    width: 'calc(100% - 80px)',
    flexWrap: "nowrap",
    overflow: "hidden",
    display: "flex",
  },
  content: {
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  card: {
    display: "flex",
    backgroundColor: "#fff",
    height: 80,
    marginTop: "0,5em",
    borderTop: "solid 0.2em #dde5b6",
    color: "#6c584c",
  },
  button: {
    color: '#ddd',
    marginLeft: "auto",
  },
}))

const SmallShow = (props) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [openShopIndex, setOpenShopIndex] = useState(0)
  const shop = props.shops
  // console.log(props.shops)
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
        <Typography>Smoking shops</Typography>
      {shop.map((shop, index) => (
        <Card key={shop.id} className={classes.card}>
          <CardMedia className={classes.cover} image={shop.photo.pc.l} title={shop.name} />
          <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="subtitle1">
              {shop.name}
            </Typography>
            </CardContent>
            <IconButton onClick={() => handleClickOpen(index)} className={classes.button}>
              <InfoOutlinedIcon/>
            </IconButton>
            </div>
        </Card>
      ))}
        </Grid>
      <InfoShop shop={shop} open={open} openShopIndex={openShopIndex} handleClose={handleClose}/>
    </div>
  )
}
export default SmallShow
