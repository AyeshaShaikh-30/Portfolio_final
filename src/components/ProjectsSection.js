import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Code, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const ProjectsSection = () => {
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'CenterPiece — Where Div Takes the Stage',
      techStack: ['HTML', 'Tailwind CSS','JavaScript'],
      problem: 'An educational platform designed to simplify and teach various CSS centering techniques through interactive challenges and visual demonstrations.',
      features: [
        'Interactive centering challenge canvas',
    'Showcasing multiple CSS positioning methods',
    'Responsive design using Flexbox and CSS Grid',
    'Modular and reusable UI components',
    'User-friendly, engaging learning experience'
      ],
      contribution: 'Developed the platform using HTML, CSS, and JavaScript. Built interactive UI components, created a centering challenge canvas, and implemented modular design for reusability and engagement.',
      image: '/centrepiece.png',
      liveDemo: 'https://center-piece.netlify.app/',
      github: 'https://github.com/AyeshaShaikh-30/Center-Piece-Where-the-div-takes-stage',
      bgColor: 'from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20',
      borderColor: 'border-pink-200 dark:border-pink-800'
    },
    {
      id: 2,
      name: 'Econova',
      techStack: ['HTML', 'Tailwind CSS','JavaScript'],
      problem: 'Encourages sustainable habits by tackling plastic pollution through gamified challenges and real-world impact.',
      features: [
        "Gamified sustainability missions",
  "Eco-token reward system",
  "Eco-Brick Maker and progress tracker",
  "Leaderboards and achievement badges",
  "Storytelling, memes, and interactive learning"
      ],
      contribution: 'Built an animated landing page with character interactions and an interactive questionnaire to enhance user engagement and personalization.',
      image: '/econova.png',
      liveDemo: 'https://ayeshashaikh-30.github.io/EcoNova_Dev_Challenge/',
      github: 'https://ayeshashaikh-30.github.io/EcoNova_Dev_Challenge/',
      bgColor: 'from-green-100 to-teal-100 dark:from-green-900/20 dark:to-teal-900/20',
      borderColor: 'border-green-200 dark:border-green-800'
    },
    {
      id: 3,
      name: 'Fantasy Delicacy',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      problem: 'Simplifies online food ordering with an interactive and user-friendly interface.',
      features: [
        "Responsive food menu with multiple cuisines",
      "Interactive cart functionality",
      "Seamless navigation across pages",
      "Modular design with reusable components",
      "Live deployment via GitHub Pages"
      ],
      contribution: 'Built a responsive food ordering website using HTML, CSS, and JavaScript. Developed an interactive menu, functional cart system, and implemented modular design principles for better maintainability. Deployed the project live using GitHub Pages.',
      image: '/images/fantasy.png',
      liveDemo: 'https://ayeshashaikh-30.github.io/Fantasy_Delicacy/',
      github: 'https://github.com/AyeshaShaikh-30/Fantasy_Delicacy',
      bgColor: 'from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20',
      borderColor: 'border-orange-200 dark:border-orange-800'
    },
    {
      id: 4,
      name: 'Portfolio Template',
      techStack: ['React', 'Tailwind CSS'],
      problem: 'Provides developers with a ready-to-use personal portfolio layout.',
      features: [
        'Light/Dark mode toggle',
        'Dynamic content sections',
        'Easy customization',
        'Responsive layout',
        'Modern animations'
      ],
      contribution: 'Designed and developed complete template structure with modern UI/UX.',
      image: '/api/placeholder/400/300',
      liveDemo: '#',
      github: '#',
      bgColor: 'from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section
      id="projects"
      className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-8"></div>
          <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Here are some of the projects I've worked on, showcasing my skills in frontend development 
            and full-stack applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card 
                className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-gray-200'} backdrop-blur-sm hover:shadow-xl transition-all duration-300 cursor-pointer group ${project.borderColor}`}
                onClick={() => handleProjectClick(project)}

              >
                <CardContent className="p-0">
                  {/* Project Image */}
                  
                  <div className={`h-48 bg-gradient-to-br ${project.bgColor} rounded-t-lg flex items-center justify-center relative overflow-hidden`}>
                    <div className={`text-6xl font-bold ${isDark ? 'text-white/20' : 'text-gray-900/20'}`}>
                      {project.name.charAt(0)}
                     
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Project Name */}
                    <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {project.name}
                    </h3>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className={`text-xs ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Problem Statement */}
                    <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {project.problem}
                    </p>

                    {/* Key Features Preview */}
                    <div className="mb-4">
                      <h4 className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                        Key Features:
                      </h4>
                      <ul className={`text-sm space-y-1 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {project.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <ArrowRight className="w-3 h-3 mr-2 text-pink-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveDemo, '_blank');
                        }}
                        className="flex-1"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, '_blank');
                        }}
                        className="flex-1"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProjectClick(project);
                        }}
                      >
                        <Code className="w-4 h-4 mr-2" />
                        Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Details Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-2xl`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {selectedProject.name}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Problem Statement */}
                  <div>
                    <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Problem it Solves:
                    </h4>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {selectedProject.problem}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Key Features:
                    </h4>
                    <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <ArrowRight className="w-4 h-4 mr-2 text-pink-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Personal Contribution */}
                  <div>
                    <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Personal Contribution:
                    </h4>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {selectedProject.contribution}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className={`${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <Button
                      onClick={() => window.open(selectedProject.liveDemo, '_blank')}
                      className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => window.open(selectedProject.github, '_blank')}
                      className="flex-1"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;