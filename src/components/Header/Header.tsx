import { IonHeader, IonToolbar, IonButtons, IonBackButton } from "@ionic/react";
import "./Header.css"

function Header() {
  return (
    <>
      <IonHeader>
        <IonToolbar class="ion-padding" color="primary">
          <IonButtons slot="start">
            <IonBackButton mode="md" defaultHref="/dashboard" />
          </IonButtons>
          <div className="header-logo">
            <a href="/dashboard">
              <img src="src/assets/HELPMi.svg" />
            </a>
          </div>
        </IonToolbar>
      </IonHeader>
    </>
  );
}
export default Header;
