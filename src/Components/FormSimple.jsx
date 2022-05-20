import { useState } from "react";

const initialState = {
  title: "",
  price: 0,
};

const Form = ({ addList }) => {
  const [values, setValues] = useState(initialState);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  const handleOnclick = () => {
    addList(title, price);
    setTitle("");
    setPrice(0);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingrese Comida"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <input
        type="number"
        placeholder="Ingrese Precio"
        onChange={(event) => setPrice(event.target.value)}
        value={price}
      />
      <button type="button" onClick={handleOnclick}>
        Guardar
      </button>
    </div>
  );
};

export default Form;
