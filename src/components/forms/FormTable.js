import React, { PropTypes } from 'react';
import moment from 'moment';

const FormTable = (props) => {

    const inData = props.data.initial.vacations;
    const startD = moment(inData.start).format('YYYY-MM-DD');
    const endD = moment(inData.end).format('YYYY-MM-DD');
    return (
        <table className='form-table table'>
            <tbody>
                <tr>
                    <td className='col-md-4 col-sm-10' >When:</td>
                    <td className='col-md-4 col-sm-10'><input className='input-holder' type='date' name='start' value={startD} onChange={props.data.onChange} /></td>
                    <td className='col-md-2 '>to:</td>
                    <td className='col-md-4 col-sm-10'><input className='input-holder' type='date' name='end' value={endD} onChange={props.data.onChange} /></td>
                </tr>
                <tr>
                    <td className='col-md-5 col-sm-10'>What for:</td>
                    <td className='col-md-4 col-sm-10'>
                    <select className='input-holder' name='title' onChange={props.data.onChange}>
                            <option defaultValue='Vacation' value='Vacation'>Vacation</option>
                            <option value='Training'>Training</option>
                        </select>
                    </td>
                    <td className='col-md-4 col-sm-10'>When :</td>
                    <td className='col-md-4 col-sm-10'>
                    <select className='input-holder' name='unit' onChange={props.data.onChange}>
                            <option defaultValue='allDay' value='allDay' >All Day</option>
                            <option value='AM'>Morning</option>
                            <option value='PM'>Afternoon</option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
    );
    AddForm.propTypes = {
        initial: PropTypes.object.isRequired,
        onChange: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired,
        onClose: PropTypes.func.isRequired,
        // errors: PropTypes.object.isRequired,
        members: PropTypes.object.isRequired
    };
}

export default FormTable;