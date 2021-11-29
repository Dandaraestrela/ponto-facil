import {
  BrowserRouter as Router,
  Routes as RoutesWrapper,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Login from './pages/Login';
import Home from 'pages/Home';
import Employees from 'pages/Employees';
import Profile from 'pages/Profile';
import EmployeeProfile from 'pages/EmployeeProfile';

const Routes = () => {
  return (
    <Provider store={store}>
      <Router>
        <RoutesWrapper>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/funcionarios" element={<Employees />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/funcionario/:id" element={<EmployeeProfile />} />
        </RoutesWrapper>
      </Router>
      <ToastContainer />
    </Provider>
  );
};

export default Routes;
