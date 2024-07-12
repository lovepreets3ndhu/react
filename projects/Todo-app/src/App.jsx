import Header from "../components/Heading";
import Addtolist from "../components/Todo-addlist";
import Todo2 from "../components/Todol2";
import Todo1 from "../components/Todol1";
import  "./App.css";
function App() {
  return (
    <center className="todo-cont">
      <Header></Header>
      <div  className="item-cont">
      <Addtolist></Addtolist>
      <Todo1></Todo1>
      <Todo2></Todo2>
      </div>
    </center>
  );
}

export default App;
