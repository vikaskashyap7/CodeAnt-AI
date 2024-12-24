import React from 'react'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'

const DashBoard = () => {
  return (
    <div className=' flex md:flex-row flex-col'>
        <div>
            <Sidebar/>
        </div>
        <div>
          <Layout/>
        </div>
    </div>
  )
}

export default DashBoard