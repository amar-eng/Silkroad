import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import TurkishHome from "./pages/TurkishHome";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/turkish" component={TurkishHome} />
      </Switch>
    </>
  );
}

export default App;
