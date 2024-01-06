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
  genre: '111bad3d-093d-4db4-882f-c553d84c6cee',
  setGenre: (g: string) => set({genre: g})
}));

export default useNewReleaseModal;