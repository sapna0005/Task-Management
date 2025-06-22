import { Link, useNavigate, Outlet } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const navigate = useNavigate();
  const percentage = 66;
  const qaVerified = 60;
  const deployment = 80;
  const adminName = localStorage.getItem("adminuser") || "Admin";

  const data = [
    { month: "Jan", InProgress: 40, Complete: 30 },
    { month: "Feb", InProgress: 28, Complete: 20 },
    { month: "Mar", InProgress: 45, Complete: 36 },
    { month: "Apr", InProgress: 25, Complete: 12 },
    { month: "May", InProgress: 33, Complete: 28 },
    { month: "Jun", InProgress: 26, Complete: 14 },
  ];

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logout Successful", {
      position: "top-right",
      autoClose: 2000,
    });
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <h4 className="userlist">Admin Dashboard</h4>
        <hr />
        <ul>
          <Link to="createuser">
            <li className="userlist">User</li>
          </Link>

          <Link to="assigntask">
            <li className="userlist">Assign Task</li>
          </Link>
          
          <Link to="taskdetail">
          <li className="userlist">Task List</li>
          </Link>
           
          <li>Settings</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>

      <div className="main-content">
        <div className="header">
          
          <h3 className="welcomeheader">
            Welcome {adminName} 
          </h3>
        </div>

        <div className="admin-dash-card">
          <div className="admin-dash-carddetails">
            <div className="progresstask">
              <div className="progress-task-success">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    textColor: "#111",
                    pathColor: "#3b82f6",
                    trailColor: "#e0e0e0",
                  })}
                />
              </div>
              <div>
                <p className="card-label">Task Completed</p>
                <p className="card-subtext">66% of assigned tasks are done</p>
              </div>
            </div>
          </div>

          <div className="admin-dash-carddetails">
            <div className="progresstask">
              <div className="progress-task-success">
                <CircularProgressbar
                  value={qaVerified}
                  text={`${qaVerified}%`}
                  styles={buildStyles({
                    textColor: "#111",
                    pathColor: "#16a34a",
                    trailColor: "#e0e0e0",
                  })}
                />
              </div>
              <div>
                <p className="card-label">QA Verified</p>
                <p className="card-subtext">
                  60% of tasks passed quality checks
                </p>
              </div>
            </div>
          </div>

          <div className="admin-dash-carddetails">
            <div className="progresstask">
              <div className="progress-task-success">
                <CircularProgressbar
                  value={deployment}
                  text={`${deployment}%`}
                  styles={buildStyles({
                    textColor: "#111",
                    pathColor: "#f59e0b",
                    trailColor: "#e0e0e0",
                  })}
                />
              </div>
              <div>
                <p className="card-label">Deployment</p>
                <p className="card-subtext">80% of modules deployed</p>
              </div>
            </div>
          </div>
        </div>
        <br />

        <Outlet />
        <br />
        <div className="dashboard-container">
          <div className="chart-section">
            <h4>Activity</h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="InProgress" fill="#1e3a8a" name="In Progress" />
                <Bar dataKey="Complete" fill="#ef4444" name="Complete" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="target-section">
            <h4>Lead Target</h4>
            <div className="progress-wrapper">
              <CircularProgressbarWithChildren
                value={73}
                styles={buildStyles({
                  pathColor: "#000",
                  trailColor: "#e0e0e0",
                })}
              >
                <div className="progress-label">
                  <strong>73%</strong>
                  <p>Achieve Goals</p>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Dashboard;
