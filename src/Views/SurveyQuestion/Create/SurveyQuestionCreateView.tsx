import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {RestSurveyRepository} from "../../../Repositories/Survey/RestSurveyRepository";
import {LoadingSpinner} from "../../../Components/Loading/LoadingSpinner";
import {AddQuestionForm} from "../../../Components/SurveyQuestionOption/AddOptionForm";
import {EnabledSelect} from "../../../Components/Enabled/EnabledSelect";
import {Button, Col, Row} from "react-bootstrap";
import {ROUTE_PATHS} from "../../../Config/Router/Routes";

interface Props {

}

export const SurveyQuestionCreateView: React.FC<Props> = (props) => {

    const {id} = useParams()

    const [survey, setSurvey] = useState<any>({})
    const [loading, setLoading] = useState<boolean>(true)

    const navigate = useNavigate()

    const getSurvey = () => {
        if (!id) return

        (new RestSurveyRepository())
            .detail(id.toString())
            .then((response) => {
                setSurvey(response)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        getSurvey()
    }, [])

    return (
        <>
            <Row>
                <Col>
                    <h2>Create Survey Question</h2>
                </Col>
                <Col className={"d-flex flex-row-reverse"}>
                    <Button
                        onClick={() => navigate(ROUTE_PATHS.SURVEY_DETAIL.replace(':id', survey.id))}
                        variant={"light"}>Go back</Button>
                </Col>
            </Row>

            <h4 className={"text-muted"}>{survey.name}</h4>

            {loading && <LoadingSpinner/>}

            <div className={"form-group my-4"}>
                <label htmlFor={"question"} className={"form-label"}>Question</label>
                <textarea id={"question"} className={"form-control"}></textarea>
            </div>

            <Row>
                <Col>
                    <div className={"form-group my-4"}>
                        <label htmlFor={"position"} className={"form-label"}>Position</label>
                        <input type={"number"} id={"position"} className={"form-control"}></input>
                    </div>
                </Col>
                <Col>
                    <EnabledSelect onChange={() => console.log} />
                </Col>
            </Row>

            <h5 className={"mt-4"}>Options</h5>
            <AddQuestionForm
                onChange={() => console.log('change')}
            />

        </>
    )
}
