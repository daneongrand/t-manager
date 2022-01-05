import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
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

const AppContainerNotAuth = styled.div`
  width: 100%;
  height: 100%;
`




function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      dispatch(checkAuth())
    }
  }, [])

  return (
    <Router>
      <Switch>
        {
          isAuth
            ? <AppContainerAuth>
              <Navigation />
              {
                authRoutes.map(({ component: Component, path }) => {
                  return (
                    <Route path={path} exact>
                      <Component />
                    </Route>
                  )
                })
              }
            </AppContainerAuth>
            : <AppContainerNotAuth>
              {
                publicRoutes.map(({ component: Component, path }) => {
                  return (
                    <Route path={path} exact>
                      <Component />
                    </Route>
                  )
                })
              }
            </AppContainerNotAuth>
        }
      </Switch>
    </Router>
  )
}

export default App;
