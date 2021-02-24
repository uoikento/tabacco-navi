import React from 'react'

const Show = (props) => {
  const shop = props.shops
  console.log(shop)
  console.log(props)
  return (
    <div>
      <ul>
        {shop.map(shop => <li>{shop.name}</li>)}
      </ul>
    </div>
  )
}
  export default Show