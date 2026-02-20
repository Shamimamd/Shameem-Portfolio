import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMoon, HiSun } from "react-icons/hi";

const Navbar = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const textSubtle = isDark ? "text-gray-300" : "text-gray-700";
  const socialHover = "hover:text-[#8245ec]";

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-40 2xl:px-60 ${
        isDark
          ? "bg-[#050414] bg-opacity-70 backdrop-blur-md shadow-md"
          : "bg-white bg-opacity-70 backdrop-blur-md shadow-md"
      }`}
    >
      <div
        className={`py-4 sm:py-5 flex justify-between items-center ${isDark ? "text-white" : "text-black"}`}
      >
        {/* Logo */}
        <div className="text-lg sm:text-xl font-semibold cursor-pointer flex items-center gap-1">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="font-medium">Shameem</span>
          <span className="text-[#8245ec]">/</span>
          <span className="font-medium">Ahmed</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex space-x-6 lg:space-x-8 ${textSubtle}`}>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons + Theme Toggle */}
        <div className="hidden md:flex space-x-4 items-center">
          <a
            href="https://github.com/Shamimamd"
            target="_blank"
            rel="noopener noreferrer"
            className={`${textSubtle} ${socialHover}`}
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/shameem-ahmed-8957633a9"
            target="_blank"
            rel="noopener noreferrer"
            className={`${textSubtle} ${socialHover}`}
          >
            <FaLinkedin size={22} />
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-md transition ${isDark ? "hover:bg-white/10" : "hover:bg-gray-200"}`}
          >
            {isDark ? (
              <HiSun size={20} className="text-yellow-300" />
            ) : (
              <HiMoon size={20} className="text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-[#050414] bg-opacity-95 dark:bg-opacity-70 backdrop-blur-lg z-50 md:hidden">
          <ul
            className={`flex flex-col items-center py-6 space-y-4 ${textSubtle}`}
          >
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`w-full text-center cursor-pointer hover:text-[#8245ec] ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button
                  className="w-full py-2"
                  onClick={() => handleMenuItemClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://github.com/Shamimamd/Data-Analysis-Project"
                target="_blank"
                rel="noopener noreferrer"
                className={`${textSubtle} hover:text-[#8245ec]`}
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/shameem-ahmed-8957633a9"
                target="_blank"
                rel="noopener noreferrer"
                className={`${textSubtle} hover:text-[#8245ec]`}
              >
                <FaLinkedin size={22} />
              </a>
              <button
                onClick={() => {
                  toggleTheme();
                  setIsOpen(false);
                }}
                aria-label="Toggle theme"
                className={`p-2 rounded-md transition ${isDark ? "hover:bg-white/10" : "hover:bg-gray-200"}`}
              >
                {isDark ? (
                  <HiSun size={20} className="text-yellow-300" />
                ) : (
                  <HiMoon size={20} className="text-gray-600" />
                )}
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
