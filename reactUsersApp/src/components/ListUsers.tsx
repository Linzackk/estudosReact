import { User } from "../types/User"

type ListUsersType = {
    users: User[];

}

export function ListUsers({users}: ListUsersType)  {
    return  (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.name} - {user.email}
                </li>
            )
        )}
        </ul>
    )
}