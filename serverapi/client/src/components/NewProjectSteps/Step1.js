import React, {Component} from "react";

function Step1(props) {
    if (props.currentStep !== 1) {
        return null
    }
    return(
        <div className="form-group">
            <div>
                <div className="modal-header ">
                    <h1 className="modal-title " style={{textAlign: 'left'}}>Tell us about your idea</h1>
                    <h3 className="modal-title mt-2" style={{fontFamily: 'Acumin Pro'}}><a>{props.currentStep}</a>/7 </h3>
                </div>
                <div className="modal-body pb-5">
                    <p>Tips for utilising these elements <br/>∙ Replace any image you want by simply draging your
                        image
                        into
                        the existing image place.<br/> ∙ All lists are repeat grids.
                        Before breaking repeat grid make sure to have close to final look. After breaking a repeat
                        grid
                        it cannot be regrouped again.</p>
                    <div className="row">
                        <div className="col-md-8 offset-md-2 py-5 ">
                            <div className="form-group  container">
                                <h3>Project Title</h3>
                                <textarea className="form-control " style={{height: '2cm', width: '12.4cm'}}
                                          defaultValue={""}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Step1;