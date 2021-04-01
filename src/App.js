import Navbar from './components/nav/Navbar';
import Home from './components/home/Home';
import Features from './components/features/Features';
import Pricing from './components/pricing/Pricing';
import Resourses from './components/resourses/Resourses';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    }
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  }

  const responsiveness = {
    showMenuBool: windowWidth > 1023
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar showMenuBool={responsiveness.showMenuBool} />
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
