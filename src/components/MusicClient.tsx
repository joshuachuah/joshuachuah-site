'use client';

import dynamic from 'next/dynamic';

const Music = dynamic(() => import('./Music'), {
  ssr: false,
});

export default Music;
