import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import BackendUrl from "../config/BackendUrl";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");

 const handleSubmit=async(e)=>{
        e.preventDefault();
          let api=`${BackendUrl}/admin/usercreation`;
        try {
             const response= await axios.post(api, {name:name, email:email, designation:designation})
             console.log(response);
             toast.success("User created and email sent successfully", {
              position: "top-right",
              autoClose: 2000,
             });
        } catch (error) {
            
            console.log(error);
        }
   }


  return (
    <div className="create-user-container">
      <h1 className="form-heading">Create New User</h1>
      <Form className="user-form">
        <Form.Group className="mb-3" controlId="formName">
          <label htmlFor="name" className="user-label">Name</label>
          <Form.Control
            type="text"
            className="user-placeholder"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <label htmlFor="email" className="user-label">Email</label>
          <Form.Control
            type="email"
            className="user-placeholder"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDesignation">
          <label htmlFor="email" className="user-label">Select Designation</label>
          <Form.Select
            aria-label="Default select example"
            value={designation}
            className="user-placeholder"
            onChange={(e) => setDesignation(e.target.value)}
          >
            <option>--Select Designation--</option>
            <option>Programmer</option>
            <option>Developer</option>
            <option>Designer</option>
            <option>DataBase Developer</option>
            <option>Analyst</option>
            <option>Coder</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit" className="submit-button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <ToastContainer/>
    </div>
   
  );
};

export default CreateUser;
