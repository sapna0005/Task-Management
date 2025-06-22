import { useState, useEffect } from "react";
import BackendUrl from "../config/BackendUrl";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AssignTask = () => {
  const [mydata, setMydata] = useState([]);
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({});
  const [userid, setUserid] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (uid) => {
    setUserid(uid);
    setShow(true);
  };

  const loadData = async () => {
    let api = `${BackendUrl}/admin/showuserdata`;
    try {
      const response = await axios.get(api);
      setMydata(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = `${BackendUrl}/admin/assignwork`;
    try {
      let response = await axios.post(api, { ...input, userid });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const ans = mydata.map((key) => {
    return (
      <>
        <tr>
          <td>{key.name}</td>
          <td>{key.email}</td>
          <td>{key.designation}</td>
          <td>
            <Button
              variant="info"
              onClick={() => {
                handleShow(key._id);
              }}
            >
              Assign Task
            </Button>
          </td>
        </tr>
      </>
    );
  });

  return (
    <>
    <div className="heading2">
      <h3 className="taskheading">Assign Task to User</h3>
      </div>
      <br />
      <Table striped bordered hover className="tasktable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </Table>

      <Modal show={show} onHide={handleClose} className="taskmodal">
        <Modal.Header closeButton>
          <Modal.Title> Assign Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="taskform">
            <div className="form_front">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="formtitle">Task Title</Form.Label>
              <Form.Control type="text" name="title" className="taskplaceholder"    onChange={handleInput} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="formtitle">Task Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                className="taskplaceholder" 
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label className="formtitle">Deadline</Form.Label>
              <Form.Control
                type="text"
                name="deadline"
                className="taskplaceholder" 
                onChange={handleInput}
              />
            </Form.Group>
            <Button variant="dark" type="submit" className="taskbtn"    onClick={handleSubmit}>
              Submit
            </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default AssignTask;
