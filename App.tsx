import Router from "./src/routes/router";
import TaskProvider from "./src/Context/taskContext";
import CategoryProvider from "./src/Context/categoryContext";
export default function App() {
  return (
    <CategoryProvider>
      <TaskProvider>
        <Router />
      </TaskProvider>
    </CategoryProvider>
  );
}
