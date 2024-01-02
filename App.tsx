import "react-native-gesture-handler";
import Router from "./src/routes/router";
import TaskProvider from "./src/Context/taskContext";
import CategoryProvider from "./src/Context/categoryContext";
import UserProvider from "./src/Context/UserContext";
export default function App() {
  return (
    <UserProvider>
      <CategoryProvider>
        <TaskProvider>
          <Router />
        </TaskProvider>
      </CategoryProvider>
    </UserProvider>
  );
}
