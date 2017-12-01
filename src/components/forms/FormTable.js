import React from "react";
import moment from 'moment';

const FormTable = (props) => {

    const inData = props.data.initial.vacations;
    const startD = inData.start;
    const endD = inData.end;
    //console.log(startD);
    return (
        <table className="form-table">
            <tbody>
                <tr>
                    <td>When:<input type="text" name="start" value={startD} onChange={props.data.onChange} /></td>
                    <td>to:<input type="text" name="end" value={endD} onChange={props.data.onChange} /></td>
                </tr>
                <tr>
                    <td>What for:
                                    <select name="title" onChange={props.data.onChange}>
                            <option defaultValue="Vacations">Vacation</option>
                            <option value="Training">Training</option>
                        </select>
                    </td>
                    <td>When :
                    <select name="unit" onChange={props.data.onChange}>
                            <option defaultValue="AM">Morning</option>
                            <option value="PM">Afternoon</option>
                            <option value="allDay">All Day</option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>

    );


}

export default FormTable;