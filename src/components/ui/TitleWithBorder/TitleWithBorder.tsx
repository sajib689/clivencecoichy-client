import { cn } from '@/lib/utils'; // Assuming you have this utility function for conditional classnames
import React from 'react';

interface TitleWithBorderProps {
  title: string;
  className?: string; 
}

const TitleWithBorder: React.FC<TitleWithBorderProps> = ({ title, className }) => {
  return (
    <div className={cn('flex items-center gap-5 text-blue-primary', className)}>
      <div className="w-12 border border-blue-primary"></div> 
      <p className="font-semibold">{title}</p>
    </div>
  );
};

export default TitleWithBorder;
