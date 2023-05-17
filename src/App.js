import { Link, Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home";
import {Books} from './pages/Books';
import {Booklist} from './pages/Booklist';



function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/books">Books</Link></li>
      </ul>
    </nav>
  


    <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="/books" element = {<Booklist /> }/>
      <Route path="/books/:id" element = {<Books />}/>
      


      
    </Routes>
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
