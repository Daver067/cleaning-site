import { Outlet } from "react-router-dom";
import "./App.scss";
import CallToAction from "./Components/CallToAction/CallToAction";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div>
      <CallToAction />
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
