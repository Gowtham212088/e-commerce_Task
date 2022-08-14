import "./App.css";
import Navbar from "./Home Page/Navbar";
import Carousel from "./Home Page/Carousel";
import Vendor from "./Vendor pages/Vendor";
import ProductList from "./Home Page/Products";
import {Switch,Route} from "react-router-dom";
import Cart from "./Home Page/Cart";
import EditUser from "./Admin/EditUser";
import ProductInfo from "./Home Page/productsInfo";
import ViewUser from "./Admin/ViewUser";
import SignUp from "./Admin/SignUp";
import Vendorlogin from "./Login&SignUp page/Vendorlogin";
import AdminLogin from "./Login&SignUp page/AdminLogin";
import VerticalTabs from "./Admin/Admin";
import VendorDashboard from "./Vendor pages/VendorDashboard";
import AdminDashboard from "./Admin/AdminDashboard";


function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/">
          <Navbar/>
          <Carousel/>
          <ProductList/>
        </Route>

        <Route path="/home">
          <Navbar />
           <Carousel/>
          <ProductList/>
        </Route>

        <Route exact path="/cart">
            <Cart/>
        </Route>

        <Route exact path="/products/:id">
            <ProductInfo />
        </Route>

        <Route path="/admin-login">
          <AdminLogin />
        </Route>

        <Route  path="/vendor-login">
          <Vendorlogin />
        </Route>

        <Route  path="/vendor-dashboard">
          <VendorDashboard />
        </Route>

        <Route path="/admin">
          <AdminDashboard />
        </Route>

        <Route path="/vendor">
          <Vendor />
        </Route>

        <Route path="/users/edit/:id">
          <EditUser />
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;
