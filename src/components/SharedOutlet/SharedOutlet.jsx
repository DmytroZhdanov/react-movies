import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, List, Navigation, StyledLink } from './SharedOutlet.styled';

const SharedOutlet = () => {
  return (
    <>
      <Header>
        <Navigation>
          <List>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </List>
        </Navigation>
      </Header>
      <main>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedOutlet;
