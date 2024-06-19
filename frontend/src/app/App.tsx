import LoginPage from "src/pages/LoginPage/LoginPage";
import "./App.css";
import RouteProvider from "./Router/RouterProvider";
function App() {
  return (
    <div className="App">
      <RouteProvider />
    </div>
  );
}

export default App;
