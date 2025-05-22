import { motion } from 'framer-motion';
import Section from '../components/Section';
import Card, { CardContent } from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import TiltCard from '../components/TiltCard';
import { projectsData } from '../data/projectsData';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <Section id="projects" title="Projects" className="bg-gray-50 dark:bg-gray-800">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projectsData.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <TiltCard className="h-full">
              <Card hoverable glowEffect className="h-full group">
                {project.image && (
                  <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden relative">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                )}
                <CardContent staggerChildren>
                  <motion.h3
                    className="text-xl font-bold mb-2 text-gray-900 dark:text-white"
                    variants={itemVariants}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-700 dark:text-gray-300 mb-4"
                    variants={itemVariants}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    variants={itemVariants}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant={techIndex % 3 === 0 ? "primary" : techIndex % 3 === 1 ? "secondary" : "default"}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex space-x-4 mt-4"
                    variants={itemVariants}
                  >
                    {project.liveUrl && (
                      <Button href={project.liveUrl} className="flex items-center">
                        <ExternalLink size={16} className="mr-2" />
                        Live Site
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button href={project.githubUrl} variant="outline" className="flex items-center">
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    )}
                  </motion.div>
                </CardContent>
              </Card>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;