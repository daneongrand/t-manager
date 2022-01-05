import Constructor from "./pages/Constructor"
import Campaigns from "./pages/Campaigns"
import Analytics from './pages/Analytics'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Main from "./pages/Main"
import { ANALYTICS_ROUTE, CAMPAIGN_ROUTE, CONSTRUCTOR_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE, SETTINGS_ROUTE, SIGNUP_ROUTE } from "./utils/constRoutes"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Page_404 from "./pages/Page_404"

export const authRoutes = [

    {
        path: CONSTRUCTOR_ROUTE,
        component: Constructor
    },

    {
        path: CAMPAIGN_ROUTE,
        component: Campaigns
    },

    {
        path: ANALYTICS_ROUTE,
        component: Analytics
    },

    {
        path: PROFILE_ROUTE,
        component: Profile
    },

    {
        path: SETTINGS_ROUTE,
        component: Settings
    }

]

export const publicRoutes = [
        
    {
        path: LOGIN_ROUTE,
        component: Login
    },
    
    {
        path: SIGNUP_ROUTE,
        component: Signup
    },
    
    {
        path: MAIN_ROUTE,
        component: Main
    },
    
]