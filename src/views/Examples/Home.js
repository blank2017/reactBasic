import React from "react";
import { connect } from "react-redux";
import { deleteUser, createUser } from "../../redux/action/crud.action";

class Home extends React.Component {
  render() {
    const users = this.props.dataRedux;
    return (
      <React.Fragment>
        <h1>Home Page</h1>
        <button onClick={() => this.props.createUser()}>ADD NEW USER</button>
        {users.map((user, index) => {
          return (
            <div
              className="user-item"
              key={user.id}
              style={{ display: "flex", gap: "10px" }}
            >
              <span>
                {user.name} - {user.email}
              </span>

              <button onClick={() => this.props.deleteUser(user)}>
                Delete
              </button>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.crud.users, //Data in Redux store
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (userDelete) => dispatch(deleteUser(userDelete)),
    createUser: () => dispatch(createUser()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
