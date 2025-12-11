
import PropTypes from "prop-types";
import "./Student.css";
import { useState } from "react";
const Student = ({id, name, email, isPresent, toggle}) => {
    
    const nameColor = isPresent ? 'green' : 'red';
    const changeColor = () => {
        toggle(id);
    }
    
    return (
        <ul> 
            <li>ID: {id}</li>
            <li className={nameColor}>Nickname: {name}</li>
            <li>Email: {email}</li>
            <li>Present: {isPresent}</li>
            <button onClick={changeColor}>Toggle is {name} is present</button>
        </ul>
        
    )
};

Student.propTypes = {
  id: PropTypes.number.isRequired,  
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  isPresent: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Student;