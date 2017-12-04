import React from 'react';
import FormTable from './FormTable';
import Rules from './Rules';

const AddForm = (props) => {
    return (
        <div>
            <form action='/' onSubmit={props.onSubmit} >
                <div className='rules' id='table'>
                <FormTable data = {props} />
                </div>
                <div className='rules' id='rules'>
                    <Rules data = {props} />
                </div>
                <div className='modal-footer'>
                    <button className='btn-primary' type='submit' data-dismiss='modal' onClick={props.onSubmit} >
                        Save</button>
                    <button className='btn-cancel' data-dismiss='modal' onClick={props.onClose}>
                        Close</button>
                </div>
            </form>
        </div>
    );
   
}

export default AddForm;