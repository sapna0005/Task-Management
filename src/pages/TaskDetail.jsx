import { useState, useEffect } from "react";
import BackendUrl from "../config/BackendUrl";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import Pagination from 'react-bootstrap/Pagination';
import Form from "react-bootstrap/Form";
import { RiDeleteBin7Fill } from "react-icons/ri";


const TaskDetail = () => {
  const [mydata, setMydata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 5;

  const loadData = async () => {
    let api = `${BackendUrl}/admin/taskdetail`;
    try {
      let response = await axios.get(api);
      console.log(response.data);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

   const changeTaskStatus=async(id)=>{
    let api=`${BackendUrl}/admin/changetaskstatus/?id=${id}`;
    try {
          const response = await axios.get(api);
          console.log(response);
    } catch (error) {
        console.log(error);
    }

    loadData();
   }

   const taskDel=async(id)=>{
    let api=`${BackendUrl}/admin/taskdelete/?id=${id}`
     try {
      let response=await axios.delete(api);
       console.log(response.data);
       
     } catch (error) {
      console.log(error);
      
     }
     loadData();
   }

   const filteredData = mydata.filter((key) =>
    key.userid.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    key.userid.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    key.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    key.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }


  


  return (
    <>
      <div className="heading2">
       <h3 className="taskheading">Task Detail List</h3>
     </div>
      <br />
      <Form.Control 
        type="text"
        placeholder="Search by Name, Email"
        className="searchbar"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1); 
        }}
      />

      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Status</th>
            <th>Name</th>
            <th>Email</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
            <th>Delete</th>
            
          </tr>
        </thead>
        <tbody>
          {currentItems.map((key) => (
            <tr key={key._id}>
              <td>
                {key.taskstatus ? (
                  <TiTick color="green" size={24} />
                ) : (
                  <ImCross color="red" size={16} />
                )}
              </td>
              <td>{key.userid.name}</td>
              <td>{key.userid.email}</td>
              <td>{key.title}</td>
              <td>{key.description}</td>
              <td>
                {key.taskstatus ? (
                  <button onClick={() => changeTaskStatus(key._id)} className="actionbtn">
                    ReAssign
                  </button>
                ) : (
                  <button className="actionbtn1">
                    Pending...
                  </button>
                )}
              </td>
             

              <td><button className="delete-button" onClick={()=>taskDel(key._id)}>
                ␡
               </button></td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination className="justify-content-center mt-4">{paginationItems}</Pagination>
    </>
  );
};
export default TaskDetail;
