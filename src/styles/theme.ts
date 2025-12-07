// Brand colors for different sections
export const brandColors = {
  rose: '#f43f5e',
  blue: '#3b82f6',
  green: '#10b981',
} as const;

export const theme = {
  light: {
    // Base colors
    primary: '#000000',    // Pure black for primary actions and links
    secondary: '#6B7280',  // Gray for secondary text and icons
    accent: '#374151',     // Dark gray for hover states and highlights

    // Background colors
    bg: {
      primary: '#FFFFFF',    // Pure white main site background
      secondary: '#F9FAFB',  // Very light gray for cards and sections
      tertiary: '#F3F4F6',   // Light gray for subtle backgrounds
    },

    // Text colors
    text: {
      primary: '#000000',    // Pure black for main text and headings
      secondary: '#6B7280',  // Gray for body text and descriptions
      tertiary: '#9CA3AF',   // Light gray for subtle text like dates
      inverse: '#FFFFFF',    // White text for dark backgrounds
    },

    // Border colors
    border: {
      primary: '#E5E7EB',    // Light gray for card borders and dividers
      secondary: '#D1D5DB',  // Medium gray for hover state borders
    },

    // Navigation
    nav: {
      bg: 'rgba(0, 0, 0, 0.9)',     // Dark navbar background with transparency
      bubble: '#000000',             // Black for active nav indicators
      text: '#9CA3AF',               // Gray navbar text color
      textHover: '#FFFFFF',          // White navbar text hover color
    }
  },
}; 