import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddStudent() {

  let navigate = useNavigate();
  const [student , setStudent] = useState({
    firstName:"",
    lastName:"",
    email:"",
    department:""
  })
  const{firstName, lastName, email, department} = student;
  let handleOnChange=(e)=>{
    setStudent({
      ...student,
      [e.target.name]:e.target.value
    });
  }

  let saveStudent = async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8081/student", student);
    navigate("/view-students")
  }

  return (
    <>
      <div
        className="container-md my-5 bg-body-secondary p-4"
        style={{ width: "70%" }}
      >
        <h1>Add Student</h1>
        <form onSubmit={(e)=>{saveStudent(e)}}>
        <div className="input-group input-group-lg mb-4">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            First Name :
          </span>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            required
            onChange={(e)=>{handleOnChange(e)}}
            className="form-control"
          />
        </div>
        <div className="input-group input-group-lg mb-4">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            Last Name :
          </span>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e)=>{handleOnChange(e)}}
            className="form-control"
            required
          />
        </div>
        <div className="input-group input-group-lg mb-4">
          <span className="input-group-text w-auto" id="inputGroup-sizing-lg">
            Your Email :
          </span>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e)=>{handleOnChange(e)}}
            className="form-control"
            required
          />
        </div>
        <div className="input-group input-group-lg mb-4">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            Department :
          </span>
          <input
            type="text"
            id="department"
            name="department"
            value={department}
            onChange={(e)=>{handleOnChange(e)}}
            className="form-control"
            required
          />
        </div>
        <div className="row mb-5">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-outline-success btn-lg">
              Save
            </button>
          </div>

          <div className="col-sm-2">
            <Link
              to={"/view-students"}
              type="submit"
              className="btn btn-outline-warning btn-lg"
            >
              Cancel
            </Link>
          </div>
        </div>
        </form>
      </div>
    </>
  );
}

export default AddStudent;
