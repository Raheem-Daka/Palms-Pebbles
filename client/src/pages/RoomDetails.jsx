import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets';
import StarRating from '../components/StarRating';

const RoomDetails = () => {

    const {id} = useParams();
    const [room, setRoom] = useState(null);
    const [mainImage, setMainImage] = useState(null);

    useEffect(()=>{
        const room = roomsDummyData.find((room)=>(room._id === id))
        if (room) {
            setRoom(room);
            setMainImage(room.images[0]);
        } 
   
        fetch(`${import.meta.env.VITE_API_URL}/api/rooms/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setRoom(data);
            setMainImage(data.images?.[0]);    
        });
      }, [id]);
      
    
  return room && (
    <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
        {/*Room Details*/}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
            <h1 className="text-3xl md:text-4xl font-playfair">{room?.name} <span className="font-inter text-xs text-gray-500">( {room?.roomType} )</span></h1>
        </div>
        {/*Room Rating*/}
        <div className="flex items-center gap-1 mt-2">
            <StarRating className=""/>
            <p className="ml-2 text-gray-500">30+ reviews</p>
        </div>
        {/*Room Address*/}
        <div className="flex gap-2 text-gray-400">
            <img src={assets.locationIcon} alt="Location Icon" />
            <p>{room?.address}</p>
        </div>

        {/*Room Images*/}
        <div className="flex flex-col lg:flex-row mt-6 gap-6">
        {/* Main Image */}
        <div className="lg:w-1/2 w-full">
            <img
            src={mainImage}
            alt="Room Image"
            className="w-full h-[420px] rounded-xl shadow-lg object-cover"
            />
        </div>

        {/* Other Room Images */}
        <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {room?.images?.length > 1 &&
            room.images.map((image) => (
                <div
                key={image}
                onClick={() => setMainImage(image)}
                className={`rounded-xl overflow-hidden cursor-pointer border-2 ${
                    mainImage === image ? 'border-orange-500' : 'border-transparent'
                }`}
                >
                <img
                    src={image}
                    alt="Room Image"
                    className="w-full h-48 object-cover"
                />
                </div>
            ))}
        </div>
        </div>

        {/*Room Highlights*/}
        <div className="flex flex-col md:flex-col md:justify-between mt-10 lg:flex-row">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-4xl font-playfair">Experience A Stay That Exceeds Expectations</h1>
                <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                    {room.amenities.map((item, index)=>(
                        <div key={item} className="flex item-center gap-2 px-3 py-2 rounded-lg bg-gray-100">
                            <img src={facilityIcons[item]} alt={item} className="w-5"/>
                            <p className="text-xs">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/*Room Price*/}
            <div className="flex justify-between md:justify-start gap-5">
                <p className="text-2xl font-playfair">$ {room?.pricePerNight} / night <span className="text-gray-500 text-xl font-playfair"> (1 person)</span></p>
                <p className="text-2xl font-playfair">$ {room?.pricePerNight2} / night <span className="text-gray-500 text-xl font-playfair"> (2 people)</span></p>
            </div>
        </div>

        {/*Common specifications*/}
        <div className="mt-10 space-y-4 border-t border-b border-gray-500 py-10">
            {roomCommonData.map((spec, index)=>(
                <div key={index} className="flex items-start gap-2">
                    <img src={spec.icon} alt={`${spec.title}-icon`} className="w-6.5"/>
                    <div>
                    <p className="text-base font-playfair">{spec.title}</p>
                    <p className="text-gray-500 font-playfair" >{spec.description}</p>
                    </div>
                </div>
            ))}
        </div>

        {/*Book Now Section*/}
        <div className="flex flex-col items-center md:items-center mt-10 justify-between bg-gray-800 shadow-[0px_0px_20px_rgb(0,0,0,0.15)] p-6 rounded-xl mx-auto max-w-5xl">
          <div className="w-full flex flex-col">
            <div className="flex flex-col items-center font-playfair">
                <h1 className="text-white text-2xl font-playfair">
                Book Now
                </h1>
                <p className="text-white text-base font-playfair mb-5">contact Palms & Pebbles manager via:</p>
            </div>

            <div className="w-full flex flex-col md:flex-row lg:flex-row justify-between gap-4 items-center">
            {/* WhatsApp */}
            <a
                href="https://wa.me/26778337064"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="text-white flex gap-1 items-center border w-32 rounded-xl p-4 transition-transform duration-300 hover:scale-105">
                <img src={assets.whatsapp} alt="WhatsApp Icon" className="w-6 h-6" />
                <p className="font-playfair">WhatsApp</p>
                </button>
            </a>

            {/* Call */}
            <a href="tel:+265996904765">
                <button className="text-white flex gap-1 items-center border w-32 rounded-xl p-4 transition-transform duration-300 hover:scale-105">
                <img src={assets.Phone} alt="Phone Icon" className="w-6 h-6" />
                <p className="font-playfair">Call</p>
                </button>
            </a>

            {/* Email */}
            <a href="mailto:palmsandpebblesreservations@gmail.com">
                <button className="text-white flex gap-1 items-center border w-32 rounded-xl p-4 transition-transform duration-300 hover:scale-105">
                <img src={assets.email} alt="Email Icon" className="w-6 h-6" />
                <p className="font-playfair">Email</p>
                </button>
            </a>
            </div>
        
          </div>
        </div>
    </div>
  )
}

export default RoomDetails;
