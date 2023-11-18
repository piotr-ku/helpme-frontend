import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonRow, IonCol, IonText } from "@ionic/react";

const DashboardPage: React.FC = () => {

  return (
    <IonPage>
      <IonRow>
        <IonCol>
          <IonText>Users</IonText>
        </IonCol>
      </IonRow>
    </IonPage>
  );
};

export default DashboardPage;
