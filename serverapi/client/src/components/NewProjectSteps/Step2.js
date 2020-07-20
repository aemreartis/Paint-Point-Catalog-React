import React, {Component} from "react";

function Step2(props) {
    if (props.currentStep !== 2) {
        return null
    }
    return(
        <div className="form-group">
                <div className="modal-header ">
                    <h1 className="modal-title " style={{textAlign: 'left'}}>Tell us about your idea</h1>
                    <h3 className="modal-title mt-2" style={{fontFamily: 'Acumin Pro'}}> {props.currentStep} /7 </h3>
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
                        <div className="col-md-8  ">
                            <div className="form-group  ">
                                <h3>Abstract</h3>
                                <textarea className="form-control" style={{height: '6cm', width: '18.8cm'}}
                                          placeholder="Tips for utilising these elements ∙ Replace any image you want by simply draging your image into the existing image place. ∙ All lists are repeat grids. Before breaking repeat grid make sure to have close to final look. After breaking a repeat grid it cannot be regrouped again."
                                          defaultValue={""}/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Step2;