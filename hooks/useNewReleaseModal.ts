import { Song } from '@/types/song';
import { create } from 'zustand';

interface NewReleaseModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  songs: Song[];
  addSong: Function
  clearSongs: Function
}

const useNewReleaseModal = create<NewReleaseModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  songs: [],
  addSong: (song: Song) => {
    set((state) => ({
      songs: [...state.songs, song],
    }));
  },
  clearSongs: () => {
    set({songs: []})
  },
}));

export default useNewReleaseModal;