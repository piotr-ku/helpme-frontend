import React from "react";
import {
  IonPage,
  IonRow,
  IonCol,
  IonContent,
  IonIcon,
} from "@ionic/react";
import Header from "../../components/Header/Header";

import "./AcceptPage.css";
import { locationOutline } from "ionicons/icons";

const AcceptPage: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonRow class="ion-align-items-center ion-padding max-height-row">
          <IonCol class="ion-text-center ion-padding accept-column">
            <a href="/accept">
              <img src="src/assets/oi-user-check.svg" />
            </a>
            <div>
              <h2>PROŚBA ZAAKCEPTOWANA</h2>
              <p>
                ASYSTENT JUŻ DO CIEBIE IDZIE
              </p>
              <p className="accept-text">
                <IonIcon icon={locationOutline} />
                28m
              </p>
            </div>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default AcceptPage;
