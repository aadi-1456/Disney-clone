import React from 'react'
import styled from 'styled-components'
import './Homestyle.css'
import Imgslider from './Imgslider'
import Viewer from './Viewer'
import Movies from './Movies'

function Home() {
  return (
    <main className='HomeContainer'>
      <Imgslider></Imgslider>
      <Viewer></Viewer>
      <Movies></Movies>
    </main>
  )
}

export default Home
 