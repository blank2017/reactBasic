import React from "react";
import axios from "axios";
import "../styles/ListUsers.scss";
import User from "./User";
class ListUsers extends React.Component {
  state = {
    listUsers: [],
  };
  

  componentDidMount() {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      this.setState({
        listUsers: res.data.data || [],
      });
    });
  }
  // async componentDidMount() {
  //   try {
  //     const response = await axios.get("https://reqres.in/api/users?page=2");
  //     // console.log(response);
  //     this.setState({ listUsers: response.data.data })
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  render() {
    const { listUsers } = this.state;

    return (
      <div className="users">
        {listUsers && listUsers.length >0 &&
          listUsers.map((item, index) => {
          return <User key={item.id} user={item} />
        })}
      </div>
    );
  }
}

export default ListUsers;
