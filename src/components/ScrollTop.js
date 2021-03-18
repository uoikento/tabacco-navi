import React from 'react'
// import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

const ScrollTop = (props) => {
  const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 80,
    left: 'auto',
    position: 'fixed',
    backgroundColor: '#ddd'
  }
  const handleScroll = () => {
    console.log(props.refTop.current)
    const { top } = props.refTop.current.getBoundingClientRect()
    window.scrollTo({
      top: top ,
      behavior: "smooth"
    })
  }

  return (
    <Fab style={style} size="medium" onClick={handleScroll}>
      <KeyboardArrowUpIcon />
    </Fab>
  )
}

export default ScrollTop