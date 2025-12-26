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
      description: "An interactive portfolio website featuring immersive 3D animations and visual effects built with React and Three.js. Showcases projects with smooth transitions, responsive design, and modern UI/UX principles. Includes dark mode, smooth scrolling, and animated components.",
      technologies: ["React", "TypeScript", "Three.js", "Framer Motion", "Tailwind CSS", "Vite"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoLink: "https://portfolio-three-roan-efs5t5o7jf.vercel.app/",
      githubLink: "https://github.com/RohitReddy21/Portfolio",
      featured: true
    },
    {
      id: 2,
      title: "PrimeVerse - Digital Marketing Website",
      description: "A modern digital marketing agency website showcasing services, portfolio, and client testimonials. Features responsive design, service pages, case studies, contact forms, and blog section. Built with modern web technologies for optimal performance and SEO.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel", "SEO"],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoLink: "https://prime-verse.vercel.app/",
      githubLink: "https://github.com/RohitReddy21/PrimeVerse-",
      featured: true
    },
    {
      id: 3,
      title: "TJ - AI Company Website",
      description: "A professional company website for an AI-oriented technology company. Features modern design showcasing AI services, solutions, team, and technology stack. Includes interactive elements, service descriptions, case studies, and contact integration for business inquiries.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "AI Integration", "Vercel"],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoLink: "https://tj-beta.vercel.app/",
      githubLink: "#",
      featured: false
    },
    {
      id: 4,
      title: "CRM PV - Customer Management System",
      description: "A comprehensive Customer Relationship Management (CRM) application for managing customer data, interactions, sales pipelines, and business relationships. Features contact management, activity tracking, lead management, and analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "REST API"],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoLink: "https://crmpv.vercel.app/",
      githubLink: "https://github.com/RohitReddy21/CRMPV",
      featured: true
    },
    {
      id: 5,
      title: "FarmStay - Booking Platform",
      description: "A full-stack booking platform for farm stays and rural accommodations. Features property listings, search and filter functionality, booking system, user authentication, payment processing, and admin panel for property management.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Chart.js", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoLink: "https://farmstay-eight.vercel.app/",
      githubLink: "https://github.com/RohitReddy21/farmstay",
      featured: true
    },
    
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
      ? projects.filter(project => project.featured) 
      : projects;

  return (
    <section id="projects" ref={ref} className="py-24 bg-gray-900">
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
            Here are some of my recent full-stack projects built with React, Python, and modern web technologies. Each project demonstrates different aspects of web development, from frontend UI/UX to backend APIs and database management.
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
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden group"
              whileHover={{ y: -10 }}
            >
              <div className="relative aspect-video overflow-hidden bg-gray-700">
                <img 
                  src={project.image} 
                  alt={`${project.title} - Full Stack Project by Rohit Reddy`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750';
                  }}
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
          className="mt-20 bg-gray-800 rounded-xl shadow-lg p-6 md:p-10"
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
                Interactive 3D Portfolio Experience
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                This portfolio website showcases my abilities with Three.js and WebGL to create immersive
                3D experiences on the web. Features interactive 3D models, smooth animations, and modern
                design principles. Users can interact with 3D elements, rotate models, and explore
                the portfolio through an engaging visual experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Three.js', 'WebGL', 'React', 'Framer Motion', 'TypeScript', 'Tailwind CSS'].map((tech, index) => (
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
                  href="https://portfolio-three-roan-efs5t5o7jf.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
                <motion.a
                  href="https://github.com/RohitReddy21/Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
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