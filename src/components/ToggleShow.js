import React, {useState, useEffect} from 'react'
import Show from './Show'
import SmallShow from './SmallShow'
const ToggleShow = (props) => {
  // console.log('hello')
  const shops = props.shops
  const WIDTH_THRESHOLD = 1000
  const [width, setWidth] = useState(window.innerWidth)
  const updateWidth = () => {
    setWidth(window.innerWidth)
  }
    useEffect(() => {
      window.addEventListener(`resize`, updateWidth, {
        capture: false,
        passive: true,
      })
  
      return () => window.removeEventListener(`resize`, updateWidth)
    })

  if (width < WIDTH_THRESHOLD) {
    // 画像をスライドショー表示する
    return (
      <SmallShow shops={shops}/>
    )
  } else {
    return (
      <Show shops={shops}/>
    )
  }
}

export default ToggleShow