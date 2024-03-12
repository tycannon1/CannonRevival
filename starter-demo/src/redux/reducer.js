const initialState = {
    userId: null,
    favorites: [],
    socialMedia: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "USER_AUTH":
        return {
          ...state,
          userId: action.payload,
        };
  
      case "LOGOUT":
        return {
          ...state,
          userId: null,
        };
  
      case 'SET_FAVORITES':
        return {
          ...state,
          favorites: action.payload,
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

      case 'CLEAR_FAVORITES':
        return {
          ...state,
          favorites: [],
        };

      case "SET_SOCIAL_MEDIA":
        return {
          ...state,
          socialMedia: action.payload
        }
    
      case 'ADD_TO_SOCIAL_MEDIA':
        return {
          ...state,
          socialMedia: [...state.socialMedia, action.payload],
        }

  
      default:
        return state;
    }
  };
  
  export default reducer;