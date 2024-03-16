import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { LoginPage } from "./Pages/LoginPage";
import { RegisterPage } from "./Pages/RegisterPage";
import { HomePage } from "./Pages/HomePage";
import { TasksFormPage } from "./Pages/TasksFormPage";
import { AuthProvider } from "./Context/UserContext";
import { TaskProvider } from "./Context/TaskContext";
import { TaksPage } from "./Pages/TaksPage";
import ProtectedRoute from './ProtectedRoute'

function App() {

  return (
    <>
      <AuthProvider>
        <TaskProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/tasks" element={<TaksPage />} />
                <Route path="/add-tasks" element={<TasksFormPage />} />
                <Route path="/tasks/:id" element={<TasksFormPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TaskProvider>
      </AuthProvider>
    </>
  );
}

export default App;
