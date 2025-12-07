import { useState, useEffect } from 'react';

export const useSpotifyAuth = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const response = await fetch('/api/spotify/token');
        const data = await response.json();

        if (data.access_token) {
          setToken(data.access_token);
        } else {
          console.error('Failed to get Spotify access token');
        }
      } catch (error) {
        console.error('Error fetching Spotify access token:', error);
      }
    };

    if (!token) {
      getAccessToken();
    }
  }, [token]);

  return { token };
};
