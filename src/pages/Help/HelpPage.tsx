import React from "react";
import { IonPage, IonRow, IonCol, IonContent } from "@ionic/react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";

const HelpPage: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonRow class="ion-align-items-center ion-padding max-height-row">
          <IonCol class="ion-justify-content-center ion-padding">
            <Button />
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default HelpPage;
