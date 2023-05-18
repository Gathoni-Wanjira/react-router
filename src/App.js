import { Link, Route, Routes, useRoutes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from './pages/NotFound';
import { BooksRoute } from "./pages/BooksRoute";



function App() {
  let element = useRoutes([

    {
      path: "./",
      element: <Home/>,
     
    },
    {
      path: "*",
      element: <NotFound/>,
     
    }


  ])

  return (
    <>
     
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to="/books">Books</Link></li>
        </ul>
      </nav>
{element}

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BooksRoute />} />
        <Route path="*" element={<NotFound />} />

      </Routes> */}
    </>
  );
}

export default App;

// Route is the path
// Routes wraps over individual route components
// Router types  
    //  The browser router
    // The History Router
    // The hash router
    // The memory router
    // Static Router
