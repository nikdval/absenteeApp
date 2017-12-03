import React from "react";

const UserHeader = (props) => {
    return (
        <div className=" row " >
        <div className="col-md-1"></div>
        <div className="col-md-10 user-header">
        <h2 className="text-center" > {props.user.name}</h2>
            <div className="col-md-6">
                <p>Next Vacation props.vacation</p>
                <p>Days left : {props.user.leftDays}</p>
            </div>
            <div className="col-md-6">
                <p className="text-center">Select Department</p>
                <div className="col-md-12 text-center">
    		<button type="button" className="btn  .navbar-right">z2</button>
			<button type="button" className="btn  .navbar-right">z3</button>
    	</div>
            </div>
            </div>
            <div className="col-md-1"></div>
        </div>
    );
}

export default UserHeader;