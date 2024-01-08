import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Admin from './components/Admin';
import Editshow from './components/Editshow';
import Newshow from './components/Newshow';
import Signup from './components/Signup';
import Enduser from './components/Enduser';
import Booktickets from './components/Booktickets'
import MainNavbar from './components/MainNavbar';
import YourBookings from './components/YourBookings';
import AdminUsers from './components/AdminUsers';
import Protected from './components/Protected'
import MainPage from './components/MainPage';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/editshow/:showId' element={<Editshow />} />
          <Route path='/book/:userId/:showId' element={<Booktickets/>}  />
          <Route path='/newshow' element={<Newshow />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/enduser/:userId' element={<Enduser />} />
          <Route path='/bookings/:userId' element={<YourBookings/>} />
          <Route path='/adminusers' element={<AdminUsers/>} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
