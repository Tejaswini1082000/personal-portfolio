import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

type ScrollProgressProps = {
  color?: string;
  height?: number;
  showPercentage?: boolean;
};

const ScrollProgress: React.FC<ScrollProgressProps> = ({
  color = 'bg-indigo-600 dark:bg-indigo-500',
  height = 4,
  showPercentage = false,
}) => {
  const { scrollYProgress } = useScroll();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      setScrollPercentage(Math.round(value * 100));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 right-0 z-50 ${color}`}
        style={{ height, scaleX: scrollYProgress, transformOrigin: '0%' }}
      />
      {showPercentage && (
        <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-full h-12 w-12 flex items-center justify-center shadow-lg z-50">
          <span className="text-sm font-semibold">{scrollPercentage}%</span>
        </div>
      )}
    </>
  );
};

export default ScrollProgress;
