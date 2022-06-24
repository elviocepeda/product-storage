const types = {
  authLogin: "auth - login",
  authLogout: "auth - logout",
  dataSuccess: "data - success",
  dataError: "data - error",
  isFavorite: "is - favorite",
};

const StoreReducer = (state, action) => {
  /* switch (action.type) {
    case types.dataSuccess:
      return {
        loading: false,
        error: "",
        data: action.payload,
      };

    case types.dataError:
      return {
        loading: false,
        error: "Algo salio mal",
        data: {},
      };

    case types.authLogout:
      return { ...state, users: (action.payload[0].isConnected = false) };

    case types.authLogin:
      return { ...state, users: (action.payload[0].isConnected = true) };

    default:
      return state;
  } */
};

export { types };
export default StoreReducer;
