import { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container } from 'react-bootstrap';

interface RegisterForm {
  fullName: string;
  email: string;
  username: string;
  password: string;
}

const Register = () => {
  const [form, setForm] = useState<RegisterForm>({ fullName: '', email: '', username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/register', form);
      alert(res.data.message);
      navigate('/login');
    } catch (err: any) {
      alert(err.response?.data?.message || 'Đăng ký thất bại');
    }
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Full Name" value={form.fullName} onChange={e => setForm({ ...form, fullName: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Username" value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="password" placeholder="Password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
        </Form.Group>
        <Button type="submit" variant="primary" className="w-100">Register</Button>
      </Form>
    </Container>
  );
};

export default Register;