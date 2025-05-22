import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type AnimatedCursorProps = {
  color?: string;
  outerSize?: number;
  innerSize?: number;
  outerScale?: number;
  innerScale?: number;
  trailingSpeed?: number;
};

const AnimatedCursor: React.FC<AnimatedCursorProps> = ({
  color = 'bg-indigo-500',
  outerSize = 32,
  innerSize = 8,
  outerScale = 5,
  innerScale = 0.7,
  trailingSpeed = 0.2,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    const handleMouseDown = () => setCursorVariant('click');
    const handleMouseUp = () => setCursorVariant('default');
    
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Add hover effect to clickable elements
    const handleLinkHoverEvents = () => {
      const links = document.querySelectorAll('a, button, [role="button"]');
      
      links.forEach(link => {
        link.addEventListener('mouseenter', () => setCursorVariant('hover'));
        link.addEventListener('mouseleave', () => setCursorVariant('default'));
      });
    };

    handleLinkHoverEvents();

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - outerSize / 2,
      y: mousePosition.y - outerSize / 2,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - outerSize / 2,
      y: mousePosition.y - outerSize / 2,
      scale: outerScale,
    },
    click: {
      x: mousePosition.x - outerSize / 2,
      y: mousePosition.y - outerSize / 2,
      scale: innerScale,
    },
  };

  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 28,
  };

  return (
    <>
      <motion.div
        className={`${color} fixed top-0 left-0 rounded-full pointer-events-none z-50 opacity-30 mix-blend-difference`}
        style={{ width: outerSize, height: outerSize }}
        animate={cursorVariant}
        variants={variants}
        transition={spring}
      />
      <motion.div
        className={`${color} fixed top-0 left-0 rounded-full pointer-events-none z-50`}
        style={{ width: innerSize, height: innerSize }}
        animate={{
          x: mousePosition.x - innerSize / 2,
          y: mousePosition.y - innerSize / 2,
        }}
        transition={{
          type: 'tween',
          ease: 'backOut',
          duration: trailingSpeed,
        }}
      />
    </>
  );
};

export default AnimatedCursor;
