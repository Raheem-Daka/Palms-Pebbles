import React from 'react'
import { roomsDummyData } from "../assets/assets"
import RoomCard from './RoomCard'
import Title from './Title'

const FeaturedRooms = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 mt-20">
        <Title title="Our Rooms" subtitle="Discover our different exceptional rooms that we have at Palms & Pebbles, Offering unparalleled luxury and unforgetable experience. "/>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center gap-6 mt-20">
            {roomsDummyData.slice(0,8).map((room, index)=>(<RoomCard key={room._id} room={room} index={index} />))}
        </div>
    </div>
  )
}

export default FeaturedRooms