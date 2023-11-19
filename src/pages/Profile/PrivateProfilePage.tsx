import React from "react";
import {
  IonPage,
  IonRow,
  IonCol,
  IonContent,
  IonIcon,
  IonProgressBar,
} from "@ionic/react";
import Header from "../../components/Header/Header";

import "./ProfilePage.css";
import {
    cellularOutline,
    footstepsOutline,
    heartCircleOutline,
    helpBuoy,
  medkitOutline,
  personAddOutline,
  personOutline,
  personRemoveOutline,
  ribbon,
  rocketOutline,
} from "ionicons/icons";

const PrivateProfilePage: React.FC = () => {
  const data = [
    {
      name: "Jan Kowalski",
      icon: personOutline,
      category: "Wolontariusz",
      level: 4,
    },
  ];

  let progress = 0;
  let progressBar = document.querySelector("ion-progress-bar");

  setInterval(() => {
    if (progressBar) {
      progressBar.value = progress += 0.01;
      if ((progress = 0.8)) {
        setTimeout(() => {
          progressBar.value = progress = 0.8;
        }, 1000);
      }
    }
  }, 1000);
  return data.map((item, index) => (
    <IonPage>
      <Header />
      <IonContent>
        <IonRow class="ion-align-items-center ion-padding max-height-row">
          <IonCol class="ion-text-center ion-padding profile-column">
            <div className="profile-icon">
              <IonIcon icon={item.icon} />
            </div>
            <h3 className="profile-title">{item.name}</h3>
            <p className="profile-cat">{item.category}</p>
            <div className="profile-bar">
              <p className="profile-level">
                POZIOM <span>{item.level}</span>
              </p>
              <IonProgressBar
                className="profile-progress-bar"
                color="dark"
                value={progress}
              ></IonProgressBar>
              <span className="profile-points">320 / 400 PKT</span>
            </div>
            <div className="profile-section">
              <h2>STATUS</h2>
              <div>
                <p className="profile-icon-mini">
                  <IonIcon color="success" icon={personAddOutline} />
                </p>
                <p className="profile-icon-mini">
                  <IonIcon color="danger" icon={personRemoveOutline} />
                </p>
              </div>
            </div>
            <div className="profile-section">
              <h2>ODZNAKI</h2>
              <div>
                <p className="profile-icon-very-mini">
                  <IonIcon color="light" icon={helpBuoy} />
                </p>
                <p className="profile-icon-very-mini">
                  <IonIcon color="dark" icon={cellularOutline} />
                </p>
                <p className="profile-icon-very-mini">
                  <IonIcon color="dark" icon={personAddOutline} />
                </p>
                <p className="profile-icon-very-mini">
                  <IonIcon color="light" icon={footstepsOutline} />
                </p>
              </div>
              <div>
                <p className="profile-icon-very-mini">
                  <IonIcon color="dark" icon={heartCircleOutline} />
                </p>
                <p className="profile-icon-very-mini">
                  <IonIcon color="dark" icon={medkitOutline} />
                </p>
                <p className="profile-icon-very-mini">
                  <IonIcon color="light" icon={ribbon} />
                </p>
                <p className="profile-icon-very-mini">
                  <IonIcon color="light" icon={rocketOutline} />
                </p>
              </div>
            </div>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  ));
};
export default PrivateProfilePage;
