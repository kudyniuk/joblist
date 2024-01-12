import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { AuthTokenSetter } from '../Authorization';
import { Router } from './Router';


export const AppViewResolver: React.FC = () => {
    const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

    if(isLoading) {
        return <div>
            App is loading...
        </div>
    }

    if(!isAuthenticated) {
        return <div>
            Please login
            <button onClick={() => loginWithRedirect({
                authorizationParams: {
                    audience: 'job-list'
                }
            })}>Log in</button>
        </div>
    }

    return <AuthTokenSetter>
        <Router/>
    </AuthTokenSetter>
}