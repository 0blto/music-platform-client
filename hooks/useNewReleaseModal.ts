import { Song } from '@/types/song';
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
  genre: 'f9667ca1-15b7-487d-9cfa-7a8b15b62610',
  setGenre: (g: string) => set({genre: g}),
}));

export default useNewReleaseModal;