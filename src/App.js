import './App.scss';
import Home from './components/home/Home';
import Features from './components/features/Features';
import Pricing from './components/pricing/Pricing';
import Resourses from './components/resourses/Resourses';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/features">
            <Features />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/resourses">
            <Resourses />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
