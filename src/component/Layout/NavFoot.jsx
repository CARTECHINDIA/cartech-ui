import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const NavFoot = () => {
  return (
    <div>
    <div>
<div className="">
<Navbar/>
</div>
<div className="">
<Outlet  />
</div>
<div className="">

<Footer/>
</div>
</div>
</div>
  )
}

export default NavFoot