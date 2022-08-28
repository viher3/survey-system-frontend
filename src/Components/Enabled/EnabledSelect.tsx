import React from "react";

interface Props {
    onChange: () => void
}

export const EnabledSelect: React.FC<Props> = (props) => {
    return (
        <div className={"form-group my-4"}>
            <label htmlFor={"enabled"} className={"form-label"}>Enabled</label>
            <select id={"enabled"} className={"form-control"}>
                <option></option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
            </select>
        </div>
    )
}

