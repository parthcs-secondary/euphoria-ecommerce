import React from 'react'
import Banner from '../../components/banner/Banner'
import Deal from '../../components/deals/Deal'
import BigSavingZone from '../../components/bigsavingzone/BigSavingZone'
import NewArrival from '../../components/newarrival/NewArrival'

const Homepage = () => {
  return (
    <div className='Homepage'>

    <Banner/>
    <Deal/>
    <NewArrival/>
    <BigSavingZone/>


    </div>
  )
}

export default Homepage