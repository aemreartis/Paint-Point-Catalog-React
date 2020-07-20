import React from 'react';
import './App.css';
import MainPage from "./components/MainPage";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import GeneralNavbar from "./components/GeneralNavbar";
import DetailPage from "./components/detailPage";


function App() {
    return (

        <Router>
            <div>
                <GeneralNavbar/>
                <Route path="//" component={MainPage}/>
                <Route path="/Home" component={MainPage}/>
                <Route path="/Discover" component={MainPage}/>
                <Route path="/ProjectDetail" component={DetailPage}/>
            </div>
        </Router>

    );
}

export default App;
