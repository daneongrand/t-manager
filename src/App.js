import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { LOGIN_ROUTE } from './utils/constRoutes'
import { createBrowserHistory } from 'history'
import { connect, useDispatch } from 'react-redux';
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


const PrivateRoute = ({ children, ...rest }) => {
  const isAuth = useSelector(state => state.user.isAuth)
  console.log(children)
  console.log(isAuth)
  return (
    <Route 
      {...rest}
      render={() => (isAuth) ? children : <Redirect to={LOGIN_ROUTE} />}
    />
  )
}


function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  
  // useEffect(() => {
  //   if (localStorage.getItem('accessToken')) {
  //     dispatch(checkAuth())
  //   }
  // }, [])

  return (
    <Router>
      <Switch>
        {
          (isAuth)
            ? <AppContainerAuth>
                <Navigation />
                {
                  authRoutes.map(({ path, component }) => <Route key={path} path={path} component={component} exact/>)
                }
            </AppContainerAuth> 
            : <AppContainerNotAuth>
              {
                authRoutes.map(({ path, component }) => {
                  return (<PrivateRoute key={path} path={path}>
                    { component }
                  </PrivateRoute>)
                })
              }
              {
                publicRoutes.map(({ path, component }) => <Route key={path} path={path} component={component} exact/>)
              }
            </AppContainerNotAuth>
        }
      </Switch>
    </Router>
  )
}

export default App;
