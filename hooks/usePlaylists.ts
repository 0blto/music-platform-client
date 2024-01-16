import { getUserPlaylists } from '@/actions/getUserPlaylists';
import { Playlist } from '@/types/playlist';
import { create } from 'zustand';

interface PlaylistsStore {
  playlists: Playlist[];
  addPlaylist: Function;
  setPlaylists: Function
}
//hook for playlists
const usePlaylists = create<PlaylistsStore>((set) => ({
  playlists: [],
  addPlaylist: (playlist: Playlist) => {
    set((state) => ({
      playlists: [...state.playlists, playlist],
    }));
  },
  setPlaylists: async () => set({playlists: await getUserPlaylists()})
}));

export default usePlaylists;