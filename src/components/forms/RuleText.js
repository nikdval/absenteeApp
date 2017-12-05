import React from 'react';

const Info = (props) => {
    const inerText = props.name == 'Final Report' ? ' is due on ' : ' will be absent '
    const period = props.name == 'Final Report' ? props.start : props.start + ' - ' + props.end
    const icon = props.name == 'Final Report' ? 'fa fa-file-text-o' : 'fa fa-user';
    return (
        <ul>
            {props.case == 1 &&
                <li><span className={icon}> </span>Your absence overlaping more than<span className='purple' >  4 </span>working days with <span className='purple' > {props.name} ({period})</span></li>}
            {props.case == 2 &&
                <li><span className={icon}></span><span className='purple'>{props.name}</span>{inerText} <span className='purple'>{period}</span></li>}
            {props.case == 3 &&
                <li><span className={icon}></span><span className='purple'>{props.name}</span>{inerText}<span className='purple'> next day</span> </li>}
            {props.case == 4 &&
                <li><span className={icon}></span><span className='purple'>{props.name}</span>{inerText} <span className='purple'> day before</span> </li>}
        </ul>
    );
}

export default Info;