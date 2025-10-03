import { FaCode, FaPaintBrush, FaPaperPlane } from "react-icons/fa"; 
import { 
  SiMongodb, 
  SiFigma, 
  SiGithub, 
  SiGit 
} from "react-icons/si";
import { motion } from "framer-motion";

export default function ToolsPanel() {
  const tools = [
    { id: "vscode", name: "Visual Studio Code", icon: <FaCode size={40} />, color: "from-blue-500 to-cyan-400" },
    { id: "canva", name: "Canva", icon: <FaPaintBrush size={40} />, color: "from-pink-500 to-purple-500" },
    { id: "mongodb", name: "MongoDB", icon: <SiMongodb size={40} />, color: "from-green-500 to-emerald-400" },
    { id: "postman", name: "Postman", icon: <FaPaperPlane size={40} />, color: "from-golden-500 to-yellow-500" },
    { id: "figma", name: "Figma", icon: <SiFigma size={40} />, color: "from-pink-500 to-orange-400" },
    { id: "git", name: "Git", icon: <SiGit size={40} />, color: "from-gray-700 to-black" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
        My Toolset
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((t, index) => (
          <motion.div
            key={t.id}
            className="relative group p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            {/* Gradient Glow */}
            <motion.div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${t.color} opacity-0 group-hover:opacity-100 blur-lg`}
              transition={{ duration: 0.5 }}
            ></motion.div>

            {/* Content */}
            <div className="relative flex flex-col items-center text-center space-y-4">
              <motion.div
                className={`w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-orange-400 shadow-xl`}
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {t.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-orange-400 drop-shadow-md">
                {t.name}
              </h3>
              <p className="text-sm text-orange-400">
                Powerful tool for modern development.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
