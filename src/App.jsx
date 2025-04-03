import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Explore from "./components/Explore";
// import SingleTour from "./components/SingleTour";
import Navbar from "./components/Navbar";
import SingleTour from "./components/SingleTour";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Explore />} path="/explore" />
          <Route element={<SingleTour />} path="/single-tour" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
