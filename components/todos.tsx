import prisma from "@/lib/prisma";

import Todo from "./todo";

async function Todos() {
  const todos = await prisma.todo.findMany({ orderBy: { id: "desc" } });
  return (
    <div className="my-6 rounded shadow">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default Todos;
