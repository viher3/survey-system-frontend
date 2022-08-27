import React from 'react'
import '../App.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {AppNavbar} from "./Shared/Navbar/AppNavbar";
import {AppRoutes} from "../Config/Router/Routes";
import {BrowserRouter as Router} from "react-router-dom"

export const App: React.FC = () => {
    return (
        <Router>
            <Container fluid={true} className={"px-0"}>
                <AppNavbar/>
                <Row className={"container-row"}>
                    <div className={"py-4 px-4"}>
                        <AppRoutes/>
                    </div>
                </Row>
            </Container>
        </Router>
    );

}
