import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CreateUser from "./pages/CreateUser";
import AssignTask from "./pages/AssignTask";
import Userdashboard from "./pages/Userdashboard";
import Mytask from "./pages/Mytask";
import TaskDetail from "./pages/TaskDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>

        <Routes>
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="createuser" element={<CreateUser />} />
            <Route path="assigntask" element={<AssignTask />} />
            <Route path="taskdetail" element={<TaskDetail />}     />
            
          </Route>
        </Routes>

        <Routes>
          <Route path="userdashboard" element={<Userdashboard />}>
           <Route path="mytask" element={<Mytask/>}            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
