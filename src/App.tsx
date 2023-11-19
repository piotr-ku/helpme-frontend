import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
} from "@ionic/react";

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
import { Redirect, Route } from "react-router";
import { IonReactRouter } from "@ionic/react-router";

import "./App.css";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import HelpPage from "./pages/Help/HelpPage";
import LogoPage from "./pages/Logo/LogoPage";
import ChoicePage from "./pages/Choice/ChoicePage";
import WaitPage from "./pages/Wait/WaitPage";
import AcceptPage from "./pages/Accept/AcceptPage";
import PrivateProfilePage from "./pages/Profile/PrivateProfilePage";
import CommercialProfilePage from "./pages/Profile/CommercialProfilePage";

setupIonicReact();

const history = null;

const App: React.FC = () => (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/logo" component={LogoPage} />
          <Route path="/choice" component={ChoicePage} />
          <Route path="/help" component={HelpPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/wait" component={WaitPage} />
          <Route path="/accept" component={AcceptPage} />
          <Route path="/profile-private" component={PrivateProfilePage} />
          <Route path="/profile-commercial" component={CommercialProfilePage} />
          <Redirect exact from="/" to="/logo" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );

export default App;
