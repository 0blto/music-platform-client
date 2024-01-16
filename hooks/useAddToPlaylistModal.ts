import { create } from 'zustand';

interface AddToPlaylistStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  songId: string;
  setSongId: Function
}

const useAddToPlaylistModal = create<AddToPlaylistStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    songId: '',
    setSongId: (id: string) => {set({songId: id})}
}));

export default useAddToPlaylistModal;