import "./App.css";
import Navbar from "./Home Page/Navbar";
import ViewUser from "./Admin/ViewUser";
import SignUp from "./Login&SignUp page/SignUp";
import Vendorlogin from "./Login&SignUp page/Vendorlogin";
import AdminLogin from "./Login&SignUp page/AdminLogin";
import VerticalTabs from "./Admin/Admin";
import Admin from "./Admin/Admin";
import Vendor from "./Vendor pages/Vendor";
import {Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/">
          <Navbar />
        </Route>

        <Route path="/home">
          <Navbar />
        </Route>

        <Route path="/admin-login">
          <AdminLogin />
        </Route>

        <Route exact path="/vendor-login">
        <Vendorlogin/>
        </Route>

        <Route path="/admin">
          <Admin />
        </Route>

        <Route path="/vendor">
          <Vendor />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
