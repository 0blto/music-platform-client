import { create } from 'zustand';

interface AddToPlaylistStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAddToPlaylistModal = create<AddToPlaylistStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useAddToPlaylistModal;