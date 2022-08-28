import React, {useState} from "react";
import {OptionTypeSelect} from "./OptionTypeSelect";
import {EnabledSelect} from "../Enabled/EnabledSelect";
import {Button, Row, Col} from "react-bootstrap";

interface Props {
    onChange: () => void
}

export const AddQuestionForm: React.FC<Props> = (props) => {

    const [options, setOptions] = useState<any[]>([])
    const [option, setOption] = useState<any[]>([])

    return(
        <div>
            <Row>
                <Col>
                    {options.length} options
                </Col>
                <Col>
                    <OptionTypeSelect onChange={() => console.log(1)} />

                    <Row>
                        <Col>
                            <EnabledSelect onChange={() => console.log(2)} />
                        </Col>
                        <Col className={""}>
                            <div className={"form-group mt-4"}>
                                <label htmlFor={"position"} className={"form-label"}>Position</label>
                                <input type={"number"} id={"position"} className={"form-control"}></input>
                            </div>
                        </Col>
                    </Row>

                    <div className={"form-group"}>
                        <label htmlFor={"value"} className={"form-label"}>Values</label>
                        <Row>
                            <Col sm={10}>
                                <input type={"text"} id={"value"} className={"form-control"}></input>
                            </Col>
                            <Col sm={2}>
                                <Button>Add</Button>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
