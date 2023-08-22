import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home/Home.jsx';
import MyAccount from '../src/Pages/MyAccount/MyAccount.jsx';
import MyOrder from '../src/Pages/MyOrder/MyOrder.jsx';
import MyOrders from '../src/Pages/MyOrders/MyOrders.jsx';
import NotFound from '../src/Pages/NotFound/NotFound.jsx';
import SingIn from '../src/Pages/SingIn/SigIn.jsx';
import './App.css'


function App() {

  return (
    <>
      <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/MyAccount" element={<MyAccount />} />
          <Route path="/MyOrder" element={<MyOrder />} />
          <Route path="/MyOrders" element={<MyOrders />} />
          <Route path="/SingIn" element={<SingIn />} />
          <Route path="/*" element={<NotFound />} />
          
        </Routes>

      </Router>
        
      </div>
      
    </>
  )
}

export default App
