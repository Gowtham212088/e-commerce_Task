import "./App.css";
import Navbar from "./Home Page/Navbar";
import Carousel from "./Home Page/Carousel";
import Vendor from "./Vendor pages/Vendor";
import ProductList from "./Home Page/Products";
import { Switch, Route } from "react-router-dom";
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
import MyProducts from "./Vendor pages/ViewProducts";
import ViewProducts from "./Admin/ViewProducts";
import UserData from "./Admin/UserData";
import PurchaseData from "./Admin/PurchaseData";
import AddProduct from "./Vendor pages/AddProducts";
import ResetPassword from "./Login&SignUp page/passwordResetPage";
import SellerSignUp from "./Login&SignUp page/SellerSignUp(MUI)";
import { ValidationSchemaExample } from "./Test";
import VendorProfile from "./Vendor pages/VendorProfile";
import CreateCoAdmin from "./Admin/CreateCo-admin";
import AdminProfile from "./Admin/AdminProfile";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Carousel />
          <ProductList />
        </Route>

        <Route path="/home">
          <Navbar />
          <Carousel />
          <ProductList />
        </Route>

        <Route exact path="/cart">
          <Cart />
        </Route>

        <Route exact path="/products/:id">
          <ProductInfo />
        </Route>

        <Route exact path="/approveProducts">
          <ViewProducts />
        </Route>

        <Route path="/admin-login">
          <AdminLogin />
        </Route>

        <Route exact path="/vendor-login">
          <Vendorlogin />
        </Route>

        <Route exact path="/vendor-dashboard">
          <VendorDashboard />
        </Route>

        <Route path="/MyProducts">
          <MyProducts />
        </Route>

        <Route path="/reset-password/:_id/:token">
          <ResetPassword />
        </Route>

        <Route exact path="/admin-dashboard">
          <AdminDashboard />
        </Route>

        <Route exact path="/vendor">
          <Vendor />
        </Route>

        <Route exact path="/signUp">
          <SignUp />
        </Route>

        <Route exact path="/viewUser">
          <ViewUser />
        </Route>

        <Route path="/UserData">
          <UserData />
        </Route>

        <Route path="/PurchaseData">
          <PurchaseData />
        </Route>

        <Route path="/AddProduct">
          <AddProduct />
        </Route>

        <Route exact path="/users/edit/:id">
          <EditUser />
        </Route>

        <Route exact path="/sellerSignup">
          <SellerSignUp />
        </Route>

        <Route  path="/VendorProfile">
          <VendorProfile />
        </Route>

        <Route  path="/CreateCoAdmin">
          <CreateCoAdmin />
        </Route>

        <Route  path="/AdminProfile">
          <AdminProfile />
        </Route>

        

      </Switch>
      {/* <ValidationSchemaExample/> */}
    </div>
  );
}

export default App;
