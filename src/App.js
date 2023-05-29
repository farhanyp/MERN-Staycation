import "./App.css";
import Booking from "./pages/Booking";
import DetailPage from "./pages/DetailPage";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/detail-page/:id" element={<DetailPage/>}/>
        <Route path="/booking" element={<Booking/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
