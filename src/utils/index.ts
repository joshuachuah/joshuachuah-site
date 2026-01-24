// Component utilities for portfolio website

export const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

export const formatDate = (date: Date): string => {
  return date.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit', 
    hour12: false 
  });
};