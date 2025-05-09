import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const heroImage = `${process.env.PUBLIC_URL}/images/cinematic-hero.jpg`;

  return (
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold animate__animated animate__fadeInDown">
          Turning emotions into stories, one frame at a time
        </h1>
        <p className="text-lg mt-4 animate__animated animate__fadeInUp animate__delay-1s">
          Director • Writer • Storyteller
        </p>
        <div className="mt-8 space-x-4 animate__animated animate__fadeInUp animate__delay-2s">
          <Link
            to="/projects"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
          >
            Explore Projects
          </Link>
          <Link
            to="/about"
            className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full"
          >
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
