import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useSpotifyAuth } from './useSpotifyAuth';

interface Track {
  id: string;
  name: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  spotifyUrl: string;
}

interface Artist {
  id: string;
  name: string;
  imageUrl: string;
  spotifyUrl: string;
  genres: string[];
}

interface RecentlyPlayedTrack {
  id: string;
  name: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  spotifyUrl: string;
  playedAt: string;
}

declare global {
  interface Window {
    Spotify: any;
    onSpotifyWebPlaybackSDKReady: () => void;
  }
}

export function useSpotify() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [topArtists, setTopArtists] = useState<Artist[]>([]);
  const [topTracks, setTopTracks] = useState<Track[]>([]);
  const [recentlyPlayedTracks, setRecentlyPlayedTracks] = useState<RecentlyPlayedTrack[]>([]);
  const { token } = useSpotifyAuth();
  
  // Use refs to track last fetch times
  const lastCurrentTrackFetch = useRef<number>(0);
  const lastTopArtistsFetch = useRef<number>(0);
  const lastTopTracksFetch = useRef<number>(0);
  const lastRecentlyPlayedFetch = useRef<number>(0);
  
  // Minimum time between fetches (in ms)
  const MIN_FETCH_INTERVAL = 5000; // 5 seconds for current track
  const MIN_TOP_ARTISTS_INTERVAL = 300000; // 5 minutes for top artists
  const MIN_TOP_INTERVAL = 300000; // 5 minutes for top tracks
  const MIN_RECENTLY_PLAYED_INTERVAL = 60000; // 1 minute for recently played

  const fetchCurrentTrack = async () => {
    const now = Date.now();
    if (now - lastCurrentTrackFetch.current < MIN_FETCH_INTERVAL) {
      return; // Skip if called too soon
    }
    
    try {
      lastCurrentTrackFetch.current = now;
      const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 204) {
        setCurrentTrack(null);
        return;
      }

      const track = response.data.item;
      if (track) {
        setCurrentTrack({
          id: track.id,
          name: track.name,
          artist: track.artists.map((artist: { name: string }) => artist.name).join(', '),
          album: track.album.name,
          albumImageUrl: track.album.images[0].url,
          spotifyUrl: track.external_urls.spotify,
        });
      }
    } catch (error: any) {
      if (error.response?.status === 429) {
        // Handle rate limiting
        const retryAfter = error.response.headers['retry-after'] || 60;
        console.warn(`Rate limited. Retrying after ${retryAfter} seconds`);
        setTimeout(() => fetchCurrentTrack(), retryAfter * 1000);
      } else if (error.response?.status === 401) {
        console.error('Token expired, need to refresh');
        // Token refresh will be handled by useSpotifyAuth
      } else {
        console.error('Error fetching current track:', error.message);
      }
      setCurrentTrack(null);
    }
  };

  const fetchTopArtists = async () => {
    const now = Date.now();
    if (now - lastTopArtistsFetch.current < MIN_TOP_ARTISTS_INTERVAL) {
      return; // Skip if called too soon
    }
    if (!token) {
      console.warn('No access token available for top artists fetch');
      return;
    }
    try {
      lastTopArtistsFetch.current = now;
      const response = await axios.get('https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=5', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.data && response.data.items) {
        console.log('Top artists response:', response.data);
        const artists = response.data.items.map((item: any) => ({
          id: item.id,
          name: item.name,
          imageUrl: item.images[0]?.url || '',
          spotifyUrl: item.external_urls.spotify,
          genres: item.genres || [],
        }));
        console.log('Parsed top artists:', artists);
        setTopArtists(artists);
      }
    } catch (error: any) {
      if (error.response?.status === 429) {
        const retryAfter = parseInt(error.response.headers['retry-after'], 10) || 60;
        console.warn(`Rate limited on top artists. Retrying after ${retryAfter} seconds`);
        setTimeout(() => fetchTopArtists(), retryAfter * 1000);
      } else {
        console.error('Error fetching top artists:', error.message);
      }
    }
  };

  const fetchTopTracks = async () => {
    const now = Date.now();
    if (now - lastTopTracksFetch.current < MIN_TOP_INTERVAL) {
      return; // Skip if called too soon
    }
    
    try {
      lastTopTracksFetch.current = now;
      const response = await axios.get(
        'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5',
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );

      if (response.data && response.data.items) {
        console.log('Top tracks response:', response.data);
        const tracks = response.data.items.map((item: any) => ({
          id: item.id,
          name: item.name,
          artist: item.artists.map((artist: { name: string }) => artist.name).join(', '),
          album: item.album.name,
          albumImageUrl: item.album.images[0].url,
          spotifyUrl: item.external_urls.spotify,
        }));
        console.log('Parsed top tracks:', tracks);
        setTopTracks(tracks);
      }
    } catch (error: any) {
      if (error.response?.status === 429) {
        const retryAfter = parseInt(error.response.headers['retry-after'], 10) || 60;
        console.warn(`Rate limited on top tracks. Retrying after ${retryAfter} seconds`);
        setTimeout(() => fetchTopTracks(), retryAfter * 1000);
      } else {
        console.error('Error fetching top tracks:', error.message);
      }
    }
  };

  const fetchRecentlyPlayedTracks = async () => {
    const now = Date.now();
    if (now - lastRecentlyPlayedFetch.current < MIN_RECENTLY_PLAYED_INTERVAL) {
      return; // Skip if called too soon
    }
    
    try {
      lastRecentlyPlayedFetch.current = now;
      const response = await axios.get(
        'https://api.spotify.com/v1/me/player/recently-played?limit=10',
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );

      if (response.data && response.data.items) {
        console.log('Recently played tracks response:', response.data);
        const tracks = response.data.items.map((item: any) => ({
          id: item.track.id,
          name: item.track.name,
          artist: item.track.artists.map((artist: { name: string }) => artist.name).join(', '),
          album: item.track.album.name,
          albumImageUrl: item.track.album.images[0].url,
          spotifyUrl: item.track.external_urls.spotify,
          playedAt: item.played_at,
        }));
        console.log('Parsed recently played tracks:', tracks);
        setRecentlyPlayedTracks(tracks);
      }
    } catch (error: any) {
      if (error.response?.status === 429) {
        const retryAfter = parseInt(error.response.headers['retry-after'], 10) || 60;
        console.warn(`Rate limited on recently played tracks. Retrying after ${retryAfter} seconds`);
        setTimeout(() => fetchRecentlyPlayedTracks(), retryAfter * 1000);
      } else {
        console.error('Error fetching recently played tracks:', error.message);
      }
    }
  };

  // Fetch current track
  useEffect(() => {
    if (!token) return;

    // Initial fetch
    fetchCurrentTrack();

    // Poll for updates with controlled interval
    const interval = setInterval(fetchCurrentTrack, 10000); // Poll every 10 seconds

    return () => {
      clearInterval(interval);
    };
  }, [token]);

  // Fetch top artists
  useEffect(() => {
    if (!token) return;

    fetchTopArtists();
    
    // Update every 30 minutes
    // const interval = setInterval(fetchTopArtists, 1800000);

    // return () => {
    //   clearInterval(interval);
    // };
  }, [token]);

  // Fetch top tracks
  useEffect(() => {
    if (!token) return;

    // Initial fetch with even longer delay to spread out API calls
    // setTimeout(() => fetchTopTracks(), 10000); // 10 second delay
    fetchTopTracks();
    
    // Update every 30 minutes
    // const interval = setInterval(fetchTopTracks, 1800000);

    //     return () => {
    //   clearInterval(interval);
    // };
  }, [token]);

  // Fetch recently played tracks
  useEffect(() => {
    if (!token) return;

    fetchRecentlyPlayedTracks();
    
    // Update every 5 minutes
    const interval = setInterval(fetchRecentlyPlayedTracks, 300000);

    return () => {
      clearInterval(interval);
    };
  }, [token]);

  return {
    currentTrack,
    topArtists,
    topTracks,
    recentlyPlayedTracks,
  };
}