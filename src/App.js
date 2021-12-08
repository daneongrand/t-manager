import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkAuth } from './actions/userActions';
import { authRoutes, publicRoutes } from './routes';
import Navigation from './components/Navigation/Navigation';
import { useEffect } from 'react';
import styled from 'styled-components';

const AppContainerAuth = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50px 1fr;
  @media ${props => props.theme.media.tablet} {
    grid-template-columns: 100%;
  }
`

const AppAuth = () => {
  return (
    <Router>
      <AppContainerAuth>
        <Navigation />
        <Switch>
          {
            authRoutes.map(({ path, component }) => <Route key={path} path={path} component={component} exact />)
          }
        </Switch>
      </AppContainerAuth>
    </Router>
  )
}

const AppNotAuth = () => {
  return (
    <Router>
      <Switch>
      {
        publicRoutes.map(({ path, component }) => <Route key={path} path={path} component={component} exact />)
      }
      </Switch>
    </Router>    
  )
}



function App({ isAuth, checkAuth }) {

  console.log(isAuth)

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      checkAuth()
    }
  }, [])

  return (isAuth) ? <AppAuth /> : <AppNotAuth /> 
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
