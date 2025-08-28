import { lazy } from 'react';

// Dynamic imports for heavy components
export const DynamicContactModal = lazy(() => import('../components/ContactModal'));
export const DynamicPortfolio = lazy(() => import('../components/Portfolio'));
export const DynamicTestimonials = lazy(() => import('../components/Testimonials'));

// Loading component for dynamic imports
export const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-400"></div>
  </div>
);
