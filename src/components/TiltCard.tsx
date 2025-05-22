import React from 'react';
import { motion } from 'framer-motion';

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  glareEffect?: boolean;
  scale?: number;
  perspective?: number;
};

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  glareEffect = true,
  scale = 1.05,
  perspective = 1000,
}) => {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover={{
        scale,
        rotateX: 5,
        rotateY: 5,
        transition: { duration: 0.3 },
      }}
      style={{ perspective: `${perspective}px` }}
    >
      {glareEffect && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-tr from-transparent via-white to-transparent transition-opacity duration-300" />
      )}
      {children}
    </motion.div>
  );
};

export default TiltCard;
