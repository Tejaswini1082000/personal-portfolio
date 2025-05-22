import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  glowEffect?: boolean;
  tiltEffect?: boolean;
  animateEntrance?: boolean;
}

const Card = ({
  children,
  className = '',
  hoverable = false,
  glowEffect = false,
  tiltEffect = false,
  animateEntrance = false
}: CardProps) => {
  // Base styles
  const baseStyles = `
    bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden
    ${hoverable ? 'transition-all duration-300 hover:-translate-y-2 hover:shadow-lg' : ''}
    ${glowEffect ? 'hover:shadow-lg hover:shadow-indigo-500/20 dark:hover:shadow-indigo-400/20' : ''}
    ${className}
  `;

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Tilt effect props
  const tiltProps = tiltEffect ? {
    whileHover: {
      scale: 1.02,
      rotateX: 5,
      rotateY: 5,
      transition: { duration: 0.3 }
    },
    style: { perspective: '1000px' }
  } : {};

  return (
    <motion.div
      className={baseStyles}
      initial={animateEntrance ? "hidden" : undefined}
      whileInView={animateEntrance ? "visible" : undefined}
      viewport={animateEntrance ? { once: true, margin: "-50px" } : undefined}
      variants={animateEntrance ? cardVariants : undefined}
      {...tiltProps}
    >
      {glowEffect && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-teal-500/20 transition-opacity duration-300" />
      )}
      {children}
    </motion.div>
  );
};

export interface CardContentProps {
  children: ReactNode;
  className?: string;
  staggerChildren?: boolean;
}

export const CardContent = ({
  children,
  className = '',
  staggerChildren = false
}: CardContentProps) => {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return staggerChildren ? (
    <motion.div
      className={`p-6 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  ) : (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

export default Card;