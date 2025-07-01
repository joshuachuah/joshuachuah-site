declare global {
  interface Window {
    Spotify: any;
    onSpotifyWebPlaybackSDKReady: () => void;
  }
}

export interface SpotifyTrack {
  name: string;
  artist: string;
  album: string;
  albumImageUrl: string;
}