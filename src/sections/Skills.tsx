import { motion } from 'framer-motion';
import { Code, Database, Server, Cloud, LineChart, GitBranch } from 'lucide-react';
import Section from '../components/Section';
import SkillBar from '../components/SkillBar';
import TiltCard from '../components/TiltCard';
import { skillsData } from '../data/skillsData';

const Skills = () => {
  // Map category names to icons
  const categoryIcons = {
    "Programming Languages": <Code className="w-6 h-6" />,
    "Data Analysis & Visualization": <LineChart className="w-6 h-6" />,
    "Cloud Platforms": <Cloud className="w-6 h-6" />,
    "Databases": <Database className="w-6 h-6" />,
    "Web & Backend Technologies": <Server className="w-6 h-6" />,
    "DevOps & Version Control": <GitBranch className="w-6 h-6" />
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Section id="skills" title="Skills">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillsData.map((category, index) => (
          <motion.div key={index} variants={itemVariants}>
            <TiltCard className="h-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 px-6 py-4 flex items-center">
                <span className="mr-3 text-white">
                  {categoryIcons[category.category as keyof typeof categoryIcons]}
                </span>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skillIndex}
                      name={skill.name}
                      percentage={skill.level}
                      color={
                        index % 3 === 0
                          ? "bg-indigo-600 dark:bg-indigo-500"
                          : index % 3 === 1
                            ? "bg-purple-600 dark:bg-purple-500"
                            : "bg-teal-600 dark:bg-teal-500"
                      }
                      icon={categoryIcons[category.category as keyof typeof categoryIcons]}
                    />
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;