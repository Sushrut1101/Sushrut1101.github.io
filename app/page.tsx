'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ThemeToggle } from '@/components/theme-toggle';
import { AnimatedSkillBar } from '@/components/animated-skill-bar';
import {
  Github,
  Mail,
  MapPin,
  ExternalLink,
  Calendar,
  GraduationCap,
  Code,
  Shield,
  Server,
  Bot,
  Upload,
  Menu,
  X,
  ArrowUp
} from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const skills = {
    languages: [
      { name: 'C/C++', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'Bash/Shell', level: 95 },
      { name: 'SQL', level: 70 }
    ],
    tools: [
      { name: 'Docker', level: 90 },
      { name: 'Git/GitHub', level: 95 },
      { name: 'Linux', level: 95 },
      { name: 'CI/CD', level: 85 },
      { name: 'AOSP', level: 80 }
    ],
    domains: [
      'Competitive Coding',
      'Open Source',
      'DevOps',
      'Cybersecurity',
      'Networking',
      'Automation',
    ]
  };

  const experiences = [
    {
      title: 'Networking and Cyber Security Intern',
      company: 'Delhi Metro Rail Corporation',
      duration: 'May 2025 – Jul 2025',
      description: 'Performed hardening on Ubuntu servers to improve network and system security.',
      achievements: [
        'Automated deletion of NPCI records older than 90 days and developed cleanup scripts',
        'Created automated backup system for sensitive data using Bash between fabric server and backup workstation'
      ],
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: 'Technical Co-Head',
      company: 'Whitehats Club, VIT (Cybersecurity Club)',
      duration: 'Apr 2025 – Present',
      description: 'Leading technical initiatives including internal audits, tooling reviews, and capture-the-flag strategies.',
      achievements: [],
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: 'Core Member – Competitive Coding Domain',
      company: 'ACM-VIT Student Chapter',
      duration: 'Apr 2025 – Present',
      description: 'Participated in and helped organize coding contests, training sessions, and problem-solving workshops.',
      achievements: [],
      icon: <Code className="w-5 h-5" />
    },
    {
      title: 'Official Maintainer',
      company: 'The OrangeFox Recovery Project',
      duration: 'Feb 2021 – Present',
      description: 'Maintainer for Redmi 10A and 4 other Android devices; built custom recoveries and streamlined kernel builds.',
      achievements: [],
      icon: <Server className="w-5 h-5" />
    },
    {
      title: 'Open Source Contributor',
      company: 'Various Projects',
      duration: 'Oct 2022 – Present',
      description: 'Contributed PRs to TWRP, Appwrite, Termux, and other open source projects.',
      achievements: [
        'Active participant in Hacktoberfest (2022–2024) with 4+ accepted PRs each year'
      ],
      icon: <Github className="w-5 h-5" />
    },
    {
      title: 'AOSP Bringup',
      company: 'Independent Developer',
      duration: 'Jul 2022 – Present',
      description: 'Ported AOSP to Redmi Note 11T 5G and Redmi 10A; worked on device trees and kernel customizations.',
      achievements: [],
      icon: <Server className="w-5 h-5" />
    }
  ];

  const projects = [
    {
      title: 'DumprX',
      description: 'Firmware dumper and Git integration tool for Android archives using Bash.',
      technologies: ['Bash', 'Git', 'Android'],
      github: 'https://github.com/DumprX/DumprX',
      icon: <Upload className="w-6 h-6" />
    },
    {
      title: 'Tmate Telegram Bot',
      description: 'Secure remote shell orchestrator bot with logging and access control.',
      technologies: ['Python', 'Telegram API', 'Security'],
      github: 'https://github.com/Sushrut1101/tmate-tg-bot',
      icon: <Bot className="w-6 h-6" />
    },
    {
      title: 'Docker Images for Build Systems',
      description: 'Built GNU/Linux-based Docker images for AOSP and kernel compilation.',
      technologies: ['Docker', 'Linux', 'AOSP'],
      github: 'https://github.com/Sushrut1101/Docker',
      icon: <Server className="w-6 h-6" />
    },
    {
      title: 'GoFile-Upload CLI',
      description: 'Minimalist Bash utility to upload files directly to gofile.io.',
      technologies: ['Bash', 'CLI', 'API'],
      github: 'https://github.com/Sushrut1101/GoFile-Upload',
      icon: <Upload className="w-6 h-6" />
    }
  ];

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = navigation.map(nav => nav.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 transition-colors duration-300">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform-gpu z-50"
        style={{
          scaleX,
          transformOrigin: 'left'
        }}
        initial={{ scaleX: 0 }}
      />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-40 border-b border-border transition-colors duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="font-bold text-xl text-foreground"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Sushrut Gupta
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 ${activeSection === item.href.slice(1)
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-muted-foreground hover:text-blue-600'
                    }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.name}
                </motion.button>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-muted-foreground hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="md:hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href.slice(1))}
                      className={`block w-full text-left px-3 py-2 text-base font-medium transition-all duration-200 ${activeSection === item.href.slice(1)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-muted-foreground hover:text-blue-600 hover:bg-secondary/50'
                        }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center py-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="mb-8" variants={itemVariants}>
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-foreground mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                Sushrut Gupta
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              >
                Cybersecurity Enthusiast • Open Source Contributor • Android Developer
              </motion.p>
              <motion.p
                className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              >
                Computer Science student passionate about cybersecurity, open source development,
                and building secure, scalable systems. Currently pursuing B.Tech at VIT Vellore.
              </motion.p>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                >
                  View My Work
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 px-8 py-3 text-lg"
                >
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate computer science student with a strong focus on cybersecurity,
              open source development, and Android systems. My journey spans from low-level
              kernel development to high-level security implementations.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={itemVariants}>
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card">
                <CardHeader>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  </motion.div>
                  <CardTitle>Cybersecurity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Specialized in network security, server hardening, and security automation.
                    Experience with enterprise-level security implementations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card">
                <CardHeader>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Github className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  </motion.div>
                  <CardTitle>Open Source</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Active contributor to major open source projects including TWRP, Appwrite,
                    and Termux. Maintainer of Android recovery projects.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card">
                <CardHeader>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Server className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  </motion.div>
                  <CardTitle>Android Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Deep expertise in AOSP, kernel development, and custom ROM creation.
                    Maintained recovery projects for multiple Android devices.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit spanning multiple programming languages,
              development tools, and specialized domains.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Programming Languages */}
            <motion.div variants={itemVariants}>
              <Card className="bg-card hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Programming Languages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.languages.map((skill, i) => (
                    <AnimatedSkillBar key={skill.name} skill={skill} index={i} />
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Tools & Technologies */}
            <motion.div variants={itemVariants}>
              <Card className="bg-card hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Server className="w-5 h-5" />
                    Tools & Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.tools.map((skill, i) => (
                    <AnimatedSkillBar key={skill.name} skill={skill} index={i} />
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Domains */}
            <motion.div variants={itemVariants}>
              <Card className="bg-card hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Specialized Domains
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.domains.map((domain) => (
                      <motion.div
                        key={domain}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge variant="secondary" className="text-sm py-1 px-3 cursor-pointer">
                          {domain}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Experience</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A timeline of my professional journey and contributions to various organizations and projects.
            </p>
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-background">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {exp.icon}
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <CardTitle className="text-xl">{exp.title}</CardTitle>
                            <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
                              {exp.company}
                            </CardDescription>
                          </div>
                          <Badge variant="outline" className="mt-2 md:mt-0">
                            <Calendar className="w-3 h-3 mr-1" />
                            {exp.duration}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    {exp.achievements.length > 0 && (
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my open source contributions and personal projects
              spanning various domains and technologies.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="hover:shadow-lg transition-all duration-300 group hover:scale-105 bg-card">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {project.icon}
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className="flex items-center gap-2">
                          {project.title}
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-blue-600 transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <motion.div
                          key={tech}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge variant="secondary" className="text-xs cursor-pointer">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-card transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Education</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My academic journey and educational background in computer science and engineering.
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={itemVariants}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-background">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </motion.div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">B.Tech - Computer Science and Engineering</CardTitle>
                      <CardDescription className="text-lg">
                        Vellore Institute of Technology, Vellore
                      </CardDescription>
                    </div>
                    <Badge variant="outline">2023 - 2027</Badge>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-background">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="p-3 bg-green-100 dark:bg-green-900 rounded-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <GraduationCap className="w-6 h-6 text-green-600" />
                    </motion.div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">XII (Senior Secondary), CBSE</CardTitle>
                      <CardDescription className="text-lg">
                        Sardar Patel Vidyalaya, New Delhi
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-background">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="p-3 bg-amber-100 dark:bg-amber-900 rounded-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <GraduationCap className="w-6 h-6 text-amber-600" />
                    </motion.div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">X (Secondary), CBSE</CardTitle>
                      <CardDescription className="text-lg">
                        Sardar Patel Vidyalaya, New Delhi
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, collaborations,
              or just having a conversation about technology and cybersecurity.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={itemVariants}>
              <Card className="text-center hover:shadow-lg transition-all duration-300 group hover:scale-105 bg-card">
                <CardContent className="pt-6">
                  <motion.div
                    className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full w-fit mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Mail className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <motion.a
                    href="mailto:guptasushrut@gmail.com"
                    className="text-blue-600 hover:underline"
                    whileHover={{ scale: 1.05 }}
                  >
                    guptasushrut@gmail.com
                  </motion.a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="text-center hover:shadow-lg transition-all duration-300 group hover:scale-105 bg-card">
                <CardContent className="pt-6">
                  <motion.div
                    className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full w-fit mx-auto mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Github className="w-6 h-6 text-purple-600" />
                  </motion.div>
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <motion.a
                    href="https://github.com/Sushrut1101"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline"
                    whileHover={{ scale: 1.05 }}
                  >
                    @Sushrut1101
                  </motion.a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="text-center hover:shadow-lg transition-all duration-300 group hover:scale-105 bg-card">
                <CardContent className="pt-6">
                  <motion.div
                    className="p-3 bg-red-100 dark:bg-red-900 rounded-full w-fit mx-auto mb-4 group-hover:bg-red-200 dark:group-hover:bg-red-800 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MapPin className="w-6 h-6 text-red-600" />
                  </motion.div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-red-600">Delhi, India</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg mb-4">Sushrut Gupta</p>
          <p className="text-gray-400 mb-6">
            Cybersecurity Enthusiast • Open Source Contributor • Android Developer
          </p>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="mailto:guptasushrut@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://github.com/Sushrut1101"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
          </div>
          <Separator className="my-8 bg-gray-700 dark:bg-gray-800" />
          <p className="text-gray-400">
            © 2024 Sushrut Gupta. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg z-40"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
