import { Component } from "react";

const users = [
  {
    id: 1,
    userName: "João da Silva",
    userEmail: "joao@gmail.com",
  },
  {
    id: 2,
    userName: "Miarcazol",
    userEmail: "miarcazol@gmail.com",
  },
  {
    id: 3,
    userName: "João da Silva",
    userEmail: "joao@gmail.com",
  },
];

class UsersList extends Component {
  render() {
    return (
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              Nome completo: {user.userName}, Email: {user.userEmail}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
