import React, { useState } from 'react'
import InfoShop from './InfoShop'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import ListSubheader from '@material-ui/core/ListSubheader'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import Button from '@material-ui/core/Button'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: "#fff",
    // width: 
  },
  gridList: {
    width: 1000,
    paddingBottom: 50,
  },
  tile: {
    border: "solid 0.1em #dde5b6",
  },
  icon: {
    color: '#a98467',
  },
  button: {
    color: '#fff',
  },
}))


const Show = (props) => {
  console.log("Show")
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
      <GridList cellHeight={150} className={classes.gridList} spacing={5} cols={4}>
        <GridListTile cols={4} style={{ height: 'auto' }}>
          <ListSubheader component="div">Smoking shops &nbsp; Result{shop.length}</ListSubheader>
        </GridListTile>
        {shop.map((shop, index) => (
          <GridListTile key={shop.id} className={classes.tile} >
            <img srcSet={shop.photo.pc.l} alt={shop.name} />
              <GridListTileBar
                title={shop.name}
                actionIcon= {
                  <Button onClick={() => handleClickOpen(index)} className={classes.button}>
                    詳細
                  </Button>
                }
              />
          </GridListTile>
        ))}
      </GridList>
      <InfoShop shop={shop} open={open} openShopIndex={openShopIndex} handleClose={handleClose}/>
    </div>
  )
}
export default Show
