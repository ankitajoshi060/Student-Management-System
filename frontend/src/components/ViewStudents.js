import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEye, FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function ViewStudents() {
  const [student, setStudent] = useState([]);
  const getStudent = async () => {
    let response = await axios.get("http://localhost:8081/student");
    console.log(response.data);
    setStudent(response.data);
  };
  let deleteStudent = async (id)=>{
      await axios.delete(`http://localhost:8081/student/${id}`);
      getStudent();
  }
  useEffect(() => {
    getStudent();
  },[]);

  return (
  <>
    <table className="container table table-bordered table-hover my-3 align-middle text-center">
      <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
          <th>EMAIL</th>
          <th>DEPARTMENT</th>
          <th colSpan="3">ACTIONS</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {student.map((student, index)=>{
          const{id, firstName, lastName, email, department}=student;
          return(
          <tr key={id}>
            <th>{index+1}</th>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{department}</td>
            <td><Link to={`/student-profile/${id}`} className="btn btn-info fs-5"><FaEye/></Link></td>
            <td><Link to={`/edit-student/${id}`} className="btn btn-warning fs-5"><FaUserEdit /></Link></td>
            <td><button onClick={()=>deleteStudent(id)} className="btn btn-danger fs-5"><MdDelete /></button></td>
          </tr>
          );
        })}
      </tbody>
    </table>
  </>
)}

export default ViewStudents;
