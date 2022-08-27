import {useRoutes} from "react-router-dom";
import {Dashboard} from "../../Views/Dashboard/Dashboard";
import {SurveyListView} from "../../Views/Survey/List/SurveyListView";
import React from "react";

export const ROUTE_PATHS = {
    DASHBOARD : "/",
    SURVEY_LIST: "/surveys",
}

export const AppRoutes = () => {
    return useRoutes([
        {path: ROUTE_PATHS.DASHBOARD, element: <Dashboard/>},
        {path: ROUTE_PATHS.SURVEY_LIST, element: <SurveyListView/>},
    ])
};
