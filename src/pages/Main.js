/* eslint-disable react/display-name */
import React from "react";
import { Route, Switch } from "react-router-dom";
import Forecaster from "./Forecaster";
import HealthChecker from "./HealthChecker";
import LandingPage from "../components/LandingPage";

export default () => (
  <div>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/forecaster" component={Forecaster} />
      <Route path="/health-checker" component={HealthChecker} />
    </Switch>
  </div>
);
// class Main extends Component {
//   render() {
//     return (
//       <div>
//         <Switch>
//           <Route exact path="/" component={LandingPage} />
//           <Route path="/forecaster" component={Forecaster} />
//           <Route path="/health-checker" component={HealthChecker} />
//         </Switch>
//       </div>
//     );
//   }
// }
//
// export default Main;
