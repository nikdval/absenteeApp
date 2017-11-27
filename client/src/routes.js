import Base from './components/Base';
import Home from './components/Home';
import LoginPage from './components/LoginPage';


const routes = [
    // base component (wrapper for the whole application).
  
    {
          path: '/login',
          component: LoginPage
        },
        {
          path: '/',
          component: Home 
        }
        
    // component: Base,
    // childRoutes: [
  
    //   {
    //     path: '/',
    //     component: Home
    //   },
  
    //   {
    //     path: '/login',
    //     component: LoginPage
    //   },
  
    // ]
      ];
  
  export default routes;