import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import BackendUrl from "../config/BackendUrl";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const StyledWrapper = styled.div`
  .form1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 20.5em;
    height: 22.5em;
    border: 2px solid #5e7eb6;
    border-bottom-left-radius: 1.5em;
    border-top-right-radius: 1.5em;
    overflow: hidden;
    position: relative;
    transition: all 0.25s ease;
    margin: 0 auto;
      
  }
`;

const Header = () => {
  const [show, setShow] = useState(false);
  const [resetShow, setResetShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");



  const navigate=useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleResetClose = () => setResetShow(false);
  const handleResetShow = () => setResetShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = `${BackendUrl}/user/userlogin`;
    try {
      let response = await axios.post(api, { email, password });
      console.log(response.data);
      navigate("/userdashboard");
      localStorage.setItem("username",response.data.User.name)
      localStorage.setItem("userid",response.data.User._id)

    } catch (error) {
      console.log(error);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const api = `${BackendUrl}/user/resetpassword`;
    try {
      const response = await axios.post(api, {
        email: email,
        oldpassword: oldPassword,
        newpassword: newPassword,
      });
      console.log(response.data);
      alert("Password reset successfully");
      setResetShow(false);
    } catch (error) {
      console.error(error);
      alert("Failed to reset password");
    }
  };




  return (
    <>
      <Navbar className="header1">
        <Container>
          <Navbar.Brand>
            
            <p className="taskhead">Task Management System</p>
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link>
              <FaUserCircle className="userlogo" onClick={handleShow} />
             
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body style={{ height: "400px" }}>
          <StyledWrapper>
            <form className="form1">
              <div id="login-area">
                <p>User Login</p>
              </div>
              <div id="email-area">
                <input
                  placeholder="EMAIL"
                  type="text"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div id="password-area">
                <input
                  placeholder="PASSWORD"
                  
                  autoComplete="current-password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                    setShow(false);
                    setResetShow(true);
                  }}>Forgot password?</a>
              </div>
              <div id="footer2-area">
                <button onClick={handleSubmit}>Log In</button>
              </div>
              
              <div id="background-color" />
              <div id="whitefilter" />
              
            </form>
          </StyledWrapper>
        </Modal.Body>
      </Modal>
       
      <Modal show={resetShow} onHide={handleResetClose}>
        <Modal.Header closeButton />
        <Modal.Body>
          <StyledWrapper>
            <form className="form1">
              <div id="login-area">
                <p>Reset Password</p>
              </div>

              <div id="email-area">
                <input
                  placeholder="Email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div id="password-area">
                <input
                  placeholder="Old password"
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>

              <div id="password-area">
                <input
                  placeholder="New Password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>

              <div id="footer2-area">
                <button onClick={handleResetPassword}>Reset Password</button>
              </div>

              <div id="background-color" />
              <div id="whitefilter" />
            </form>
          </StyledWrapper>
        </Modal.Body>
      </Modal>
 


      
    </>
  )
};
export default Header;
