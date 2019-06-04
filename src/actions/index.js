export const isLoading = bool => ({
  type: "IS_LOADING",
  isLoading: bool
});

export const hasErrored = message => ({
  type: "HAS_ERRORED",
  message
});

export const setNews = news => ({
  type: "SET_NEWS",
  news
});

export const setStore = storeItems => ({
  type: "SET_STORE_ITEMS",
  storeItems
});

export const setCosmeticItems = cosmeticItems => ({
  type: "SET_COSMETIC_ITEMS",
  cosmeticItems
});

