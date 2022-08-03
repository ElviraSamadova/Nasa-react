import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import RouterN from "./routes/RouterN";


function App() {
  return (
    <div className="App container">
      <Router>
          <Header/>
           <RouterN/>
           <Footer/>
      </Router>
    </div>
  );
  }

export default App;






 
   