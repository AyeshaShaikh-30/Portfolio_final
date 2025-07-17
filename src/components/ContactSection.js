import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Linkedin, Github, Send, User, MessageCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const { isDark } = useTheme();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shaikh.ayeshabashir@gmail.com',
      action: () => window.open('mailto:shaikh.ayeshabashir@gmail.com', '_blank'),
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, India',
      action: () => {},
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours',
      action: () => {},
      color: 'from-green-500 to-teal-500'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ayesha-shaikh-091139260/',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/AyeshaShaikh-30',
      color: 'from-gray-600 to-gray-800'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setIsSubmitting(false);
  };

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

  return (
    <section
      id="contact"
      className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50'}`}
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
            Contact & Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-8"></div>
          <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            I'm always open to discussing new opportunities, projects, or just having a chat about technology and innovation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-gray-200'} backdrop-blur-sm`}>
              <CardContent className="p-8">
                <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Send Me a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Your Name
                    </label>
                    <div className="relative">
                      <User className={`absolute left-3 top-3 w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className={`pl-10 ${isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className={`absolute left-3 top-3 w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className={`pl-10 ${isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Message
                    </label>
                    <div className="relative">
                      <MessageCircle className={`absolute left-3 top-3 w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or just say hi!"
                        rows={5}
                        className={`pl-10 resize-none ${isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Card className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-gray-200'} backdrop-blur-sm`}>
              <CardContent className="p-8">
                <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 ${
                        info.action && info.label === 'Email' 
                          ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700' 
                          : ''
                      }`}
                      onClick={info.action}
                    >
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {info.label}
                        </h4>
                        <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-gray-200'} backdrop-blur-sm`}>
              <CardContent className="p-8">
                <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Connect With Me
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.button
                      key={index}
                      onClick={() => window.open(social.url, '_blank')}
                      className={`flex items-center justify-center space-x-3 p-4 rounded-lg bg-gradient-to-r ${social.color} text-white hover:scale-105 transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="font-medium">{social.label}</span>
                    </motion.button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className={`${isDark ? 'bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-700' : 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200'} backdrop-blur-sm`}>
              <CardContent className="p-8 text-center">
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Let's Create Something Amazing Together!
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'm always excited to connect with fellow developers and creators.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;