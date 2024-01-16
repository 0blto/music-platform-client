import { getGenres } from '@/actions/getGenres';
import { getUserPlaylists } from '@/actions/getUserPlaylists';
import { Genre } from '@/types/genre';
import { Playlist } from '@/types/playlist';
import { create } from 'zustand';

interface GenresStore {
  genres: Genre[];
  setGenres: Function
}
//hook for playlists
const useGenres = create<GenresStore>((set) => ({
  genres: [],
  setGenres: async () => set({genres: await getGenres()})
}));

export default useGenres;