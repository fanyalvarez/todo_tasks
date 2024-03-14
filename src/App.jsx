import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { LoginPage } from "./Pages/LoginPage";
import { RegisterPage } from "./Pages/RegisterPage";
import { HomePage } from "./Pages/HomePage";
import { TasksFormPage } from "./Pages/TasksFormPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/tasks" element={<HomePage />} />
          <Route path="/add-tasks" element={<TasksFormPage />} />
          <Route path="/tasks/:id" element={<TasksFormPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
