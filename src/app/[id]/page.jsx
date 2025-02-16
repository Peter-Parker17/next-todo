import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";

// In Next.js App Router, pages receive params prop containing route parameters
export default async function Todo({ params }) {
  // Get the id from params
  const { id } = params;
  console.log("🚀 ~ id:", id);

  // Fetch the todo data
  const todoRef = doc(db, "todos", id);
  const todoSnap = await getDoc(todoRef);

  if (!todoSnap.exists()) {
    return <div>Todo not found</div>;
  }

  const todo = todoSnap.data();

  return (
    <div className="container">
      <h1>Todo title: {todo.title}</h1>
      <h3>Detail: {todo.detail}</h3>
    </div>
  );
}