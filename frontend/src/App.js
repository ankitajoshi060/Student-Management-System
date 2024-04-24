import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddStudent from "./components/AddStudent";
import ViewStudents from "./components/ViewStudents";
import EditStudent from "./components/EditStudent";
import StudentProfile from "./components/StudentProfile";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add-student" element={<AddStudent />} />
          <Route exact path="/view-students" element={<ViewStudents />} />
          <Route exact path="/edit-student/:id" element={<EditStudent />} />
          <Route
            exact
            path="/student-profile/:id"
            element={<StudentProfile />}
          />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;