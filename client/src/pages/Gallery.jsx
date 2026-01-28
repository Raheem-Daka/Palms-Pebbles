import React, { useState } from "react";
import { photos } from "../assets/assets";

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photosPerPage = 24;

  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const totalPages = Math.ceil(photos.length / photosPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="pt-30">
      <h1 className="text-3xl font-bold text-center mb-8 font-playfair">Photo Gallery</h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-5 lg:grid-cols-6 gap-6 mb-8">
        {currentPhotos.map((photo, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={photo}
              alt={`Gallery item ${index + 1}`}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>

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
            font-playfair
          "
        >
          Previous
        </button>

        <span className="font-playfair">Page {currentPage} of {totalPages}</span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="
            rounded-xl p-2 w-20
            bg-gray-800 text-white
            disabled:bg-gray-300 disabled:text-gray-500
            disabled:cursor-not-allowed
            font-playfair
          "
        >
          Next
        </button>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/80 bg-opacity-70 flex items-center justify-center z-50 mb-10"
        >
          <div className="relative ">
            <img
              src={selectedPhoto}
              alt="Selected"
              className="w-auto max-h-[90vh] object-contain rounded-lg shadoe-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold p-2 border "
              onClick={() => setSelectedPhoto(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;