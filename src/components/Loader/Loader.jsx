import { ThreeDots } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="red"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </Container>
  );
};

export default Loader;
