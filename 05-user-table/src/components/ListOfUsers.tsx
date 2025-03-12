import { SortBy, User } from "../types";

type Props = {
  users: User[];
  colored: boolean;
  onDelete: (email: string) => void;
  onChangeSort: (sort: SortBy) => void;
};

export function ListOfUsers({ users, colored, onDelete, onChangeSort }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Photo</th>
          <th onClick={() => onChangeSort(SortBy.NAME)}>Name</th>
          <th onClick={() => onChangeSort(SortBy.LAST)}>Last Name</th>
          <th onClick={() => onChangeSort(SortBy.COUNTRY)}>Country</th>
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
              <button onClick={() => onDelete(user.email)}>🗑️</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
