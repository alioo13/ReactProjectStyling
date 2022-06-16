import React from 'react';
import styles from './Button.module.css';




const ButtonModul = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ButtonModul;
