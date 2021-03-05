import React from 'react'
// import Icon from './hotpepper-s.gif'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core'

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
    width: 700,
    height: 700,
  },
  icon: {
    color: '#fff',
  },
}))

const MyComponent = React.forwardRef(function MyComponent(props, ref) {
  // console.log(props)
  return <div {...props} ref={ref}></div>
});

const Show = (props) => {
  const shop = props.shops
  // console.log(shop)
  // console.log(props)
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <GridList cellHeight={150} className={classes.gridList} spacing={8} cols={3}>
        {shop.map((shop, index) => (
          <GridListTile key={shop.photo.pc.m} >
            <img srcSet={shop.photo.pc.l} alt={shop.name} />
            <Tooltip title={shop.name} placement="top-end">
              <MyComponent>
                <GridListTileBar
                  title={shop.name}
                  actionIcon={
                    <IconButton >
                      <Typography >
                        <a id="urlButton" href={shop.urls.pc} target="_blank" rel="noopener noreferrer" className={classes.icon}>
                          info
                        </a>
                        </Typography>
                    </IconButton>
                  }
                />
              </MyComponent>
            </Tooltip>
          </GridListTile>
        ))}
      </GridList>
      {/* <ul>
        {shop.map((shop, index) =>
          <li key={index}>
            {index}{shop.name}
            <img src={shop.photo.pc.l} />
            <a href={shop.urls.pc} target="_balnk">hotpeperで開く</a>
          </li>
        )}
      </ul> */}
    </div>
  )
}
export default Show