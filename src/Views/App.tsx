import React from 'react'
import {Menu, MenuItem} from '@blueprintjs/core';
import { BrowserRouter as Router, Route, Link, Routes, useRoutes } from "react-router-dom"
import {SurveyListView} from "./Survey/List/SurveyListView";
import '../App.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const App: React.FC = () => {

    const AppRoutes = () => {
        return useRoutes([
            { path: "/", element: <SurveyListView /> },
            // ...
        ])
    };

    return (

        <Container>
            <Row>
                <Col sm={4}>
                    <Menu>
                        <MenuItem icon="new-text-box" text="New text box" />
                        <MenuItem icon="new-object" text="New object" />
                        <MenuItem icon="new-link" text="New link" />
                    </Menu>
                        {/*<Link to="/">Home</Link>*/}
                </Col>
                <Col>
                    <Router>
                        <AppRoutes />
                    </Router>
                </Col>

            </Row>

        </Container>
    );

}
