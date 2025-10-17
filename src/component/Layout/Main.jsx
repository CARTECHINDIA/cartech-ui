import React from 'react'
import Navbar from './Navbar'
import Home from '../Ui/Home'
import UsedCars from '../Ui/UsedCars'
import Banner from '../Ui/Banner'
import CustomerReview from '../Ui/CustomerReview'

const Main = () => {
  return (
    <div>
 
 <Home/>
 <UsedCars/>
  <Banner/>
  <CustomerReview/>
 
    </div>
  )
}

export default Main