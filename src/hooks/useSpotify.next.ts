import { useState, useEffect, useRef } from 'react';
import { useSpotifyAuth } from './useSpotifyAuth.next';

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

    if (!token) return;

    try {
      lastCurrentTrackFetch.current = now;
      const response = await fetch('/api/spotify/current-track', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (data.isPlaying && data.track) {
        setCurrentTrack(data.track);
      } else {
        setCurrentTrack(null);
      }
    } catch (error) {
      console.error('Error fetching current track:', error);
      setCurrentTrack(null);
    }
  };

  const fetchTopArtists = async () => {
    const now = Date.now();
    if (now - lastTopArtistsFetch.current < MIN_TOP_ARTISTS_INTERVAL) {
      return; // Skip if called too soon
    }

    if (!token) return;

    try {
      lastTopArtistsFetch.current = now;
      const response = await fetch('/api/spotify/top-artists', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (data.artists) {
        setTopArtists(data.artists);
      }
    } catch (error) {
      console.error('Error fetching top artists:', error);
    }
  };

  const fetchTopTracks = async () => {
    const now = Date.now();
    if (now - lastTopTracksFetch.current < MIN_TOP_INTERVAL) {
      return; // Skip if called too soon
    }

    if (!token) return;

    try {
      lastTopTracksFetch.current = now;
      const response = await fetch('/api/spotify/top-tracks', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (data.tracks) {
        setTopTracks(data.tracks);
      }
    } catch (error) {
      console.error('Error fetching top tracks:', error);
    }
  };

  const fetchRecentlyPlayedTracks = async () => {
    const now = Date.now();
    if (now - lastRecentlyPlayedFetch.current < MIN_RECENTLY_PLAYED_INTERVAL) {
      return; // Skip if called too soon
    }

    if (!token) return;

    try {
      lastRecentlyPlayedFetch.current = now;
      const response = await fetch('/api/spotify/recently-played', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (data.tracks) {
        setRecentlyPlayedTracks(data.tracks);
      }
    } catch (error) {
      console.error('Error fetching recently played tracks:', error);
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
  }, [token]);

  // Fetch top tracks
  useEffect(() => {
    if (!token) return;
    fetchTopTracks();
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

  // Helper function to get display tracks, skipping duplicates of current track
  const getDisplayTracks = (): RecentlyPlayedTrack[] => {
    // If no current track, show all recent tracks
    if (!currentTrack) {
      return recentlyPlayedTracks;
    }

    // Filter out tracks that match the current track (to avoid showing duplicates when on repeat)
    const filteredTracks = recentlyPlayedTracks.filter(track => track.id !== currentTrack.id);

    return filteredTracks;
  };

  return {
    currentTrack,
    topArtists,
    topTracks,
    recentlyPlayedTracks: getDisplayTracks(),
  };
}
