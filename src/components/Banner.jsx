import React from 'react'
import './Banner.css'
import { FaHeart } from "react-icons/fa";

export default function Banner() {
  return (
    <header className='banner'>
        <div className='texto'>
            <h1>Animaizinhos fofinhos</h1>
            <h2>organizados em um sólugar!</h2>
            <FaHeart className='heart' /> <FaHeart className='heart' /> <FaHeart className='heart' /> <FaHeart className='heart' /> <FaHeart className='heart' />
        </div> 
    </header>
  )
}
