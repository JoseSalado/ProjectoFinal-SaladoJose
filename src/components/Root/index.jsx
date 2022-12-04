import React from 'react'
import NavBar from '../NavBar'
import { Outlet } from 'react-router-dom'
import './styles.css'

const Root = () => {
  return (
    <>
        <NavBar/>
        <h2 className='title-item-container'>Rick and Morty NFT`s</h2>
        <Outlet/>
       
    </>
  )
}

export default Root