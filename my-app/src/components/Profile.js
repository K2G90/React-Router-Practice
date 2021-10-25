import React from 'react';
import { Route, Link, useParams, useRouteMatch } from 'react-router-dom';

const Profile = () => {
    const { userId } = useParams();
    const match = useRouteMatch(); 

    return (
    <>
    <h1> Hello from User Profile {userId}!</h1>
    <Link to={`${match.url}/photos`}>Photos</Link>
    <Link to={`${match.url}/about-me`}>About Me</Link>

    <Route path={`${match.url}/photos`}>
        <h2>Photos for {userId}</h2>
    </Route>
    <Route path={`${match.url}/about-me`}>
        <h2>About Me for {userId}</h2>
    </Route>
    </>
    );
}

export default Profile;