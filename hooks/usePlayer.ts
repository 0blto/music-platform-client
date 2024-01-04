import { create } from 'zustand';

interface PlayerStore {
  ids: string[];
  titles: string[];
  listTitle?: string;
  authors: string[];
  activeId?: string;
  setId: (id: string) => void;
  setListTitle: (listTitle: string) => void;
  setIds: (ids: string[]) => void;
  setAuthors: (authors: string[]) => void;
  setTitles: (titles: string[]) => void;
  reset: () => void;
}

const usePlayer = create<PlayerStore>((set) => ({
  ids: [],
  listTitle: undefined,
  titles: [],
  authors: [],
  setTitles: (titles: string[]) => set({ titles }),
  setAuthors: (authors: string[]) => set({ authors }),
  setListTitle: (listTitle: string) => set({ listTitle }),
  activeId: undefined,
  setId: (id: string) => set({ activeId: id }),
  setIds: (ids: string[]) => set({ ids }),
  reset: () => set({ ids: [], activeId: undefined })
}));

export default usePlayer;