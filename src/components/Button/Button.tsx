import { IonButton } from "@ionic/react";
import { useHistory } from "react-router";
import "./Button.css";

function Button() {
  const history = useHistory();

  return (
    <>
        <IonButton
          className="big-alert-button ion-text-uppercase"
          onClick={(e) => {
            e.preventDefault();
            history.push("/dashboard");
          }}
        >
          Pomocy
        </IonButton>
    </>
  );
}
export default Button;
