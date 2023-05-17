import { useParams } from "react-router-dom"

export function Books () {
    const {id} = useParams()

    return (
    <h1> Book {id} </h1>
    );
};