import React from 'react';
import './CustomBtn.style.css';

function CustomBtn({value, type}) {
    return (
        <a href="/" className={`customBtn text-uppercase ${type ? 'primary': 'default'}`}>{value}</a>
    )
}

export default CustomBtn;
