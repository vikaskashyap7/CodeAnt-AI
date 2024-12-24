import React from 'react'
import LeftView from '../components/LeftView'
import RightView from '../components/RightView'

const SingnIn = () => {
  return (
    <div className='flex'>
        <div className='hidden md:block'><LeftView/></div>
        <div><RightView/></div>
    </div>
  )
}

export default SingnIn