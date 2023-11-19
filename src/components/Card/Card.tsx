import React from "react";
import "./Card.css";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonImg,
} from "@ionic/react";
import {
  callOutline,
  informationCircleOutline,
  star,
} from "ionicons/icons";
import { useHistory } from "react-router";

type Props = {
  isHome?: boolean;
};

function Card({ isHome }: Props) {
  const data = [
    {
      name: "Orlen",
      imgUrl:
        "https://img.fuelo.net/gasstations/59380/googlemaps-77ca19c5344e84ef6faf9620b44fdedb-big.jpg",
      type: "commercial",
      address: "ul. Struga 10",
      location: "Szczecin",
      rating: 3,
      icon: informationCircleOutline,
    },
    {
      name: "McDonalds",
      imgUrl:
        "https://cdn.cms.norbisoft.pl/storage/fa312791/cd6dbde5/203b/4fbc/bce4/f5781e5590fe/MTFhOzA4OzA5LDU0MiwyYTE_/cd6dbde5-203b-4fbc-bce4-f5781e5590fe.webp",
      type: "commercial",
      address: "ul. Struga 24",
      location: "Szczecin",
      rating: 4,
      icon: informationCircleOutline,
    },
    {
      name: "Shell",
      imgUrl:
        "data:image/jpeg;base64,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",
      type: "commercial",
      address: "ul. Struga 1",
      location: "Szczecin",
      rating: 5,
      icon: informationCircleOutline,
    },
    {
      name: "Wolantariusz",
      imgUrl:
        "https://www.creativefabrica.com/wp-content/uploads/2021/09/09/User-avatar-profile-icon-Graphics-17068385-1.jpg",
      type: "private",
      address: "ul. Struga 27",
      location: "Szczecin",
      rating: 4,
      icon: informationCircleOutline,
    },
  ];

  const history = useHistory();

  return (
    <>
      {isHome &&
        data.map((item, index) => (
          <IonCard className="card ion-margin-top ion-padding-bottom" key={index}>
            <IonImg alt="user" src={item.imgUrl} className="img" />
            <IonCardHeader>
              <IonCardTitle className="w-50">
                {item.name}
              </IonCardTitle>
              <IonCardSubtitle>
                {item.location}
              </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent className="flex ion-justify-content-between">
              <p>
                <b>📍&nbsp;</b>
                {item.address}
              </p>
              <p className="rating">
                {item.rating}
                <IonIcon icon={star} className="ion-margin-end star" />
              </p>
            </IonCardContent>
            <div className="flex ion-justify-content-center">
              <IonButton
                  className="ion-padding-horizontal"
                  onClick={(e) => {
                    e.preventDefault();
                    history.push("/wait");
                  }}
              >
                <IonIcon slot="icon-only" color="dark" icon={callOutline}></IonIcon>
              </IonButton>
              <IonButton
                  onClick={(e) => {
                    e.preventDefault();
                    history.push(`/profile-${item.type}`);
                  }}
              >
                <IonIcon slot="icon-only" color="dark" icon={item.icon}></IonIcon>
              </IonButton>
            </div>
          </IonCard>
        ))}
    </>
  );
}

export default Card;
