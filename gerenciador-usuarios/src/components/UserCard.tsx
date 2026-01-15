import React from "react";
import { Link } from "react-router-dom";
import ButtonFavorite from "./ButtonFavorite";

interface UserCardProp {
    id: string;
    name: string;
    onFavorite: () => void;
}

const UserCard: React.FC<UserCardProp> = ({ id, name, onFavorite }) => {
    return (
        <li>
            <Link to={`/user/${id}`}>{name}</Link>
            <ButtonFavorite onFavorite={onFavorite} />
        </li>
    )
}

export default React.memo(UserCard)