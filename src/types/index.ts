declare global {
  interface Window {
    Spotify: unknown;
    onSpotifyWebPlaybackSDKReady: () => void;
  }
}

export interface SpotifyTrack {
  name: string;
  artist: string;
  album: string;
  albumImageUrl: string;
}
