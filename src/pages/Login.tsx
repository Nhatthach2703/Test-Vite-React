// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import API from '../api';

// export default function Login() {
//   const [form, setForm] = useState({ username: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = e => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       const res = await API.post('/auth/login', form);
//       alert(res.data.message);
//       localStorage.setItem('token', res.data.token);
//       localStorage.setItem('user', JSON.stringify(res.data.user));
//       navigate('/');
//     } catch (err) {
//       alert(err.response?.data?.message || 'Lỗi đăng nhập');
//       console.error(err.response?.data?.message || 'Lỗi đăng nhập');
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center', paddingTop: 100 }}>
//       <h2>🔐 Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="username" placeholder="Username" onChange={handleChange} /><br />
//         <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br />
//         <button type="submit">Đăng nhập</button>
//       </form>
//     </div>
//   );
// }


import { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

interface LoginForm {
  username: string;
  password: string;
}

const Login = () => {
  const [form, setForm] = useState<LoginForm>({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', form);
      alert(res.data.message);
      navigate('/');
    } catch (err: any) {
      alert(err.response?.data?.message || 'Đăng nhập thất bại');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
      <h2>Login</h2>
      <input placeholder="Username" value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} />
      <br />
      <input type="password" placeholder="Password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;