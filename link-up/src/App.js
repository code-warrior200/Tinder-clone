import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'
import Header from "./components/Header";
import TinderCards from "./components/TinderCards"

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/chat">
          <h1>I am the ChatPage</h1>
        </Route>
        <Route  path="/">
          <TinderCards/>
        </Route>

      </Switch>
    </Router>
  );
}
export default App;