import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

process.env.NODE_ENV !== "development" && (console.log = () => { })
process.env.NODE_ENV !== "development" && (console.count = () => { })

ReactDOM.render(
    <App />,
  document.getElementById('root')
);