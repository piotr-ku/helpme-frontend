import React from "react";
import {
  IonPage,
  IonRow,
  IonCol,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import Header from "../../components/Header/Header";
import "./ChoicePage.css"

const ChoicePage: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonRow class="ion-align-items-center ion-padding max-height-row">
          <IonCol class="ion-justify-content-center ion-padding">
            <a href="/help">
              <IonCard className="ion-text-center">
                <IonCardHeader>
                  <IonCardTitle>POTRZEBUJĘ POMOCY</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                  UZYSKAJ POMOC OD PRACOWNIKA ZAREJESTROWANEGO MIEJSCA LUB OD
                  WOLONTARIUSZA W SWOJEJ OKOLICY
                </IonCardContent>
              </IonCard>
            </a>
            <IonCard className="ion-text-center">
              <IonCardHeader>
                <IonCardTitle>BIZNES</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                DODAJ SWÓJ BIZNES DO BAZY MIEJSC UŻYWAJĄCYCH APLIKACJI. OSOBY
                POTRZEBUJĄCE POMOCY BĘDĄ MOGŁY WYSYŁAĆ PROŚBY O POMOC
              </IonCardContent>
            </IonCard>
            <IonCard className="ion-text-center">
              <IonCardHeader>
                <IonCardTitle>WOLONTARIUSZ</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                WSPIERAJ POTRZEBUJĄCE POMOCY OSOBY W SWOJEJ OKOLICY
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default ChoicePage;
