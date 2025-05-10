import React from 'react';

function Contact() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8" data-aos="fade-down">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-6" data-aos="fade-up" data-aos-delay="100">
          Let’s collaborate, share ideas, or just say hi!
        </p>
        <div className="flex justify-center space-x-8" data-aos="fade-up" data-aos-delay="200">
          <a href="https://wa.me/917092197506" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 text-2xl">
            {/* WhatsApp Icon (You might need to add an actual icon here, e.g., using a library like Font Awesome or by using an SVG) */}
            WhatsApp
          </a>
          <a href="https://t.me/Sudhan17" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 text-2xl">
            {/* Telegram Icon */}
            Telegram
          </a>
          <a href="https://www.instagram.com/sudharsan_sedouramane_official?igsh=Y2xmNDY4MGxiNTBq" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 text-2xl">
            {/* Instagram Icon */}
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
