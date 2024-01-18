import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setAccessToken } from '../../store';
import { PropsWithChildren } from 'react';

export const AuthTokenSetter: React.FC<PropsWithChildren> = ({ children }) => {
  const { getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);

  getAccessTokenSilently({
    authorizationParams: {
      audience: 'job-list',
    },
  }).then((token) => dispatch(setAccessToken(token)));

  if (accessToken) {
    return children;
  }

  return <div>Cannot load access token!</div>;
};
