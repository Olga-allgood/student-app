
import './index.css';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';
import { useState } from 'react';
import { initialStudentData } from './StudentData';


function App() {
   const [studentData, setStudentData] = useState(initialStudentData);

   const ToggleStudentPresence = (studentID) => {
    const students = studentData.map(student => {
      if(student.id == studentID) {
        return { ...student, isPresent: !student.isPresent};

      }else {
        return student;
      }
      }
    );
    setStudentData(students); 
  }

   
  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo></ClassInfo>
      <StudentList students={studentData} toggleStudent={ToggleStudentPresence}></StudentList>
    </main>
  );
}

export default App;