import { useState } from "react";

const initialState = {
  title: "",
  price: 0,
};

const Form = ({ addList }) => {
  const [values, setValues] = useState(initialState);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const { title, price } = values;

  const handleOnClick = () => {
    addList(title, price);
    setValues(initialState);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingrese Comida"
        name="title"
        onChange={handleOnChange}
        value={title}
      />
      <input
        type="number"
        placeholder="Ingrese Precio"
        name="price"
        onChange={handleOnChange}
        value={price}
      />

      <button type="button" onClick={handleOnClick}>
        Guardar
      </button>
    </div>
  );
};

export default Form;
