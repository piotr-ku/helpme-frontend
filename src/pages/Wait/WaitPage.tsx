import React from "react";
import { IonPage, IonRow, IonCol, IonContent, IonSpinner, IonIcon } from "@ionic/react";
import Header from "../../components/Header/Header";

import "./WaitPage.css";
import { peopleOutline } from "ionicons/icons";

const WaitPage: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonRow class="ion-align-items-center ion-padding max-height-row">
          <IonCol class="ion-text-center ion-padding spinner-column">
            <a href="/accept">
              <img src="src/assets/oi-clock.svg" />
            </a>
            <IonSpinner class="spinner-element" name="dots"></IonSpinner>
            <div>
              <h2>POCZEKAJ</h2>
              <p className="spinner-text">SZUKAMY DLA CIEBIE ASYSTENTA...<IonIcon icon={peopleOutline} /></p>
            </div>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default WaitPage;
