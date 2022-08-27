import React from 'react'
import {BrowserRouter as Router, useRoutes} from "react-router-dom"
import '../App.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {AppNavbar} from "./Shared/Navbar/AppNavbar";
import {AppRoutes} from "../Config/Router/Routes";

export const App: React.FC = () => {

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
