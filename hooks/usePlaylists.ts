import { Playlist } from '@/types/playlist';
import { create } from 'zustand';

interface PlaylistsStore {
  playlists: Playlist[];
  addPlaylist: Function;
  setPlaylists: Function
}

const usePlaylists = create<PlaylistsStore>((set) => ({
  playlists: [],
  addPlaylist: (playlist: Playlist) => {
    set((state) => ({
      playlists: [...state.playlists, playlist],
    }));
  },
  setPlaylists: (playlists: Playlist[]) => set({playlists})
}));

export default usePlaylists;