import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from './pages/NotFound';
import { BooksRoute } from "./pages/BooksRoute";




function App() {

  return (
    <>

      <nav>
        <ul>
          <li>
            <NavLink 
             style = {({isActive}) =>{
              return isActive ? {color : "red" } : {}
              }} to='/' >
                 Home
               </NavLink>
            
          </li>
          <li>
            <NavLink to="/books"> Books </NavLink>
          </li>
        </ul>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BooksRoute />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
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
