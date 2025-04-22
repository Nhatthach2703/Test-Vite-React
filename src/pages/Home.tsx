// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center">Welcome to MyApp</h1>
      <p className="text-center">Use the navbar above to login or register.</p>
    </Container>
  );
};

export default Home;