import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import "bootstrap/dist/js/bootstrap";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>

      <div className="main">
        <Home />
      </div>
    </div>
  );
}

export default App;
