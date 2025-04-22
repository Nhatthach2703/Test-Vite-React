// import { Link } from 'react-router-dom';

// export default function Home() {
//   return (
//     <div style={{ textAlign: 'center', paddingTop: 100 }}>
//       <h1>🏠 Home</h1>
//       <Link to="/login"><button style={{ margin: 10 }}>Login</button></Link>
//       <Link to="/register"><button style={{ margin: 10 }}>Register</button></Link>
//     </div>
//   );
// }

const Home = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to MyApp</h1>
      <p>Use the navbar above to login or register.</p>
    </div>
  );
};

export default Home;