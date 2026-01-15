import React from "react";
import { Link } from "react-router-dom";

interface UserCardProp {
    id: string;
    name: string;
}

const UserCard: React.FC<UserCardProp> = ({ id, name }) => {
    return (
        <li>
            <Link to={`/user/${id}`}>{name}</Link>
        </li>
    )
}

export default React.memo(UserCard)