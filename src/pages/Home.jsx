import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="section">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hero"
      >
        <h1 className="hero-title">
          Hi, I'm <span>Yong Jin Yit</span>
        </h1>
        <p className="hero-subtitle">
          A passionate React developer building modern web applications with clean, efficient code.
        </p>
        <div className="button-group">
          <Link
            to="/contact"
            className="button-primary"
          >
            Contact Me <FaArrowRight className="ml-2" />
          </Link>
          <Link
            to="/projects"
            className="button-secondary"
          >
            View Projects
          </Link>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="section"
      >
        <div className="card">
          <h2 className="section-title">
            About Me
          </h2>
          <p className="section-text">
            I'm a frontend developer with a passion for creating responsive, user-friendly web applications.
            I specialize in React and modern JavaScript, with experience in building interactive UIs and
            integrating with APIs.
          </p>
          <p className="section-text">
            I'm currently seeking internship opportunities where I can apply my skills, learn from experienced
            developers, and contribute to meaningful projects.
          </p>
          <p className="section-text">
            When I'm not coding, I enjoy reading, playing basketball, and continuously learning new technologies.
          </p>
        </div>
      </motion.div>

      {/* Featured Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="section"
      >
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Featured Skills
        </h2>
        <div className="skills-grid">
          {['React', 'JavaScript', 'HTML/CSS', 'CSS', 'Git', 'Responsive Design', 'API Integration', 'UI/UX'].map((skill, index) => (
            <div
              key={index}
              className="skill-item"
            >
              <p className="skill-name">{skill}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link
            to="/skills"
            className="button-secondary"
          >
            View all skills <FaArrowRight style={{ marginLeft: '0.5rem' }} />
          </Link>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="cta"
      >
        <h2 className="cta-title">
          Interested in working together?
        </h2>
        <p className="cta-text">
          I'm currently available for internship opportunities. Let's connect and discuss how I can contribute to your team.
        </p>
        <Link
          to="/contact"
          className="cta-button"
        >
          Get in Touch
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
