import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './calendar.css'

document.addEventListener('DOMContentLoaded', function() {
  render(
    <App />,
    document.body.appendChild(document.createElement('div'))
  )
})
