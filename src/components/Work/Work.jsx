// src/components/Work/Work.jsx

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  useEffect(() => {
    if (selectedProject) {
      document.documentElement.style.overflowY = "hidden";
    }

    return () => {
      document.documentElement.style.overflowY = "auto";
    };
  }, [selectedProject]);

  return (
    <section
      id="work"
      className="py-24 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-600 dark:text-white">
          PROJECTS
        </h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg sm:text-xl font-semibold max-w-2xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border bg-white border-black/25 dark:border-white dark:bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-full h-48 sm:h-56 md:h-60 overflow-hidden rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-600 dark:text-white mb-2">
                {project.title}
              </h3>
              <ul className="text-gray-500 mb-4 text-sm sm:text-base list-disc pl-5">
                {project.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs sm:text-sm font-semibold text-white dark:text-purple-500 rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}

      {selectedProject &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4 overflow-auto">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden relative">
              <div className="flex justify-end p-4">
                <button
                  onClick={handleCloseModal}
                  className="text-gray-600 dark:text-white  text-3xl font-bold hover:text-purple-500"
                >
                  &times;
                </button>
              </div>
              <div className="flex flex-col">
                <div className="w-full flex justify-center px-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full sm:w-[95%] md:w-[90%] object-contain rounded-xl shadow-2xl"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-600 dark:text-white mb-4 text-center">
                    {selectedProject.title}
                  </h3>

                  <ul className="text-gray-600 dark:text-gray-400 mb-6 text-xs sm:text-sm md:text-base list-disc px-4 sm:px-6">
                    {selectedProject.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#251f38] text-xs sm:text-sm font-semibold text-white dark:text-purple-500 rounded-full px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href={`${selectedProject.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-1/2 bg-gray-800 hover:bg-purple-800 text-white px-4 py-2 rounded-xl font-semibold text-center transition text-sm sm:text-base"
                    >
                      View Code
                    </a>
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl font-semibold text-center transition text-sm sm:text-base"
                    >
                      View Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.querySelector("#portal"),
        )}
    </section>
  );
};

export default Work;
