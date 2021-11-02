import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/UI/navigation/Navigation';
import Profile from './pages/Profile'
import Campaigns from './pages/Campaigns'
import Constructor from './pages/Constructor'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'

function App() {
  return (
    <Router>
      <Navigation />


      <Switch>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/campaigns'>
          <Campaigns />
        </Route>
        <Route exact path='/constructor'>
          <Constructor />
        </Route>
        <Route path='/analytics'>
          <Analytics />
        </Route>
        <Route path='/settings'>
          <Settings />
        </Route>
        <Route></Route>
      </Switch>
    </Router>
  );
}

export default App;
