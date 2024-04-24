import axios from "axios";
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditStudent() {
  let navigate = useNavigate();
  let { id } = useParams();
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  let getStudent = async () => {
    let resp = await axios.get(`http://localhost:8081/student/${id}`);
    setStudent(resp.data);
  };
  useEffect(() => {
    getStudent();
  }, []);
  const { firstName, lastName, email, department } = student;

  let handleOnChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  let updateStudent = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8081/student/${id}`, student);
    navigate("/view-students");
  };
  return (
    <>
      <div
        className="container-md my-5 bg-body-secondary p-4"
        style={{ width: "70%" }}
      >
        <h1>Edit Student</h1>
        <form
          onSubmit={(e) => {
            updateStudent(e);
          }}
        >
          <div class="input-group input-group-lg mb-4">
            <span class="input-group-text" id="inputGroup-sizing-lg">
              First Name :
            </span>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              required
              onChange={(e) => {
                handleOnChange(e);
              }}
              class="form-control"
            />
          </div>
          <div class="input-group input-group-lg mb-4">
            <span class="input-group-text" id="inputGroup-sizing-lg">
              Last Name :
            </span>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => {
                handleOnChange(e);
              }}
              class="form-control"
              required
            />
          </div>
          <div class="input-group input-group-lg mb-4">
            <span class="input-group-text w-auto" id="inputGroup-sizing-lg">
              Your Email :
            </span>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                handleOnChange(e);
              }}
              class="form-control"
              required
            />
          </div>
          <div class="input-group input-group-lg mb-4">
            <span class="input-group-text" id="inputGroup-sizing-lg">
              Department :
            </span>
            <input
              type="text"
              id="department"
              name="department"
              value={department}
              onChange={(e) => {
                handleOnChange(e);
              }}
              class="form-control"
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

export default EditStudent;
