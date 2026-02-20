import { useEffect, useState } from "react";
import { experiences } from "../../constants"; // Import your data
import { createPortal } from "react-dom";

const Experience = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  useEffect(() => {
    if (selectedProject) {
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section
      id="experience"
      className="py-24 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 2xl:px-60 font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-600 dark:text-white">
          EXPERIENCE
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg sm:text-xl font-semibold max-w-2xl mx-auto">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 w-1 bg-gray-600 dark:bg-white h-full"></div>

        {/* Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full cursor-pointer"
                onClick={() => handleOpenModal(experience)}
              />
            </div>

            {/* Content */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-6 md:p-8 rounded-2xl border bg-white border-black/25 dark:border-white dark:bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-4 transform transition-transform duration-300 hover:scale-105`}
            >
              <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
                {/* Company Logo */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-600 dark:bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => handleOpenModal(experience)}
                  />
                </div>

                {/* Role & Company */}
                <div className="mt-2 sm:mt-0 flex flex-col justify-between">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-600 dark:text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm sm:text-md text-gray-600 dark:text-gray-300">
                    {experience.company}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {experience.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <ul className="mt-4 ml-4 text-gray-600 dark:text-gray-400 list-disc text-sm sm:text-base">
                {experience.desc.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              {/* Skills */}
              <div className="mt-4">
                <h5 className="font-medium text-gray-600 dark:text-white text-sm sm:text-base">
                  Skills:
                </h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="bg-[#8245ec] text-white dark:text-gray-300 px-3 sm:px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4 overflow-auto">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden relative">
              <div className="flex flex-col">
                <div className="flex justify-end pt-4 w-full pr-6">
                  <button
                    style={{ color: "red" }}
                    onClick={handleCloseModal}
                    className="text-5xl font-bold text-gray-600 dark:text-white hover:text-purple-500 transition scale-125"
                  >
                    &times;
                  </button>
                </div>

                <div className="w-full flex justify-center px-4">
                  <img
                    src={selectedProject.img}
                    alt={selectedProject.role}
                    className="w-full object-contain rounded-xl shadow-2xl h-96"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-lg lg:text-3xl font-bold text-gray-600 dark:text-white mb-4">
                    {selectedProject.company}
                  </h3>
                  <ul className="text-gray-600 dark:text-gray-400 mb-6 list-disc text-sm sm:text-base">
                    {selectedProject.desc.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.skills.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-[#251f38] text-xs font-semibold text-white dark:text-purple-500 rounded-full px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-1/2 bg-gray-800 hover:bg-purple-800 text-white dark:text-gray-400 px-4 py-2 rounded-xl lg:text-xl text-sm font-semibold text-center transition"
                    >
                      View Code
                    </a>
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl lg:text-xl text-sm font-semibold text-center transition"
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
      {/* {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4 overflow-auto">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-gray-600 dark:text-white text-3xl font-bold hover:text-purple-500"
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
                    href={selectedProject.github}
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
        </div>
      )} */}

      {/* {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4 overflow-auto">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-gray-600 dark:text-white text-3xl font-bold hover:text-purple-500"
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
                    href={selectedProject.github}
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
        </div>
      )} */}
    </section>
  );
};

export default Experience;
