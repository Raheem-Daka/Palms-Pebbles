import React from 'react';
import { Link } from 'react-router-dom';
import { assets, roomCategories } from '../assets/assets'; 
// Assuming you import categories here

const RoomCard = ({ room }) => {
  // Fallback for categories
  const categories = room.categories && Array.isArray(room.categories) ? room.categories.join(', ') : 'No Categories Available';

  return (
    <Link to={`/rooms/${room._id}`} onClick={() => window.scrollTo(0, 0)} key={room._id}>
      <div className="rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition-all">
        <img
          src={room.images[0]}
          alt={`${room.roomType} image`}
          className="w-full h-64 object-cover"
        />
        <div className="p-4 pt-5">
          {/* Categories */}
          <div className="flex gap-4">
            {room.categories && room.categories.map((category, index) => {
              const categoryIcon = roomCategories.find(cat => cat.name === category)?.icon;

              return (
                <div key={index} className="flex items-center gap-2">
                  {categoryIcon && <img src={categoryIcon} alt={category} className="w-6 h-6" />}
                  <span className="text-sm text-gray-600">{category}</span>
                </div>
              );
            })}
          </div>

          {/* Room Title and Rating */}
          <div className="flex items-center justify-between mt-2">
            <p className="font-playfair text-xl font-medium text-gray-700">{room.roomType}</p>
            <div className="flex items-center gap-1">
              <img src={assets.starIconFilled} alt="Rating" className="h-4 w-4" />
              <span>4.5</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center mt-2 text-gray-600">
            <img src={assets.locationIcon} alt="Location" className="h-5 w-5 mr-2" />
            <span className="font-playfair">{room?.address}</span>
          </div>

          {/* Price and Book Now */}
          <div className="mt-4 flex justify-between items-center">
            <div className='flex justify-between flex-grow mr-5'>
              <p className="flex flex-col">
                <span className="font-playfair text-gray-800">${room.pricePerNight} <span className="font-playfair text-gray-500"> (1 person)</span> </span>
              </p>
              <p>
                <span className="font-playfair text-gray-800">${room.pricePerNight2} <span className="font-playfair text-gray-500"> (2 people)</span></span>
              </p>
            </div>
            <button className="flex text-white bg-gray-800 font-playfair px-4 py-2 text-md font-medium border-2 border-transparent hover:border-gray-400 rounded-xl hover:bg-white hover:text-gray-800 cursor-pointer transition-all duration-300 ease-in-out">            
              Book Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RoomCard;
