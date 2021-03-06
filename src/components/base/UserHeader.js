import React from 'react';

const UserHeader = (props) => {
    return (
        <div className=' row ' >
            <div className='col-md-1'></div>
            <div className='col-md-10 user-header'>
                <div className='col-md-6 col-sm-12'>
                    <h2 className='purple' > {props.user.name}</h2>
                    <p><span className='box-small' ></span><small>Vacation days left : {props.user.leftDays}</small></p>
                    <p> <span className ='dot'></span><small>Public Vacation</small> </p>
                </div>
                <div className='col-md-6 col-sm-12'>
                    <h4 className='text-center'>Select Department</h4>
                    <div className='col-md-12 text-center'>
                        <div className='filter-departments'>
                            <button type='button' className='btn-filter blue '></button>
                            <button type='button' className='btn-filter green '></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-1'></div>
        </div>
    );
}

export default UserHeader;