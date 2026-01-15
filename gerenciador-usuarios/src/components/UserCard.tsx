import React from "react";
import { Link } from "react-router-dom";
import ButtonFavorite from "./ButtonFavorite";

interface UserCardProp {
    id: string;
    name: string;
    onFavorite: () => void;
    isFavorite: boolean;
}

const UserCard: React.FC<UserCardProp> = ({ id, name, onFavorite, isFavorite }) => {
    return (
        <li>
            <Link to={`/user/${id}`}>{name}</Link>
            <ButtonFavorite onFavorite={onFavorite} isFavorite={isFavorite} />
        </li>
    )
}

export default React.memo(UserCard)