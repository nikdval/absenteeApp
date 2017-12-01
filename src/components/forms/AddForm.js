import React from "react";
import moment from 'moment';
import FormTable from './FormTable';
import Rules from './Rules';

const AddForm = (props) => {

    //console.log(startD);
    return (
        <div>
            <form action="/" onSubmit={props.onSubmit} >
                <div className="modal-body" id="table">
                <FormTable data = {props} />
                </div>
                <div className="modal-body" id="rules">
                    <Rules data = {props} />
                </div>
                <div className="modal-footer">
                    <button className="btn-primary" type="submit" data-dismiss="modal" onClick={props.onSubmit} >
                        Save</button>
                    <button data-dismiss="modal" onClick={props.onClose}>
                        Close</button>
                </div>
            </form>
        </div>
    );
}

export default AddForm;