import React from "react";

export default class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }
        return (

            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" onClick={this.props.onClose}>&times;</button>
                            <h4 className="modal-title">Modal Header</h4>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
                                </label>
                                
                                <div className="modal-footer">
                                    <button className="btn-primary" type="submit" data-dismiss="modal" onClick={this.props.onClose} >
                                        Save</button>
                                    <button data-dismiss="modal" onClick={this.props.onClose}>
                                        Close</button>
                                </div>
                            </form>
                        </div>
                        {this.props.children}


                    </div>
                </div>
            </div>
        );
    }
}
