import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Heart, Users, Lightbulb, Award, Target } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const LeadershipSection = () => {
  const { isDark } = useTheme();

  const leadership = [
    {
      id: 1,
      role: 'President',
      organization: "Institution's Innovation Council (IIC)",
      duration: 'Current',
      type: 'Leadership',
      description: 'Leading the innovation council to foster entrepreneurial thinking and innovation among students.',
      responsibilities: [
        'Organizing innovation workshops.',
        'Mentoring student startups and projects',
        'Coordinating with faculty and industry experts',
        'Promoting entrepreneurial culture in institution',
        'Managing team of 20+ council members'
      ],
      impact: [
        'Increased student participation in innovation activities by 40%',
        'Organized 5+ successful tech events'
      ],
      skills: ['Leadership', 'Event Management', 'Team Building', 'Strategic Planning'],
      icon: Crown,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 2,
      role: 'Trustee',
      organization: 'WeExist',
      duration: 'Ongoing',
      type: 'Social Initiative',
      description: 'A social initiative focused on providing food, education, and essentials to underprivileged communities.',
      responsibilities: [
        'Strategic planning for social impact programs',
        'Coordinating food distribution drives',
        'Managing educational support programs',
        'Fundraising and resource management',
        'Community outreach and engagement'
      ],
      impact: [
        'Helped 200+ underprivileged individuals',
        'Organized 2 food distribution drives',
        'Actively seeking to provide educational support to underprivileged children'
      ],
      skills: ['Social Impact', 'Community Service', 'Project Management', 'Fundraising'],
      icon: Heart,
      color: 'from-pink-500 to-rose-600'
    }
  ];

  const additionalActivities = [
    {
      title: 'Hackathon Participation',
      description: 'Actively participating in hackathons, collaborating with teams to build innovative solutions and enhance problem-solving skills.',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Community Tech Events',
      description: 'Organizing and participating in local tech meetups and community events.',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'WeExist Community Engagement',
      description: 'Collaborating with the team to organize WeExist events and initiatives aimed at supporting underprivileged communities.',
      icon: Target,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  return (
    <section
      id="leadership"
      className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50'}`}
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
            Leadership & Community Work
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-8"></div>
          <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            My journey in leadership roles and social initiatives, working towards positive impact in communities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Leadership Roles */}
          {leadership.map((role, index) => (
            <motion.div key={role.id} variants={itemVariants}>
              <Card className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-gray-200'} backdrop-blur-sm hover:shadow-xl transition-all duration-300`}>
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                    {/* Role Icon */}
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${role.color} flex items-center justify-center mb-6 lg:mb-0 flex-shrink-0`}>
                      <role.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Role Details */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {role.role}
                          </h3>
                          <div className="flex items-center space-x-4 mb-3">
                            <span className={`text-lg font-semibold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                              {role.organization}
                            </span>
                            <Badge variant="outline" className={`${isDark ? 'border-gray-600 text-gray-300' : 'border-gray-300 text-gray-600'}`}>
                              {role.type}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {role.duration}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className={`text-base mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {role.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="mb-6">
                        <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          Key Responsibilities:
                        </h4>
                        <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {role.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-sm">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Impact */}
                      <div className="mb-6">
                        <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          Impact & Achievements:
                        </h4>
                        <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {role.impact.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <Award className="w-4 h-4 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          Skills Developed:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {role.skills.map((skill, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className={`${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Additional Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12"
          >
            <h3 className={`text-2xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Additional Community Activities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalActivities.map((activity, index) => (
                <Card key={index} className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-gray-200'} backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br ${activity.color} flex items-center justify-center`}>
                      <activity.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {activity.title}
                    </h4>
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {activity.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <Card className={`${isDark ? 'bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-700' : 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200'} backdrop-blur-sm`}>
              <CardContent className="p-8">
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Interested in Collaboration?
                </h3>
                <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  I'm always open to working on meaningful projects that create positive impact. 
                  Let's connect and explore how we can work together!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <button 
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                      isDark 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                        : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                    }`}
                  >
                    Get In Touch
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;