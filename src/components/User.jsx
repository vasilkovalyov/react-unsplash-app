import React from 'react';

const User = (props) => {
    const {user} = props;
    return (
        <div className="user">
            <div className="user__image">
                <img src={user.profile_image.medium} alt={user.name}/>
            </div>
            <span className="user__name">{user.name}</span>
        </div>
    );
};

export default User;