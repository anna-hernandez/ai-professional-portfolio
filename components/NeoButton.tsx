
import React from 'react';

interface NeoButtonProps {
  children: React.ReactNode;
  // Fix: Updated onClick type to accept React.MouseEvent to support event control like stopPropagation()
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  active?: boolean;
  variant?: 'primary' | 'secondary' | 'accent';
}

const NeoButton: React.FC<NeoButtonProps> = ({ children, onClick, className = '', active = false, variant = 'primary' }) => {
  const baseStyles = "px-6 py-2 font-bold transition-all neo-border neo-shadow-hover neo-shadow-active whitespace-nowrap";
  const activeStyles = active ? "bg-[#d9f99d] translate-x-[2px] translate-y-[2px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" : "bg-white";
  
  const variantStyles = {
    primary: "bg-white",
    secondary: "bg-gray-100",
    accent: "bg-[#bef264]" // Bright lime/yellow
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${active ? '' : variantStyles[variant]} ${activeStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default NeoButton;
