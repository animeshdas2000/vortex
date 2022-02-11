import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import CoinPage from "./pages/CoinPage";
import Nav from "./Components/Nav";
import Tracker from "./pages/Tracker";
import BitcoinPage from "./pages/BitcoinPage";
function Router() {
  return (
    <BrowserRouter>
       <Nav/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/:symbl" element={<CoinPage/>}/>
        <Route path="/market" element={<Tracker/>}/>
        <Route path="/new/btc" element={<BitcoinPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router
