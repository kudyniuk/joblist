import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';


const Authorization1: React.FC = () => {
    const { loginWithRedirect, isAuthenticated, logout, isLoading } = useAuth0();

    if(isLoading) {
        return <div>
            App is loading...
        </div>
    }

    if(!isAuthenticated) {
        return <div>
            Hello Job List Admin Dashboard
            <button onClick={() => loginWithRedirect()}>Log in</button>
        </div>
    }

    return <div>
        <h1>Job List Admin Dashboard</h1>
        <button onClick={() => logout()}>Log out</button> 
    </div>
}

export const Authorization: React.FC = () => {
    return <Auth0Provider domain="dev-joblist.eu.auth0.com"
    clientId="GUK9KvOj0oTkt8el6VEDPZ3R2Q1buORo"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
        <Authorization1/>
    </Auth0Provider>
}
 
