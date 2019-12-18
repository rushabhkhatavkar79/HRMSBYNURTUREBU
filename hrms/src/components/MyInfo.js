import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PersonalInfo from '../containers/PersonalInfo';
import ContactInfo from './ContactInfo';
import Header from './Header';

function MyInfo(props) {
    console.log(props)
    return (
        <div>
            <Header />
            <Router>
                <div>
                    <nav>
                        <div>
                            <Link to="/personalinfo" style={{ margin: 10 }}>
                                PersonalInfo
                            </Link>
                        </div>

                        <div>
                            <Link to="/contactinfo" style={{ margin: 10 }}>
                                ContactInfo
                            </Link>
                        </div>
                    </nav>

                    <div style={{ height: "calc(100vh - 18px)" }}>
                        <Switch>
                            <Route path="/personalinfo">
                                <PersonalInfo />
                            </Route>
                            <Route path="/contactinfo">
                                <ContactInfo />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
}


export default MyInfo;

