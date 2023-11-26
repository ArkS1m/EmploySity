import Popup from "reactjs-popup";
import React from "react";
import "./DeafultPopup.scss"

export default function DefaultPopup (props) {
    
    return (
        <Popup
            open={props.isOpened}
            onClose={props.onCloseHandler}
        >
            <div
                className={"defaultPopupTitle"}
            >
                <span>
                    {props.popupTitle}
                </span>
                <button
                    className={"defaultPopupCloseButton"}
                    onClick={props.onCloseHandler}
                >
                    <img
                        className={"defaultPopupCloseButtonImage"}
                        src={process.env.PUBLIC_URL + '/media/close-button.png'}
                        alt={'X'}
                    />
                </button>
            </div>
            {props.children}
        </Popup>
    );
}