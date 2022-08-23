import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import PageRouter from "./routes/NasaRouter";

function App() {
  return (
    <div className="App ">
      <Router>
        <Header />
        <PageRouter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
