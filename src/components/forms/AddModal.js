import React from "react";
import moment from 'moment';
import AddForm from './AddForm';

export default class AddModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vacations:{
            title: '',
            start: '',
            end: '',
            unit: ''
            }   
        };

        this.handleChange =  this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.setRules = this.setRules.bind(this);
    } 
    /*Update Values of the inputs */
    componentWillReceiveProps(data) {
        this.setState({
            vacations:{
                title: '',
                start: moment(this.props.date.start).format('DD/MM/YY'),
                end:moment(this.props.date.end).format('DD/MM/YY'),
                unit: ''
                }   
        });
    }
    render() {
        // Render nothing if the "show" is false
        if (!this.props.show) {
            return null;
        } 
        return (
            <div className="modal fade" id="myModal" role="dialog"  >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" onClick={this.props.onClose}>&times;</button>
                            <h4 className="modal-title">Modal Header</h4>
                        </div>
                        
                           <AddForm 
                           initial= {this.state} 
                           onChange={this.handleChange} 
                           onSubmit={this.handleSubmit} 
                           onClose ={this.props.onClose} 
                           members={this.props.members} />
                           
                    </div>
                </div>
            </div>
        );
    }
    /*Get values to state and on view*/
   handleChange(event) {
    const field = event.target.name;
    const vacations= this.state.vacations;
    vacations[field] = event.target.value;
    this.setState({
        vacations
    });
    }
    /*POST values*/
    handleSubmit(event) {
        /**
    * POST data to database
    * Currently to JS object
    */
        event.preventDefault();
        console.log("EXAMPLE SERVER UPDATE REQUES");
        const newEntry = this.state.vacations;
        this.props.update(newEntry ); 
    }
}
