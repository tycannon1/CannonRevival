const initialState = {
    userId: null,
    otherValue: "hello",
    favorites: []
  };
  
  // front end components will dispatch an action object :
  // { type: "USER_AUTH", payload: userId }
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "USER_AUTH":
        return {
          ...state,
          userId: action.payload,
        };
  
        // triggered from front end with this dispatch action object: { type: "LOGOUT" }
      case "LOGOUT":
        return {
          ...state,
          userId: null,
        };
        case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter((product) => product.productId !== action.payload),
      };
  
      default:
        return state;
    }
  };
  
  export default reducer;