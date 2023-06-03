import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function IsAddingTodo() {
  const { pending } = useFormStatus();
  return pending ? <p>Adding new todo...</p> : null;
}
