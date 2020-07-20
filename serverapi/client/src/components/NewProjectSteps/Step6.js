import React, {Component} from "react";
import DragDrop from "./DragDrop"
class Step6 extends Component{

    render() {
    if ( this.props.currentStep !== 6) {
        return null
    }
    return(
        <div className="px-3 modal-content pb-5" style={{borderRadius: '0px !important', border: 'none'}}>
            <div className="modal-header ">
                <h1 className="modal-title " style={{textAlign: 'left'}}>Tell us about your idea</h1>
                <h3 className="modal-title mt-2" style={{fontFamily: 'Acumin Pro'}}>6/7 </h3>
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
                        <h3>Industries &amp; Tags</h3>
                        <div className="d-flex flex-wrap" id="tag-list">
                            <a className="border px-3 py-1 my-1 mr-2" onClick="this.remove()">#taggggg</a>
                            <a className="border px-3 py-1 my-1 mr-2" onClick="this.remove()">#taggggg</a>
                            <a className="border px-3 py-1 my-1 mr-2" onClick="this.remove()">#taggggg</a>
                            <a className="border px-3 py-1 my-1 mr-2" onClick="this.remove()">#taggggg</a>
                            <a className="border px-3 py-1 my-1 mr-2" onClick="this.remove()">#taggggg</a>
                            <a className="border px-3 py-1 my-1 mr-2" onClick="this.remove()">#taggggg</a>
                            <a className="border px-3 py-1 my-1 mr-2" onClick="this.remove()">#taggggg</a>
                            <a className="border px-3 py-1 my-1 mr-2" onClick="this.remove()">#taggggg</a>
                            <a className="border px-3 py-1 my-1 mr-2" onClick="this.remove()">#taggggg</a>
                            <a className="border px-3 py-1 my-1 mr-2" onClick="this.remove()">#taggggg</a>
                            <a className="border px-3 py-1 my-1 mr-2" onClick="this.remove()">#taggggg</a>
                            <a className="border px-3 py-1 my-1 mr-2" onClick="this.remove()">#taggggg</a>
                            <a className="border px-3 py-1 my-1 mr-2" onClick="this.remove()">#taggggg</a>
                            <a className="border px-3 py-1 my-1 mr-2" onClick="this.remove()">#taggggg</a>
                            <a className="border px-3 py-1 my-1 mr-2" onClick="this.remove()">#taggggg</a>
                            <a className="border px-3 py-1 my-1 mr-2" onClick="this.remove()">#taggggg</a>
                        </div>
                        <div className="row">
                            <div className="col mt-2">
                                <div className="dropdown">
                                    <input type="text" placeholder="Search.." onClick="myFunction()" id="myInput"
                                           onKeyUp="filterFunction();"/>
                                    <div id="myDropdown" className="dropdown-content">
                                        <a href="#about" onClick="addTag(this.text)">About</a>
                                        <a href="#base " onClick="addTag(this.text)">Base</a>
                                        <a href="#blog" onClick="addTag(this.text)">Blog</a>
                                        <a href="#contact" onClick="addTag(this.text)">Contact</a>
                                        <a href="#custom" onClick="addTag(this.text)">Custom</a>
                                        <a href="#support" onClick="addTag(this.text)">Support</a>
                                        <a href="#tools" onClick="addTag(this.text)">Tools</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

export default Step6;