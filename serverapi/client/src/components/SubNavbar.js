import React from "react";

function SubNavbar() {
    return (
        <nav className="navbar rounded navbar-expand-lg navbar-light sub-navbar">
            {/* Collapsible content */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* Links */}
                <ul className="navbar-nav mr-auto ">
                    <li className="nav-item active pr-5 ">
                        <a className="nav-link" href="#">All <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item pl-5">
                        <a className="nav-link" href="#">Automotive</a>
                    </li>
                    <li className="nav-item px-3">
                        <a className="nav-link" href="#">Manufacturing</a>
                    </li>
                    <li className="nav-item px-3">
                        <a className="nav-link" href="#">Healthcare</a>
                    </li>
                </ul>
                <div className="border-left pl-5">
                    {/* Search form */}
                    <ul className="navbar-nav mr-auto border-left ">
                        <li className="nav-item ">
                            <form className="form-inline ">
                                <div className="form-group has-search">
                                    <input type="text" className="form-control" placeholder="Search" />
                                </div>
                                <div>
                                </div>
                            </form>
                        </li>
                        <li className="nav-item">
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link passive" href="#"><img src="filter.png" style={{height: '23px', width: '25px'}} />Filter</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Collapsible content */}
        </nav>
    )
}

export default SubNavbar;