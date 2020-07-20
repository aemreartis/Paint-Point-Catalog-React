import React from "react";
import Hidden from "./Hidden";
import SummaryData from "../Data/ProjectSummaries"

class PageCard extends React.Component {
    render() {
        return (
            <div className="col-sm-4 d-flex align-items-stretch">
                {SummaryData.map((PostDetail, index) => {
                    if (parseInt(PostDetail.id) === parseInt(this.props.cardInfo.id))
                        return <Hidden SummaryData={PostDetail}/>;
                    else
                        return <div></div>;
                })}

                <div className="card  mb-4 shadow-sm" data-toggle="modal"
                     data-target={"#bd-example-modal-lg" + this.props.cardInfo.id}>
                    <img className="card-img-top" src={this.props.cardInfo.img_url} data-holder-rendered="true"
                         style={{height: '225px', width: '100%', display: 'block'}}/>
                    <div className="card-img-overlay ">
                        <span className=" py-2 badge badge-pill float-right  " style={{
                            width: '3cm',
                            background: '#3F8850',
                            opacity: '0.8'
                        }}> {this.props.cardInfo.img_overlay} </span>
                    </div>
                    <div className="card-body px-5 flex-column d-flex ">
                        <h5 className="pt-4 pb-2" style={{fontWeight: 'bold'}}>{this.props.cardInfo.card_header}</h5>
                        <p className="card-text wrap-text ">{this.props.cardInfo.card_body_text}</p>
                        <div className="d-flex  justify-content-between  align-items-center mt-auto ">
                            <small className="text-muted ">{this.props.cardInfo.card_writer}</small>
                            <small className="text-muted">{this.props.cardInfo.card_category}</small>
                        </div>
                    </div>
                    <div className="card-footer text-muted ">
                        <div className=" pl-4 row ">
                            <div className="col-6">
                                <i className="far fa-clock "/>
                                <a className="ml-2">{this.props.cardInfo.card_time}</a>
                            </div>
                            <div className="col-6">
                                <i className="fas fa-thumbs-up">{this.props.cardInfo.card_like}</i>
                                <i className="fas fa-eye ml-2">{this.props.cardInfo.card_seen}</i>
                                <i className="far fa-bookmark ml-2"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageCard;