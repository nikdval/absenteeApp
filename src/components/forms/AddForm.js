import React from "react";
import moment from 'moment';

export default class AddForm extends React.Component {

    render() {
        const inData = this.props.initial.vacations;
        const startD = inData.start;
        const endD = inData.end;
        return (
            <div>
                <form action="/" onSubmit={this.props.onSubmit} >
                    <div className="modal-body" id="form">

                        <table className="form-table">
                            <tbody>
                                <tr>
                                    <td>When:<input type="text" name="start" value={startD} onChange={this.props.onChange} /></td>
                                    <td>to:<input type="text" name="end" value={endD} onChange={this.props.onChange} /></td>
                                </tr>
                                <tr>
                                    <td>What for:
                                    <select name="title" onChange={this.props.onChange}>
                                            <option selected value="Vacation">Vacation</option>
                                            <option value="Training">Training</option>
                                        </select>
                                    </td>
                                    <td>When :
                                    <select name="unit" onChange={this.props.onChange}>
                                            <option selected value="AM">Morning</option>
                                            <option value="PM">Afternoon</option>
                                            <option value="allDay">All Day</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-body" id="rules">

                    </div>
                    <div className="modal-footer">
                        <button className="btn-primary" type="submit" data-dismiss="modal" onClick={this.props.onSubmit} >
                            Save</button>
                        <button data-dismiss="modal" onClick={this.props.onClose}>
                            Close</button>
                    </div>
                </form>
            </div>
        );
    }

}
