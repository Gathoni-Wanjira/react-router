import { useOutletContext, useParams } from "react-router-dom"

export function Books () {
    const {id} = useParams()
    const obj = useOutletContext()

    return (
    <h1> Book {id} {obj.Hello} </h1>
    );
};

// You get to use useParams () while handling routes with dynamic parameters ...ie /.id that keeps on changing with different URLs.