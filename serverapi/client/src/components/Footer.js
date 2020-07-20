import React from "react";

function Footer() {
    return (

        <footer className="page-footer font-small py-4  " style={{background: '#FCFCFC'}}>
            {/* Footer Links */}
            <div className="container text-center text-md-left">
                {/* Grid row */}
                <div className="row h-40 px-5">
                    {/* Grid column */}
                    <div className="col-md-5 ">
                        {/* Content */}
                        <h5 className="font-weight-bold  mt-3 mb-4" style={{size: '22px'}}><span className="dot mr-2" />PPC by
                            Siemens
                        </h5>
                        <a className="font-weight-bold" style={{size: '16px'}}>A Travelers’ Blog</a>
                        <p style={{size: '15px'}}>Our main focus is to provide high quality, objective and informative
                            travelling
                            content from over the
                            world.</p>
                    </div>
                    {/* Grid column */}
                    <div className="col-md-5  ">
                        {/* Links */}
                        <ul className="list-unstyled float-right">
                            <li>
                                <h6 className="font-weight-bold text-uppercase float-right">Navigation</h6>
                            </li>
                            <li>
                                <a href="#!">Home</a>
                            </li>
                            <li>
                                <a href="#!">Discover</a>
                            </li>
                            <li>
                                <a href="#!">Upload</a>
                            </li>
                        </ul>
                    </div>
                    {/* Grid column */}
                    <div className="col-md-2  border-left ">
                        {/* Links */}
                        <ul className="list-unstyled">
                            <li>
                                <h6 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h6>
                            </li>
                            <li>
                                <a href="#!">About us</a>
                            </li>
                            <li>
                                <a href="#!">Contact us</a>
                            </li>
                            <li>
                                <a href="#!">Sitemap</a>
                            </li>
                            <li>
                                <a href="#!">Contribute</a>
                            </li>
                        </ul>
                    </div>
                    {/* Grid column */}
                </div>
                {/* Grid row */}
            </div>
            {/* Footer Links */}
        </footer>
    )
}

export default Footer;