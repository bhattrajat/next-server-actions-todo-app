import prisma from "@/lib/prisma";

import Todo from "./todo";
import TodoFilters from "./todo-filters";

async function Todos({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const filter = searchParams.filter;
  let whereClause;
  if (filter === "active") {
    whereClause = { isCompleted: false };
  } else if (filter === "completed") {
    whereClause = { isCompleted: true };
  }
  const todos = await prisma.todo.findMany({
    where: whereClause,
    orderBy: { id: "desc" },
  });
  return (
    <div className="my-6 rounded border-b-2 border-gray-300 shadow dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <div className="flex items-center justify-between p-4">
        <div>{`${todos.length} items left`}</div>
        <TodoFilters />
        <div>
          <button>Clear Completed</button>
        </div>
      </div>
    </div>
  );
}

export default Todos;
