import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { authRoutes, publicRoutes } from './routes';
import Navigation from './components/Navigation/Navigation';
import Profile from './pages/Profile'
import Campaigns from './pages/Campaigns'
import Constructor from './pages/Constructor'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'


function App({ isAuth }) {
  console.log(isAuth)
  return (
    <Router>
      {
        isAuth && <Navigation />
      }
      <Switch>
        {
          isAuth && authRoutes.map(({ path, component }) => {
            return (
              <Route key={path} path={path} component={component} exact />
            )
          } )
        }
        {
          publicRoutes.map(({ path, component }) => {
            return (
              <Route key={path} path={path} component={component} exact />
            )
          })
        }
      </Switch>
    </Router>
  );
}

const MapStateToProps = state => {
  return {
    isAuth: state.user.isAuth
  }
}

export default connect(MapStateToProps, null)(App);
