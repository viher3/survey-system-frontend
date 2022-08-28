import React, {useEffect, useState} from "react";
import {OptionTypeSelect} from "./OptionTypeSelect";
import {EnabledSelect} from "../Enabled/EnabledSelect";
import {Button, Row, Col, Table} from "react-bootstrap";
import {SurveyQuestionOption} from "../../Model/SurveyQuestionOption/SurveyQuestionOption";
import {Enabled} from "../Enabled/Enabled";

interface Props {
    onChange: (options:SurveyQuestionOption[]) => void
}

export const AddQuestionForm: React.FC<Props> = (props) => {

    const [options, setOptions] = useState<SurveyQuestionOption[]>([])
    const [type, setType] = useState<string>('')
    const [enabled, setEnabled] = useState<boolean>(true)
    const [position, setPosition] = useState<number>(0)
    const [values, setValues] = useState<string[]>([])
    const [valueInput, setValueInput] = useState<string>('')

    useEffect(() => {
        props.onChange(options)
    }, [options])

    const addOptionValue = (): void => {
        if (!valueInput) return

        const newValues = values
        values.push(valueInput)
        setValues(newValues)
        setValueInput('')
    }

    const addOption = () => {
        const newOptions = options
        newOptions.push({
            type: type,
            enabled: enabled,
            position: position,
            values: values
        })
        setOptions(newOptions)
        setPosition(position + 1)
        setValues([])
    }

    return (
        <div>
            <Row>
                <Col>
                    {options.length} options
                    <hr/>
                    <Table bordered>
                        <thead>
                        <tr>
                            <th>Type</th>
                            <th>Enabled</th>
                            <th>Position</th>
                            <th>Values</th>
                        </tr>
                        </thead>
                        <tbody>

                        {options.map((option: SurveyQuestionOption, key: number) => {
                            return (
                                <tr key={key}>
                                    <td>
                                        {option.type.toUpperCase()}
                                    </td>
                                    <td>
                                        <Enabled enabled={option.enabled}/>
                                    </td>
                                    <td>
                                        {option.position}
                                    </td>
                                    <td>
                                        <ul>
                                            {option.values.map((value: string, key: number) => {
                                                return (
                                                    <li key={key}>{value}</li>
                                                )
                                            })}

                                        </ul>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </Table>

                </Col>
                <Col>
                    <OptionTypeSelect
                        value={type ?? ''}
                        onChange={(e) => setType(e.target.value)}/>
                    <Row>
                        <Col>
                            <EnabledSelect onChange={(value: boolean) => setEnabled(value)}/>
                        </Col>
                        <Col className={""}>
                            <div className={"form-group mt-4"}>
                                <label htmlFor={"position"} className={"form-label"}>Position</label>
                                <input
                                    type={"number"}
                                    id={"position"}
                                    className={"form-control"}
                                    onChange={(e) => setPosition(parseInt(e.target.value))}
                                    value={position}
                                ></input>
                            </div>
                        </Col>
                    </Row>

                    <div className={"form-group"}>
                        <label htmlFor={"value"} className={"form-label"}>Values</label>
                        <Row>
                            <Col sm={8}>
                                <input
                                    type={"text"}
                                    id={"value"}
                                    className={"form-control"}
                                    onChange={(e) => setValueInput(e.target.value ?? '')}
                                    value={valueInput}
                                ></input>

                                <ul className={"mt-4"}>
                                    {values.map((value: string, key: number) => {
                                        return (<li key={key}>{value}</li>)
                                    })}
                                </ul>

                            </Col>
                            <Col sm={4}>
                                <Button variant={"dark"} onClick={() => addOptionValue()}>Add value</Button>
                            </Col>
                        </Row>
                        <Row className={"mt-4"}>
                            <Button className={"w-50 mx-auto"} onClick={addOption}>Add option</Button>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
