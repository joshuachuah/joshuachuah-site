'use client';

import { useState, useEffect } from 'react';
import LoadingAnimation from './LoadingAnimation';

export default function PageLoadAnimation({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if this is the first visit in this session
    const hasVisited = sessionStorage.getItem('hasVisited');

    if (hasVisited) {
      // Skip loading animation if already visited in this session
      setIsLoading(false);
    } else {
      // Mark as visited for this session
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <>
      <LoadingAnimation
        onComplete={() => setIsLoading(false)}
        duration={2000}
      />
      <div style={{ opacity: 0 }}>{children}</div>
    </>
  );
}
