import './App.css';
import Main from './pages/Main';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {

  return (
    <Router>
    <div className="App">
      <Main/>
    </div>
    <Footer/>
    </Router>
  )
}

export default App
