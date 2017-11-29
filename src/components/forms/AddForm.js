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
            <div className="modal-body" id="form">
            <form onSubmit={this.handleSubmit}>
              
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
            </form>
            </div>
            <div className="modal-body" id="rules">
            </div>

        );
    }
}
