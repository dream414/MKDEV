// ProjectsSection.jsx
import React from "react";
import { motion } from "framer-motion";

const projects = [
  { 
    id: 1, 
    image: "./quran.png", 
    title: "Arabic Quranic Website", 
    description: "An AI-powered Arabic Quranic website that fetches Quranic verses and translations dynamically, providing a responsive, interactive platform for users to read and explore the Quran online.", 
    link: "https://quranicwebsite.vercel.app/" 
  },
   { 
  id: 2, 
  image: "./inde.png", 
  title: "Independence Day", 
  description: "A vibrant Independence Day themed website showcasing patriotic design, animations, and responsive layouts to celebrate freedom and national prideacross all devices.", 
  link: "https://Independence-day-website-alpha.vercel.app/" 
},
 { 
  id: 3, 
  image: "./food.png", 
  title: "Restaurant Website", 
  description: "A colorful and cartoon-style restaurant website featuring playful design, tasty food menus, and fun animations that create an engaging and lively dining experience online.", 
  link: "https://restaurant-website-react-js3.vercel.app/" 
},
{ 
  id: 4, 
  image: "./engineer.png", 
  title: "Software Engineering Website", 
  description: "A software house themed website highlighting the life of software engineers, project workflows,modern development practices. It showcases services, team culture, technologies that drive innovative software solutions.", 
  link: "https://softwareenginerhealthweb-9puq.vercel.app/" 
},

 { 
  id: 5, 
  image: "./eco.png", 
  title: "Shopify E-commerce Website", 
  description: "An e-commerce clothing store offering stylish outfits for all generations. The website includes product catalogs, a shopping cart, and secure checkout, providing a smooth and responsive shopping experience for everyone.", 
  link: "https://ecommerce-website-black-tau.vercel.app/" 
},

 { 
  id: 6, 
  image: "./car.png", 
  title: "Toyota Car Website", 
  description: "An animated Toyota company website showcasing modern car models, sleek design, and interactive features. Built to reflect an official automotive brand experience with responsive layouts and smooth animations.", 
  link: "https://car-animated-website-znk1.vercel.app/" 
},

];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">My Web Projects</h2>
        
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 p-1"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              style={{
                background: `linear-gradient(135deg, ${index % 2 === 0 ? '#f97316, #facc15, #f43f5e' : '#fcd34d, #fb7185, #f97316'})`
              }}
            >
              {/* Inner card with white background */}
              <div className="bg-black/10 rounded-xl overflow-hidden m-3">
                
                {/* Image wrapper with gradient border */}
                <div className="flex justify-center items-center p-1 rounded-t-xl bg-gray-200"
                    //  style={{
                    //    background: `linear-gradient(135deg, ${index % 2 === 0 ? '#fbbf24, #f87171, #f43f5e' : '#fb7185, #fbbf24, #f97316'})`
                    //  }}
                     >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full max-w-xs h-48 object-contain rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Card content */}
                <div className="p-4 text-center">
                  <h1 className="text-lg md:text-xl font-semibold text-white mb-2">{project.title}</h1>
                  <p className="text-gray-600 mb-3 text-sm md:text-base">{project.description}</p>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:text-blue-400 transition-colors"
                  >
                   live Site View <span className="text-white m-2 text-2xl">⬈</span>

                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
