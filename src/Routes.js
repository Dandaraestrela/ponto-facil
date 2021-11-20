import {
  BrowserRouter as Router,
  Routes as RoutesWrapper,
  Route,
} from 'react-router-dom';
import Login from './pages/Login';

const Routes = () => {
  return (
    <Router>
      <RoutesWrapper>
        <Route path="/" element={<Login />} />
      </RoutesWrapper>
    </Router>
  );
};

export default Routes;
