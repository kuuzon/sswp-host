import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import TuBox from '../components/common/TuBox';

const Home = () => {
  return (
    <Fragment>
      <Container>
        <TuBox 
          title="Official Store for Timbertop United"
          content="Join Timbertop United's devoted fans with exclusive jerseys, scarves, and memorabilia"
          link="Shop Now"
          linkTo="/store/products"
        />
      </Container>
    </Fragment>
  )
}

export default Home