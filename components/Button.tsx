import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed rounded-full transform active:scale-95";
  
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-brand-primaryHover shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 border border-transparent",
    accent: "bg-gradient-to-r from-brand-accent to-red-500 text-white hover:shadow-lg hover:shadow-orange-500/25 border border-transparent",
    secondary: "bg-white text-brand-dark hover:bg-slate-100 shadow-lg border border-transparent",
    outline: "bg-transparent border-2 border-slate-600 text-slate-300 hover:border-white hover:text-white",
    ghost: "text-slate-400 hover:text-white hover:bg-white/5"
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4",
    xl: "text-lg px-10 py-5"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};