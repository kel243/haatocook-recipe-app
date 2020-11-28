export const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return [...state, action.recipe];
    case "REMOVE_FAV":
      return state.filter((recipe) => recipe.uri !== action.uri);
    default:
      return state;
  }
};
