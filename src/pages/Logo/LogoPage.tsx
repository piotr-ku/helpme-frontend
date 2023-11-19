import React from "react";
import { IonPage, IonRow, IonCol, IonContent } from "@ionic/react";

const LogoPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonRow class="ion-align-items-center ion-padding max-height-row">
          <IonCol class="ion-text-center ion-padding">
            <a href="/choice">
                <img src="src/assets/HELPMEFY.svg" />
            </a>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default LogoPage;