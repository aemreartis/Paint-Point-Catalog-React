import React from "react";
import NewProject from "./NewProject";

function GeneralNavbar() {
    return (
        <div>
            <NewProject/>
            <nav className="navbar navbar-expand-lg  static-top navbarHead py-4">
                <div className="container">
                    <div className="navbar-header " style={{}}>
                        <span className="navbar-brand"><span className="dot"/></span>
                        <span className="navbar-text"
                              style={{fontWeight: 'bold', fontSize: '22px', paddingRight: '2cm'}}> PPC</span>
                        <a className="navbar-text border-left" style={{fontWeight: 'bold', paddingLeft: '1cm'}}> Paint
                            Point
                            Catalog</a>
                    </div>
                    <div className="collapse navbar-collapse ">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item px-4 ">
                                <a className="nav-link" style={{color: '#404040', paddingLeft: '10px'}}
                                   href="/Home">HOME</a>
                            </li>
                            <li className="nav-item px-4">
                                <a className="nav-link" href="/Discover"
                                   style={{color: '#404040', paddingLeft: '10px'}}>DISCOVER</a>
                            </li>
                            <li className="nav-item  ">
                                <button type="button" className="btn" data-toggle="modal" data-target="#myModal1"
                                        aria-expanded="false" aria-controls="ProjectPage1" style={{
                                    borderRadius: '35px',
                                    fontSize: '17px',
                                    color: '#f0f0f0',
                                    backgroundImage: 'linear-gradient(to bottom right, #3B79E0, #58C3DD)'
                                }}>
                                    Send
                                    Your Project
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default GeneralNavbar;