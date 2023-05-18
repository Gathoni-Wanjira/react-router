import { Link, Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home";
import {Books} from './pages/Books';
import {Booklist} from './pages/Booklist';
import {Newbook} from './pages/Newbook';
import {NotFound} from './pages/NotFound';
import { Booklayout } from "./pages/Booklayout";



function App() {
  return (
    <>
    <Routes>

      <Route path="/books" element = {<h1>Extra Content</h1>} />  
      
    </Routes>


    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/books">Books</Link></li>
      </ul>
    </nav>
  


    <Routes>
      <Route path="/" element = {<Home />}/>

{/* Nested routes... We nest the following under /books path */}
      <Route path="/books" element = {<Booklayout />}>
        <Route index element = {<Booklist/>}/>
        <Route path=":id" element = {<Books />}/>
        <Route path="new" element = {<Newbook />}/>


      </Route>
     
      <Route path="*" element = { <NotFound />} />
      


      
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
