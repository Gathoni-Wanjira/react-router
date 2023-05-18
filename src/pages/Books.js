import { useParams } from "react-router-dom"

export function Books () {
    const {id} = useParams()
   
    return (
    <h1> Book {id}  </h1>
    );
};

// You get to use useParams () while handling routes with dynamic parameters ...ie /.id that keeps on changing with different URLs.