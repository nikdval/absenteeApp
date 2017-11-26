import React from "react";

export default class AddForm extends React.Component {
  
    render() {
        if(!this.props.show) {
            return null;
            console.log()
          }
        return (
            <div id="about">
                <div className="modal fade" id="addForm" role="dialog">
                    <div className="modal-dialog">
                        {/* Modal content-->*/}
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">About the Project</h4>
                            </div>
                            <div className="modal-body" id="aboutText1">


                            </div>
                            <div className="modal-header">
                                <h4 className="modal-title">Could we Follow Suit?</h4>
                            </div>
                            <div className="modal-body" id="aboutText2">

                                <button type="button" className="" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

AddForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    // children: PropTypes.node
  };