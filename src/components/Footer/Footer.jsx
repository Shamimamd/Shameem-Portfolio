import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const year = new Date().getFullYear();

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-gray-600 dark:text-white py-8 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 2xl:px-60">
      <div className="container mx-auto text-center flex flex-col items-center space-y-6">
        {/* Name / Logo */}
        <h2 className="text-xl sm:text-2xl font-semibold text-purple-500">
          Shameem Ahmed
        </h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center gap-4 text-2xl sm:text-3xl mt-4">
          {[
            // Uncomment and add links if needed
            // { icon: <FaFacebook />, link: "https://facebook.com" },
            // { icon: <FaTwitter />, link: "https://twitter.com" },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/shameem-ahmed-8957633a9",
            },
            // { icon: <FaInstagram />, link: "https://instagram.com" },
            // { icon: <FaYoutube />, link: "https://youtube.com" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm sm:text-base text-gray-400 mt-4">
          © {year} Shameem Ahmed. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
