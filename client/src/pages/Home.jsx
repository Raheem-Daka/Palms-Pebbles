import React, { Fragment } from 'react'
import Hero from '../components/Hero'
import FeaturedRooms from '../components/FeaturedRooms'
//import NewsLetter from '../components/NewsLetter';
import MapComponent from '../components/MapComponent';

function Home() {
  return (
    <>
        <Hero />
        <FeaturedRooms/>
        {/*<NewsLetter />*/}
        <MapComponent />
    </>
  )
}

export default Home