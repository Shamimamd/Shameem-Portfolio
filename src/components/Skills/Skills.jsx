// src/components/Skills/Skills.jsx

import { useState } from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // Skill modal handlers
  const openSkillModal = (skill) => setSelectedSkill(skill);
  const closeSkillModal = () => setSelectedSkill(null);

  // Project modal handlers
  const openProjectModal = (project) => setSelectedProject(project);
  const closeProjectModal = () => setSelectedProject(null);

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 font-sans bg-skills-gradient clip-path-custom"
    >
      {/* ===== Title ===== */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-600 dark:text-white">
          SKILLS
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg sm:text-xl font-semibold max-w-2xl mx-auto">
          A collection of my technical skills and expertise honed through
          projects and experience
        </p>
      </div>

      {/* ===== Skill Categories ===== */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-white dark:bg-gray-900 border border-black/25 dark:border-white backdrop-blur-md px-6 sm:px-8 py-6 sm:py-8 w-full sm:w-[48%] rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-600 dark:text-gray-400 mb-4 text-center">
              {category.title}
            </h3>

            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    onClick={() => openSkillModal(skill)}
                    className="flex items-center justify-center space-x-2 border-2 border-gray-700 dark:border-gray-500 rounded-3xl py-2 px-2 sm:px-3 cursor-pointer hover:scale-105 transition"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>

      {/* ================= SKILL MODAL ================= */}
      {selectedSkill && (
        <div
          onClick={closeSkillModal}
          className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full sm:w-[400px] max-w-sm relative shadow-xl animate-fadeIn"
          >
            <button
              onClick={closeSkillModal}
              className="absolute top-2 right-3 text-xl font-bold text-gray-600 dark:text-white"
            >
              ✕
            </button>

            <div className="text-center">
              <img
                src={selectedSkill.logo}
                alt={selectedSkill.name}
                className="w-20 h-20 mx-auto mb-4"
              />

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                {selectedSkill.name}
              </h3>

              <p className="text-gray-500 mt-3 text-sm sm:text-base">
                {selectedSkill.description ||
                  "This skill has been used across multiple real-world projects."}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= PROJECT MODAL ================= */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 overflow-auto">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden relative">
            {/* Close */}
            <div className="flex justify-end p-4">
              <button
                onClick={closeProjectModal}
                className="text-gray-600 dark:text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <div className="flex justify-center px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full sm:w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>

              <div className="p-6 lg:p-8">
                <h3 className="lg:text-3xl text-lg font-bold text-gray-600 dark:text-white mb-4 text-center">
                  {selectedProject.title}
                </h3>

                <ul className="text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base list-disc px-4 sm:px-6">
                  {selectedProject.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs sm:text-sm font-semibold text-white rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-1/2 bg-gray-800 hover:bg-purple-800 text-white px-4 py-2 rounded-xl font-semibold text-center transition"
                  >
                    View Code
                  </a>

                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl font-semibold text-center transition"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
