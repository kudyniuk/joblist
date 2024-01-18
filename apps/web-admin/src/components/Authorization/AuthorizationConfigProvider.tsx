import { PropsWithChildren } from 'react';

import { Auth0Provider } from '@auth0/auth0-react';

export const AuthorizationConfigProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <Auth0Provider
      domain="dev-joblist.eu.auth0.com"
      clientId="GUK9KvOj0oTkt8el6VEDPZ3R2Q1buORo"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {children}
    </Auth0Provider>
  );
};
