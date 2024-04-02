import { BrowserRouter } from "react-router-dom";
import Rout from "./Rout/Rout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Rout />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
