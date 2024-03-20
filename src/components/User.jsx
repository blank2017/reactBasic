import React from "react";

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
            <h3>
              {user.first_name} {user.last_name}
            </h3>
            <p>{user.email}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default User;
