import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useReducer } from 'react';
import { authReducer, initialAuthState } from './reducers/authReducer';

const App = () => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  const login = (token: string, account: any, user: any) => {
    dispatch({ type: 'LOGIN', payload: { token, account, user } });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
      <Router>
        <Navbar isLoggedIn={state.isLoggedIn} username={state.username} logout={logout} />
        <Container className="my-5" style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login login={login} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
  );
};

export default App;