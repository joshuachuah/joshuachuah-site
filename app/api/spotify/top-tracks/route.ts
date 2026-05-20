import { NextResponse } from 'next/server';

const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5';

interface SpotifyArtist {
  name: string;
}

interface SpotifyTopTrack {
  id: string;
  name: string;
  artists: SpotifyArtist[];
  album: {
    name: string;
    images: { url?: string }[];
  };
  external_urls: {
    spotify: string;
  };
}

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  const token = authHeader?.replace('Bearer ', '');

  if (!token) {
    return NextResponse.json({ error: 'Token required' }, { status: 401 });
  }

  try {
    const response = await fetch(TOP_TRACKS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    const data = (await response.json()) as { items: SpotifyTopTrack[] };

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch top tracks' },
        { status: response.status }
      );
    }

    const tracks = data.items.map((item) => ({
      id: item.id,
      name: item.name,
      artist: item.artists.map((artist: { name: string }) => artist.name).join(', '),
      album: item.album.name,
      albumImageUrl: item.album.images[0]?.url,
      spotifyUrl: item.external_urls.spotify,
    }));

    return NextResponse.json({ tracks });
  } catch (error) {
    console.error('Error fetching top tracks:', error);
    return NextResponse.json(
      { error: 'Failed to fetch top tracks' },
      { status: 500 }
    );
  }
}
