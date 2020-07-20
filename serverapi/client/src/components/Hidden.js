import React from "react";

function Hidden(props) {
    return (

        <div>
            {/* HIDDEN SUMMARY PAGE*/}
            <div className="modal fade  " id={"bd-example-modal-lg"+ props.SummaryData.id} tabIndex={-1} role="dialog"
                 aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content px-2 py-2" style={{borderRadius: '0px !important', border: 'none'}}>
                        <div className="modal-body ">
                            <div className="row">
                                <div className="col-sm-5">
                                    <div className="row">
                                        <div className="col-9">
                                            <img className="img-fluid h-100 w-100"
                                                 src={props.SummaryData.img_url1}/>
                                        </div>
                                        <div className="col-3 ">
                                            <img className="img-fluid pb-2"
                                                 src={props.SummaryData.img_url2}/>
                                            <img className="img-fluid py-3"
                                                 src={props.SummaryData.img_url3}/>
                                            <img className="img-fluid pt-2"
                                                 src={props.SummaryData.img_url4}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <h3>{props.SummaryData.project_header}<i className="fas fa-bookmark ml-3"/></h3>
                                    <div className="row pl-3">
                                        <p className="w-25">Industry </p>
                                        <p className="pl-4">: <span className="pl-3">{props.SummaryData.project_industry}
                        </span></p><p/>
                                    </div>
                                    <div className="row pl-3">
                                        <p className="w-25">Tags </p>
                                        <p className="pl-4 mr-2">:</p>
                                        <span className="badge badge-pill badge-primary ml-2 mt-1" style={{
                                            opacity: '0.9',
                                            background: '#9D9D9D',
                                            height: '0.5cm'
                                        }}>{props.SummaryData.project_tags.tag1}</span>
                                        <span className="badge badge-pill badge-primary ml-2 mt-1" style={{
                                            opacity: '0.9',
                                            background: '#9D9D9D',
                                            height: '0.5cm'
                                        }}>{props.SummaryData.project_tags.tag2}</span>
                                        <span className="badge badge-pill badge-primary ml-2 mt-1" style={{
                                            opacity: '0.9',
                                            background: '#9D9D9D',
                                            height: '0.5cm'
                                        }}>{props.SummaryData.project_tags.tag3}</span>
                                    </div>
                                </div>
                                <div className="col-sm-2 ">
                                    <span className="badge badge-pill badge-primary mx-auto mt-1" style={{
                                        opacity: '0.9',
                                        background: '#B72A2A',
                                        width: '2.7cm',
                                        height: '0.5cm'
                                    }}>{props.SummaryData.project_status}</span>
                                    <div className="pt-4 pl-4">{props.SummaryData.project_like}<i className="fas fa-thumbs-up pl-1"/></div>
                                    <div className="pt-1 pl-4">{props.SummaryData.project_seen}<i className="fas fa-eye pl-1"/></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 mt-4">
                                    <h7>DOMAIN</h7>
                                    <p>{props.SummaryData.project_domain}</p>
                                    <h7>PROBLEM</h7>
                                    <p>{props.SummaryData.project_problem}</p>
                                    <h7>IMPACT</h7>
                                    <p>{props.SummaryData.project_impact}</p>
                                    <h7>STATE OF ART</h7>
                                    <p>{props.SummaryData.project_stateofart}</p>
                                    <a href="/ProjectDetail">
                                        <span className="badge badge-pill badge-primary mx-auto mt-1"
                                              style={{background: '#3C7CDF', width: '2.9cm', height: '0.5cm'}}>GO TO DETAILS</span>
                                    </a>
                                </div>
                            </div>
                            <div className="row mb-4" style={{backgroundColor: '#FCFCFC', fontSize: '14px'}}>
                                <div className="col-sm-2 mt-3 pl-3">
                                    <img className="img-fluid align-middle" src = {props.SummaryData.img_url5}  style={{borderRadius: '50%'}}/>
                                </div>
                                <div className="col-sm-8 mt-3 border-right">
                                    <p className="mb-0">AUTHOR </p>
                                    <p className="mb-0"> {props.SummaryData.project_author}</p>
                                    <p className="mb-1">{props.SummaryData.project_authorcomment}</p>
                                </div>
                                <div className="col-sm-2 mt-3">
                                    <a>Follow me</a>
                                    <a className="row my-2">
                                        <a href={props.SummaryData.author_facebook}><i className=" fab fa-facebook-square fa-lg ml-3"/></a>
                                        <a href={props.SummaryData.author_twitter}><i className=" fab fa-twitter-square fa-lg ml-2"/></a>
                                        <a href={props.SummaryData.author_instagram}><i className=" fab fa-instagram  fa-lg ml-2 "/></a>
                                    </a>
                                    <a className="row ml-1">My website</a>
                                    <a className="row ml-1">website.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* HIDDEN SUMMARY PAGE*/}


        </div>
    )
}

export default Hidden;