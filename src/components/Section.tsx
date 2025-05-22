import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, title, children, className = '' }: SectionProps) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="inline-block border-b-4 border-indigo-500 dark:border-indigo-400 pb-2">
            {title}
          </span>
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;