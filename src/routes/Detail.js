import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Detail() {
    // const [todo, setTodo] = useState("");
    // const [todos, setTodos] = useState([]);
    // const onChange = (e) => setTodo(e.target.value);
    // const onSubmit = (e) => {
    //   e.preventDefault();
    //   if (todo === "") {
    //     return;
    //   }
    //   setTodo("");
    //   setTodos((currentArray) => [todo, ...currentArray]);
    // };
    // console.log(todos);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>{loading ? <h1>Loading...</h1> : <h1>Detail</h1>}</div>
        // <div>
        //   <form action="" onSubmit={onSubmit}>
        //     <input
        //       type="text"
        //       onChange={onChange}
        //       value={todo}
        //       placeholder="ex..."
        //     />
        //     <button>Submit</button>
        //   </form>
        // </div>
    );
}

export default Detail;
