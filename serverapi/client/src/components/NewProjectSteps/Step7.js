import React, {Component} from "react";
import DragDrop from "./DragDrop";

function Step7(props) {
    if (props.currentStep !== 7) {
        return null
    }
    return(
        <div className="px-3 modal-content pb-5" style={{borderRadius: '0px !important', border: 'none'}}>
            <div className="modal-header ">
                <h1 className="modal-title " style={{textAlign: 'left'}}>Tell us about your idea</h1>
                <h3 className="modal-title mt-2" style={{fontFamily: 'Acumin Pro'}}>7/7 </h3>
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
                    <div className="col-md-12 ">
                        <div className="form-group  container">
                            <h3>Media</h3>
                            <div className="row mt-4">
                                <div className="col-6 " >
                                    <h4>Images</h4>
                                    <DragDrop className="border border-primary"/>
                                </div>
                                <div className="col-6">
                                    <h4 >Attachments</h4>
                                    <DragDrop className="border border-primary"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Step7;