import { User } from "../types";

type Props = {
  users: User[];
  colored: boolean;
};

export function ListOfUsers({ users, colored }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Last Name</th>
          <th>Country</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr className={colored ? "colored" : ""} key={user.email}>
            <td>
              <img
                src={user.picture.thumbnail}
                alt={`Pictur of ${user.name.title}`}
              />
            </td>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.location.country}</td>
            <td>
              <button>🗑️</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
