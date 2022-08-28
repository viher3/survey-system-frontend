import React, {useState, useEffect} from 'react'
import {Button, Col, Spinner, Table} from "react-bootstrap";
import {RestSurveyRepository} from "../../../Repositories/Survey/RestSurveyRepository";
import {Enabled} from "../../../Components/Enabled/Enabled";
import {Link, useNavigate} from "react-router-dom"
import {ROUTE_PATHS} from "../../../Config/Router/Routes";
import {LoadingSpinner} from "../../../Components/Loading/LoadingSpinner";
import {useParams} from 'react-router-dom'
import {RestSurveyQuestionRepository} from "../../../Repositories/SurveyQuestion/RestSurveyQuestionRepository";
import {faPencil, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Row from "react-bootstrap/Row";

interface Props {
}

export const SurveyListDetail: React.FC<Props> = (props) => {

    const {id} = useParams()

    const [survey, setSurvey] = useState<any>({})
    const [surveyQuestions, setSurveyQuestions] = useState<any>({})
    const [loading, setLoading] = useState<boolean>(true)
    const [loadingQuestions, setLoadingQuestions] = useState<boolean>(true)

    const repository = new RestSurveyRepository()
    const repositoryQuestion = new RestSurveyQuestionRepository()
    const navigate = useNavigate()

    const surveyFields = [
        'id', 'name', 'description', 'enabled', 'createdAt', 'updatedAt'
    ]

    const getSurvey = () => {
        if (!id) return

        repository
            .detail(id.toString())
            .then((response) => {
                setSurvey(response)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }

    const getSurveyQuestions = () => {
        if (!id) return

        repositoryQuestion
            .list(id)
            .then((response) => {
                console.log(response)
                setSurveyQuestions(response)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoadingQuestions(false))
    }

    useEffect(() => {
        getSurvey()
        getSurveyQuestions()
    }, [])

    return (
        <>
            {loading && <LoadingSpinner/>}

            {survey &&
                <>
                    <h2>{survey.name}</h2>

                    <Table striped bordered hover>
                        <tbody>
                        {surveyFields.map((field: any, key: number) => {
                            return <tr key={key}>
                                <td>
                                    <strong>{field}</strong>
                                </td>
                                <td>
                                    {field === 'enabled' ? <Enabled enabled={survey[field]}/> : survey[field]}
                                </td>
                            </tr>
                        })}
                        </tbody>
                    </Table>

                    <Row className={"mb-4"}>
                        <Col>
                            <h2>Questions</h2>
                        </Col>
                        <Col className={"d-flex flex-row-reverse"}>
                            <Button className={"text-uppercase"}>Add question</Button>
                        </Col>
                    </Row>

                    {loadingQuestions && <LoadingSpinner/>}

                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Question</th>
                            <th>Options</th>
                            <th>Enabled</th>
                            <th>Updated at</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {surveyQuestions.items?.map((question: any, key: number) => {
                            return <tr key={key}>
                                <td>
                                    {question.question}
                                </td>
                                <td>
                                    {Object.keys(question.options).length}
                                </td>
                                <td>
                                    <Enabled enabled={question.enabled} />
                                </td>
                                <td>
                                    {question.updated}
                                </td>
                                <td>
                                    <Link to={"/"}>
                                        <FontAwesomeIcon icon={faPencil} color={"black"} />
                                    </Link>
                                </td>
                            </tr>
                        })}
                        </tbody>
                    </Table>

                </>
            }
        </>
    )
}
