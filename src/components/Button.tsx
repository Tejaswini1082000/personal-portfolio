import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  href?: string;
}

const Button = ({
  children,
  onClick,
  type = 'button',
  className = '',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  href,
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden';

  const variantStyles = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-md hover:shadow-indigo-500/30',
    secondary: 'bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500 dark:bg-teal-500 dark:hover:bg-teal-600 shadow-md hover:shadow-teal-500/30',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-100 focus:ring-indigo-500 dark:border-gray-600 dark:hover:bg-gray-800 hover:shadow-md'
  };

  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };

  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${disabledStyle} ${className}`;

  // Animation variants
  const buttonVariants = {
    hover: {
      scale: 1.03,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.97,
      transition: { duration: 0.1 }
    }
  };

  // Ripple effect animation
  const rippleVariants = {
    initial: {
      scale: 0,
      opacity: 0.5,
    },
    animate: {
      scale: 2,
      opacity: 0,
      transition: { duration: 0.8 }
    }
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 overflow-hidden rounded-md">
          <motion.span
            className="absolute w-full h-full bg-white/10 rounded-full pointer-events-none"
            initial="initial"
            whileTap="animate"
            variants={rippleVariants}
            style={{ originX: 0.5, originY: 0.5 }}
          />
        </span>
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 overflow-hidden rounded-md">
        <motion.span
          className="absolute w-full h-full bg-white/10 rounded-full pointer-events-none"
          initial="initial"
          whileTap="animate"
          variants={rippleVariants}
          style={{ originX: 0.5, originY: 0.5 }}
        />
      </span>
    </motion.button>
  );
};

export default Button;