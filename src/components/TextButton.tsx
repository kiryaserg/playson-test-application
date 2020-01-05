import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

interface ITextButtonProps {
    buttonText: string,
    clickAction: any,
    isBusy: boolean
}

type Props = ITextButtonProps;

export default function TextButton(props: Props) {
    const {buttonText, clickAction, isBusy} = props;

    return (<div className="button-container">
            <button className="btn btn-primary" disabled={isBusy} onClick={clickAction}>
                {buttonText}
                {isBusy?
                (<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>):''}
            </button>
        </div>)
}