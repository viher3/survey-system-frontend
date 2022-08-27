import React from 'react'
import {BrowserRouter as Router, useRoutes} from "react-router-dom"
import {SurveyListView} from "./Survey/List/SurveyListView";
import '../App.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {AppNavbar} from "./Shared/AppNavbar";
import {Dashboard} from "./Dashboard/Dashboard";

export const App: React.FC = () => {

    const AppRoutes = () => {
        return useRoutes([
            {path: "/", element: <Dashboard/>},
            {path: "/surveys", element: <SurveyListView/>},
            // ...
        ])
    };

    return (

        <Container fluid={true}>
            <Router>
                <AppNavbar/>
                <Row className={"container-row"}>
                    <div className={"py-4 px-4"}>
                        <AppRoutes/>
                    </div>
                </Row>
            </Router>
        </Container>
    );

}
