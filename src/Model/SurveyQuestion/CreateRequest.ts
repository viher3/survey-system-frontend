import {SurveyQuestionOption} from "../SurveyQuestionOption/SurveyQuestionOption";

export interface CreateRequest
{
    surveyId: string,
    question: string,
    position: number,
    enabled: boolean,
    options: SurveyQuestionOption[]|null
}
