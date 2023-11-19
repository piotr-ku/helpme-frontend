import React from "react";
import {
  IonPage,
  IonRow,
  IonCol,
  IonContent,
  IonIcon,
} from "@ionic/react";
import Header from "../../components/Header/Header";

import "./ProfilePage.css";
import { locationOutline } from "ionicons/icons";

const PrivateProfilePage: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonRow class="ion-align-items-center ion-padding max-height-row">
          <IonCol class="ion-text-center ion-padding accept-column">
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default PrivateProfilePage;
