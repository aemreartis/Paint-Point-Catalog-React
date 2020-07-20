import React, {Component} from "react";
import SubNavbar from "./SubNavbar";
import Footer from "./Footer";
import TodoApp from "./NewProjectSteps/Pagination"

class PageBody extends Component {

    render() {
        return (
            /*Page Body*/
            <div className="container " style={{paddingTop: '10px'}}>

                {/* Sub-Navbar Content */}
                <SubNavbar/>

                {/* Page Cards */}
                <div className="card-pages " style={{paddingTop: '10px'}}>
                        <TodoApp />
                </div>
                {/* Footer */}
                <Footer/>
            </div>
        )
    }
}

export default PageBody;