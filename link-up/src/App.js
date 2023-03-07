import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'
import Header from './Header';
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/chat">
          <Header/>
          <h1>I am the ChatPage</h1>
        </Route> 
        <Route  path="/">
          <Header/>
          <TinderCards/>
          <SwipeButtons/>
        </Route>

      </Switch>
    </Router>
  );
}
export default App;