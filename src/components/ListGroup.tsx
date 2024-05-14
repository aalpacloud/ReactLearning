function ListGroup() {
  let listItems = ["New York", "London", "Paris", "Berlin", "Tokyo"];
  listItems = [];

  return (
    <>
      <h1>List</h1>
      {listItems.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {listItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
