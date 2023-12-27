import { create } from 'zustand';

interface NewPlaylistModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useNewPlaylistModal = create<NewPlaylistModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useNewPlaylistModal;