import React from "react";
import {IonButton} from "@ionic/react";
import './Button.css';

type Props = {
    href: string,
    title: string
}

function Button({href, title}: Props) {
    return (
        <>
            <IonButton className="big-alert-button center" href={href}>
                {title}
            </IonButton>
        </>
    );
}

export default Button;
