import Todo from "./todo";

function Todos() {
  const placeHolderTodos = [
    {
      id: 1,
      text: "Task 1",
    },
    {
      id: 2,
      text: "Task 2",
    },
  ];
  return (
    <div className="my-6 rounded">
      {placeHolderTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default Todos;
