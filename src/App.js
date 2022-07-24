import "./App.css";
import Navbar from "./Home Page/Navbar";
import ViewUser from "./Admin/ViewUser";
import SignUp from "./Login&SignUp page/SignUp";
import Vendorlogin from "./Login&SignUp page/Vendorlogin";
import AdminLogin from "./Login&SignUp page/AdminLogin";
import VerticalTabs from "./Admin/Admin";
import Admin from "./Admin/Admin";
import Vendor from "./Vendor pages/Vendor";

function App() {
  return (
    <div className="App">
      <Navbar />
{/* <Admin/> */}
<Vendor/>
    
    </div>
  );
}

export default App;
