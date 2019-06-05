export const storeItems = (state = [], action) => {
    switch (action.type) {
      case "SET_STORE_ITEMS":
        return action.storeItems;
      default:
        return state;
    }
  };
  