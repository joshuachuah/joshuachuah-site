import { NextResponse } from 'next/server';

const CURRENT_TRACK_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  const token = authHeader?.replace('Bearer ', '');

  if (!token) {
    return NextResponse.json({ error: 'Token required' }, { status: 401 });
  }

  try {
    const response = await fetch(CURRENT_TRACK_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    });

    if (response.status === 204 || response.status > 400) {
      return NextResponse.json({ isPlaying: false });
    }

    const data = await response.json();

    if (!data || !data.item) {
      return NextResponse.json({ isPlaying: false });
    }

    const track = {
      id: data.item.id,
      name: data.item.name,
      artist: data.item.artists.map((artist: { name: string }) => artist.name).join(', '),
      album: data.item.album.name,
      albumImageUrl: data.item.album.images[0]?.url,
      spotifyUrl: data.item.external_urls.spotify,
    };

    return NextResponse.json({ isPlaying: data.is_playing, track });
  } catch (error) {
    console.error('Error fetching current track:', error);
    return NextResponse.json(
      { error: 'Failed to fetch current track' },
      { status: 500 }
    );
  }
}
