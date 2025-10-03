import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-10 gap-10"
    >
      {/* Left Text Section */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="text-orange-600 dark:text-orange-400">
            Mahak Dev
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-orange-500 dark:text-orange-300 mb-4">
          <ReactTyped
            strings={[
              "Frontend Developer 💻",
              "Backend Developer ⚙️",
              "UX/UI Designer 🎨",
              "Graphic Designer 🖌️",
              "Video Editor 🎬",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </h2>

        <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0 mb-6 leading-relaxed">
          I design and build modern, responsive, and user-friendly websites with
          full-stack power. From idea to deployment, I create seamless digital
          experiences that leave an impact.
        </p>
        <div className="space-x-4">

        <motion.a
          href="https://protfolio-cv.my.canva.site/"
          className="inline-block px-6 py-3 cursor-pointer bg-white text-orange-600 hover:text-white font-medium rounded-lg shadow-md hover:bg-orange-700 transition"
          whileHover={{ scale: 1.05 }}
        >
        Download CV🚀
       </motion.a><motion.a
          href="#contact"
          className="inline-block px-6 py-3 cursor-pointer bg-orange-600 text-white font-medium rounded-lg shadow-md hover:bg-white hover:text-orange-600 transition"
          whileHover={{ scale: 1.05 }}
        >
        Contact Me🚀
       </motion.a>
       </div>
       
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="./dp.jpg"
          alt="Profile"
          className="w-72 h-72 md:w-96 md:h-96 cursor-pointer rounded-full border-4 border-orange-600 dark:border-orange-400 shadow-lg object-cover"
          whileHover={{ scale: 1.05, rotate: 2 }}
        />
      </motion.div>
    </section>
  );
};

export default Home;
