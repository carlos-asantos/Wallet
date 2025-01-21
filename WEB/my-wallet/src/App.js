import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import TransactionPage from "./pages/TransactionPage";
import { UserProvider } from "./contexts/UserContext";
import { ToastContainer, toast } from 'react-toastify';

function App() {

  <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  
  return (
  
    <UserProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="signup" element={<SignUp />}></Route>
            <Route path="transaction/:transactionId" element={<TransactionPage/>}></Route>
            <Route path="home" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
