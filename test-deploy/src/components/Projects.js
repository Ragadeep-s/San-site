import React from 'react';
import { Link } from 'react-router-dom';
import projectData from '../data/projectsData'; // We'll create this data file next

function Projects() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8" data-aos="fade-down">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((category) => (
            <div key={category.name} data-aos="fade-up" data-aos-delay={category.delay}>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">{category.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.items.map((project) => (
                  <Link key={project.title} to={`/projects/${encodeURIComponent(project.title)}`} className="block rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={`/images/projects/${project.image}`} // Assuming images are in public/images/projects
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4 bg-white">
                      <h4 className="text-lg font-semibold text-gray-800">{project.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{project.briefDescription}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
