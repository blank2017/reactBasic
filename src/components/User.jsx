import React from "react";
import { NavLink } from "react-router-dom";

class User extends React.Component {
  render() {
    const { user } = this.props;
    console.log(">> Check User: ", user);
    return (
      <React.Fragment>
        <div className="user-item">
          <div className="user-avatar">
            <img src={user.avatar} alt="" />
          </div>
          <div className="user-info">
            <NavLink to={`/users/${user.id}`}>
              <h3>
                {user.first_name} {user.last_name}
              </h3>
            </NavLink>
            <p>{user.email}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default User;
