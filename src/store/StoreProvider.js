import { createContext, useEffect, useReducer } from "react";
import StoreReducer, { types } from "./StoreReducer";

const StoreContext = createContext();

/* const initialState = {
  loading: true,
  error: '',
  data: {}
} */

const StoreProvider = ({ children }) => {
  
  const [store, dispatch] = useReducer(StoreReducer, {});
  
  /* const url = 'http://localhost:3001/data'
  useEffect(() => {
    axios.get(url)

      .then((response) => {
        dispatch({type: types.dataSuccess, payload: response.data})
      })

      .catch((error) => {
        dispatch({type: types.dataError, payload: error})
      })
  }, []) */
  

  return (
    <StoreContext.Provider value={[store, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext };
export default StoreProvider;