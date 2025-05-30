import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Lightbulb, Puzzle, Rocket } from 'lucide-react';
import photo from '../components/assets/My Photo.jpeg';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" ref={ref} className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I design and develop experiences that make people's lives simpler through Web and Mobile apps.
            I work with React, JavaScript, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10">
              <img
                src={photo}
                alt="Rohit Reddy"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/20 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-2xl z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Web Developer & UI/UX Enthusiast
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Hi! I'm Rohit Reddy, a passionate web developer with over 5 years of experience in 
              creating beautiful, functional, and user-centered digital experiences. I am always 
              striving to learn new technologies and keeping up with the latest design trends.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              With a strong foundation in web development and a keen eye for design, I create 
              websites that not only look great but also provide seamless user experience. 
              My goal is to create products that are inclusive and accessible to all.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Code2 className="h-8 w-8 text-primary" />, title: "Web Development", description: "Creating responsive websites" },
                { icon: <Lightbulb className="h-8 w-8 text-primary" />, title: "Problem Solving", description: "Finding elegant solutions" },
                { icon: <Puzzle className="h-8 w-8 text-primary" />, title: "UI/UX Design", description: "Designing intuitive interfaces" },
                { icon: <Rocket className="h-8 w-8 text-primary" />, title: "Performance", description: "Optimizing for speed" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-3">{item.icon}</div>
                  <h4 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;