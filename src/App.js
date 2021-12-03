import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkAuth } from './redux/actions';
import { authRoutes, publicRoutes } from './routes';
import Navigation from './components/Navigation/Navigation';
import { useEffect } from 'react';


function App({ isAuth, checkAuth }) {

  console.log(isAuth)

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      checkAuth()
    }
  }, [])



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

const MapDispatchToProps = {
  checkAuth
}

export default connect(MapStateToProps, MapDispatchToProps)(App);
