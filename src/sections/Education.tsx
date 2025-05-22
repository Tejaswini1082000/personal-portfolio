import Section from '../components/Section';
import { Calendar, GraduationCap, Award } from 'lucide-react';
import { educationData } from '../data/educationData';

const Education = () => {
  return (
    <Section id="education" title="Education">
      <div className="max-w-3xl mx-auto">
        <div className="relative pl-8 border-l-2 border-indigo-400 dark:border-indigo-600 space-y-12">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="relative -left-8 mb-10 transform transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute -left-6 w-12 h-12 rounded-full bg-indigo-500 dark:bg-indigo-600 text-white flex items-center justify-center">
                <GraduationCap size={24} />
              </div>
              
              <div className="ml-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {edu.degree}
                </h3>
                <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                  {edu.school}
                </h4>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>{edu.period}</span>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                  <Award size={16} className="mr-2" />
                  <span>GPA: {edu.gpa}</span>
                </div>
                
                {edu.description && (
                  <p className="text-gray-700 dark:text-gray-300">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;