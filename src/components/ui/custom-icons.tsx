
import React from 'react';

// Create custom icons for missing Lucide icons
export const EmployabilityIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    <path d="M6 11h.01M6 15h.01M6 19h.01"></path>
  </svg>
);

export const InnovationIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2v5"></path>
    <path d="M6 7l2 2"></path>
    <path d="M2 12h5"></path>
    <path d="M6 17l2-2"></path>
    <path d="M12 22v-5"></path>
    <path d="M16 17l-2-2"></path>
    <path d="M22 12h-5"></path>
    <path d="M16 7l-2 2"></path>
    <circle cx="12" cy="12" r="4"></circle>
  </svg>
);
