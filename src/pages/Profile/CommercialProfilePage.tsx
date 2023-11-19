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
  fastFoodOutline,
  locationOutline,
  speedometerOutline,
} from "ionicons/icons";

const CommercialProfilePage: React.FC = () => {
  const data = [
    {
      name: "Orlen",
      icon: speedometerOutline,
      category: "Stacja Benzynowa",
      level: 3,
    },
  ];
  let progress = 0;
  let progressBar = document.querySelector("ion-progress-bar");

  setInterval(() => {
    if (progressBar) {
      progressBar.value = progress += 0.01;
      if ((progress = 0.6)) {
        setTimeout(() => {
          progressBar.value = progress = 0.6;
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
              <IonProgressBar className="profile-progress-bar" color="dark" value={progress}></IonProgressBar>
              <span className="profile-points">240 / 400 PKT</span>
            </div>
            <div className="profile-section">
              <h2>UDOGODNIENIA</h2>
              <ul>
                <li>DOSTOSOWANA TOALETA</li>
                <li>OBNIŻONA LADA</li>
                <li>OZNACZENIA DLA NIEWIDOMYCH</li>
              </ul>
            </div>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  ));
};

export default CommercialProfilePage;
