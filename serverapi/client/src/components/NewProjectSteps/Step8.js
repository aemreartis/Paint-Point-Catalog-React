import React, {Component} from "react";

function Step8(props) {
    if (props.currentStep !== 8) {
        return null
    }
    return(
        <React.Fragment>
            <div className="form-group">
                <div className="modal-body pt-5 mt-5" style={{textAlign: "center"}}>
                    <i className="fas fa-check fa-4x"></i>
                    <h1 className="mb-5">Congratulations !</h1>
                    <h3 className="my-2">You have posted a new project.</h3>
                    <h4>Click here to go your project page</h4>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Step8;