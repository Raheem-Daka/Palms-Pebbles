import React, { useState, useEffect } from 'react'
import Title from '../components/Title'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import StarRating from '../components/StarRating';

const CheckBox = ({label, selected = false, onChange = ()=>{}})=>{
  return(
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input type="checkbox" checked={selected} onChange={(e)=>onChange(e.target.checked, label)}/>
      <span className="font-light select-none">{label}</span>
    </label>
  )
}

const RadioButton = ({label, selected = false, onChange = ()=>{}})=>{
  return(
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input type="radio" name="sortOption" checked={selected} onChange={()=>onChange(label)}/>
      <span className="font-light select-none">{label}</span>
    </label>
  )
}

const AllRooms = ({room,}) => {
  

  const navigate = useNavigate();

  // hooks
  const [openFilters, setOpenFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const roomsPerPage = 5;

  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;

  const currentRooms = roomsDummyData.slice(
    indexOfFirstRoom,
    indexOfLastRoom
  );

  const totalPages = Math.ceil(roomsDummyData.length / roomsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((p) => p + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((p) => p - 1);
      window.scrollTo(0, 0);
    }
  };

  const roomTypes = [
    "Single Bed",
    "Double Bed",
    "Family Suite"
  ];
  const priceRange = [
    "30,000 to 70,000",
    "70,000 to  100,000",
    "100,000 to 150,000",
    "150,000 to 200,000"
  ];

  const sortOptions = [
    "prcie Low to High",
    "prcie High to Low",
    "prcie A to Z",
    "prcie Z to A",
  ]

  
  return (
    <div className="flex flex-col-reverse items-start lg:flex-row justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="">
        <div className="flex felx-col items-start text-left pb-5">
          {/*<h1 className="font-playfair text-4xl md:text-[40px]">Palms & Pebbles Rooms</h1>
          <p className="md:text-base text-gray-500/90 mt-5 max-w-174">Take adventure of our Rooms and Service packages to enhance your stay and create unforgetable memories</p>*/}
          <Title title="Palms & Pebbles Rooms" subtitle="Take adventure of our Rooms and Service packages to enhance your stay and create unforgetable memories" />
        </div>

        {
          currentRooms.map((room)=> (
            <div key={room._id} className="w-full py-10 flex flex-col md:flex-row lg:flex-row xl:flex-row items-start gap-5 border-b border-gray-300 last:pb-20 last:border-0">
              <img 
              key={room?._id}
              src={room?.images[0]} 
              alt="Room Image" title="View Room Details" 
              className="max-h-50 lg:w-1/2 md:1/2 sm:w-full rounded-xl shadow-lg object-cover cursor-pointer" 
              onClick={()=> {navigate(`/rooms/${room?._id}`);scrollTo(0,0)}}/>
              <div>
                <p onClick={()=> {navigate(`/rooms/${room?._id}`);scrollTo(0,0)}} className="text-gray-800 text-2xl font-Playfair cursor-pointer font-playfair">{room?.name}</p>
                <div className="flex items-center">
                  <StarRating />
                  <p className="ml-2 font-playfair">50+ reviews</p>
                </div>
                <div className="flex gap-2">
                  <img src={assets.locationIcon} alt="Location Icon" />
                  <span className="text-gray-400 font-playfair">{room?.address}</span>
                </div>
                {/* Room Ameneties*/}
                <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                  {room.amenities.map((item, index)=>(
                    <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF] font-p">
                      <img src={facilityIcons[item]} alt={item} className="w-5 h-5" />
                      <p className="text-md font-playfair">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between">
                <p className="text-xl font-medium text-gray-700 font-playfair">$ {room?.pricePerNight} / <span className="text-base font-playfair">night</span> <span className="text-gray-500 text-base font-playfair">(1 person)</span></p>
                <p className="text-xl font-medium text-gray-700 font-playfair">$ {room?.pricePerNight2} / <span className="text-base font-playfair">night</span><span className="text-gray-500 text-base font-playfair">(2 people)</span></p>
                </div>
              </div>
            </div>
          ))
        }

        {/* Pagination */}
        <div className="flex justify-center gap-4 py-10">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="
              rounded-xl p-2 w-20
              bg-gray-800 text-white
              disabled:bg-gray-300 disabled:text-gray-500
              disabled:cursor-not-allowed
            "
          >
            Previous
          </button>

          <span>Page {currentPage} of {totalPages}</span>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="
              rounded-xl p-2 w-20
              bg-gray-800 text-white
              disabled:bg-gray-300 disabled:text-gray-500
              disabled:cursor-not-allowed
            "
          >
            Next
          </button>
        </div>

      </div>
    </div>
  )
}

export default AllRooms