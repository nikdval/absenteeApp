import React from 'react';
import moment from 'moment';

const Info = (props) => {
    const style=props.leftDays<=0? {color:'red'}: {color:'black'};
    return (
        <div className='form-section'>
        <ul>
            <li>Total week days: {props.current}</li>
            <li style={style} >Left vacation days: {props.leftDays}</li>
            </ul>
        </div>
    );
}

export default Info;