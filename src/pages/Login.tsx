import { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Form, Button, Container } from 'react-bootstrap';

interface LoginForm {
  username: string;
  password: string;
}

const Login = () => {
  const { dispatch } = useAuth();
  const [form, setForm] = useState<LoginForm>({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/auth/login', form);
      const { token, account, user, message } = data;

      dispatch({ type: 'LOGIN', payload: { token, account, user } });

      alert(message);
      navigate('/');
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Đăng nhập thất bại';
      alert(errorMessage);
    }
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Username" value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="password" placeholder="Password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
        </Form.Group>
        <Button type="submit" variant="primary" className="w-100">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;