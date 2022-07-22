import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Home Page/Navbar";
import SignUp from "./Login&SignUp page/SignUp";
import Vendorlogin from "./Login&SignUp page/Vendorlogin";
import AdminLogin from "./Login&SignUp page/AdminLogin";
function App() {
  return (
    <div className="App">
      <Navbar/>
{/* <SignUp/> */}
<Vendorlogin/>
{/* <AdminLogin/> */}
    </div>
  );
}

export default App;
