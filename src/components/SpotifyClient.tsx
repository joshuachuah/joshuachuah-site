'use client';

import { useState } from 'react';
import { useSpotify } from '../hooks/useSpotify.next';
import { Spotify } from 'react-spotify-embed';
import FadeIn from '../styles/FadeIn';

const SpotifyRecentlyPlayed = () => {
  const [activeTab, setActiveTab] = useState<'recent' | 'top'>('recent');
  
  // Ensure your hook returns topTracks
  const { currentTrack, recentlyPlayedTracks, topTracks } = useSpotify();

  // 1. Dynamic Label Logic for the Tab Button
  const recentTabLabel = currentTrack ? "Now Playing" : "Recently Played";

  // Mobile Logic: Current track + 3 recent OR just 4 recent
  const mobileTracks = currentTrack
    ? [currentTrack, ...recentlyPlayedTracks.slice(0, 3)]
    : recentlyPlayedTracks.slice(0, 4);

  // Helper for Tab Buttons
  const TabButton = ({ label, tabKey }: { label: string, tabKey: 'recent' | 'top' }) => (
    <button
      onClick={() => setActiveTab(tabKey)}
      className={`text-sm uppercase tracking-wide font-medium pb-2 border-b-2 transition-colors duration-200 ${
        activeTab === tabKey
          ? 'border-green-500 text-gray-900'
          : 'border-transparent text-gray-400 hover:text-gray-600'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="w-full">
      {/* Navigation Tabs */}
      <div className="flex space-x-6 mb-6 border-b border-gray-100">
        {/* The label here is now dynamic based on listening status */}
        <TabButton label={recentTabLabel} tabKey="recent" />
        <TabButton label="Top Tracks" tabKey="top" />
      </div>

      {/* === RECENT / NOW PLAYING TAB === */}
      {activeTab === 'recent' && (
        <>
          {/* Mobile View */}
          <div className="sm:hidden">
            {mobileTracks && mobileTracks.length > 0 ? (
              <div className="space-y-4">
                {/* 1. Show Current Track */}
                {currentTrack && (
                  <FadeIn delay={0}>
                    <div className="w-full">
                      <Spotify wide link={currentTrack.spotifyUrl} />
                    </div>
                  </FadeIn>
                )}

                {/* 2. Divider Text if needed */}
                {((currentTrack && recentlyPlayedTracks.length > 0) || (!currentTrack && mobileTracks.length > 0)) && (
                   // Only show this sub-header if we have a current track AND history
                   currentTrack && (
                    <div className="mt-6 mb-2">
                      <p className="text-sm text-gray-600 uppercase tracking-wide font-medium">
                        Recently Played
                      </p>
                    </div>
                   )
                )}

                {/* 3. Recent Tracks */}
                {(currentTrack ? recentlyPlayedTracks.slice(0, 3) : mobileTracks).map((track, index) => (
                  <FadeIn key={track.id || index} delay={(currentTrack ? index + 1 : index) * 0.1}>
                    <div className="w-full">
                      <Spotify wide link={track.spotifyUrl} />
                    </div>
                  </FadeIn>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No tracks found.</p>
            )}
          </div>

          {/* Desktop View (Grid) */}
          <div className="hidden sm:grid gap-4">
            {/* Show Current Track */}
            {currentTrack && (
              <FadeIn delay={0}>
                <div className="w-full">
                  <Spotify wide link={currentTrack.spotifyUrl} />
                </div>
              </FadeIn>
            )}

            {/* Show Recent Tracks */}
            {recentlyPlayedTracks.slice(0, currentTrack ? 3 : 4).map((track, index) => (
              <FadeIn key={track.id || index} delay={(currentTrack ? index + 1 : index) * 0.1}>
                <div className="w-full">
                  <Spotify wide link={track.spotifyUrl} />
                </div>
              </FadeIn>
            ))}
          </div>
        </>
      )}

      {/* === TOP TRACKS TAB === */}
      {activeTab === 'top' && (
        <>
          <div className="grid grid-cols-1 gap-4">
            {topTracks && topTracks.length > 0 ? (
              topTracks.slice(0, 4).map((track: any, index: number) => (
                <FadeIn key={track.id || index} delay={index * 0.1}>
                  <div className="w-full">
                    <Spotify wide link={track.spotifyUrl} />
                  </div>
                </FadeIn>
              ))
            ) : (
              <p className="text-gray-600">No top tracks loaded.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SpotifyRecentlyPlayed;