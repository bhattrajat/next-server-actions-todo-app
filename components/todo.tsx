type Props = {
  todo: {
    id: number;
    name: string;
  };
};
function Todo({ todo }: Props) {
  return (
    <div className="rounded-sm border-b-2 border-gray-300 bg-white p-4 dark:bg-gray-800">
      {todo.name}
    </div>
  );
}
export default Todo;
