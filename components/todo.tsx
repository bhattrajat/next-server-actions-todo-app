"use client";

import Image from "next/image";
import { useTransition } from "react";

import { completeTodo, deleteTodo } from "@/actions/todo";

type Props = {
  todo: {
    id: number;
    isCompleted: boolean;
    name: string;
  };
};
function Todo({ todo }: Props) {
  const [isPending, startTransition] = useTransition();
  const [isDeletePending, startDeleteTransition] = useTransition();
  return (
    <div className="flex items-center border-b-2 border-gray-300 bg-white p-4 dark:border-gray-500 dark:bg-gray-800">
      <input
        className="mr-2 inline-block h-5 w-5 cursor-pointer rounded-full"
        type="checkbox"
        defaultChecked={todo.isCompleted}
        onClick={() => {
          startTransition(() =>
            completeTodo(todo.id).catch((error) => console.error(error))
          );
        }}
      />
      <span
        className={`${
          todo.isCompleted ? "line-through dark:text-gray-400" : ""
        }`}
      >
        {todo.name}
      </span>
      {isPending ? <span className="ml-4">updating todo....</span> : null}
      {isDeletePending ? (
        <span className="ml-4 inline-block no-underline">
          deleting todo....
        </span>
      ) : null}
      <button
        type="button"
        className="ml-auto"
        onClick={() => {
          startDeleteTransition(() =>
            deleteTodo(todo.id).catch((error) => console.error(error))
          );
        }}
      >
        <Image
          src="./icon-cross.svg"
          alt="delete button"
          width={16}
          height={16}
        />
        <span className="sr-only">delete</span>
      </button>
    </div>
  );
}
export default Todo;
