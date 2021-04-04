import React from 'react'
import search from './Atoms/image/search&smoke.jpeg'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    maxWidth: 200,
    margin: "0 auto",
    transition: "1s",

  },
  media: {
    minHeight: 200,
    backgroundSize: "contain",
  },
})

const TopImage = () => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={search}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            About
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            喫煙可能店のみを検索するためのツールです。<br />
            幸福な時間をお楽しみいただけることを願っています。<br/>
            （注）法律が変わって間もないこともあり、情報を更新されていない可能性があります。<br />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
      </Card>
  )
}

export default TopImage