import React from "react";

function DetailPage() {
    return (

    <div className="container ">
        <nav className="navbar rounded navbar-expand-lg navbar-light sub-navbar my-2"
             style={{background: '#FFFFFF'}}>
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
                                    <input type="text" className="form-control" placeholder="Search"/>
                                </div>
                                <div>
                                </div>
                            </form>
                        </li>
                        <li className="nav-item">
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link passive" href="#"><img src="filter.png" style={{
                                height: '23px',
                                width: '25px'
                            }}/>Filter</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Collapsible content */}
        </nav>

        <div className="mt-3 px-5 py-5" style={{background: '#FFFFFF'}}>
            <div className="row">
                <div className="col-sm-5">
                    <div className="row">
                        <div className="col-9">
                            <img className="img-fluid h-100 w-100"
                                 src="http://main.inspirationfeed.netdna-cdn.com/wp-content/uploads/2011/04/4-longtail.jpg"/>
                        </div>
                        <div className="col-3 ">
                            <img className="img-fluid pb-2"
                                 src="http://main.inspirationfeed.netdna-cdn.com/wp-content/uploads/2011/04/4-longtail.jpg"/>
                            <img className="img-fluid py-3"
                                 src="http://main.inspirationfeed.netdna-cdn.com/wp-content/uploads/2011/04/4-longtail.jpg"/>
                            <img className="img-fluid pt-2"
                                 src="http://main.inspirationfeed.netdna-cdn.com/wp-content/uploads/2011/04/4-longtail.jpg"/>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5">
                    <h3>Price forecast<i className="fas fa-bookmark ml-3"/></h3>
                    <div className="row pl-3">
                        <p className="w-25">Industry </p>
                        <p className="pl-4">: <span className="pl-3">Energy
                    </span></p><p/>
                    </div>
                    <div className="row pl-3">
                        <p className="w-25">Tags </p>
                        <p className="pl-4 mr-2">:</p>
                        <span className="badge badge-pill badge-primary ml-2 mt-1"
                              style={{opacity: '0.9', background: '#9D9D9D', height: '0.5cm'}}>Automative</span>
                        <span className="badge badge-pill badge-primary ml-2 mt-1"
                              style={{opacity: '0.9', background: '#9D9D9D', height: '0.5cm'}}>Safety</span>
                        <span className="badge badge-pill badge-primary ml-2 mt-1"
                              style={{opacity: '0.9', background: '#9D9D9D', height: '0.5cm'}}>Autonomus</span>
                    </div>
                </div>
                <div className="col-sm-2 ">
                            <span className="badge badge-pill badge-primary mx-auto mt-1" style={{
                                opacity: '0.9',
                                background: '#B72A2A',
                                width: '2.7cm',
                                height: '0.5cm'
                            }}>UNSOLVED</span>
                    <div className="pt-4 pl-4">121<i className="fas fa-thumbs-up pl-1"/></div>
                    <div className="pt-1 pl-4">431<i className="fas fa-eye pl-1"/></div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 mt-4">
                    <h7>DOMAIN</h7>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo.</p>
                    <h7>PROBLEM</h7>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                        sit
                        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Neque porro quisquam est,nesciunt. Neque porro
                        quisquamnesciunt.
                        Neque porro quisquam</p>
                    <h7>IMPACT</h7>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in
                        voluptate velit esse cillum dolore eu fugiat nul</p>
                    <h7>STATE OF ART</h7>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising
                        pain
                        was born and I will give you a complete account of the system, and expound the actual
                        teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                </div>
            </div>
            <div className="row mb-4" style={{backgroundColor: '#FCFCFC', fontSize: '14px'}}>
                <div className="col-sm-2 mt-3 pl-3">
                    <img src="https://bakbakalım.com/wp-content/uploads/2019/05/Profil-resimleri-2019-2.jpg"
                         className="img-fluid align-middle" style={{borderRadius: '50%'}}/>
                </div>
                <div className="col-sm-8 mt-3 border-right">
                    <p className="mb-0">AUTHOR</p>
                    <p className="mb-0"> Name Surname</p>
                    <p className="mb-1">Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit
                        deterruisset,
                        id sed doctus
                        fuisset intellegam. Per case melius assentior ea. Et scaevola insolens eum. Ad vix
                        verear</p>
                </div>
                <div className="col-sm-2 mt-3">
                    <a>Follow me</a>
                    <a className="row my-2">
                        <i className=" fab fa-facebook-square fa-lg ml-3"/>
                        <i className=" fab fa-twitter-square fa-lg ml-2"/>
                        <i className=" fab fa-instagram  fa-lg ml-2 "/>
                    </a>
                    <a>My website</a>
                    <a>website.com</a>
                </div>
            </div>
            <div className="media mt-5">
                <div className="media-body px-3" style={{backgroundColor: '#FCFCFC'}}>
                    <div className="media-head ">
                        <span className="navbar-brand"><span className="dot"/></span>
                        <span className="navbar-text" style={{
                            fontWeight: 'bold',
                            fontSize: '22px',
                            paddingRight: '3cm'
                        }}> Comment</span>
                    </div>
                    <div className="row border-bottom pb-3"
                         style={{backgroundColor: '#FCFCFC', fontSize: '14px'}}>
                        <div className="col-sm-1 mt-3 pl-4 ">
                            <img
                                src="https://bakbakalım.com/wp-content/uploads/2019/05/Profil-resimleri-2019-2.jpg"
                                className="img-fluid align-middle" style={{borderRadius: '50%'}}/>
                        </div>
                        <div className="col-sm-8 mt-3">
                            <p>Name Surname</p>
                            <p>Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit deterruisset,
                                id sed doctus
                                fuisset intellegam. Per case melius assentior ea. Et scaevola insolens eum. Ad
                                vix
                                verear</p>
                        </div>
                    </div>
                    <div className="media">
                        <a className href="#">
                        </a>
                        <div className="media-body">
                            <div className="row pt-3" style={{backgroundColor: '#FCFCFC', fontSize: '14px'}}>
                                <div className="col-1 mt-3 pl-4 ml-5">
                                    <img
                                        src="https://bakbakalım.com/wp-content/uploads/2019/05/Profil-resimleri-2019-2.jpg"
                                        className="img-fluid align-middle" style={{borderRadius: '50%'}}/>
                                </div>
                                <div className="col-sm-8 mt-3 ">
                                    <p>Name Surname</p>
                                    <p>Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit
                                        deterruisset, id
                                        sed
                                        doctus
                                        fuisset intellegam. Per case melius assentior ea. Et scaevola insolens
                                        eum. Ad vix
                                        verear</p>
                                </div>
                            </div>
                            <div className="row pt-3" style={{backgroundColor: '#FCFCFC', fontSize: '14px'}}>
                                <div className="col-1 mt-3 pl-4 ml-5">
                                    <img
                                        src="https://bakbakalım.com/wp-content/uploads/2019/05/Profil-resimleri-2019-2.jpg"
                                        className="img-fluid align-middle" style={{borderRadius: '50%'}}/>
                                </div>
                                <div className="col-sm-8 mt-3 ">
                                    <p>Name Surname</p>
                                    <p>Lorem ipsum dolor sit amet, solum dictas vim cu, ne his hendrerit
                                        deterruisset, id
                                        sed
                                        doctus
                                        fuisset intellegam. Per case melius assentior ea. Et scaevola insolens
                                        eum. Ad vix
                                        verear</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default DetailPage;