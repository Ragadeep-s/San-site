import React from 'react';

function Gallery() {
  // Array of gallery image filenames (assuming they are in public/images/gallery)
  const galleryImages = [
    'IMG_20250507_165254_522.jpg',
    'IMG_20250507_165254_692.jpg',
    'IMG_20250507_165254_883.jpg',
    'IMG_20250507_165255_137.jpg',
    'IMG_20250507_165255_175.jpg',
    'IMG_20250507_165255_180.jpg',
    'IMG_20250507_165255_222.jpg',
    'IMG_20250507_165255_248.jpg',
    'IMG_20250507_165255_359.jpg',
    'IMG_20250507_165317_177.jpg',
    'IMG_20250507_165317_220.jpg',
    'IMG_20250507_165327_402.jpg',
    'IMG_20250507_165339_539.jpg',
    'IMG_20250507_165344_446.jpg',
    'IMG_20250507_165344_625.jpg',
    'IMG_20250507_165344_905.jpg',
    'IMG_20250507_165345_115.jpg',
    'IMG_20250507_165345_164.jpg',
    'IMG_20250507_165350_194.jpg',
    'IMG_20250507_165350_285.jpg',
    'IMG_20250507_165350_445.jpg',
    'IMG_20250507_165350_698.jpg',
    'IMG_20250507_165351_023.jpg',
    'IMG_20250507_165355_184.jpg',
    'IMG_20250507_165355_527.jpg',
    'IMG_20250507_165355_612.jpg',
    'IMG_20250507_165355_678.jpg',
    'IMG_20250507_165355_777.jpg',
    'IMG_20250507_165355_779.jpg',
    'IMG_20250507_165355_906.jpg',
    // Add more image/video filenames as needed
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8" data-aos="fade-down">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div key={image} data-aos="zoom-in">
              <img
                src={`/images/gallery/${image}`}
                alt="Gallery Image"
                className="w-full h-auto rounded-lg shadow-md"
              />
              {/* If you have videos, you might want to handle them differently, e.g., using a <video> tag */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
