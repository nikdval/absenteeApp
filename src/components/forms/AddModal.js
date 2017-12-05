import React, { PropTypes } from 'react';
import moment from 'moment';
import AddForm from './AddForm';


export default class AddModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            holidays: this.props.holidays,
            leftDays: this.props.leftDays,
            vacations: {
                title: '',
                start: '',
                end: '',
                unit: ''
            },
            errors: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.isDate = this.isDate.bind(this);
        this.endStartCompare = this.endStartCompare.bind(this);
        this.submitValidation=this.submitValidation.bind(this);
    }

    /*Update Values of the inputs */
    componentWillReceiveProps(data) {
        this.setState({
            vacations: {
                title: 'Vacation',
                start: moment(this.props.date.start).format('YYYY,MM,DD'),
                end: moment(this.props.date.end).format('YYYY,MM,DD'),
                unit: 'allDay'
            }
        });
    }

    render() {
        // Render nothing if the 'show' is false
        if (!this.props.show) {
            return null;
        }
        return (
            <div className='modal fade' id='myModal' role='dialog'  >
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <button type='button' className='close' data-dismiss='modal' onClick={this.props.onClose}>&times;</button>
                            <h4 className='modal-title'>Add Absence</h4>
                        </div>
                        <div className='modal-body'>
                            <AddForm
                                initial={this.state}
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                onClose={this.props.onClose}
                                members={this.props.members}
                                 />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    /*Get values to state and on view*/
    handleChange(event) {
        const field = event.target.name;
        const vacations = this.state.vacations;
        
        let dateErrors='' ;    
        if(field=='start' || field=='end'){
            dateErrors=this.isDate(event.target.value);
            vacations[field] = moment(event.target.value).format('YYYY,MM,DD');      
        }else{
            vacations[field] = event.target.value;
        }
        if(field=='end'){
            dateErrors=this.endStartCompare(this.state.vacations.start, event.target.value);
        }
        
        this.setState({
           vacations: vacations,
           errors:dateErrors   
        });
        dateErrors='' ;
    }
    
    isDate(inputDate){
        if(typeof inputDate.getMonth === 'function'|| inputDate =='' ){
            console.log('true')
            return "It's not a valite date"
        }
    }

    endStartCompare(inputStar, inputEnd){
        const start= moment(inputStar).unix();
        const end = moment(inputEnd).unix();
        if(end < start){
            return 'Your end date is before start date'
        }    
    }
    submitValidation(start,end,left){
        if(start!='' && end!='' && start<=end && left>=0){
            return true
        }
    }
    /*POST values*/
    handleSubmit(event) {
        /**
    * POST data to database
    * Currently to state
    */
        event.preventDefault();
        /**
         * The new vacation days will be referenced to the current user
         */
        let valid = this.submitValidation(this.state.vacations.start,this.state.vacations.end,this.state.leftDays)
        if(valid){
            console.log(this.state.vacations);
            console.log('EXAMPLE SERVER UPDATE REQUEST');
            this.props.update(this.state.vacations);
        }else{
            this.setState({
                errors: 'Your inputs are not correct'
            })
        }
    }
}
