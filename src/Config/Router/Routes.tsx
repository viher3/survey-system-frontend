import {useRoutes} from "react-router-dom";
import {Dashboard} from "../../Views/Dashboard/Dashboard";
import {SurveyListView} from "../../Views/Survey/List/SurveyListView";
import React from "react";
import {SurveyListDetail} from "../../Views/Survey/List/SurveyListDetail";
import {SurveyQuestionCreateView} from "../../Views/SurveyQuestion/Create/SurveyQuestionCreateView";

export const ROUTE_PATHS = {
    DASHBOARD : "/",
    SURVEY_LIST: "/surveys",
    SURVEY_DETAIL: "/survey/:id/detail",
    SURVEY_QUESTION_CREATE: "/survey/:id/questions/create",
}

export const AppRoutes = () => {
    return useRoutes([
        {path: ROUTE_PATHS.DASHBOARD, element: <Dashboard/>},
        {path: ROUTE_PATHS.SURVEY_LIST, element: <SurveyListView/>},
        {path: ROUTE_PATHS.SURVEY_DETAIL, element: <SurveyListDetail/>},
        {path: ROUTE_PATHS.SURVEY_DETAIL, element: <SurveyListDetail/>},
        {path: ROUTE_PATHS.SURVEY_QUESTION_CREATE, element: <SurveyQuestionCreateView/>},
    ])
};
