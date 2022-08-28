import React from 'react'
import '../App.css'

import Container from 'react-bootstrap/Container';
import {AppNavbar} from "./Shared/Navbar/AppNavbar";
import {AppRoutes} from "../Config/Router/Routes";
import {BrowserRouter as Router} from "react-router-dom"

export const App: React.FC = () => {
    return (
        <Router>
            <AppNavbar/>
            <Container>
                <div className={"py-4"}>
                    <AppRoutes/>
                </div>
            </Container>
        </Router>
    );

}
