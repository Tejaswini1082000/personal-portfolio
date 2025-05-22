import React from 'react';
import { TypeAnimation } from 'react-type-animation';

type TypedTextProps = {
  sequences: (string | number)[];
  className?: string;
  wrapper?: 'p' | 'div' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  speed?: number;
  repeat?: number;
};

const TypedText: React.FC<TypedTextProps> = ({
  sequences,
  className = '',
  wrapper = 'span',
  speed = 50,
  repeat = Infinity,
}) => {
  return (
    <TypeAnimation
      sequence={sequences}
      wrapper={wrapper}
      speed={speed}
      repeat={repeat}
      className={className}
    />
  );
};

export default TypedText;
