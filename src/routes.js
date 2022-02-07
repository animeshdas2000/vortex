import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import CoinPage from "./pages/CoinPage";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/:symbl" element={<CoinPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router
