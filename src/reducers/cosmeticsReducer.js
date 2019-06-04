export const cosmeticItems = (state = [], action) => {
    switch (action.type) {
      case "SET_COSMETIC_ITEMS":
        return action.cosmeticItems;
      default:
        return state;
    }
  };
  