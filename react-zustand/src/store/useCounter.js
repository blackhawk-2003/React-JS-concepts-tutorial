import { create } from "zustand";

const useCounter = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

const useProduct = create((set) => ({
  product: [],
  loading: false,
  error: null,

  fetchProduct: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      set({ product: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export { useCounter, useProduct };
