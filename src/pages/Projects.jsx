import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'MySQL Visualization Tool',
      description: 'A modern, user-friendly MySQL database management application that enables users to interact with databases without writing SQL queries. Features include visual table management, advanced data grid, and data visualization.',
      technologies: ['React', 'Node.js', 'Express', 'MySQL', 'Material-UI', 'AG Grid', 'Recharts'],
      image: 'https://via.placeholder.com/600x400?text=MySQL+Visualization+Tool',
      github: 'https://github.com/YongJinYit1214/YongJinYit1214-MySql-tool',
      demo: '#',
      featured: true,
    },
    {
      title: 'Personal Portfolio',
      description: 'A responsive portfolio website built with React. Features include dark mode, animations, and contact form.',
      technologies: ['React', 'CSS', 'Framer Motion', 'React Router'],
      image: 'https://via.placeholder.com/600x400?text=Portfolio+Preview',
      github: 'https://github.com/YongJinYit1214/react-portfolio',
      demo: 'https://yongjinyit1214.github.io/react-portfolio/',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application that displays current weather and forecasts for any location. Uses OpenWeatherMap API for real-time data.',
      technologies: ['React', 'API Integration', 'CSS', 'JavaScript'],
      image: 'https://via.placeholder.com/600x400?text=Weather+App+Preview',
      github: '#',
      demo: '#',
      featured: false,
    },
  ];

  return (
    <div className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hero"
      >
        <h1 className="hero-title">
          My Projects
        </h1>
        <p className="hero-subtitle">
          Here are some of the projects I've worked on to showcase my skills and experience
        </p>
      </motion.div>

      {/* Featured Projects */}
      <div className="section">
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Featured Projects
        </h2>
        <div className="projects-grid">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="project-card"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-content">
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                  <p className="project-description">
                    {project.description}
                  </p>
                  <div className="project-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="project-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub className="project-link-icon" /> Code
                    </a>
                    
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Other Projects */}
      <div className="section">
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Other Projects
        </h2>
        <div className="projects-grid">
          {projects
            .filter((project) => !project.featured)
            .map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="project-card"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-content">
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                  <p className="project-description">
                    {project.description}
                  </p>
                  <div className="project-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="project-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub className="project-link-icon" /> Code
                    </a>
                  
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="section"
      >
        <div className="card" style={{ textAlign: 'center' }}>
          <h2 className="section-title">
            Interested in my work?
          </h2>
          <p className="section-text">
            These projects demonstrate my skills in React development. I'm always working on new projects to expand my portfolio.
          </p>
          <a
            href="https://github.com/YongJinYit1214"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
            style={{ display: 'inline-flex', alignItems: 'center' }}
          >
            <FaGithub style={{ marginRight: '0.5rem' }} /> View More on GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
