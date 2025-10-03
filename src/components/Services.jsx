// ServicesSection.jsx
import { motion } from "framer-motion";

const services = [
  { title: "Frontend Development", icon: "💻", description: "Building responsive and modern websites." },
  { title: "Backend Development", icon: "🖥️", description: "Creating robust server-side applications." },
  { title: "JavaScript Specialist", icon: "📜", description: "Expert in JavaScript and modern frameworks." },
  { title: "Graphic Design", icon: "🎨", description: "Designing visually appealing graphics." },
  { title: "UX Design", icon: "🧩", description: "Enhancing user experience with thoughtful design." },
  { title: "UI Design", icon: "📐", description: "Creating beautiful and intuitive interfaces." },
  { title: "Video Editing", icon: "🎬", description: "Editing videos for professional quality." },
  { title: "LinkedIn Optimization", icon: "🔗", description: "Optimizing LinkedIn profiles for better visibility." },
  { title: "SEO Expert", icon: "⚡", description: "Improving website ranking with SEO strategies." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const boxVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 200 } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => {
            const isLast = index === services.length - 1;
            return (
              <motion.div
                key={index}
                className={`relative p-6 rounded-2xl cursor-pointer text-center shadow-xl text-white overflow-hidden border border-white/20
                  ${isLast ? "col-span-2 md:col-span-1 flex justify-center" : ""}`}
                style={{ background: "linear-gradient(135deg, #f97316, #fb923c, #fbbf24)" }}
                variants={boxVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 25px rgba(0,0,0,0.3)",
                  background: "linear-gradient(to top right, #f472b6, #34d399, #3b82f6)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
              >
                <div className="max-w-[200px]">
                  {/* Icon */}
                  <motion.div
                    className="text-5xl mb-4"
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-white/90">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
