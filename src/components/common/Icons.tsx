import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

/**
 * Authentic WhatsApp Vector Brand Icon.
 * Features the official circular speech bubble with lower tail and telephone handset glyph.
 */
export const WhatsAppIcon: React.FC<IconProps> = ({ 
  className = "w-5 h-5", 
  size,
  ...props 
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
      {...props}
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.74 2.67 4.23 3.74.59.26 1.05.41 1.41.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.12-.17.26-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.4-.42-.56-.43h-.47z"/>
    </svg>
  );
};

/**
 * Official LinkedIn vector brand mark
 */
export const LinkedInIcon: React.FC<IconProps> = ({ 
  className = "w-4 h-4", 
  size,
  ...props 
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
      {...props}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
};

/**
 * Official Facebook vector brand mark
 */
export const FacebookIcon: React.FC<IconProps> = ({ 
  className = "w-4 h-4", 
  size,
  ...props 
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
    </svg>
  );
};

/**
 * Official Instagram vector brand mark
 */
export const InstagramIcon: React.FC<IconProps> = ({ 
  className = "w-4 h-4", 
  size,
  ...props 
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
};

/**
 * Official YouTube vector brand mark
 */
export const YouTubeIcon: React.FC<IconProps> = ({ 
  className = "w-4 h-4", 
  size,
  ...props 
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
      {...props}
    >
      <path d="M21.58 7.19a2.76 2.76 0 0 0-1.95-1.96C17.9 4.75 12 4.75 12 4.75s-5.9 0-7.63.48A2.76 2.76 0 0 0 2.42 7.19 29.07 29.07 0 0 0 2 12a29.07 29.07 0 0 0 .42 4.81 2.76 2.76 0 0 0 1.95 1.96c1.73.48 7.63.48 7.63.48s5.9 0 7.63-.48a2.76 2.76 0 0 0 1.95-1.96A29.07 29.07 0 0 0 22 12a29.07 29.07 0 0 0-.42-4.81zM9.75 15.02V8.98L15 12l-5.25 3.02z"/>
    </svg>
  );
};
