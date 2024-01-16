import { getGenres } from '@/actions/getGenres';
import { create } from 'zustand';

interface NewReleaseModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  songs: string[];
  addSong: Function;
  clearSongs: Function;
  genre: string;
  setGenre: Function;
}

const useNewReleaseModal = create<NewReleaseModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  songs: [],
  addSong: (songId: string) => {
    set((state) => ({
      songs: [...state.songs, songId],
    }));
  },
  clearSongs: () => {
    set({songs: []})
  },
  genre: '17d7ba7c-5fdc-449f-850a-5823fb519c1a',
  setGenre: (g: string) => set({genre: g})
}));

export default useNewReleaseModal;