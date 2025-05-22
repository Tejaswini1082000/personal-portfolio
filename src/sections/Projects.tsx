import Section from '../components/Section';
import Card, { CardContent } from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { projectsData } from '../data/projectsData';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <Section id="projects" title="Projects" className="bg-gray-50 dark:bg-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <Card key={index} hoverable>
            {project.image && (
              <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            )}
            <CardContent>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="primary">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex space-x-4 mt-4">
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
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Projects;