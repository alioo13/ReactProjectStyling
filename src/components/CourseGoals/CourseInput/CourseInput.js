import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonModul from '../../UI/Button/ButtonModul';
import Button from '../../UI/Button/Button';
import './CourseInput.css';
import style from './CoursInput.module.css';


// styled componenet methode 
const FromControl = styled.div`
  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => props.invalid ? 'red' : 'black'};
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
  background: ${props => props.invalid ? '#ffd7d7' : 'transparent'};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

// &.invalid input {
//  border-color: red;
//   background: #ffd7dd;
// }

// &.invalid label {
//   color: red;

// }
`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0) {
        setIsValid(true);
    }
      setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
  
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>

      {/* styled componenet  */}
      {/* <FromControl className={isValid ? '' : 'invalid'}>
      <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        </FromControl> */}



    {/*adding  dynamic props to styled component  */}
      {/* <FromControl invalid={!isValid}>
      <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        </FromControl>
 */}

{/* dynamic style with css module  */}
         <div className={`${style['form-control']} ${!isValid && style.invalid} `}>
        <label>Course Goal</label>
        <input
         type="text" onChange={goalInputChangeHandler} />
      </div>

        {/* css class styling */}
      {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label
        //inline styling 
        //  style={{color: !isValid ? 'red' : 'black'}}
         >Course Goal</label>
        <input
        //inline styling 
        //  style={{borderColor: !isValid ? 'red' : 'black' ,background: !isValid ? 'salmon' : '#ccc'}} 
         type="text" onChange={goalInputChangeHandler} />
      </div> */}


      {/* nrml button && styled componenet methode  */}
      <Button type="submit">Add Goal</Button>

      {/* css module and dynmic styling */}
      {/* <ButtonModul> test button </ButtonModul> */}
    </form>
  );
};

export default CourseInput;
