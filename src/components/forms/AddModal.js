import React from "react";
import moment from 'moment';

export default class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            start: '',
            end: '',
            unit: '',
            title: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.setRules = this.setRules.bind(this);
    }
    /*Get values to state and on view*/
    handleChange(event) {
        this.setState({
            start: event.target.value,

        });
        console.log(event.target.value);
    }
    /*POST values*/
    handleSubmit(event) {
        /**
    * POST data to database
    * Currently to JS object
    */
        event.preventDefault();
        console.log(this.state);
    }
    componentWillReceiveProps(data) {
        this.setState({
            start: moment(this.props.date.start).format('DD/MM/YYYY'),
            end: moment(this.props.date.end).format('DD/MM/YYYY'),
            unit: '',
            title: ''
        });
    }
    render() {
        // Render nothing if the "show" is false
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="modal fade" id="myModal" role="dialog" action={this.handleChange} >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" onClick={this.props.onClose}>&times;</button>
                            <h4 className="modal-title">Modal Header</h4>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="modal-body">
                                <table className="form-table">
                                    <tr>
                                        <td>When:<input type="text" name="start" value={this.state.start} onChange={this.handleChange} /></td>
                                        <td>to <input type="text" value={this.state.start} onChange={this.handleChange} /></td>
                                    </tr>
                                    <tr>
                                        <td>What for: </td>
                                        <td></td>
                                    </tr>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button className="btn-primary" type="submit" data-dismiss="modal" onClick={this.handleSubmit} >
                                    Save</button>
                                <button data-dismiss="modal" onClick={this.props.onClose}>
                                    Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
