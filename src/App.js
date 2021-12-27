import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import Movies from "./Components/Movies";
import DetailMovies from "./Components/DetailMovies";
import "./styles/custom.css";
// Import React Router DOM components
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/:id" component={DetailMovies} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
