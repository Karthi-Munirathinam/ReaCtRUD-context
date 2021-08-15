import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from './UserContext';

function Profile(props) {
    const { userData } = useContext(UserContext);
    const user = userData[props.match.params.id];

    return (
        <div className="profile-container row mt-3">
            <div className="card text-dark bg-info mb-3 col-12 profile-container p-3" style={{ maxWidth: "25rem" }}>
                <img className="image-container mb-4" src={user.imgurl} alt="profile pic" height="200" width="200" />
                <div className="card-header card-name"><h4>{user.name}</h4></div>
                <div className="card-body">
                    <h5 className="card-mail">{user.email}</h5>
                    <h5 className="card-age">{user.age}</h5>
                    <p className="card-desc">{user.description}</p>
                </div>
                <Link to={`/edit-profile/${props.match.params.id}`} className="btn btn-outline-primary">Edit profile</Link>
            </div>
        </div>
    )
}

export default Profile
