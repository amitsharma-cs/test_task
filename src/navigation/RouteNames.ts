import Details from '../screens/details/Details';
import Disclaimer from '../screens/disclaimer/Disclaimer';
import Login from '../screens/login/Login';
import StationList from '../screens/stationlist/StationList';

const RouteNames = {
  login: {name: 'Login', component: Login},
  disclaimer: {name: 'disclaimer', component: Disclaimer},
  stationList: {name: 'stationList', component: StationList},
  details: {name: 'details', component: Details},
};
export default RouteNames;
