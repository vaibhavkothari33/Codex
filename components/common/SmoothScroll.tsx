"use client";

import { useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scroll behavior
    const smoothScroll = () => {
      document.documentElement.style.scrollBehavior = "smooth";
    };
    
    smoothScroll();
    
    // Handle anchor links with smooth scroll
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <>
      {children}
      {/* Optional: Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#E29A4C] origin-left z-[100]"
        style={{ scaleX }}
      />
    </>
  );
}

