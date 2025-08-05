import { useSpotify } from '../hooks/useSpotify';
import { Spotify } from 'react-spotify-embed';
import FadeIn from '../styles/FadeIn';

const SpotifyRecentlyPlayed = () => {
  const { currentTrack, recentlyPlayedTracks } = useSpotify();

  // Determine eyebrow text based on listening status
  const eyebrowText = currentTrack 
    ? "Now Playing"
    : "What I've been listening to";

  // For mobile, show current track + 3 recent tracks
  const mobileTracks = currentTrack 
    ? [currentTrack, ...recentlyPlayedTracks.slice(0, 3)]
    : recentlyPlayedTracks.slice(0, 4);

  return (
    <div className="w-full">
      {/* Dynamic eyebrow text */}
      <div className="mb-4 sm:mb-6">
        <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide font-medium">
          {eyebrowText}
        </p>
      </div>
      
      {/* Mobile: Current track + 3 recent tracks */}
      <div className="sm:hidden">
        {mobileTracks && mobileTracks.length > 0 ? (
          <div className="space-y-4">
            {/* Show current track first if playing */}
            {currentTrack && (
              <FadeIn delay={0}>
                <Spotify 
                  wide
                  link={currentTrack.spotifyUrl}
                />
              </FadeIn>
            )}
            
            {/* Show "Recently Played" label before recent tracks */}
            {((currentTrack && recentlyPlayedTracks.length > 0) || (!currentTrack && mobileTracks.length > 0)) && (
              <div className="mb-4 sm:mb-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide font-medium">
                  Recently Played
                </p>
              </div>
            )}
            
            {/* Show recent tracks */}
            {(currentTrack ? recentlyPlayedTracks.slice(0, 3) : mobileTracks).map((track, idx) => (
              <FadeIn key={`${track.id}-recent-${idx}`} delay={0.1 * (currentTrack ? idx + 1 : idx)}>
                <Spotify 
                  wide
                  link={track.spotifyUrl}
                />
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">
              No recently played tracks found
            </p>
          </div>
        )}
      </div>

      {/* Desktop: Multiple tracks with scrolling */}
      <div className="hidden sm:block">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {/* Show current track first if playing */}
          {currentTrack && (
            <FadeIn delay={0}>
              <div className="flex-shrink-0">
                <Spotify 
                  link={currentTrack.spotifyUrl}
                />
              </div>
            </FadeIn>
          )}
          
          {/* Show recent tracks (fewer if current track is shown) */}
          {recentlyPlayedTracks.slice(0, currentTrack ? 2 : 3).map((track, idx) => (
            <FadeIn key={`${track.id}-${track.playedAt}`} delay={0.1 * (currentTrack ? idx + 1 : idx)}>
              <div className="flex-shrink-0">
                <Spotify 
                  link={track.spotifyUrl}
                />
              </div>
            </FadeIn>
          ))}
          
          {recentlyPlayedTracks.length === 0 && !currentTrack && (
            <div className="text-center py-8 w-full">
              <p className="text-gray-500 dark:text-gray-400">
                No recently played tracks found
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpotifyRecentlyPlayed; 