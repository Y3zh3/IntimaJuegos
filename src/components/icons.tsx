import type { SVGProps } from 'react';

export const HeartIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 20.844s-8.5-6.09-8.5-12.338C3.5 5.503 6.503 2.5 9.5 2.5c2.373 0 4.045 1.705 5 3.125 0.955-1.42 2.627-3.125 5-3.125 2.997 0 6 3.003 6 6.006 0 6.248-8.5 12.338-8.5 12.338z" />
  </svg>
);

export const SparklesIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <path d="M9.93 2.07a2 2 0 0 1 3.14 0l1.93 2.89a1 1 0 0 0 .83.54h3.5a2 2 0 0 1 1.57 3.14l-2.4 3.6a1 1 0 0 0 0 1.18l2.4 3.6a2 2 0 0 1-1.57 3.14h-3.5a1 1 0 0 0-.83.54l-1.93 2.89a2 2 0 0 1-3.14 0l-1.93-2.89a1 1 0 0 0-.83-.54H2.5a2 2 0 0 1-1.57-3.14l2.4-3.6a1 1 0 0 0 0-1.18l-2.4-3.6A2 2 0 0 1 2.5 5.5h3.5a1 1 0 0 0 .83-.54L9.93 2.07z"/>
        <path d="M12 8v8"/>
        <path d="M8.5 10.5l7 3"/>
        <path d="M8.5 13.5l7-3"/>
    </svg>
);

export const ShoppingCartIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <circle cx="8" cy="21" r="1"/>
        <circle cx="19" cy="21" r="1"/>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.16"/>
    </svg>
);

export const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
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
        <line x1="4" x2="20" y1="12" y2="12"/>
        <line x1="4" x2="20" y1="6" y2="6"/>
        <line x1="4" x2="20" y1="18" y2="18"/>
    </svg>
);

export const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );