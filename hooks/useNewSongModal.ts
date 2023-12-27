import { create } from 'zustand';

interface NewSongModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useNewSongModal = create<NewSongModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useNewSongModal;