import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaNpm } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: <FaReact />, level: 80 },
        { name: 'JavaScript', icon: <FaJs />, level: 85 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 85 },
      ],
    },
    {
      title: 'Tools & Libraries',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 75 },
        { name: 'npm', icon: <FaNpm />, level: 80 },
        { name: 'React Router', level: 75 },
        { name: 'Framer Motion', level: 65 },
      ],
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', level: 85 },
        { name: 'Communication', level: 80 },
        { name: 'Teamwork', level: 90 },
        { name: 'Time Management', level: 75 },
        { name: 'Adaptability', level: 85 },
      ],
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
          My Skills
        </h1>
        <p className="hero-subtitle">
          Here are the technologies and skills I've been working with
        </p>
      </motion.div>

      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={categoryIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
          className="skill-category"
        >
          <div className="card">
            <h2 className="section-title">
              {category.title}
            </h2>

            <div className="skill-bars">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-bar-container">
                  <div className="skill-header">
                    {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                    <div className="skill-name-level">
                      <span>{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                  </div>
                  <div className="skill-bar-bg">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                      className="skill-bar-fill"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="section"
      >
        <div className="card">
          <h2 className="section-title">
            Currently Learning
          </h2>
          <p className="section-text">
            I'm always expanding my skill set. Here's what I'm currently focusing on:
          </p>
          <ul className="learning-list">
            <li className="learning-item">Advanced React patterns and hooks</li>
            <li className="learning-item">State management with Redux</li>
            <li className="learning-item">Testing with Jest and React Testing Library</li>
            <li className="learning-item">TypeScript for type-safe code</li>
            <li className="learning-item">Backend development with Node.js</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
