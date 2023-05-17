import { useOutletContext, useParams } from "react-router-dom"

export function Books () {
    const {id} = useParams()
    const obj = useOutletContext()

    return (
    <h1> Book {id} {obj.Hello} </h1>
    );
};