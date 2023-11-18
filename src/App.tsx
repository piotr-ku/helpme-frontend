import {
    IonApp,
    IonCol,
    IonContent,
    IonIcon,
    IonLabel, IonRouterOutlet,
    IonRow,
    IonTabBar,
    IonTabButton,
    setupIonicReact,
} from "@ionic/react";
import {help, homeOutline, information, search} from "ionicons/icons";

import Button from "./components/Button/Button";
import Card from "./components/Card/Card";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import {Route, Router} from "react-router";
import {IonReactRouter} from "@ionic/react-router";

setupIonicReact();

const history = null

const App: React.FC = () => (
        <IonApp>
            <IonReactRouter>
            <IonContent>
                    <IonRow>
                        <IonCol>
                            <Button href="/pomoc" title="Pomoc"/>
                            <Card/>
                        </IonCol>
                    </IonRow>
            </IonContent>
                <Route exact path="/help"/>
                <Card/>
            </IonReactRouter>

            <IonTabBar slot="bottom" color="light">
                <IonTabButton tab="home" href="/">
                    <IonIcon aria-hidden="true" icon={homeOutline}/>
                    <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="info" href="/info">
                    <IonIcon aria-hidden="true" icon={information}/>
                    <IonLabel>Info</IonLabel>
                </IonTabButton>
                <IonTabButton tab="help" href="/help">
                    <IonIcon aria-hidden="true" icon={help}/>
                    <IonLabel>Pomoc</IonLabel>
                </IonTabButton>
                <IonTabButton tab="search" href="/search">
                    <IonIcon aria-hidden="true" icon={search}/>
                    <IonLabel>Szukaj</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonApp>
    )
;
export default App;
