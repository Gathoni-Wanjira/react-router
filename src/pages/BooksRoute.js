import { Routes,Route } from "react-router-dom";
import { Books } from "./Books";
import {Booklist} from "./Booklist";
import {Newbook} from "./Newbook";
import {Booklayout} from "./Booklayout";

export function BooksRoute () {
    return (
        <>
        <Booklayout/>
        <Routes>
         
        <Route index element = {<Booklist/>}/>
        <Route path=":id" element = {<Books />}/>
        <Route path="new" element = {<Newbook />}/>

        </Routes>
        </>
    );
};