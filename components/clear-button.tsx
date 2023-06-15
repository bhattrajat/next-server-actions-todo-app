"use client";

import { deleteCompletedTodos } from "@/actions/todo";

const ClearButton = () => {
  return (
    <>
      <button
        className="hover:text-blue-400"
        type="button"
        onClick={() => void deleteCompletedTodos()}
      >
        Clear Completed
      </button>
    </>
  );
};

export default ClearButton;
