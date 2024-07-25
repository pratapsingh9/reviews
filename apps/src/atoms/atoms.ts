import { atom, selector } from "recoil";
import axios from "axios";
export const TodoAtom = atom({
  key: "TodoAtom",
  default: selector({
    key: "TodoAtomSelector",
    get: async ({ get }) => {
      const res = await axios.get("urlparsecom");
      return res.data;
    },
  }),
});


export const TodoSelectorsss = selector({
  key: "TodoSelectorsss",
  get: ({ get }) => get(TodoAtom),
  set: ({ get, set }, newValue) => set(TodoAtom, newValue),
});

export const currentPageState = atom({
  key: 'currentPageState',
  default: 'home',
});