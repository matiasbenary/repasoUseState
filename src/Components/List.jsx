const List = ({ info }) => {
  return (
    <ul>
      {info.map((item) => {
        return (
          <li key={`lista${item.title}`}>
            {item.title} ${item.price}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
