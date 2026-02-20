import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="
      pt-24
      pb-16
      px-6
      sm:px-10
      md:px-16
      lg:px-24
      xl:px-32
      2xl:px-60
      font-sans
      "
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {/* Greeting */}
          <h1
            className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          font-bold
          text-gray-700
          dark:text-white
          leading-tight
          "
          >
            Kya bolti public
          </h1>

          {/* Name */}
          <h2
            className="
          mt-2
          text-4xl
          sm:text-5xl
          md:text-6xl
          xl:text-7xl
          font-extrabold
          text-gray-800
          dark:text-white
          leading-tight
          "
          >
            Shameem Ahmed
          </h2>

          {/* Typing Role */}
          <h3
            className="
          mt-4
          text-lg
          sm:text-xl
          md:text-2xl
          xl:text-3xl
          font-semibold
          "
          >
            <span className="text-gray-700 dark:text-gray-200">I am a </span>

            <span className="text-[#8245ec]">
              <ReactTypingEffect
                text={[
                  "Data Analyst",
                  "Data Assistant",
                  "Reporting Analyst",
                  "Business Data Analyst",
                  "MIS Executive",
                  "Junior Data Analyst",
                  "Analytics Professional",
                  "Data-Driven Problem Solver",
                ]}
                speed={100}
                eraseSpeed={40}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-[#8245ec]">{cursor}</span>
                )}
              />
            </span>
          </h3>

          {/* Paragraph */}
          <p
            className="
          mt-6
          text-base
          sm:text-lg
          text-gray-600
          dark:text-gray-400
          leading-relaxed
          max-w-xl
          mx-auto
          lg:mx-0
          "
          >
            Detail oriented and self motivated Data Analyst with hands-on
            experience in SQL, Python, Power BI, and Excel, focused on
            transforming raw data into meaningful insights that support business
            decisions. I specialize in data cleaning, analysis, and dashboard
            creation, helping organizations track performance, identify trends,
            and improve operational efficiency.
          </p>

          {/* Button */}
          <div className="mt-8">
            <a
              href="https://drive.google.com/file/d/12nE1uQHlCkPQRc5mzrZYiFzEdukcKPIP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-block
              text-white
              font-bold
              text-base
              sm:text-lg
              px-7
              py-3
              rounded-full
              transition
              duration-300
              transform
              hover:scale-105
              "
              style={{
                background: "linear-gradient(90deg,#8245ec,#a855f7)",
                boxShadow: "0 0 20px rgba(130,69,236,.6)",
              }}
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.03}
            transitionSpeed={800}
            gyroscope={true}
            className="
            rounded-full
            border-4
            border-purple-700
            w-44 h-44
            sm:w-60 sm:h-60
            md:w-72 md:h-72
            lg:w-80 lg:h-80
            xl:w-[26rem] xl:h-[26rem]
            2xl:w-[30rem] 2xl:h-[30rem]
            "
          >
            <img
              src={profileImage}
              alt="Shameem Ahmed"
              className="
              w-full h-full
              object-cover
              rounded-full
              drop-shadow-[0_15px_30px_rgba(130,69,236,0.55)]
              "
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
