import "./App.css";
import AppRouter from "./containers/routers/Router";
import StoreProvider from "./store/StoreProvider";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <AppRouter />
      </StoreProvider>
    </div>
  );
}

export default App;
