import React from 'react'
import Banner from '../components/Banner'
import Random from '../components/random'
import Events from '../components/Events'
import './HomeScreen.css'
// import ImgMediaCard from '../components/Card'
function HomeScreen() {
    return (
        <div className='homeScreen'>
            <Banner/>
            <Random/>
            <Events/> 
        </div>
    )
}

export default HomeScreen
