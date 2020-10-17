import React from 'react';
import classNames from 'classnames';

const Button = (props) => {
    const {clsName, handleClick} = props;

    return (
        <button className={
            classNames('btn', 'btn__'+clsName)
        }
        onClick={(e) => handleClick(e)}
        >
            {props.children}
        </button>
    );
};

export default Button;