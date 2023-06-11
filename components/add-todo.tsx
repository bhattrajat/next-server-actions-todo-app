"use client";

import { useRef } from "react";

import { createTodo } from "@/actions/todo";

import IsAddingTodo from "./is-adding-todo";

function AddTodo() {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={formRef}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      action={async (formData: FormData) => {
        const todoName = formData.get("todo") as string;
        if (formRef.current) {
          formRef.current.reset();
        }
        await createTodo(todoName);
      }}
    >
      <input
        type="text"
        name="todo"
        className="mt-8 w-full rounded p-4 dark:bg-gray-800"
        placeholder="Create a new todo"
      />
      <IsAddingTodo />
    </form>
  );
}

export default AddTodo;
