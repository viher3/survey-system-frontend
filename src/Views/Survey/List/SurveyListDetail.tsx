import React, {useState, useEffect} from 'react'
import {Button, Col, Spinner, Table} from "react-bootstrap";
import {RestSurveyRepository} from "../../../Repositories/Survey/RestSurveyRepository";
import {Enabled} from "../../../Components/Enabled/Enabled";
import Row from "react-bootstrap/Row";
import {SimpleTable} from "../../../Components/Table/SimpleTable";
import {useNavigate} from "react-router-dom"
import {ROUTE_PATHS} from "../../../Config/Router/Routes";
import {LoadingSpinner} from "../../../Components/Loading/LoadingSpinner";
import {useParams} from 'react-router-dom'

interface Props {
}

export const SurveyListDetail: React.FC<Props> = (props) => {

    const {id} = useParams()

    const [survey, setSurvey] = useState<any>({})
    const [loading, setLoading] = useState<boolean>(true)

    const repository = new RestSurveyRepository()
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

    useEffect(() => getSurvey(), [])

    return (
        <>
            {loading && <LoadingSpinner/>}

            {survey &&
                <>
                    <h2>{survey.name}</h2>

                    <Table striped bordered hover>
                        <tbody>
                        {surveyFields.map((field:any, key:number) => {
                            return <tr key={key}>
                                        <td>
                                            <strong>{field}</strong>
                                        </td>
                                        <td>
                                            {field==='enabled' ? <Enabled enabled={survey[field]}/> : survey[field]}
                                        </td>
                                   </tr>
                        })}
                        </tbody>
                    </Table>

                    <h2>Questions</h2>


                </>
            }
        </>
    )
}
