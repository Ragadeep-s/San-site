import React from 'react';
import ProfileImage from '../assets/profile.jpg'; // Replace with your actual profile image path

function About() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
          <div data-aos="fade-right">
            <img
              src={ProfileImage}
              alt="Sudharsan Sedouramane"
              className="w-64 h-64 rounded-full shadow-md mx-auto md:mx-0"
            />
          </div>
          <div data-aos="fade-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Hi, I'm <span className="text-blue-500">Sudharsan Sedouramane</span></h2>
            <p className="text-gray-700 mb-4">
              👤 A passionate 📝 storyteller, writer, and creative soul who believes in the power of 💙 words and emotions.
            </p>
            <p className="text-gray-700 mb-4">
              🎥 From journalism to 🎬 filmmaking, I'm a National Award winner chasing meaningful content that resonates.
            </p>
            <p className="text-gray-700 mb-4">
              🌹 Avalo Athirai is not just a project — it's a piece of my heart.
            </p>
            <p className="text-gray-700 mb-4">
              When I'm not writing, I enjoy deep conversations, clever humor, and the subtle beauty in everyday life.
            </p>
            <p className="text-gray-700 mb-4">
              📱 Explore, connect, and join me on this creative journey.
            </p>
          </div>
        </div>

        <div className="mt-12" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Basic Information</h3>
          <p className="text-gray-700 mb-2">My name is Sudharsan, based in Pondicherry, India. I'm a passionate storyteller with a background in media, writing, and independent music projects.</p>
        </div>

        <div className="mt-8" data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Professional or Creative Focus</h3>
          <p className="text-gray-700 mb-2">I'm a creative storyteller and aspiring content creator, currently working on independent music and film-inspired projects. I also have experience in journalism and content writing. I hold an M.A. in Mass Communication and Journalism, which complements my practical experiences and deepens my understanding of media dynamics.</p>
        </div>

        <div className="mt-8" data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Notable Achievements</h3>
          <p className="text-gray-700 mb-2">My pilot film <span className="font-semibold">The Last Wish</span> is an award-winning short at the V Short Film Festival. I also created the emotional musical project <span className="font-semibold">Avalo Athirai</span>, which resonated with audiences for its narrative depth and heart-touching theme.</p>
        </div>

        <div className="mt-8" data-aos="fade-up" data-aos-delay="500">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Interests & Inspirations</h3>
          <p className="text-gray-700 mb-2">I'm deeply inspired by Tamil cinema, especially directors like Gautham Vasudev Menon and Venkat Prabhu. My core interests lie in scriptwriting and direction, and I’m constantly driven by the challenge of blending emotion with engaging storytelling.</p>
        </div>

        <div className="mt-8" data-aos="fade-up" data-aos-delay="600">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Journey</h3>
          <p className="text-gray-700 mb-2">I’ve been making films since 2017, with a growing portfolio that includes 5 short films, 2 pilot films (one released on MX Player, and the other being the award-winning The Last Wish), 1 web series (released on the Finally YouTube channel), and 2 independent album songs—one of which is the emotionally significant Avalo Athirai. Despite facing rejections from major music labels, Avalo Athirai became a testament to my belief in selfless love and storytelling. With every project, I’ve turned personal emotions into universally relatable narratives, pushing forward with grit, passion, and the support of close friends.</p>
        </div>

        <div className="mt-8" data-aos="fade-up" data-aos-delay="700">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Future Goals</h3>
          <p className="text-gray-700 mb-2">I aspire to write and direct feature films across a wide range of genres. My goal is to be a filmmaker who doesn’t limit himself to one tone or template—I want to explore everything from romance and drama to fantasy, action, and psychological thrillers. I'm committed to evolving my craft and creating stories that stay with people long after the credits roll.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
