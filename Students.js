import React, { useState } from "react";

function Students() {
  const [student, setStudent] = useState("");
  const [list, setList] = useState([]);

  // Add student
  const addStudent = () => {
    if (student === "") return;
    setList([...list, student]);
    setStudent("");
  };

  // Delete student
  const deleteStudent = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Student Management</h2>

      <input
        placeholder="Enter name"
        value={student}
        onChange={(e) => setStudent(e.target.value)}
      />

      <button onClick={addStudent}>Add</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteStudent(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Students;