import { Outlet } from "react-router-dom";
import CallToAction from "./Components/CallToAction/CallToAction";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div>
      <CallToAction />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
