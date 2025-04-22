// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import API from '../api';

// export default function Register() {
//   const [form, setForm] = useState({
//     fullName: '', email: '', username: '', password: ''
//   });
//   const navigate = useNavigate();

//   const handleChange = e => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       const res = await API.post('/auth/register', form);
//       alert(res.data.message);
//       navigate('/login');
//     } catch (err) {
//       alert(err.response?.data?.message || 'Lỗi đăng ký');
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center', paddingTop: 100 }}>
//       <h2>📝 Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="fullName" placeholder="Full Name" onChange={handleChange} /><br />
//         <input name="email" placeholder="Email" onChange={handleChange} /><br />
//         <input name="username" placeholder="Username" onChange={handleChange} /><br />
//         <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br />
//         <button type="submit">Đăng ký</button>
//       </form>
//     </div>
//   );
// }


import { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

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
    <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
      <h2>Register</h2>
      <input placeholder="Full Name" value={form.fullName} onChange={e => setForm({ ...form, fullName: e.target.value })} />
      <br />
      <input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
      <br />
      <input placeholder="Username" value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} />
      <br />
      <input type="password" placeholder="Password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;