import { useState } from "react";
import Form from "./Components/Form";
import List from "./Components/List";

function App() {
  const [list, setList] = useState([
    { title: "Pizza", price: 12 },
    { title: "Hamburgesa", price: 15 },
    { title: "Pancho", price: 20 },
  ]);

  const addList = (title, price) => {
    setList([...list, { title, price }]);
  };

  return (
    <div>
      <Form addList={addList}></Form>
      <List info={list}></List>
    </div>
  );
}

export default App;
