import { useState } from 'react';
import Section from '../components/Section';
import { Calendar, MapPin } from 'lucide-react';
import { experienceData } from '../data/experienceData';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section id="experience" title="Professional Experience" className="bg-gray-50 dark:bg-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible space-x-4 lg:space-x-0 lg:space-y-2 pb-4 lg:pb-0">
            {experienceData.map((job, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`
                  whitespace-nowrap px-4 py-3 rounded-lg text-left transition-colors
                  ${activeTab === index ? 
                    'bg-indigo-500 text-white' : 
                    'hover:bg-gray-200 dark:hover:bg-gray-700'}
                `}
              >
                {job.company}
              </button>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {experienceData[activeTab].title}
              </h3>
              <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                {experienceData[activeTab].company}
              </h4>
              
              <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mb-4">
                <div className="flex items-center mr-4 mb-2">
                  <Calendar size={16} className="mr-1" />
                  <span>{experienceData[activeTab].period}</span>
                </div>
                <div className="flex items-center mb-2">
                  <MapPin size={16} className="mr-1" />
                  <span>{experienceData[activeTab].location}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              {experienceData[activeTab].responsibilities.map((responsibility, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400"></div>
                  </div>
                  <p className="ml-4 text-gray-700 dark:text-gray-300">{responsibility}</p>
                </div>
              ))}
            </div>
            
            {experienceData[activeTab].techStack && (
              <div className="mt-6">
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">Tech Stack:</h5>
                <p className="text-gray-700 dark:text-gray-300">{experienceData[activeTab].techStack}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;