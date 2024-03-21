import React from "react";
import { connect } from "react-redux";
class Home extends React.Component {
  handleDeleteUser = (user) => {
    console.log(">>>Check ing user to delete", user);
    this.props.deleteDataInStore(user);
  };
  handleAddNewUser = () => {
    this.props.addNewUserToStore();
  };
  render() {
    const users = this.props.dataRedux;
    return (
      <React.Fragment>
        <h1>Home Page</h1>
        <button onClick={() => this.handleAddNewUser()}>ADD NEW USER</button>
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

              <button onClick={() => this.handleDeleteUser(user)}>
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
    dataRedux: state.users, //Data in Redux store
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteDataInStore: (userDelete) =>dispatch({ type: "DELETE_USER", payload: userDelete }),
    addNewUserToStore: () => dispatch({ type: "CREATE_USER" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
