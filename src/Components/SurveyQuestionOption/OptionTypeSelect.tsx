import React from "react";
import {OPTION_TYPES} from "../../Model/SurveyQuestionOption/SurveyQuestionOption";

interface Props {
    onChange: (event:any) => void,
    value: number|string
}

export const OptionTypeSelect: React.FC<Props> = (props) => {

    return (
        <div className={"form-group"}>
            <label className={"form-label"}>Type</label>
            <select
                className={"form-control"}
                value={props.value}
                onChange={(event) => props.onChange(event)}
            >
                <option></option>
                {Object.keys(OPTION_TYPES).map((type:string , key:number) => {
                    return (
                        <option key={key} value={type}>{type.toUpperCase()}</option>
                    )
                })}
            </select>
        </div>
    )
}
