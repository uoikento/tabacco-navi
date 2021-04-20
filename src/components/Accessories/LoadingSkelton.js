import React from 'react'
import GridList from '@material-ui/core/GridList'
// import ListSubheader from '@material-ui/core/ListSubheader'
import GridListTile from '@material-ui/core/GridListTile'
import { Skeleton } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core'
import { NineCellLoading } from 'react-loadingg'

const useStyle = makeStyles(() => ({
  root: {
    '@media (max-width:560px)': {
      display: "revert",
      justifyContent: 'unset',
    },
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: "#fff",
  },
  gridList: {
    '@media (max-width:560px)': {
      // height: 100,
      display: "none",
    },
    width: 1000,
  },
  breakSm: {
    '@media (max-width:560px)': {
      display: "unset",
    },
    display: "none",
  },
  logo: {
    position: "unset",
    color: "#fb8500",
  }
}))

const LoadingSkelton = () => {
  const classes = useStyle()
  const Index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  const logo = {
    position: "unset",
    margin: "0 auto",
  }
  return (
    <div className={classes.root}>
      <GridList cellHeight={200} className={classes.gridList} spacing={5} cols={4}>
        {Index.map(skelton => (
          <GridListTile key={skelton}>
            <Skeleton animation="wave" height={200}/>
          </GridListTile>
        ))}
      </GridList>
      <div className={classes.breakSm}>
        <NineCellLoading color="#fb8500" size="40px" style={logo}/>
        </div>
    </div>
  )
}

export default LoadingSkelton