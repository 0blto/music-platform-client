import { create } from 'zustand';

interface PlayerStore {
  ids: string[];
  titles: string[];
  title?: string;
  setTitle: Function
  listTitle?: string;
  authors: string[];
  author?: string;
  setAuthor: Function
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
  title: undefined,
  author: undefined,
  setAuthor: (author: string) => set({author}),
  setTitle: (title: string) => set({title}),
  setTitles: (titles: string[]) => set({ titles }),
  setAuthors: (authors: string[]) => set({ authors }),
  setListTitle: (listTitle: string) => set({ listTitle }),
  activeId: undefined,
  setId: (id: string) => set({ activeId: id }),
  setIds: (ids: string[]) => set({ ids }),
  reset: () => set({ ids: [], activeId: undefined })
}));

export default usePlayer;