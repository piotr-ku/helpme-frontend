import React from "react";
import { IonPage, IonRow, IonCol, IonContent } from "@ionic/react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";

const DashboardPage: React.FC = () => {
  return (
    <IonPage>
        <Header />
      <IonContent>
      <IonRow class="ion-align-items-center ion-padding max-height-row">
          <IonCol class="ion-padding">
            <Card isHome />
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default DashboardPage;
