import React, { useEffect } from 'react'
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import EditProfile from '../components/EditProfile';
import ViewProfile from "../components/ViewProfile";

const Profile = ({logIn}) => {

  const history = useHistory();

  useEffect(() => {
    if(!logIn){
      history.push('/');
    }

  }, [logIn, history]);

  // nested Routing
  const { path, url } = useRouteMatch()


  return (
    <div>
      <h2>Profile</h2>
      <Link to={`${url}/viewProfile`}>View Profile</Link>
      <Link to={`${url}/editProfile`}>Edit Profile</Link>

      <Switch>
        <Route path={`${path}/viewProfile`}  component={ViewProfile} />
        <Route path={`${path}/editProfile`} component={EditProfile} />
      </Switch>
    </div>
  );
}

export default Profile;