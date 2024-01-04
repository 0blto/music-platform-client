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
  genre: '3a827edd-4908-4cf9-b748-7bee576864b9',
  setGenre: (g: string) => set({genre: g}),
}));

export default useNewReleaseModal;