import React, {useState, useEffect} from 'react'
import {Spinner, Table} from "react-bootstrap";
import {RestSurveyRepository} from "../../../Repositories/Survey/RestSurveyRepository";
import {Enabled} from "../../../Components/Enabled/Enabled";
import {TotalRecordsText} from "../../../Components/Table/TotalRecordsText";

interface Props {}

export const SurveyListView: React.FC<Props> = (props) => {

    const [surveys, setSurveys] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [totalItems, setTotalItems] = useState<number>(0)
    const [totalRecords, setTotalRecords] = useState<number>(0)

    const repository = new RestSurveyRepository()

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

    useEffect(() => {
        getSurveys()
    }, [])

    return (
        <>
            <h2>Suvey list</h2>

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Enabled</th>
                    <th>Created at</th>
                </tr>
                </thead>
                <tbody>
                {!surveys.length &&
                    <tr>
                        <td colSpan={4} className={"text-center my-4 py-4"}>
                            {loading && <Spinner animation="border"/>}
                        </td>
                    </tr>
                }

                {
                    surveys.map((survey: any, key: number) => {
                        return (
                            <tr key={key}>
                                <td>{survey.name}</td>
                                <td>{survey.description}</td>
                                <td>
                                    <Enabled enabled={survey.enabled} />
                                </td>
                                <td>{survey.createdAt}</td>
                            </tr>
                        );
                    })
                }

                </tbody>
            </Table>

            <TotalRecordsText totalItems={totalItems} totalRecords={totalRecords} />
        </>
    )

}
