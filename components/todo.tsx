type Props = {
  todo: {
    id: number;
    text: string;
  };
};
function Todo({ todo }: Props) {
  return <div className="rounded-sm border-b-2 border-gray-600 bg-white p-4 dark:bg-gray-800">
      {todo.text}
    </div>
}
export default Todo;
