
import Navbar from './components/navbar/Navbar.jsx';
import HomePage from  './routes/homepage/HomePage.jsx';
import ListPage from './routes/listPage/listPage.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from './routes/layout/layout.jsx';
import SinglePage from './routes/singlePage/singlePage.jsx';
import ProfilePage from './routes/profilePage/profilePage.jsx';
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
            element: <ListPage />
          },
          {
            path: "/:id",
            element: <SinglePage />
          },
          {
            path: "/profile",
            element: <ProfilePage />
          }
        ]
      },
     
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