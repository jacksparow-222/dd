'use client';
import dynamic from 'next/dynamic';

// LAZY LOAD NON-CRITICAL COMPONENTS
export const Portfolio = dynamic(() => import('./Portfolio'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="text-white">Loading...</div></div>,
  ssr: true
});

export const Testimonials = dynamic(() => import('./Testimonials'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="text-white">Loading...</div></div>,
  ssr: true
});

export const Contact = dynamic(() => import('./Contact'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="text-white">Loading...</div></div>,
  ssr: true
});
