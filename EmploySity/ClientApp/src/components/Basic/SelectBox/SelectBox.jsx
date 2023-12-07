import React from "react";
import "./SelectBox.scss"

export default function SelectBox (props) {
    return (
        <div
            className={"selectBox"}
        >
            <select
                id={props.selectBoxId}
                className={props.selectBoxClassName}
                disabled={props.isDisabled}
                onChange={(e) => props.changeHandler(e)}
            >
                {props.isDefaultOptionNeeded &&
                    <option
                        value={props.defaultOptionValue}
                        selected={props.isDefaultOptionSelected}
                        disabled={props.isDefaultOptionDisabled}
                        hidden={props.isDefaultOptionHidden}
                    >
                        {props.defaultOptionLabel}
                    </option>
                }
                {props.options.map((option) => (
                    <option
                        value={option[props.optionValueKey]}
                        label={option[props.optionLabelKey]}
                    />
                ))}
            </select>
        </div>
    );
}