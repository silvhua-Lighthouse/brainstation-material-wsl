import { useState, useEffect, useRef } from "react";
import axios from "axios";

// Update the code below to get and update data from the back-end server.
// Note that this is the front-end server, and you will have to configure
// the back-end server to allow cross-origin resource sharing.

function App() {
  const [students, setStudents] = useState([]);

  const formRef = useRef();

  useEffect(() => {
    // Get Students from the back-end server here
    async function getStudents() {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/students');
        const studentsArray = response.data
        setStudents(studentsArray);
      } catch (error) {
        console.log('API request error:\n', error)
      }
    }
    getStudents();
  }, []);

  async function postStudent(newStudent) {
    try {
      const postResponse = await axios.post('http://localhost:8080/api/v1/students', newStudent);
      console.log('POST request response:\n', postResponse);
    } catch(error) {
      console.log('API request error:\n', error)
    }
  }

  const addStudent = (e) => {
    e.preventDefault();
    // Add students to the back-end server, and then update
    // the state with the response
    const newStudent = {
      name: e.target.name.value,
      program: e.target.program.value,
      grade: e.target.grade.value
    }
    console.log('new student created')
    setStudents((prevStudents) => [...prevStudents, newStudent]); // update students array with new student
    postStudent(newStudent);
  };

  if (!students) {
    return <div>None</div>
  }

  const renderedStudents = students.map((student, index) => ( 
    // from Silvia: I chanced `key={student.id}` to `key={index}` to avoid the warning about unique key values
    <li key={index} className="list-group-item">
      {`${student.name}: ${student.program}, ${student.grade}`}
    </li>
  ));

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h2>Add Student</h2>
          <form onSubmit={addStudent} ref={formRef}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter Student Name"
                className="form-control"
                name="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="program">Program</label>
              <input
                type="text"
                id="program"
                placeholder="Enter Program"
                className="form-control"
                name="program"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Grade</label>
              <input
                type="text"
                id="grade"
                placeholder="Enter Grade"
                className="form-control"
                name="grade"
              />
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-8">
          <h2>Students</h2>
          <ul className="list-group">{renderedStudents}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;
