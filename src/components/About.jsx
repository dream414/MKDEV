import { motion } from "framer-motion";

const roles = [
  { title: "Frontend Developer", sub: "React, Vite, UI animations" },
  { title: "Backend Developer", sub: "Node, Express, MongoDB" },
  { title: "UX / UI Designer", sub: "Wireframes, Prototypes, Figma" },
  { title: "Graphic Designer", sub: "Branding, Adobe Suite" },
  { title: "Video Editor", sub: "Premiere Pro, After Effects" },
];

export default function About() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto flex flex-wrap gap-10 items-center">
        {/* Left text */}
        <motion.div
          className="flex-1 min-w-[280px]"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold mb-4  dark:text-white drop-shadow-xl">
            About Me
          </h2>
          <p className="mb-6 text-lg  dark:text-gray-300 leading-relaxed font-medium drop-shadow-sm   text-orange-500">
            I'm a multi-disciplinary creator building polished digital products —
            from responsive frontends to robust backends. I combine UX/UI design,
            graphics, and video editing to deliver engaging, high-quality experiences.
          </p>

          {/* Roles */}
          <motion.ul
            className="space-y-4"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {roles.map((r, idx) => (
              <motion.li
                key={r.title}
                className={`flex items-start gap-3 p-4 rounded-xl transition-transform hover:-translate-y-1 cursor-pointer
                  ${idx % 2 === 0 ? "bg-orange-50 dark:bg-gray-800 shadow-lg hover:shadow-2xl" : "bg-orange-100 dark:bg-gray-700 shadow-lg hover:shadow-2xl"}`}
                variants={item}
              >
                <span className="w-4 h-4 rounded-full bg-orange-500 mt-2 shadow-md"></span>
                <div>
                  <p className="font-bold text-orange-700 dark:text-white drop-shadow-sm">{r.title}</p>
                  <p className="text-sm text-orange-600 dark:text-gray-400">{r.sub}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right image with animation */}
        <motion.div
          className="flex-1 flex justify-center min-w-[260px] cursor-pointer"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative w-72 h-92 shadow-2xl rounded-3xl hover:shadow-[0_0_60px_rgba(255,165,0,0.6)] transition-shadow duration-500"
            animate={{
              rotate: [0, 5, -5, 0],
              y: [0, -10, 0, -10],
              scale: [1, 1.05, 1, 1.05],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <img
              src="./ab.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-3xl border-4 border-orange-500 dark:border-gray-700 shadow-xl"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-orange-300/30 to-pink-200/20 blur-3xl -z-10"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
