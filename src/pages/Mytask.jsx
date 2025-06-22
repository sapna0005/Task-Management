import { useEffect, useState } from "react";
import BackendUrl from "../config/BackendUrl";
import axios from "axios";
import Table from "react-bootstrap/Table";
import styled from "styled-components";

const Mytask = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = async () => {
    let api = `${BackendUrl}/user/mytask/?id=${localStorage.getItem("userid")}`;
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

  const submitTask=async(id)=>{
     let api=`${BackendUrl}/user/completetask/?id=${id}`
     try {
      let response=await axios.get(api)
      console.log(response.data);
      
     } catch (error) {
      console.log(error);
      
     }
  }

  let ans = mydata.map((key) => {
    return (
      <>
        <tr>
          <td>{key.title}</td>
          <td>{key.description}</td>
          <td>{key.deadline}</td>
          <td>
            <StyledWrapper>
              <div>
                {key.taskstatus ? (<>
                  <button className="btn" disabled> <i className="animation" />Task Submitted <i className="animation" />
                </button>
                </>):(<>
                 <button className="btn" onClick={()=>{submitTask(key._id)}}> <i className="animation" />Submit Task <i className="animation" />
                </button>
                </>)}

               
              </div>
            </StyledWrapper>
          </td>
        </tr>
      </>
    );
  });

  return (
    <>
        <div className="heading2">
         <h3 className="taskheading"> Task List Given By Admin</h3>
        </div>
        <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Deadline</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </Table>
    </>
  );
};
export default Mytask;

const StyledWrapper = styled.div`
  .btn {
    outline: 0;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    background: #40b3a2;
    letter-spacing: 1px;
    border: 0;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    padding: 10px 8px;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    width: 120px;
    text-transform: uppercase;
    overflow: hidden;
    cursor: pointer;
  }
`;
