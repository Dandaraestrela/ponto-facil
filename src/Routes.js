import {
  BrowserRouter as Router,
  Routes as RoutesWrapper,
  Route,
} from 'react-router-dom';
import history from 'utils/history';
import { Provider } from 'react-redux';
import { store } from './store';

import Login from './pages/Login';
import Home from 'pages/Home';

const Routes = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <RoutesWrapper>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </RoutesWrapper>
      </Router>
    </Provider>
  );
};

export default Routes;
