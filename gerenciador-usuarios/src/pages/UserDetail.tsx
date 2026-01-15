import React from "react";
import { useParams } from "react-router-dom";

const UserDetail: React.FC = () => {
    const { id } = useParams<{id: string}>();

    return (
    <div>
        <h1>Detalhes do Usuário</h1>
        <p>ID Usuário: {id}</p>
    </div>
    )
}

export default UserDetail