import Router from "./src/routes/router";
import TaskProvider from "./src/Context/taskContext";
export default function App() {
  return (
    <TaskProvider>
      <Router />
    </TaskProvider>
  );
}
