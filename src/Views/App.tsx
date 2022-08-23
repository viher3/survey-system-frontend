import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import {SurveyListView} from "./Survey/List/SurveyListView";

export const App: React.FC = () => {

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<SurveyListView />} />
                </Routes>
            </div>
        </Router>
    );

}
