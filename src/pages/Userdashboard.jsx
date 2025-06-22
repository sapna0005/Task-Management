import { Outlet, Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Userdashboard = () => {

  const navigate=useNavigate();
  
  const logout=()=>{
    localStorage.clear()
     toast.success("Logout Successful", {
          position: "top-right",
          autoClose: 2000,
        });
        setTimeout(() => {
          navigate("/");
        }, 3000);
    };

  return (
    <>
      <div className="app1">
        <div className="sidebar">
          <h5>User DashBoard</h5>
          <hr />
          <ul>
            <li className="userlist">User</li>
            <Link to="mytask">
              <li className="userlist">My Task</li>
            </Link>
            <li>Settings</li>
            <li onClick={logout}>Logout</li>
          </ul>
        </div>

        <div className="main-content1">
          <div className="header">
            <h3 style={{ color: "white", fontWeight: "bold" }}>
              Welcome {localStorage.getItem("username")}
            </h3>
          </div>

          <div className="dashboard-content">
            <div className="card-box">
              <h4>Tasks Completed</h4>
              <p>12</p>
            </div>
            <div className="card-box">
              <h4>Pending Tasks</h4>
              <p>3</p>
            </div>
            <div className="card-box">
              <h4>Performance</h4>
              <p>Good</p>
            </div>
          </div>
           <br />
          <Outlet />
        </div>
      </div>
       <ToastContainer />
    </>
  );
};
export default Userdashboard;
