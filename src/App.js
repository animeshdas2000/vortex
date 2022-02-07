import "./App.css";

import Footer from "./Components/Footer";
import dotenv from "dotenv";
import Router from "./routes"

// const apiKey = 'S87T386VIWK338K2'
dotenv.config();
function App() {
  return (
    <div className="App">
      <Router/>
      <Footer />
    </div>
  );
}

export default App;
