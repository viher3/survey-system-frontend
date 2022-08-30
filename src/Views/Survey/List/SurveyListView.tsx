import React, {useState, useEffect} from 'react'
import {Button, Col, Spinner, Table} from "react-bootstrap";
import {RestSurveyRepository} from "../../../Repositories/Survey/RestSurveyRepository";
import {Enabled} from "../../../Components/Enabled/Enabled";
import Row from "react-bootstrap/Row";
import {SimpleTable} from "../../../Components/Table/SimpleTable";
import {useNavigate} from "react-router-dom"
import {ROUTE_PATHS} from "../../../Config/Router/Routes";

interface Props {}

export const SurveyListView: React.FC<Props> = (props) => {

    const [surveys, setSurveys] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [totalItems, setTotalItems] = useState<number>(0)
    const [totalRecords, setTotalRecords] = useState<number>(0)

    const repository = new RestSurveyRepository()
    const navigate = useNavigate()

    const getSurveys = () => {
        repository
            .list()
            .then((response) => {
                setSurveys(response.items)
                setTotalItems(response.totalItems)
                setTotalRecords(response.totalRecords)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }

    const showDetail = (survey: any) => {
        navigate(ROUTE_PATHS.SURVEY_DETAIL.replace(':id', survey.id))
    }

    useEffect(() => getSurveys(), [])

    return (
        <>
            <Row className={"mb-4"}>
                <Col>
                    <h2>Survey list</h2>
                </Col>
                <Col className={"d-flex flex-row-reverse"}>
                    <Button disabled className={"text-uppercase"}>Create</Button>
                </Col>
            </Row>

            <SimpleTable
                headers={["Name", "Description", "Enabled", "Total fulfillment", "Created at", ""]}
                loading={loading}
                totalItems={totalItems}
                totalRecords={totalRecords}
            >
                {
                    surveys.map((survey: any, key: number) => {
                        return (
                            <tr key={key}>
                                <td onClick={() => showDetail(survey)}>
                                    {survey.name}
                                </td>
                                <td onClick={() => showDetail(survey)}>
                                    {survey.description}
                                </td>
                                <td onClick={() => showDetail(survey)}>
                                    <Enabled enabled={survey.enabled} />
                                </td>
                                <td onClick={() => showDetail(survey)}>
                                    {survey.totalFulfillment}
                                </td>
                                <td onClick={() => showDetail(survey)}>
                                    {survey.createdAt}
                                </td>
                                <td className={"text-primary text-center"}>
                                    View replies
                                </td>
                            </tr>
                        );
                    })
                }
            </SimpleTable>
        </>
    )
}
