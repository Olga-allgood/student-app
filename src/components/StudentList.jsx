import './StudentList.css';
import './Student';
import Student from './Student';
import PropTypes from "prop-types";

const StudentList = ({students, toggleStudent}) => {
    
  
     const StudentComponents = students.map(student => {
      return ( <li key={student.id}>
                 <Student 
                 id={student.id} 
                 name = {student.nameData} 
                 email= {student.emailData} 
                 isPresent = {student.isPresent} 
                 toggle= {toggleStudent}>      
                </Student> 
                </li>

      )
});
  return (
    <section>
     <h2>Student List</h2>
     <ul> 
        {StudentComponents}
        
      </ul>
    </section>
  );
};

StudentList.propTypes = {
    students: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        nameData: PropTypes.string.isRequired,
        emailData: PropTypes.string.isRequired,
        isPresentData: PropTypes.bool.isRequired,
    })),
    toggleStudent: PropTypes.func.isRequired,
};

export default StudentList;

