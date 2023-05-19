import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from './pages/NotFound';
import { BooksRoute } from "./pages/BooksRoute";
import {Booklayout} from "./pages/Booklayout";




function App() {
  const location = useLocation()
  console.log(location);

  return (
    <>

      <nav>
        <ul>
          <li>
            <NavLink 
            to='/' state= "Hi" >
                 Home
               </NavLink>
            
          </li>
          <li>
            <NavLink to="/books"> Books </NavLink>
          </li>
        </ul>
      </nav>

{location.state}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BooksRoute />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <br/>
      <Booklayout />
    </>

  );
};

export default App;

// Route is the path
// Routes wraps over individual route components
// Router types  
    //  The browser router
    // The History Router
    // The hash router
    // The memory router
    // Static Router
