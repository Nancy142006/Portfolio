import React from "react";
import { Rocket } from "lucide-react";

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
          Project Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              tabIndex="0"
              role="button"
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <div className="p-6">

                <div className="flex items-center mb-4">
                  <Rocket className="w-6 h-6 text-cyan-400 mr-2" />
                  <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h3>
                </div>

                {project.description && (
                  <p className="text-gray-300 mb-4">{project.description}</p>
                )}

                {project.tech?.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-purple-600 text-xs px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.challenges && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-yellow-400 mb-2">
                      Challenge:
                    </h4>
                    <p className="text-xs text-gray-400">
                      {project.challenges}
                    </p>
                  </div>
                )}

                {project.impact && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">
                      Impact:
                    </h4>
                    <p className="text-xs text-gray-400">{project.impact}</p>
                  </div>
                )}

                {project.progress && (
                  <p className="text-xs text-yellow-300 italic">
                    {project.progress}
                  </p>
                )}

                {project.link && (
                  <div className="mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-400 underline hover:text-blue-600"
                    >
                      View on GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
