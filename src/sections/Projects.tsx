import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoLink: string;
  githubLink: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "3D Portfolio Website",
      description: "A portfolio website with 3D elements and animations using Three.js and React.",
      technologies: ["React", "Three.js", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "A fully responsive e-commerce platform with product catalog, cart and checkout.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      id: 3,
      title: "Weather Application",
      description: "A weather application that shows forecasts using a third-party API.",
      technologies: ["JavaScript", "HTML", "CSS", "OpenWeather API"],
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      id: 4,
      title: "Task Management App",
      description: "A productivity app for managing tasks, projects, and deadlines.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/6956822/pexels-photo-6956822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "A dashboard for social media analytics and account management.",
      technologies: ["React", "Chart.js", "TypeScript"],
      image: "https://images.pexels.com/photos/7151481/pexels-photo-7151481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "An app to find recipes based on available ingredients in your kitchen.",
      technologies: ["React", "JavaScript", "CSS", "Food API"],
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoLink: "#",
      githubLink: "#",
      featured: false
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
      ? projects.filter(project => project.featured) 
      : projects;

  return (
    <section id="projects" ref={ref} className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">My Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects. Each project is a unique piece of development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'all' 
                  ? 'bg-primary text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'featured' 
                  ? 'bg-primary text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Featured
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group"
              whileHover={{ y: -10 }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-end space-x-3">
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-primary/80 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="h-5 w-5 text-white" />
                      </motion.a>
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-primary/80 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="h-5 w-5 text-white" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary dark:text-primary-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3D Project Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-10"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            Featured 3D Project
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
              <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} />
                <mesh>
                  <torusKnotGeometry args={[1, 0.3, 100, 16]} />
                  <meshStandardMaterial color="#8A2BE2" />
                </mesh>
                <OrbitControls enableZoom={false} autoRotate />
              </Canvas>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                Interactive 3D Web Experience
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                This project showcases my abilities with Three.js and WebGL to create immersive
                3D experiences on the web. Users can interact with the 3D model, rotate it, and
                explore it from different angles.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Three.js', 'WebGL', 'React', 'GLSL', 'JavaScript'].map((tech, index) => (
                  <span 
                    key={index}
                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary dark:text-primary-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
                <motion.a
                  href="#"
                  className="px-6 py-3 border border-primary text-primary dark:text-primary-light hover:bg-primary/10 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Code
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;