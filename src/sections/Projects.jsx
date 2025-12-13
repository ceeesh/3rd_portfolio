import React from "react";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  return (
    <div className="space-y-4">
      {projectsData.map((project, index) => (
        <div key={index} className="border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 bg-gray-300 p-2 md:p-3">
          {/* Project Header */}
          <div className="bg-blue-800 text-white px-2 py-1 mb-2 font-bold text-sm md:text-base">
            <span>{project.title}</span>
          </div>

          {/* Project Content */}
          <div className="border-2 border-t-gray-600 border-l-gray-600 border-b-gray-100 border-r-gray-100 bg-white p-2 md:p-3 text-xs md:text-sm space-y-3">
            {/* Project Type Badge */}
            <div className="inline-block border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 bg-gray-300 px-2 py-1 text-xs font-bold">
              {project.type}
            </div>

            {/* Description */}
            <p className="text-gray-800">{project.description}</p>

            {/* Technologies */}
            <div>
              <p className="font-bold mb-1">Technologies:</p>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="border border-gray-400 bg-gray-200 px-2 py-0.5 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Highlights */}
            <div>
              <p className="font-bold mb-1">Key Highlights:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                {project.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex} className="text-gray-700">{highlight}</li>
                ))}
              </ul>
            </div>

            {/* View Project Link(s) */}
            {project.link && (
              <div className="pt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 bg-gray-300 px-4 py-2 font-bold text-sm
                  active:border-t-gray-600 active:border-l-gray-600 active:border-b-gray-100 active:border-r-gray-100 hover:bg-gray-200"
                >
                  View Project →
                </a>
              </div>
            )}
            {project.links && (
              <div className="pt-2 flex flex-wrap gap-2">
                {project.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 bg-gray-300 px-4 py-2 font-bold text-sm
                    active:border-t-gray-600 active:border-l-gray-600 active:border-b-gray-100 active:border-r-gray-100 hover:bg-gray-200"
                  >
                    {link.name} →
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
