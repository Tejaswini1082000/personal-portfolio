import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

type SkillBarProps = {
  name: string;
  percentage: number;
  color?: string;
  icon?: React.ReactNode;
};

const SkillBar: React.FC<SkillBarProps> = ({
  name,
  percentage,
  color = 'bg-indigo-600 dark:bg-indigo-500',
  icon,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          {icon && <span className="mr-2 text-gray-600 dark:text-gray-300">{icon}</span>}
          <span className="font-medium text-gray-700 dark:text-gray-200">{name}</span>
        </div>
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{percentage}%</span>
      </div>
      <div className="h-2.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color} rounded-full`}
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
