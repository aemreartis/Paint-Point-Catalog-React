import React from "react";
import Step1 from "./NewProjectSteps/Step1";
import Step2 from "./NewProjectSteps/Step2";
import Step3 from "./NewProjectSteps/Step3";
import Step4 from "./NewProjectSteps/Step4";
import Step5 from "./NewProjectSteps/Step5";
import Step6 from "./NewProjectSteps/Step6";
import Step7 from "./NewProjectSteps/Step7";
import Step8 from "./NewProjectSteps/Step8";

class MasterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            email: '',
            username: '',
            password: '',
        }
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const {email, username, password} = this.state
        alert(`Your registration detail: \n 
           Email: ${email} \n 
           Username: ${username} \n
           Password: ${password}`)
    }

    _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 7 ? 8 : currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }


    previousButton() {
        let currentStep = this.state.currentStep;
        if (currentStep !== 1) {
            return (
                <button
                    className="btn btn-secondary"
                    type="button" onClick={this._prev}>
                    Previous
                </button>
            )
        }
        return null;
    }

    nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep < 8) {
            return (
                <button
                    className="btn btn-primary btn-sm float-right px-5"
                    style={{borderRadius: '35px'}}
                    type="button" onClick={this._next}>
                    Next
                </button>
            )
        }
        return null;
    }

    render() {
        return (
            <React.Fragment>
                <div id="Publish Form" className="supreme-container">
                    <div className="modal fade " id="myModal1" tabIndex={-1} role="dialog"
                         aria-labelledby="myModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg ">
                            <div className="px-3 modal-content pb-5"
                                 style={{borderRadius: '0px !important', border: 'none'}}>


                                <form onSubmit={this.handleSubmit}>

                                    <Step1
                                        currentStep={this.state.currentStep}
                                        handleChange={this.handleChange}/>
                                    <Step2
                                        currentStep={this.state.currentStep}
                                        handleChange={this.handleChange}/>
                                    <Step3
                                        currentStep={this.state.currentStep}
                                        handleChange={this.handleChange}
                                    />
                                    <Step4
                                        currentStep={this.state.currentStep}
                                        handleChange={this.handleChange}
                                    />
                                    <Step5
                                        currentStep={this.state.currentStep}
                                        handleChange={this.handleChange}
                                    />
                                    <Step6
                                        currentStep={this.state.currentStep}
                                        handleChange={this.handleChange}
                                    />
                                    <Step7
                                        currentStep={this.state.currentStep}
                                        handleChange={this.handleChange}
                                    />

                                    <Step8
                                        currentStep={this.state.currentStep}
                                        handleChange={this.handleChange}
                                    />

                                    {this.previousButton()}
                                    {this.nextButton()}

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MasterForm;