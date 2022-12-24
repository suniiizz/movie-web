import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
  // const [toDo, setToDo] = useState("");
  // const [toDos, setToDos] = useState([]);
  // const onChange = (e) => setToDo(e.target.value);
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   if (toDo === "") {
  //     return;
  //   }
  //   setToDos((currentArray) => [toDo, ...currentArray]);
  //   setToDo("");
  // };
  // return (
  //   <div>
  //     <h1>My To Dos ({toDos.length})</h1>
  //     <form onSubmit={onSubmit}>
  //       <input
  //         onChange={onChange}
  //         value={toDo}
  //         type="text"
  //         placeholder="Write your to do"
  //       ></input>
  //       <button>Add To Do</button>
  //     </form>
  //     <hr />
  //     <ul>
  //       {toDos.map((item, index) => (
  //         <li key={index}>{item}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}

export default App;
