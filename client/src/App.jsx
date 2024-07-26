
import Navbar from './components/navbar/Navbar.jsx';
import HomePage from  './routes/homepage/HomePage.jsx';
import ListPage from './routes/listPage/listPage.jsx';
import Login from './routes/login/login.jsx';
import Register from './routes/register/register.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import {Layout,RequireAuth} from "./routes/layout/layout.jsx";
// import RequireAuth from './routes/layout/layout.jsx'
import SinglePage from './routes/singlePage/singlePage.jsx';
import ProfilePage from './routes/profilePage/profilePage.jsx';
import About from './routes/About/About.jsx';
import ProfileUpdatePage from './routes/profileUpdatePage/profileUpdatePage.jsx';
import NewPostPage from './routes/newPostPage/newPostPage.jsx';
import { singlePageLoader } from './lib/loaders.js';
function App() {
  
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <HomePage />
          },
          {
            path: "/list",
            element: <ListPage />,
          },
          {
            path: "/:id",
            element: <SinglePage />,
            loader: singlePageLoader
          },
          {
            path:"/login",
            element:<Login/>
          },
          {
            path:"/register",
            element:<Register/>
          },
        ],
      },
      {
        path: "/",
        element: <RequireAuth/>, 
        children: [
            {
              path: "/profile",
              element: <ProfilePage />
            },
            {
              path: "/profile/update",
              element: <ProfileUpdatePage />
            },
            {
              path: "/add",
              element: <NewPostPage />
            },
        ]
      }
     
    ])
  return (
  
      // <div className='layout'>

      //   <div className="navbar">

      //  <Navbar />

      //   </div>

      //   <div className="content">

      //     <HomePage />

      //   </div>
      // </div>
      
    <RouterProvider router = {router} />
    
  );
}

export default App