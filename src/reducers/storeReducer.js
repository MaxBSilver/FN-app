export const store = (state = [], action) => {
    switch (action.type) {
      case "SET_STORE":
        return action.news;
      default:
        return state;
    }
  };
  