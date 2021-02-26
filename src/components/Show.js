import React from 'react'

const Show = (props) => {
  const shop = props.shops
  // console.log(shop)
  // console.log(props)
  return (
    <div>
      <ul>
        {shop.map((shop, index) =>
          <li key={index}>
            {index}{shop.name}
            <img src={shop.photo.pc.s} />
            <a href={shop.urls.pc} target="_balnk">hotpeperで開く</a>
          </li>
        )}
      </ul>
    </div>
  )
}
  export default Show