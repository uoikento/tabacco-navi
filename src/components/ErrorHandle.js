import React from 'react'
import Show from './Show'

const ErrorHandle = (props) => {
  const shop = props.shops
  console.log(shop)
  if (shop !== null) {
    return (
      <ul>
        {shop.map((props, index) => 
          <Show
            key={index}
            props={shop}
          />
        )}
    </ul> 
    )
  } else {
    return <p>該当するお店を見つけることが出来ませんでした。。。</p>
  }
}
export default ErrorHandle