import { getLikedAlbums } from '@/actions/getLikedAlbums';
import { getLikedArtists } from '@/actions/getLikedArtists';
import { getLikedPlaylist } from '@/actions/getLikedPlaylists';
import { getLikedSongs } from '@/actions/getLikedSongs';
import { getUserPlaylists } from '@/actions/getUserPlaylists';
import { AlbumView, AlbumWithSongs } from '@/types/album';
import { ArtistView } from '@/types/artist';
import { Playlist } from '@/types/playlist';
import { SongView } from '@/types/song';
import { create } from 'zustand';

interface LikedStore {
  playlists: Playlist[];
  addPlaylist: Function;
  setPlaylists: Function;
  artists: ArtistView[];
  addArtist: Function;
  setArtists: Function;
  albums: AlbumView[];
  addAlbum: Function;
  setAlbums: Function;
  songs?: AlbumWithSongs;
  setSongs: Function;
}

const useLiked = create<LikedStore>((set) => ({
  playlists: [],
  addPlaylist: (playlist: Playlist) => {
    set((state) => ({
      playlists: [...state.playlists, playlist],
    }));
  },
  setPlaylists: async () => set({playlists: await getLikedPlaylist()}),
  artists: [],
  addArtist: (artist: ArtistView) => {
    set((state) => ({
      artists: [...state.artists, artist],
    }));
  },
  setArtists: async () => set({artists: await getLikedArtists()}),
  albums: [],
  addAlbum: (album: AlbumView) => {
    set((state) => ({
      albums: [...state.albums, album],
    }));
  },
  setAlbums: async () => set({albums: await getLikedAlbums()}),
  songs: undefined,
  setSongs: async () => set({songs: await getLikedSongs()}),
}));

export default useLiked;