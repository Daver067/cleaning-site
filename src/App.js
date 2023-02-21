import { Outlet } from "react-router-dom";
import CallToAction from "./Components/CallToAction/CallToAction";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import ScrollToTop from "./scrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop />
      <CallToAction />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
