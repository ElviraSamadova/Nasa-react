
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import PageRouter from "./routes/RouterN";


function App() {
  return (
    <div className="App container">
      <Router>
          <Header/>
           <PageRouter/>
           <Footer/>
      </Router>
    </div>
  );
  }

export default App;







 
   