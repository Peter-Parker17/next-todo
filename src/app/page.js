import CreateTodo from "../../components/CreateTodo";
import TodoList from "../../components/TodoList";

export default function Home() {
  return (
    <>
    <div className="container">
    <TodoList />
    <CreateTodo />
    </div>
    </>
  )
}